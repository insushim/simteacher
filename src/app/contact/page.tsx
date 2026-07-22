'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle, MessageCircle } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/siteConfig'
import { submitContactForm } from '@/lib/firestore'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [honeypot, setHoneypot] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // 허니팟: 숨겨진 필드에 값이 있으면 봇 — 전송한 척만 한다
    if (honeypot) {
      setIsSubmitted(true)
      return
    }
    setIsSubmitting(true)
    setError(null)

    const id = await submitContactForm(formData)

    setIsSubmitting(false)
    if (id) {
      setIsSubmitted(true)
    } else {
      setError('전송에 실패했어요. 잠시 후 다시 시도하거나 이메일로 보내주세요.')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-500/15 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-primary-500 dark:text-primary-300" />
          </div>
          <h1 className="text-2xl font-bold text-fg mb-4">
            메시지가 잘 도착했어요!
          </h1>
          <p className="text-muted-fg mb-8">
            읽어보고 이메일로 답장 드릴게요. 감사합니다.
          </p>
          <Button href="/">홈으로 돌아가기</Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="aurora-blob aurora-cyan w-[400px] h-[400px] -top-24 left-[12%] opacity-70" />
        <div className="aurora-blob aurora-violet w-[360px] h-[360px] bottom-0 right-[8%] opacity-60" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-primary-600 dark:text-primary-300 font-semibold">Contact</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-fg">
            편하게 <span className="gradient-text">이야기</span> 남겨주세요
          </h1>
          <p className="mt-6 text-lg text-muted-fg max-w-xl mx-auto leading-relaxed">
            에듀테크, 바이브코딩, 학급 운영 이야기 — 무엇이든 좋습니다.
            인사만 남겨주셔도 반가워요.
          </p>
        </motion.div>

        {/* Email card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-6 mb-8 flex items-center justify-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-primary-500/15 flex items-center justify-center text-primary-600 dark:text-primary-300">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm text-muted-fg">이메일로 직접 보내셔도 돼요</div>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="font-semibold text-fg hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
            >
              {siteConfig.links.email}
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="glass rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-2 mb-6 text-fg">
              <MessageCircle className="w-5 h-5 text-primary-500 dark:text-primary-300" />
              <h2 className="text-lg font-bold">문의 남기기</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 허니팟 — 봇 스팸 방지용 숨김 필드 (사람은 보지도, 채우지도 않음) */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                className="hidden"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="이름"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="성함 또는 닉네임"
                  required
                />
                <Input
                  label="이메일"
                  name="email"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="답장 받으실 주소"
                  required
                />
              </div>

              <Textarea
                label="내용"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="하고 싶은 이야기를 자유롭게 적어주세요"
                rows={6}
                required
              />

              {error && (
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              )}

              <Button type="submit" isLoading={isSubmitting} className="w-full">
                <Send className="w-4 h-4 mr-2" />
                보내기
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
