'use client'

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { Eye } from 'lucide-react'
import {
  fetchAllPostViews,
  fetchPostViews,
  recordPostView,
} from '@/lib/community'

// 목록 화면은 글이 늘수록 읽기도 같이 는다. 카드마다 문서를 하나씩 읽으면
// 글 30편 = 방문 1회당 읽기 30번이다. 그래서 «한 번 읽어 나눠 쓴다».
// 컨텍스트가 없으면(글 상세 화면) 각자 자기 것만 읽는다.
const ViewsContext = createContext<Record<string, number> | null>(null)

export function ViewCountsProvider({ children }: { children: ReactNode }) {
  const [views, setViews] = useState<Record<string, number> | null>(null)

  useEffect(() => {
    let alive = true
    fetchAllPostViews()
      .then((v) => {
        if (alive) setViews(v)
      })
      .catch(() => {
        /* 숫자가 안 떠도 글은 읽힌다 */
      })
    return () => {
      alive = false
    }
  }, [])

  return <ViewsContext.Provider value={views}>{children}</ViewsContext.Provider>
}

/**
 * 글 조회수.
 *
 * 🔴 숫자가 «아직 없을 때»는 0 이 아니라 아무것도 그리지 않는다. 0 을 먼저 그렸다가
 *    숫자로 바꾸면 값이 튀는 게 보이고, 서버가 만든 HTML 과도 어긋난다.
 * 🔴 `record` 는 글 상세에서만 켠다. 목록에서 켜면 «본 적도 없는 글»이 세어진다.
 * 🔴 개발 모드의 이중 마운트에서 두 번 세지 않도록 ref 로 한 번만 부른다
 *    (하루 한 번 제한이 뒤를 받치지만, 첫 조회는 그 제한이 아직 걸리기 전이다).
 */
export function ViewCount({
  slug,
  record = false,
  className = '',
}: {
  slug: string
  record?: boolean
  className?: string
}) {
  const shared = useContext(ViewsContext)
  const [own, setOwn] = useState<number | null>(null)
  const done = useRef(false)

  useEffect(() => {
    if (!record || done.current) return
    done.current = true
    let alive = true
    // 세고 «나서» 읽는다 — 내 조회가 빠진 숫자를 보여주지 않으려고.
    recordPostView(slug)
      .then(() => fetchPostViews(slug))
      .then((n) => {
        if (alive) setOwn(n)
      })
      .catch(() => {
        /* 무시 */
      })
    return () => {
      alive = false
    }
  }, [slug, record])

  const count = own ?? shared?.[slug] ?? null
  if (count === null) return null

  return (
    <span className={`flex items-center text-sm text-muted-fg ${className}`}>
      <Eye className="w-3.5 h-3.5 mr-1" />
      {count.toLocaleString('ko-KR')}
    </span>
  )
}
