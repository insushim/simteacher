'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Heart, Sparkles, Target } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function AboutPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const values = [
    {
      icon: GraduationCap,
      title: '배움의 기쁨',
      description: '새로운 기술을 배우고 학생들과 나누는 것이 가장 큰 보람입니다.',
    },
    {
      icon: Heart,
      title: '선한 영향력',
      description: '교육을 통해 학생들에게 긍정적인 변화를 만들어갑니다.',
    },
    {
      icon: Sparkles,
      title: '창의적 수업',
      description: '에듀테크와 게이미피케이션으로 재미있는 수업을 설계합니다.',
    },
    {
      icon: Target,
      title: '지속적 성장',
      description: '매일 조금씩 성장하며 더 나은 교사가 되기 위해 노력합니다.',
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-500 font-medium">About Me</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              안녕하세요,
              <br />
              <span className="gradient-text">선행 심선생</span>입니다
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              15년차 초등학교 교사로, 교실에서 아이들과 함께하며
              새로운 교육 방법을 탐구하고 있습니다.
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              코딩 교육, AI 활용 수업, 게임 기반 학습 등
              다양한 에듀테크를 수업에 적용하고 그 경험을 나누고자 합니다.
            </p>
            <div className="mt-8">
              <Button href="/about">
                더 알아보기
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
