'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

interface BlogPostContentProps {
  post: {
    title: string
    description: string
    date: string
    category: string
    tags: string[]
    readingTime: string
    content: string
  }
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-500 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          블로그로 돌아가기
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Badge variant="primary" className="mb-4">
            {post.category}
          </Badge>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            {post.description}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readingTime}
              </span>
            </div>

            <button className="flex items-center text-gray-500 hover:text-primary-500">
              <Share2 className="w-4 h-4 mr-1" />
              공유하기
            </button>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          {post.content.split('\n').map((line, i) => {
            if (line.startsWith('## ')) {
              return <h2 key={i} className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">{line.replace('## ', '')}</h2>
            }
            if (line.startsWith('### ')) {
              return <h3 key={i} className="text-xl font-bold mt-6 mb-3 text-gray-900 dark:text-white">{line.replace('### ', '')}</h3>
            }
            if (line.startsWith('#### ')) {
              return <h4 key={i} className="text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-white">{line.replace('#### ', '')}</h4>
            }
            if (line.startsWith('- ')) {
              return <li key={i} className="ml-4 text-gray-600 dark:text-gray-400">{line.replace('- ', '')}</li>
            }
            if (line.match(/^\d+\./)) {
              return <li key={i} className="ml-4 text-gray-600 dark:text-gray-400">{line.replace(/^\d+\.\s*/, '')}</li>
            }
            if (line.trim() === '') {
              return <br key={i} />
            }
            return <p key={i} className="mb-4 text-gray-600 dark:text-gray-400">{line}</p>
          })}
        </motion.div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
