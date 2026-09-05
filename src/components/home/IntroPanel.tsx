'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { profile } from '@/data/siteConfig'

/**
 * 첫 화면의 자기소개는 **접어 둔다.**
 *
 * 처음 오는 사람에게 필요한 건 "여기서 뭘 쓸 수 있나"이지 "만든 사람이 누구인가"가
 * 아니다. 소개가 첫 화면을 통째로 먹으면 카탈로그가 스크롤 아래로 밀린다.
 * 그래서 한 줄만 남기고, 궁금한 사람이 눌렀을 때만 펼친다.
 */
export function IntroPanel() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mb-14">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-fg">
            교실에서 쓰라고 만든 것들,
            <br className="hidden sm:block" />{' '}
            <span className="gradient-text">여기 다 있습니다</span>
          </h1>
          <p className="mt-4 text-[17px] md:text-lg text-muted-fg leading-relaxed max-w-2xl">
            초등학교 교사가 교실에서 필요할 때마다 하나씩 만든 학습 사이트와
            선생님용 프로그램입니다. 아래에서 바로 열어 쓰세요.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-2xl glass text-[15px] font-semibold text-fg hover:border-primary-500/60 transition-all"
        >
          <Sparkles className="w-4 h-4 text-primary-500 dark:text-primary-300" />
          만든 사람 소개
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-8 glass rounded-3xl p-8 md:p-10">
              <span className="inline-flex items-center px-4 py-2 rounded-full border border-primary-500/40 bg-primary-500/10 text-primary-700 dark:text-primary-300 text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2" />
                전북 초등교사 {profile.teachingYears}년 × 바이브코딩 {profile.vibeCodingYears}
              </span>

              <h2 className="mt-6 text-2xl md:text-3xl font-extrabold tracking-tight text-fg">
                교실에서 {profile.teachingYears}년,{' '}
                <span className="gradient-text">코드로 만드는 새로운 교육</span>
              </h2>

              <p className="mt-4 text-muted-fg leading-relaxed max-w-2xl">
                전북에서 근무하는 현직 초등교사가 AI와 함께 학급 경제 SaaS를
                만들었습니다. 개발 지식이 아니라 교실의 필요에서 출발합니다.
                먼저 배워서 나누고, 선한 영향력을 전합니다.
              </p>

              {/* 사실만 — 수치 변경 시 근거 확인 */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { value: `${profile.teachingYears}년`, label: '교직 경력', sub: `${profile.teachingSince}부터` },
                  { value: profile.vibeCodingYears, label: '바이브코딩', sub: `${profile.vibeCodingSince}년부터` },
                  { value: '알찬', label: '학급 경제 SaaS', sub: '실제 학급 운영 중' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-line bg-card p-5"
                  >
                    <div className="text-2xl font-extrabold gradient-text">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[15px] font-semibold text-fg">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-fg">{stat.sub}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button href="/about" variant="outline">
                  더 자세한 이야기
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button href="/contact" variant="ghost">
                  문의하기
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
