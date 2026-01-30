'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, UtensilsCrossed, Calendar } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

// Sample weekly meals data
const weeklyMeals = [
  {
    date: '2024-01-20',
    day: '월',
    lunch: ['현미밥', '미역국', '제육볶음', '시금치나물', '배추김치', '요거트'],
    calorie: '687 kcal',
  },
  {
    date: '2024-01-21',
    day: '화',
    lunch: ['잡곡밥', '된장찌개', '고등어구이', '콩나물무침', '깍두기', '귤'],
    calorie: '652 kcal',
  },
  {
    date: '2024-01-22',
    day: '수',
    lunch: ['김치볶음밥', '우동국물', '탕수육', '단무지', '총각김치', '주스'],
    calorie: '723 kcal',
  },
  {
    date: '2024-01-23',
    day: '목',
    lunch: ['쌀밥', '콩나물국', '불고기', '감자조림', '배추김치', '사과'],
    calorie: '698 kcal',
  },
  {
    date: '2024-01-24',
    day: '금',
    lunch: ['카레라이스', '팽이버섯국', '치킨너겟', '코울슬로', '깍두기', '푸딩'],
    calorie: '745 kcal',
  },
]

export default function MealsPage() {
  const [currentWeek, setCurrentWeek] = useState(0)
  const today = new Date().toISOString().split('T')[0]

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
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center">
            <UtensilsCrossed className="w-8 h-8 text-accent-600 dark:text-accent-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            급식 정보
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            이번 주 급식 메뉴를 확인하세요
          </p>
        </motion.div>

        {/* Week Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-between mb-8"
        >
          <button
            onClick={() => setCurrentWeek(prev => prev - 1)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
          <div className="flex items-center">
            <Calendar className="w-5 h-5 text-primary-500 mr-2" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              2024년 1월 4주차
            </span>
          </div>
          <button
            onClick={() => setCurrentWeek(prev => prev + 1)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </motion.div>

        {/* Meals Grid */}
        <div className="space-y-4">
          {weeklyMeals.map((meal, index) => (
            <motion.div
              key={meal.date}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <Card
                className={`p-6 ${meal.date === today ? 'ring-2 ring-primary-500' : ''}`}
              >
                <div className="flex items-start">
                  {/* Day */}
                  <div className="w-20 flex-shrink-0 text-center">
                    <div className={`text-sm font-semibold ${
                      meal.date === today ? 'text-primary-500' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {meal.day}요일
                    </div>
                    <div className={`text-2xl font-bold ${
                      meal.date === today ? 'text-primary-500' : 'text-gray-900 dark:text-white'
                    }`}>
                      {meal.date.split('-')[2]}
                    </div>
                    {meal.date === today && (
                      <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">
                        오늘
                      </span>
                    )}
                  </div>

                  {/* Menu */}
                  <div className="flex-1 ml-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                      점심 메뉴
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {meal.lunch.map((menu, i) => (
                        <div
                          key={i}
                          className="flex items-center text-gray-700 dark:text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-400 mr-2" />
                          {menu}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                      열량: <span className="font-semibold">{meal.calorie}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 p-6 rounded-2xl bg-gray-100 dark:bg-gray-800"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            알레르기 정보 안내
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            알레르기 유발 식품이 포함된 메뉴가 있을 수 있습니다.
            자세한 알레르기 정보는 학교 영양사 선생님께 문의해주세요.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
