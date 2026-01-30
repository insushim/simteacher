'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const projects = [
  {
    slug: 'ssak-writing-ai',
    title: '싹글쓰기 AI',
    description: 'AI 기반 초등학생 글쓰기 도우미. 학생들의 창의적 글쓰기를 지원합니다.',
    tech: ['Next.js', 'OpenAI', 'Firebase'],
    category: 'AI',
  },
  {
    slug: 'math-tower-defense',
    title: '수학 타워 디펜스',
    description: '수학 문제를 풀어 적을 물리치는 교육용 타워 디펜스 게임',
    tech: ['Phaser.js', 'TypeScript', 'React'],
    category: '게임',
  },
  {
    slug: 'history-adventure-game',
    title: '역사 어드벤처',
    description: '한국사를 배우는 인터랙티브 어드벤처 게임',
    tech: ['React', 'Zustand', 'Tailwind'],
    category: '게임',
  },
]

export function FeaturedProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-medium">Portfolio</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            주요 프로젝트
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            교육 현장에서 활용할 수 있는 다양한 프로젝트를 개발하고 있습니다.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                {/* Thumbnail Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                  <span className="text-6xl">
                    {project.category === 'AI' ? '🤖' : '🎮'}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <Badge variant="outline" className="w-fit mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center"
                  >
                    자세히 보기
                    <ExternalLink className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button href="/portfolio" variant="outline">
            모든 프로젝트 보기
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
