import Link from 'next/link'
import type { Metadata } from 'next'
import { Calendar, Clock, PenLine } from 'lucide-react'
import { getAllPosts } from '@/lib/blog'
import { Badge } from '@/components/ui/Badge'
import { ViewCount, ViewCountsProvider } from '@/components/blog/ViewCount'

export const metadata: Metadata = {
  title: '블로그',
  description: '교실과 코드 사이의 기록',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="aurora-blob aurora-violet w-[400px] h-[400px] -top-20 right-[12%] opacity-70" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 dark:text-primary-300 font-semibold">Blog</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-fg">
            교실과 코드 사이의 <span className="gradient-text">기록</span>
          </h1>
          <p className="mt-6 text-lg text-muted-fg max-w-2xl mx-auto">
            수업, 학급 경영, 바이브코딩 — 배우고 만드는 과정을 기록합니다.
          </p>
        </div>

        {posts.length === 0 ? (
          /* Empty State */
          <div className="glass rounded-3xl p-12 md:p-16 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-500/15 flex items-center justify-center text-primary-600 dark:text-primary-300">
              <PenLine className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-fg mb-3">
              첫 글을 준비하고 있어요
            </h2>
            <p className="text-muted-fg max-w-md mx-auto leading-relaxed">
              교실과 코드 사이에서 배운 것들을 차곡차곡 기록할 공간입니다.
              곧 글이 올라옵니다.
            </p>
          </div>
        ) : (
          // 조회수는 한 번에 받아 카드들이 나눠 쓴다 — 카드마다 읽으면 글 수만큼 읽기가 는다.
          <ViewCountsProvider>
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block glass rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center gap-3 mb-3">
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
                  <ViewCount slug={post.slug} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-fg mb-2">
                  {post.title}
                </h2>
                <p className="text-muted-fg leading-relaxed">{post.description}</p>
              </Link>
            ))}
          </div>
          </ViewCountsProvider>
        )}
      </div>
    </div>
  )
}
