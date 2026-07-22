import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { BlogPost } from '@/types';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

// 빌드 타임에 src/content/blog/*.md 를 읽는다 (서버 컴포넌트 전용).
// 글 추가 = md 파일 추가 후 재배포.
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8');
      const { data, content } = matter(raw);
      // gray-matter는 YAML date를 Date 객체로 파싱 → 문자열로 정규화
      const date =
        data.date instanceof Date
          ? data.date.toISOString().slice(0, 10)
          : String(data.date ?? '');
      return {
        slug,
        title: String(data.title ?? slug),
        description: String(data.description ?? ''),
        date,
        category: data.category ?? '기록',
        tags: data.tags ?? [],
        readingTime: `${Math.ceil(readingTime(content).minutes)}분`,
        content,
      } as BlogPost;
    })
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

export function getPostBySlug(slug: string): BlogPost | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null;
}
