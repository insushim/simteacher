// 공개 방명록 + 방문자/클릭 카운터.
// 정적 사이트(next export)라 서버가 없다 — 전부 브라우저에서 Firestore 로 직접 읽고 쓴다.
// 그래서 "무엇을 쓸 수 있는가"의 진짜 경계선은 firestore.rules 다. 이 파일은 편의 계층일 뿐,
// 여기서 막는 것(길이·쿨다운)은 규칙에서도 한 번 더 막혀 있어야 한다.
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  increment,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  where,
  type Unsubscribe,
} from 'firebase/firestore'
import { getDb, ensureUid } from './firebase'

// ── 방명록 ──────────────────────────────────────────────────────────────────

export interface GuestbookEntry {
  id: string
  nickname: string
  message: string
  color: string
  uid: string
  createdAt: number | null
}

export const NICKNAME_MAX = 20
export const MESSAGE_MAX = 500
/** 포스트잇 색. 규칙에서도 이 목록만 허용한다. */
export const NOTE_COLORS = ['yellow', 'mint', 'sky', 'pink', 'lilac'] as const
export type NoteColor = (typeof NOTE_COLORS)[number]

const COOLDOWN_MS = 30_000
const COOLDOWN_KEY = 'simteacher:guestbook:lastPost'

export function cooldownLeftMs(): number {
  if (typeof window === 'undefined') return 0
  const last = Number(window.localStorage.getItem(COOLDOWN_KEY) ?? 0)
  return Math.max(0, COOLDOWN_MS - (Date.now() - last))
}

function markPosted() {
  try {
    window.localStorage.setItem(COOLDOWN_KEY, String(Date.now()))
  } catch {
    /* 저장 실패는 무시 — 쿨다운은 편의 기능이다 */
  }
}

/** 최신 글부터 구독. 컴포넌트 언마운트 시 반환값을 호출해 끊는다. */
export function subscribeGuestbook(
  onData: (entries: GuestbookEntry[]) => void,
  onError: (e: unknown) => void,
  max = 100
): Unsubscribe {
  const q = query(
    collection(getDb(), 'guestbook'),
    orderBy('createdAt', 'desc'),
    limit(max)
  )
  return onSnapshot(
    q,
    (snap) => {
      onData(
        snap.docs.map((d) => {
          const v = d.data()
          const ts = v.createdAt
          return {
            id: d.id,
            nickname: String(v.nickname ?? ''),
            message: String(v.message ?? ''),
            color: String(v.color ?? 'yellow'),
            uid: String(v.uid ?? ''),
            createdAt: ts instanceof Timestamp ? ts.toMillis() : null,
          }
        })
      )
    },
    onError
  )
}

export async function postGuestbook(input: {
  nickname: string
  message: string
  color: NoteColor
}): Promise<string> {
  const nickname = input.nickname.trim().slice(0, NICKNAME_MAX)
  const message = input.message.trim().slice(0, MESSAGE_MAX)
  if (!message) throw new Error('내용을 적어주세요.')
  if (cooldownLeftMs() > 0) throw new Error('조금 전에 남기셨어요. 30초 뒤에 다시 시도해주세요.')

  const uid = await ensureUid()
  const ref = await addDoc(collection(getDb(), 'guestbook'), {
    nickname: nickname || '익명의 선생님',
    message,
    color: input.color,
    uid,
    createdAt: serverTimestamp(),
  })
  markPosted()
  return ref.id
}

/** 본인 글만 삭제된다(규칙이 uid 를 검사). 남의 글이면 권한 오류가 난다. */
export async function deleteGuestbook(id: string): Promise<void> {
  await ensureUid()
  await deleteDoc(doc(getDb(), 'guestbook', id))
}

/** 내 브라우저의 익명 uid — 내 글에만 삭제 버튼을 보여주려고 쓴다. */
export async function myUid(): Promise<string> {
  return ensureUid()
}

// ── 방문자 수 ───────────────────────────────────────────────────────────────

