'use client'

import { useEffect, useState } from 'react'
import { Flame } from 'lucide-react'
import { fetchPopular, recordClick, type PopularItem } from '@/lib/community'
import { learningSites, teacherTools } from '@/data/projects'

// slug → 열 링크. 인기 목록의 slug 는 카탈로그에서 온 것이므로 여기서 되찾을 수 있다.
const URL_BY_SLUG: Record<string, string | undefined> = Object.fromEntries(
  [...learningSites, ...teacherTools].map((s) => [s.slug, s.url])
)

/** 맨 위 "오늘의 인기" 띠. 데이터가 없으면 아예 렌더하지 않아 빈 칸이 생기지 않는다. */
export function PopularStrip() {
  const [scope, setScope] = useState<'today' | 'all'>('today')
  const [items, setItems] = useState<PopularItem[]>([])

  useEffect(() => {
    let alive = true
    fetchPopular(5)
      .then((r) => {
        if (!alive) return
        setScope(r.scope)
        setItems(r.items.filter((i) => URL_BY_SLUG[i.slug]))
      })
      .catch(() => {
        /* 인덱스 준비 전이거나 네트워크 문제 — 조용히 숨긴다 */
      })
    return () => {
      alive = false
    }
  }, [])

  if (items.length === 0) return null

  return (
    <div className="glass rounded-2xl px-5 py-3.5 mb-8 flex flex-wrap items-center gap-x-4 gap-y-2">
      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-fg shrink-0">
        <Flame className="w-4 h-4 text-orange-500" />
        {scope === 'today' ? '오늘의 인기' : '많이 찾은 사이트'}
      </span>
      <ol className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {items.map((item, i) => (
          <li key={item.slug} className="flex items-center gap-1.5 text-sm">
            <span className="text-xs font-bold text-primary-600 dark:text-primary-300 tabular-nums">
              {i + 1}
            </span>
            <a
              href={URL_BY_SLUG[item.slug]}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => recordClick(item.slug, item.name)}
              className="text-muted-fg hover:text-fg transition-colors"
            >
              {item.name}
            </a>
            <span className="text-xs text-muted-fg/60 tabular-nums">{item.count}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
