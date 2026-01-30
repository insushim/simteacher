import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://madchumbub.web.app'),
  title: {
    default: '선행 심선생 | 먼저 배워서 나누고, 선한 영향력을 전하다',
    template: '%s | 선행 심선생',
  },
  description: '초등학교 교사 심선생의 개인 블로그입니다. 코딩, 에듀테크, 교육 혁신에 대한 이야기를 나눕니다.',
  keywords: ['교사 블로그', '에듀테크', '코딩 교육', '초등 교사', 'AI 교육', '교육 혁신'],
  authors: [{ name: '심선생' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://madchumbub.web.app',
    siteName: '선행 심선생',
    title: '선행 심선생 | 먼저 배워서 나누고, 선한 영향력을 전하다',
    description: '초등학교 교사의 코딩, 에듀테크, 교육 혁신 이야기',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
