'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, Bell, Pin, Clock, Search } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'
import Link from 'next/link'

const allNotices = [
  {
    id: '1',
    title: '2학기 현장체험학습 안내',
    content: '10월 15일 현장체험학습이 예정되어 있습니다. 장소는 국립중앙박물관이며, 도시락과 물병을 준비해주세요. 자세한 내용은 가정통신문을 확인해주세요.',
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
    content: '이번 달은 독서의 달입니다. 다양한 독서 활동에 참여해주세요! 1. 독서 마라톤 - 한 달간 읽은 책 기록하기, 2. 독서 퀴즈 대회 - 매주 금요일, 3. 북토크 - 좋아하는 책 소개하기',
    category: 'event',
    isPinned: false,
    createdAt: '2024-01-19',
  },
  {
    id: '4',
    title: '오늘의 알림장 (1/19)',
    content: '1. 국어 받아쓰기 공부\n2. 과학 관찰 보고서 제출\n3. 내일 체육복 지참',
    category: 'homework',
    isPinned: false,
    createdAt: '2024-01-19',
  },
  {
    id: '5',
    title: '학급 도서 대출 안내',
    content: '학급 도서를 빌려갈 수 있습니다. 대출 기간은 1주일이며, 분실 시 동일 도서로 변상해주세요.',
    category: 'notice',
    isPinned: false,
    createdAt: '2024-01-18',
  },
  {
    id: '6',
    title: '학부모 상담 주간 안내',
    content: '1월 22일~26일은 학부모 상담 주간입니다. 상담 신청은 학교 홈페이지를 통해 해주세요.',
    category: 'event',
    isPinned: true,
    createdAt: '2024-01-17',
  },
]

const categories = ['전체', '공지', '알림장', '행사']

export default function NoticesPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체')
  const [searchQuery, setSearchQuery] = useState('')

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

  const filteredNotices = allNotices
    .filter(notice => {
      if (selectedCategory === '전체') return true;
      const categoryMap: Record<string, string> = {
        '공지': 'notice',
        '알림장': 'homework',
        '행사': 'event',
      };
      return notice.category === categoryMap[selectedCategory];
    })
    .filter(notice =>
      notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/classroom"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-500 mb-8"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          학급 홈페이지로 돌아가기
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
            <Bell className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            공지사항
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            학급 소식과 알림장을 확인하세요
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
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
          </div>
        </motion.div>

        {/* Notices List */}
        <div className="space-y-4">
          {filteredNotices.length === 0 ? (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              검색 결과가 없습니다.
            </div>
          ) : (
            filteredNotices.map((notice, index) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      {notice.isPinned && (
                        <Pin className="w-4 h-4 text-primary-500" />
                      )}
                      <Badge variant={getCategoryVariant(notice.category)}>
                        {getCategoryLabel(notice.category)}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {notice.createdAt}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {notice.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                    {notice.content}
                  </p>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
