'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="aurora-blob aurora-violet w-[480px] h-[480px] -top-24 left-[8%]"
        />
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="aurora-blob aurora-cyan w-[520px] h-[520px] -bottom-32 right-[5%]"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="aurora-blob aurora-violet w-[320px] h-[320px] top-[40%] right-[30%] opacity-60"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-primary-500/40 bg-primary-500/10 text-primary-700 dark:text-primary-300 text-sm font-semibold">
              <Sparkles className="w-4 h-4 mr-2" />
              초등교사 14년 × 바이브코딩 1년차
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-fg"
          >
            교실에서 14년,
            <br />
            <span className="gradient-text">코드로 만드는 새로운 교육</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-fg max-w-2xl mx-auto leading-relaxed"
          >
            현직 초등교사가 AI와 함께 학급 경제 SaaS를 만들었습니다.
            <br />
            먼저 배워서 나누고, 선한 영향력을 전합니다.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="/portfolio" size="lg">
              알찬 프로젝트 보기
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              문의하기
            </Button>
          </motion.div>

          {/* Stats — 사실만 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {[
              { value: '14년', label: '교직 경력', sub: '2013년 9월부터' },
              { value: '1년차', label: '바이브코딩', sub: '2025년부터' },
              { value: '알찬', label: '학급 경제 SaaS', sub: '실제 학급 운영 중' },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-6">
                <div className="text-3xl font-extrabold gradient-text">
                  {stat.value}
                </div>
                <div className="mt-1 text-[15px] font-semibold text-fg">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-fg">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
