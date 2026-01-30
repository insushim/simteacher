'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500" />
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            함께 교육의 미래를 만들어가요
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            강의, 컨설팅, 협업 등 다양한 형태로 함께할 수 있습니다.
            <br />
            교육 혁신에 관심이 있으시다면 언제든 연락주세요!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 shadow-xl"
              size="lg"
            >
              <Mail className="mr-2 w-5 h-5" />
              강의 문의하기
            </Button>
            <Button
              href="/lectures"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10"
              size="lg"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              강의 목록 보기
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
