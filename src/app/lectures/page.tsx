'use client'

import { motion } from 'framer-motion'
import { Clock, Users, BookOpen, CheckCircle, Star, Quote } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { lectures, testimonials } from '@/data/siteConfig'

export default function LecturesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-medium">Lectures</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            강의 & 컨설팅
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            교육 현장에서 쌓은 경험을 바탕으로 실용적인 강의를 제공합니다.
          </p>
        </motion.div>

        {/* Lectures */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            강의 프로그램
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {lectures.map((lecture, index) => (
              <motion.div
                key={lecture.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Card className="h-full p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {lecture.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {lecture.description}
                  </p>

                  <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {lecture.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {lecture.target}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      주요 내용
                    </h4>
                    <ul className="space-y-2">
                      {lecture.topics.map((topic, i) => (
                        <li
                          key={i}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                        >
                          <CheckCircle className="w-4 h-4 mr-2 text-primary-500" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        강의료: <span className="font-semibold text-gray-900 dark:text-white">{lecture.price}</span>
                      </span>
                      <Button href="/contact" size="sm">
                        문의하기
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            수강 후기
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full p-6">
                  <Quote className="w-8 h-8 text-primary-300 mb-4" />

                  <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                    &quot;{testimonial.content}&quot;
                  </p>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-semibold mr-3">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}, {testimonial.organization}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            강의가 필요하신가요?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            학교, 교육청, 기업 등 다양한 곳에서 강의를 진행하고 있습니다.
            원하시는 주제와 형식으로 맞춤 강의가 가능합니다.
          </p>
          <Button
            href="/contact"
            className="bg-white text-primary-600 hover:bg-gray-100"
            size="lg"
          >
            강의 문의하기
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
