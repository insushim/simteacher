'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

interface ProjectDetailContentProps {
  project: {
    title: string
    description: string
    longDescription: string
    tech: string[]
    category: string
    features: string[]
    challenges: string[]
    demoUrl?: string
    githubUrl?: string
  }
}

export default function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-500 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          포트폴리오로 돌아가기
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="h-64 md:h-96 rounded-2xl bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center mb-8">
            <span className="text-8xl">
              {project.category === 'AI' ? '🤖' : project.category === '게임' ? '🎮' : '🛠️'}
            </span>
          </div>

          <Badge variant="primary" className="mb-4">
            {project.category}
          </Badge>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {project.demoUrl && (
              <Button href={project.demoUrl}>
                <ExternalLink className="w-4 h-4 mr-2" />
                데모 보기
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} variant="outline">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            )}
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-12"
        >
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              프로젝트 소개
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {project.longDescription}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              주요 기능
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-600 dark:text-gray-400"
                >
                  <span className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center text-sm mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              기술적 도전
            </h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-600 dark:text-gray-400"
                >
                  <span className="text-secondary-500 mr-3">•</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </section>
        </motion.div>
      </div>
    </div>
  )
}
