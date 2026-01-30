'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, Tag } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const posts = [
  {
    slug: 'ai-in-education',
    title: 'AI를 교실에 도입하며 배운 것들',
    description: 'ChatGPT와 Claude를 수업에 활용하면서 느낀 장점과 주의점, 그리고 실제 적용 사례를 공유합니다.',
    date: '2024-01-15',
    category: 'AI',
    tags: ['AI', '에듀테크', '수업사례'],
    readingTime: '8분',
  },
  {
    slug: 'coding-education-tips',
    title: '초등 코딩 교육, 어디서부터 시작할까?',
    description: 'Scratch와 Entry를 활용한 초등학교 코딩 교육의 첫걸음을 안내합니다.',
    date: '2024-01-10',
    category: '코딩',
    tags: ['코딩', 'Scratch', '초등교육'],
    readingTime: '6분',
  },
  {
    slug: 'gamification-classroom',
    title: '게이미피케이션으로 수업을 재미있게',
    description: '게임의 요소를 수업에 적용하여 학생들의 참여도를 높이는 방법을 소개합니다.',
    date: '2024-01-05',
    category: '에듀테크',
    tags: ['게이미피케이션', '수업설계', '동기유발'],
    readingTime: '7분',
  },
  {
    slug: 'teacher-growth-mindset',
    title: '교사의 성장 마인드셋',
    description: '끊임없이 배우고 성장하는 교사가 되기 위한 저만의 방법을 나눕니다.',
    date: '2024-01-01',
    category: '교육철학',
    tags: ['성장', '자기개발', '교사'],
    readingTime: '5분',
  },
]

const categories = ['전체', 'AI', '코딩', '에듀테크', '교육철학', '수업사례']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체')

  const filteredPosts = selectedCategory === '전체'
    ? posts
    : posts.filter(post => post.category === selectedCategory)

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-medium">Blog</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            교육 이야기
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            교실에서의 경험과 배움을 기록합니다.
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

        {/* Blog Posts */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full">
                  {/* Thumbnail */}
                  <div className="h-48 bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center">
                    <span className="text-6xl">📝</span>
                  </div>

                  <div className="p-6">
                    <Badge variant="primary" className="mb-3">
                      {post.category}
                    </Badge>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {post.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-gray-500 dark:text-gray-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readingTime}
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
