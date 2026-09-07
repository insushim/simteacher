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

/**
 * 앞뒤 글. **연재를 읽는 순서**로 잇는다 — 날짜 오름차순, 같은 날이면 slug 오름차순.
 *
 * 🔴 getAllPosts() 의 정렬(최신순)을 뒤집어 쓰면 안 된다. 그건 같은 날짜일 때 slug 를
 *    «내림차순»으로 뒤집어 버려서, 하루에 여러 편을 올린 연재의 순서가 거꾸로 된다.
 *    실제로 1~4편을 같은 날 올렸다.
 */
export function getAdjacentPosts(slug: string): {
  prev: BlogPost | null
  next: BlogPost | null
} {
  const ordered = getAllPosts().sort(
    (a, b) => a.date.localeCompare(b.date) || a.slug.localeCompare(b.slug)
  )
  const i = ordered.findIndex((p) => p.slug === slug)
  if (i === -1) return { prev: null, next: null }
  return {
    prev: i > 0 ? ordered[i - 1] : null,
    next: i < ordered.length - 1 ? ordered[i + 1] : null,
  }
}
