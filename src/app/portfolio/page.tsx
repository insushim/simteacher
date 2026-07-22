'use client'

import { motion } from 'framer-motion'
import {
  Landmark,
  TrendingUp,
  Home,
  Scale,
  ShoppingBag,
  Keyboard,
  PiggyBank,
  MessageSquare,
  Music,
  Gift,
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const features = [
  {
    icon: Landmark,
    title: '월급 · 세금 · 국고',
    description: '직업에 따라 월급을 받고, 순자산세와 부동산 보유세를 냅니다. 국고로 학급 재정이 순환합니다.',
  },
  {
    icon: TrendingUp,
    title: '주식 투자',
    description: '학급 주식 시장에서 종목을 사고팔며 투자와 리스크를 체험합니다.',
  },
  {
    icon: PiggyBank,
    title: '예금 · 적금 · 파킹통장',
    description: '이자의 원리를 몸으로 배우는 저축 상품들.',
  },
  {
    icon: Home,
    title: '부동산 거래',
    description: '자리(부동산)를 사고팔고, 가격을 흥정하는 개인 간 거래까지.',
  },
  {
    icon: Scale,
    title: '학급 재판',
    description: '갈등을 재판으로 해결하며 규칙과 절차를 배웁니다.',
  },
  {
    icon: ShoppingBag,
    title: '아바타 상점',
    description: '모은 돈으로 나만의 아바타를 꾸미는 소비의 즐거움.',
  },
  {
    icon: Keyboard,
    title: '타자 게임 · 랭킹',
    description: '떨어지는 단어 게임과 필사 연습, 학급 일일 랭킹.',
  },
  {
    icon: MessageSquare,
    title: '게시판 · 담벼락',
    description: '학급 게시판과 개인 담벼락으로 소통합니다.',
  },
  {
    icon: Music,
    title: '음악 신청',
    description: '학급 음악 대기열에 곡을 신청하고, 우선 신청권도 구매할 수 있습니다.',
  },
  {
    icon: Gift,
    title: '랜덤 뽑기',
    description: '돌림판 랜덤 뽑기로 간식과 아이템에 도전합니다.',
  },
]

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="aurora-blob aurora-violet w-[440px] h-[440px] -top-24 left-[10%] opacity-70" />
        <div className="aurora-blob aurora-cyan w-[420px] h-[420px] top-[50%] -right-32 opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 dark:text-primary-300 font-semibold">Portfolio</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-fg">
            <span className="gradient-text">알찬</span> — 학급 경제 시뮬레이션
          </h1>
          <p className="mt-6 text-lg text-muted-fg max-w-2xl mx-auto leading-relaxed">
            아이들이 돈을 벌고, 쓰고, 투자하고, 세금을 내는 교실 속 경제 세계.
            교실 운영 14년의 경험을 바이브코딩으로 직접 구현해, 실제 학급에서
            운영하고 있습니다.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Badge variant="primary" size="md">React</Badge>
            <Badge variant="secondary" size="md">Firebase</Badge>
            <Badge variant="secondary" size="md">Cloud Functions</Badge>
            <Badge variant="outline" size="md">실제 학급 운영 중</Badge>
          </div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-3xl p-8 md:p-12 mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-fg mb-4">왜 만들었나</h2>
          <div className="space-y-4 text-muted-fg leading-relaxed">
            <p>
              학급 경제 활동은 아이들이 가장 좋아하는 교실 활동 중 하나지만,
              종이 화폐와 장부로 운영하기엔 손이 너무 많이 갑니다. 기존
              서비스들은 우리 반에 꼭 맞지 않았습니다.
            </p>
            <p>
              그래서 직접 만들었습니다. AI와 함께하는 바이브코딩으로, 교사가
              교실에서 정말 필요한 기능만 담아서. 월급과 세금부터 주식·부동산·
              재판·아바타까지, 아이들의 하루가 살아있는 경제 수업이 됩니다.
            </p>
            <p className="text-sm">
              ※ 학급 전용 서비스로 운영 중이라 링크는 공개하지 않습니다. 궁금한
              점은 문의로 남겨주세요.
            </p>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-fg text-center mb-12">주요 기능</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 3) * 0.07 }}
                className="glass rounded-2xl p-6"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-secondary-500/15 flex items-center justify-center text-secondary-600 dark:text-secondary-400">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-fg mb-2">{f.title}</h3>
                <p className="text-muted-fg text-[15px] leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-fg mb-6">
            알찬이나 바이브코딩이 궁금하신가요?
          </p>
          <Button href="/contact" size="lg">문의하기</Button>
        </motion.div>
      </div>
    </div>
  )
}
