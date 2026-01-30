'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Bell,
  Calendar,
  UtensilsCrossed,
  BookOpen,
  Pin,
  ChevronRight,
  Clock,
  ExternalLink
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

// Sample data - In production, this would come from Firebase
const notices = [
  {
    id: '1',
    title: '2학기 현장체험학습 안내',
    content: '10월 15일 현장체험학습이 예정되어 있습니다. 자세한 내용은 가정통신문을 확인해주세요.',
    category: 'notice',
    isPinned: true,
    createdAt: '2024-01-20',
  },
  {
    id: '2',
    title: '오늘의 알림장 (1/20)',
    content: '1. 수학익힘책 34-35쪽\n2. 일기 쓰기\n3. 준비물: 색연필, 가위',
    category: 'homework',
    isPinned: false,
    createdAt: '2024-01-20',
  },
  {
    id: '3',
    title: '독서의 달 행사 안내',
    content: '이번 달은 독서의 달입니다. 다양한 독서 활동에 참여해주세요!',
    category: 'event',
    isPinned: false,
    createdAt: '2024-01-19',
  },
]

const todayMeal = {
  date: '2024-01-20',
  lunch: ['현미밥', '미역국', '제육볶음', '시금치나물', '배추김치', '요거트'],
  calorie: '687 kcal',
}

const quickLinks = [
  { label: '학교 홈페이지', href: '#', icon: ExternalLink },
  { label: '학교 급식 정보', href: '#', icon: UtensilsCrossed },
  { label: 'e학습터', href: 'https://cls.edunet.net', icon: BookOpen },
]

export default function ClassroomPage() {
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'notice': return '공지';
      case 'homework': return '알림장';
      case 'event': return '행사';
      default: return '기타';
    }
  }

  const getCategoryVariant = (category: string): 'primary' | 'secondary' | 'accent' => {
    switch (category) {
      case 'notice': return 'primary';
      case 'homework': return 'secondary';
      case 'event': return 'accent';
      default: return 'primary';
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-medium">Classroom</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            우리 반 소식
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            알림장, 공지사항, 급식 정보를 확인하세요.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Notices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Today's Homework */}
            <Card className="p-6 border-l-4 border-l-secondary-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-xl bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center text-secondary-600 dark:text-secondary-400 mr-3">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                      오늘의 알림장
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      2024년 1월 20일
                    </p>
                  </div>
                </div>
                <Badge variant="secondary">알림장</Badge>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 flex items-center justify-center text-sm mr-2 flex-shrink-0">1</span>
                    수학익힘책 34-35쪽
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 flex items-center justify-center text-sm mr-2 flex-shrink-0">2</span>
                    일기 쓰기
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 flex items-center justify-center text-sm mr-2 flex-shrink-0">3</span>
                    준비물: 색연필, 가위
                  </li>
                </ul>
              </div>
            </Card>

            {/* All Notices */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-primary-500" />
                  공지사항
                </h2>
                <Link
                  href="/classroom/notices"
                  className="text-primary-500 hover:text-primary-600 text-sm font-medium flex items-center"
                >
                  전체보기
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {notices.map((notice, index) => (
                  <motion.div
                    key={notice.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Card className="p-5 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {notice.isPinned && (
                              <Pin className="w-4 h-4 text-primary-500" />
                            )}
                            <Badge variant={getCategoryVariant(notice.category)}>
                              {getCategoryLabel(notice.category)}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {notice.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                            {notice.content}
                          </p>
                          <div className="flex items-center mt-3 text-xs text-gray-500 dark:text-gray-400">
                            <Clock className="w-3 h-3 mr-1" />
                            {notice.createdAt}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Today's Meal */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center text-accent-600 dark:text-accent-400 mr-3">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    오늘의 급식
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {todayMeal.date}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {todayMeal.lunch.map((menu, index) => (
                  <div
                    key={index}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent-400 mr-2" />
                    {menu}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  열량: <span className="font-semibold text-gray-900 dark:text-white">{todayMeal.calorie}</span>
                </p>
              </div>

              <Button
                href="/classroom/meals"
                variant="outline"
                className="w-full mt-4"
              >
                이번 주 급식 보기
              </Button>
            </Card>

            {/* Quick Links */}
            <Card className="p-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                바로가기
              </h2>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <link.icon className="w-5 h-5 text-primary-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{link.label}</span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Calendar Preview */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-3">
                  <Calendar className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  이번 주 일정
                </h2>
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-12 text-center mr-3">
                    <div className="text-sm font-semibold text-primary-500">월</div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">22</div>
                  </div>
                  <div className="flex-1 p-2 rounded-lg bg-primary-50 dark:bg-primary-900/20">
                    <p className="text-sm text-gray-700 dark:text-gray-300">학급 회의</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 text-center mr-3">
                    <div className="text-sm font-semibold text-secondary-500">수</div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">24</div>
                  </div>
                  <div className="flex-1 p-2 rounded-lg bg-secondary-50 dark:bg-secondary-900/20">
                    <p className="text-sm text-gray-700 dark:text-gray-300">현장체험학습</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
