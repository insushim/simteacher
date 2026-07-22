import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://sunhaengssam.web.app'),
  title: {
    default: '선행 심선생 | 교실에서 14년, 코드로 만드는 새로운 교육',
    template: '%s | 선행 심선생',
  },
  description:
    '초등학교 교사이자 바이브코딩 개발자. 교실의 경험을 코드로 옮겨 학급 경제 SaaS 알찬을 만들고 운영합니다.',
  keywords: ['초등 교사', '바이브코딩', '에듀테크', 'AI 교육', '알찬', '학급 경제'],
  authors: [{ name: '심선생' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: '32x32' },
    ],
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://sunhaengssam.web.app',
    siteName: '선행 심선생',
    title: '선행 심선생 | 교실에서 14년, 코드로 만드는 새로운 교육',
    description: '초등학교 교사이자 바이브코딩 개발자의 기록',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f7fc' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a12' },
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
          defaultTheme="dark"
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