export function todayKey(d = new Date()): string {
  // KST 고정 — 방문자 통계는 한국 날짜 기준이어야 자정에 맞춰 초기화된다.
  const kst = new Date(d.getTime() + 9 * 60 * 60 * 1000)
  return kst.toISOString().slice(0, 10).replace(/-/g, '')
}

export interface VisitCounts {
  today: number
  total: number
}

const VISIT_KEY = 'simteacher:visited'

/**
 * 방문 1회 기록. 같은 브라우저는 하루 한 번만 센다(localStorage 기준).
 * 정확한 UV 가 아니라 "하루에 몇 대의 브라우저가 왔나"의 근사치다.
 */
export async function recordVisit(): Promise<void> {
  const day = todayKey()
  try {
    if (window.localStorage.getItem(VISIT_KEY) === day) return
  } catch {
    return // 저장이 안 되는 브라우저면 중복 집계를 막을 수 없으니 아예 세지 않는다
  }

  const db = getDb()
  await Promise.all([
    setDoc(doc(db, 'stats', `d_${day}`), { count: increment(1) }, { merge: true }),
    setDoc(doc(db, 'stats', 'total'), { count: increment(1) }, { merge: true }),
  ])

  // 쓰기가 성공한 뒤에 표시한다. 먼저 표시해 버리면 규칙 거절·네트워크 실패로 못 센 방문이
  // "이미 셌다"로 남아 그날은 영영 재시도되지 않는다(배포 직전 방문에서 실제로 겪었다).
  try {
    window.localStorage.setItem(VISIT_KEY, day)
  } catch {
    /* 여기까지 왔으면 집계는 이미 됐다 */
  }
}

export async function fetchVisitCounts(): Promise<VisitCounts> {
  const db = getDb()
  const [t, all] = await Promise.all([
    getDoc(doc(db, 'stats', `d_${todayKey()}`)),
    getDoc(doc(db, 'stats', 'total')),
  ])
  return {
    today: Number(t.data()?.count ?? 0),
    total: Number(all.data()?.count ?? 0),
  }
}

// ── 인기 클릭 ───────────────────────────────────────────────────────────────

export interface PopularItem {
  slug: string
  name: string
  count: number
}

/** 카드 클릭 1회 기록. 실패해도 사용자 흐름을 막지 않는다(링크는 그대로 열린다). */
export function recordClick(slug: string, rawName: string): void {
  // 규칙이 name 60자를 넘기면 거절한다 — 여기서 미리 자른다.
  const name = rawName.slice(0, 60)
  const day = todayKey()
  const db = getDb()
  void Promise.all([
    setDoc(
      doc(db, 'clicksDaily', `${day}__${slug}`),
      { date: day, slug, name, count: increment(1) },
      { merge: true }
    ),
    setDoc(doc(db, 'clicks', slug), { slug, name, count: increment(1) }, { merge: true }),
  ]).catch(() => {
    /* 통계 실패는 조용히 무시 */
  })
}

/**
 * 오늘의 인기 Top N. 오늘 데이터가 아직 얼마 없으면(이른 아침) 전체 인기로 넘어간다.
 * 반환값의 scope 로 어느 쪽인지 알려주니, 화면 제목도 그에 맞춰 바뀌어야 한다.
 */
export async function fetchPopular(
  n = 5
): Promise<{ scope: 'today' | 'all'; items: PopularItem[] }> {
  const db = getDb()
  const toItems = (
    docs: { data: () => Record<string, unknown> }[]
  ): PopularItem[] =>
    docs.map((d) => ({
      slug: String(d.data().slug ?? ''),
      name: String(d.data().name ?? ''),
      count: Number(d.data().count ?? 0),
    }))

  const todaySnap = await getDocs(
    query(
      collection(db, 'clicksDaily'),
      where('date', '==', todayKey()),
      orderBy('count', 'desc'),
      limit(n)
    )
  )
  const today = toItems(todaySnap.docs)
  if (today.length >= 3) return { scope: 'today', items: today }

  const allSnap = await getDocs(
    query(collection(db, 'clicks'), orderBy('count', 'desc'), limit(n))
  )
  return { scope: 'all', items: toItems(allSnap.docs) }
}
