'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Landmark,
  TrendingUp,
  Home,
  Scale,
  ShoppingBag,
  Keyboard,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

const features = [
  { icon: Landmark, label: '월급 · 세금 · 국고' },
  { icon: TrendingUp, label: '주식 · 예적금' },
  { icon: Home, label: '부동산 거래' },
  { icon: Scale, label: '학급 재판' },
  { icon: ShoppingBag, label: '아바타 상점' },
  { icon: Keyboard, label: '타자 게임 · 랭킹' },
]

export function FeaturedProjects() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Aurora accent */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="aurora-blob aurora-cyan w-[420px] h-[420px] top-1/3 -left-40 opacity-70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 dark:text-primary-300 font-semibold">
            Portfolio
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-fg tracking-tight">
            대표 프로젝트 — <span className="gradient-text">알찬</span>
          </h2>
          <p className="mt-4 text-lg text-muted-fg max-w-2xl mx-auto">
            교실 속 살아있는 경제 교육 플랫폼. 실제 학급에서 운영 중입니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="primary" size="md">React</Badge>
                <Badge variant="secondary" size="md">Firebase</Badge>
                <Badge variant="outline" size="md">운영 중</Badge>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-fg mb-4">
                학급 경제 시뮬레이션 SaaS
              </h3>
              <p className="text-muted-fg leading-relaxed mb-6">
                아이들이 월급을 받고, 세금을 내고, 주식과 부동산에 투자하고,
                재판까지 경험하는 학급 경제 세계. 교실 운영 14년의 경험과
                바이브코딩이 만나 태어난 첫 번째 프로젝트입니다.
              </p>
              <Button href="/portfolio">
                자세히 보기
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl border border-line bg-card p-4 text-center"
                >
                  <f.icon className="w-6 h-6 mx-auto mb-2 text-secondary-600 dark:text-secondary-400" />
                  <div className="text-sm font-semibold text-fg leading-snug">
                    {f.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
