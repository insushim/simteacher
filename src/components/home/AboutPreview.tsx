'use client'

import { motion } from 'framer-motion'
import { ArrowRight, GraduationCap, Code2, Sprout } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const highlights = [
  {
    icon: GraduationCap,
    title: '교실에서 14년',
    description:
      '2013년 9월부터 초등학교에서 아이들과 함께해 왔습니다. 교육의 본질을 아는 것이 모든 시작점입니다.',
  },
  {
    icon: Code2,
    title: '바이브코딩 1년차',
    description:
      '2025년, AI와 함께 코드를 만들기 시작했습니다. 개발 지식이 아닌 교실의 필요에서 출발합니다.',
  },
  {
    icon: Sprout,
    title: '먼저 배워서 나누다',
    description:
      '새로 배운 것을 교실에 적용하고, 그 경험을 기록으로 나눕니다. 배움에는 끝이 없습니다.',
  },
]

export function AboutPreview() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 dark:text-primary-300 font-semibold">
            About
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-fg tracking-tight">
            교사이면서, <span className="gradient-text">만드는 사람</span>
          </h2>
          <p className="mt-4 text-lg text-muted-fg max-w-2xl mx-auto">
            교육 현장의 진짜 문제를 알고, 그것을 코드로 풀어냅니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <div className="w-14 h-14 mb-6 rounded-2xl bg-primary-500/15 flex items-center justify-center text-primary-600 dark:text-primary-300">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-fg mb-3">{item.title}</h3>
              <p className="text-muted-fg leading-relaxed text-[15px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button href="/about" variant="ghost">
            더 자세한 이야기
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
