'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const projects = [
  {
    slug: 'ssak-writing-ai',
    title: '싹글쓰기 AI',
    description: 'AI 기반 초등학생 글쓰기 도우미. 학생들의 창의적 글쓰기를 지원하고, 맞춤형 피드백을 제공합니다.',
    tech: ['Next.js', 'OpenAI API', 'Firebase', 'Tailwind CSS'],
    category: 'AI',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    slug: 'math-tower-defense',
    title: '수학 타워 디펜스',
    description: '수학 문제를 풀어 적을 물리치는 교육용 타워 디펜스 게임. 사칙연산부터 분수까지!',
    tech: ['Phaser.js', 'TypeScript', 'React', 'Vite'],
    category: '게임',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    slug: 'history-adventure',
    title: '역사 어드벤처',
    description: '한국사를 배우는 인터랙티브 어드벤처 게임. 역사 속 인물이 되어 모험을 떠나요!',
    tech: ['React', 'Zustand', 'Framer Motion', 'Tailwind CSS'],
    category: '게임',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    slug: 'lesson-planner',
    title: '수업 플래너 AI',
    description: 'AI가 도와주는 수업 설계 도구. 성취기준 입력만으로 수업 계획서를 자동 생성합니다.',
    tech: ['Next.js', 'Claude API', 'Prisma', 'PostgreSQL'],
    category: 'AI',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    slug: 'class-management',
    title: '학급 관리 시스템',
    description: '출석, 상벌점, 좌석 배치 등 학급 관리에 필요한 모든 기능을 담은 올인원 도구.',
    tech: ['Next.js', 'Firebase', 'Chart.js', 'Tailwind CSS'],
    category: '도구',
    demoUrl: '#',
    githubUrl: '#',
  },
]

const categories = ['전체', 'AI', '게임', '도구']

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체')

  const filteredProjects = selectedCategory === '전체'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-medium">Portfolio</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            프로젝트
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            교육 현장에서 활용할 수 있는 프로젝트들을 개발하고 있습니다.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                {/* Thumbnail */}
                <div className="h-48 bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                  <span className="text-6xl">
                    {project.category === 'AI' ? '🤖' : project.category === '게임' ? '🎮' : '🛠️'}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <Badge variant="outline" className="w-fit mb-3">
                    {project.category}
                  </Badge>

                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h2>

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
                  <div className="flex items-center space-x-4">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center"
                    >
                      자세히 보기
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
