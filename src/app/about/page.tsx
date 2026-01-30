'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Heart, Code, BookOpen, Users } from 'lucide-react'
import { Card } from '@/components/ui/Card'

export default function AboutPage() {
  const timeline = [
    { year: '2009', title: '교직 시작', description: '초등학교 교사로 첫 발을 내딛다' },
    { year: '2015', title: '코딩 교육 시작', description: 'Scratch와 함께 SW 교육 시작' },
    { year: '2018', title: '에듀테크 연구', description: '다양한 교육 기술 연구 및 적용' },
    { year: '2020', title: 'AI 교육 도입', description: 'AI 도구를 활용한 수업 설계' },
    { year: '2023', title: '강의 활동 시작', description: '교사 대상 에듀테크 강의 시작' },
    { year: '현재', title: '선행 심선생', description: '배움을 나누는 교육자로 성장 중' },
  ]

  const skills = [
    { category: '프로그래밍', items: ['JavaScript', 'TypeScript', 'Python', 'React', 'Next.js'] },
    { category: '에듀테크', items: ['Scratch', 'Entry', 'Canva', 'Notion', 'Google Workspace'] },
    { category: 'AI 도구', items: ['ChatGPT', 'Claude', 'Midjourney', 'Gamma', 'ElevenLabs'] },
    { category: '교육', items: ['게이미피케이션', 'PBL', '플립러닝', '협동학습', 'STEAM'] },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-medium">About Me</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            안녕하세요, <span className="gradient-text">선행 심선생</span>입니다
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            먼저 배워서 나누고, 선한 영향력을 전하는 초등학교 교사입니다.
          </p>
        </motion.div>

        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
        >
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center text-9xl">
            👨‍🏫
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              교실에서 미래를 준비하는 교사
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                15년간 초등학교에서 아이들과 함께하며, 교육의 본질과 혁신 사이에서
                균형을 찾아가고 있습니다.
              </p>
              <p>
                코딩, AI, 에듀테크에 관심을 갖게 된 것은 단순히 새로운 기술이 좋아서가 아니라,
                이것이 아이들의 미래에 필요한 역량이라고 믿기 때문입니다.
              </p>
              <p>
                &quot;먼저 배워서 나누고, 선한 영향력을 전하다&quot;는 제 교육 철학입니다.
                새로운 것을 배우고, 이를 학생들과 동료 교사들에게 나누는 것이 가장 큰 보람입니다.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            교육 가치관
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: '학생 중심',
                description: '모든 교육의 중심에는 학생이 있습니다. 아이들의 눈높이에서 생각하고 소통합니다.',
              },
              {
                icon: Code,
                title: '미래 역량',
                description: '디지털 리터러시와 컴퓨팅 사고력은 미래를 살아갈 아이들의 필수 역량입니다.',
              },
              {
                icon: Users,
                title: '함께 성장',
                description: '교사도 학생도 함께 배우고 성장합니다. 배움에는 끝이 없습니다.',
              },
            ].map((value, index) => (
              <Card key={value.title} className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            여정
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 pr-8 text-right">
                    {index % 2 === 0 && (
                      <>
                        <div className="text-primary-500 font-bold text-lg">{item.year}</div>
                        <div className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</div>
                        <div className="text-gray-600 dark:text-gray-400">{item.description}</div>
                      </>
                    )}
                  </div>
                  <div className="relative flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary-500" />
                  </div>
                  <div className="w-1/2 pl-8">
                    {index % 2 !== 0 && (
                      <>
                        <div className="text-primary-500 font-bold text-lg">{item.year}</div>
                        <div className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</div>
                        <div className="text-gray-600 dark:text-gray-400">{item.description}</div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            역량
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <Card key={skill.category} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
