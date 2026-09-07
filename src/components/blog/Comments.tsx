'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { MessageCircle, Send, Trash2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import {
  COMMENT_MAX,
  COMMENT_NICK_MAX,
  commentCooldownLeftMs,
  deleteComment,
  myCommentIds,
  postComment,
  subscribeComments,
  type Comment,
} from '@/lib/community'

function timeAgo(ms: number | null): string {
  if (!ms) return '방금'
  const min = Math.floor((Date.now() - ms) / 60000)
  if (min < 1) return '방금'
  if (min < 60) return `${min}분 전`
  const hour = Math.floor(min / 60)
  if (hour < 24) return `${hour}시간 전`
  const day = Math.floor(hour / 24)
  if (day < 7) return `${day}일 전`
  const d = new Date(ms)
  return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`
}

/**
 * 글 하단 댓글. 로그인 없이 쓴다.
 *
 * 🔴 이름은 «선택»이다. 비우면 「익명」으로 뜨고, 적으면 그 이름으로 뜬다.
 *    실명을 쓰라고 요구하지 않는다 — 이메일도 받지 않는다. 남는 건 이름과 내용뿐이다.
 * 🔴 삭제는 «쓴 그 브라우저»만 할 수 있다. 규칙이 별도의 소유권 문서를 열어 익명 uid 를
 *    검사하며, 그 uid 는 클라이언트가 위조할 수 없다.
 * 🔴 uid 는 댓글에 담기지 «않는다». 담으면 익명으로 쓴 글과 이름을 적은 글이 같은 uid 로 묶여
 *    누구나 대조만으로 익명 작성자를 알아낼 수 있다. 아래 삭제 버튼은 이 브라우저가 기억하는
 *    id 목록으로 «보여줄지»만 정하고, 실제 권한 판단은 서버가 한다.
 * 🔴 수정은 아예 없다. 착한 글로 통과시킨 뒤 내용을 바꿔치기하는 경로를 막기 위해서다.
 */
export function Comments({ slug }: { slug: string }) {
  const [rows, setRows] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState<string | null>(null)

  const [nickname, setNickname] = useState('')
  const [message, setMessage] = useState('')
  const [posting, setPosting] = useState(false)
  const [postError, setPostError] = useState<string | null>(null)
  const [mine, setMine] = useState<string[]>([])
  const [cooldown, setCooldown] = useState(0)
  const taRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const un = subscribeComments(
      slug,
      (r) => {
        setRows(r)
        setLoading(false)
      },
      (e) => {
        // 규칙 거절·인덱스 없음·오프라인 전부 여기로 온다. 글 읽기는 막지 않는다.
        console.error('[comments]', e)
        setLoadError('댓글을 불러오지 못했어요.')
        setLoading(false)
      }
    )
    return () => un()
  }, [slug])

  // 내가 쓴 댓글 id 는 «삭제 버튼을 보여줄지»만 정한다. 진짜 권한은 규칙이 판단하므로
  // 이 목록이 비어 있거나 틀려도 남의 댓글이 지워지는 일은 없다.
  useEffect(() => {
    setMine(myCommentIds())
  }, [rows])

  useEffect(() => {
    const t = setInterval(() => setCooldown(commentCooldownLeftMs()), 1000)
    setCooldown(commentCooldownLeftMs())
    return () => clearInterval(t)
  }, [])

  const submit = useCallback(async () => {
    if (posting) return
    setPostError(null)
    setPosting(true)
    try {
      await postComment({ slug, nickname, message })
      setMessage('')
      setMine(myCommentIds())
      setCooldown(commentCooldownLeftMs())
      taRef.current?.blur()
    } catch (e) {
      setPostError(e instanceof Error ? e.message : '남기지 못했어요. 잠시 뒤 다시 시도해주세요.')
    } finally {
      setPosting(false)
    }
  }, [posting, slug, nickname, message])

  const remove = useCallback(async (id: string) => {
    try {
      await deleteComment(id)
      setMine(myCommentIds())
    } catch {
      setPostError('삭제하지 못했어요. 본인이 쓴 댓글만 지울 수 있어요.')
    }
  }, [])

  const left = COMMENT_MAX - message.length
  const blocked = posting || cooldown > 0 || !message.trim()

  return (
    <section className="mt-16 pt-10 border-t border-fg/10">
      <h2 className="flex items-center gap-2 text-xl font-bold text-fg mb-1">
        <MessageCircle className="w-5 h-5" />
        댓글 {rows.length > 0 && <span className="text-muted-fg font-normal">{rows.length}</span>}
      </h2>
      <p className="text-sm text-muted-fg mb-6">
        이름은 안 적어도 됩니다. 비우면 익명으로 올라가요.
      </p>

      <div className="glass rounded-2xl p-4 md:p-5 mb-8">
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value.slice(0, COMMENT_NICK_MAX))}
          placeholder="이름 (선택 · 비우면 익명)"
          maxLength={COMMENT_NICK_MAX}
          className="w-full mb-3 px-3 py-2 rounded-lg bg-bg/60 border border-fg/15 text-fg placeholder:text-muted-fg/70 focus:outline-none focus:border-primary-400"
        />
        <textarea
          ref={taRef}
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, COMMENT_MAX))}
          placeholder="읽고 든 생각을 남겨 주세요."
          rows={4}
          maxLength={COMMENT_MAX}
          className="w-full px-3 py-2 rounded-lg bg-bg/60 border border-fg/15 text-fg placeholder:text-muted-fg/70 resize-y focus:outline-none focus:border-primary-400"
        />
        <div className="flex items-center justify-between mt-3 gap-3">
          <span className={`text-xs ${left < 50 ? 'text-amber-500' : 'text-muted-fg'}`}>
            {message.length} / {COMMENT_MAX}
          </span>
          <Button onClick={submit} disabled={blocked} size="sm">
            {posting ? (
              <Loader2 className="w-4 h-4 mr-1 animate-spin" />
            ) : (
              <Send className="w-4 h-4 mr-1" />
            )}
            {cooldown > 0 ? `${Math.ceil(cooldown / 1000)}초 뒤에` : '남기기'}
          </Button>
        </div>
        {postError && <p className="mt-2 text-sm text-rose-500">{postError}</p>}
      </div>

      {loading ? (
        <p className="text-sm text-muted-fg flex items-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin" />
          불러오는 중…
        </p>
      ) : loadError ? (
        <p className="text-sm text-muted-fg">{loadError}</p>
      ) : rows.length === 0 ? (
        <p className="text-sm text-muted-fg">아직 댓글이 없어요. 첫 번째로 남겨 보세요.</p>
      ) : (
        <ul className="space-y-4">
          {rows.map((c) => (
            <li key={c.id} className="glass rounded-xl p-4">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-semibold text-fg text-sm">
                  {c.nickname || '익명'}
                </span>
                <span className="text-xs text-muted-fg">{timeAgo(c.createdAt)}</span>
                {mine.includes(c.id) && (
                  <button
                    onClick={() => remove(c.id)}
                    className="ml-auto text-muted-fg hover:text-rose-500 transition-colors"
                    aria-label="내 댓글 삭제"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              {/* 사용자가 쓴 글이다. HTML 로 그리지 않고 텍스트로만 그린다(줄바꿈만 살린다). */}
              <p className="text-fg/90 text-[15px] leading-relaxed whitespace-pre-wrap break-words">
                {c.message}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
