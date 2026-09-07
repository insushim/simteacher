import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { Badge } from '@/components/ui/Badge'
import { Comments } from '@/components/blog/Comments'

export async function generateStaticParams() {
  const posts = getAllPosts()
  // output: export 는 dynamic route에 최소 1개 경로를 요구 —
  // 글이 없을 땐 어디서도 링크되지 않는 placeholder 경로로 빌드를 통과시킨다.
  if (posts.length === 0) return [{ slug: '_placeholder' }]
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  // placeholder(글 0개 빌드용) 및 미존재 글은 검색엔진 색인 제외
  if (!post) return { robots: { index: false, follow: false } }
  return { title: post.title, description: post.description }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    // placeholder(글 0개 빌드용) 포함, 없는 글은 목록으로 안내
    if (slug === '_placeholder') {
      return (
        <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-fg mb-4">아직 글이 없어요</h1>
            <Link href="/blog" className="text-primary-600 dark:text-primary-300 font-semibold">
              블로그 목록으로 →
            </Link>
          </div>
        </div>
      )
    }
    notFound()
  }

  return (
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="aurora-blob aurora-violet w-[380px] h-[380px] -top-20 right-[10%] opacity-60" />
      </div>

      <article className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-muted-fg hover:text-fg transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          블로그로 돌아가기
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="primary">{post.category}</Badge>
            <span className="flex items-center text-sm text-muted-fg">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              {post.date}
            </span>
            {post.readingTime && (
              <span className="flex items-center text-sm text-muted-fg">
                <Clock className="w-3.5 h-3.5 mr-1" />
                {post.readingTime}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-fg">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary-600 dark:prose-a:text-primary-300">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug, rehypeHighlight]}
            components={{
              // remark-gfm 은 각주 제목을 영어 "Footnotes" 로 **하드코딩**한다.
              // 한국어 글에 영어 제목이 박히므로 그 h2 하나만 갈아 끼운다.
              h2: ({ node, children, ...props }) =>
                (props as { id?: string }).id === 'footnote-label' ? (
                  <h2 {...props}>출처</h2>
                ) : (
                  <h2 {...props}>{children}</h2>
                ),
            }}
          >
            {post.content ?? ''}
          </ReactMarkdown>
        </div>

        <Comments slug={slug} />
      </article>
    </div>
  )
}
