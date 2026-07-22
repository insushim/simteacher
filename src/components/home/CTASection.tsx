'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="aurora-blob aurora-violet w-[400px] h-[400px] -bottom-32 left-1/2 -translate-x-1/2 opacity-80" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="glass rounded-3xl p-10 md:p-14 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-fg tracking-tight">
            함께 이야기 나눠요
          </h2>
          <p className="mt-4 text-lg text-muted-fg max-w-xl mx-auto leading-relaxed">
            에듀테크, 바이브코딩, 학급 운영 — 무엇이든 편하게 문의해 주세요.
            인사만 남겨주셔도 반갑습니다.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              <Mail className="mr-2 w-5 h-5" />
              문의하기
            </Button>
            <Button href="/about" variant="ghost" size="lg">
              소개 보기
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
