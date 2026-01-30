import Link from 'next/link'
import { Github, Youtube, Instagram, Mail } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold gradient-text">선행</span>
              <span className="text-xl font-medium text-gray-700 dark:text-gray-300">
                심선생
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              먼저 배워서 나누고, 선한 영향력을 전하다.
              <br />
              초등학교 교사의 에듀테크 여정을 함께해요.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {siteConfig.links.github && (
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {siteConfig.links.youtube && (
                <a
                  href={siteConfig.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              )}
              {siteConfig.links.instagram && (
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {siteConfig.links.email && (
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              바로가기
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                >
                  블로그
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                >
                  포트폴리오
                </Link>
              </li>
              <li>
                <Link
                  href="/lectures"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                >
                  강의
                </Link>
              </li>
              <li>
                <Link
                  href="/classroom"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                >
                  학급 홈페이지
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              연락처
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-500 transition-colors"
                >
                  강의/컨설팅 문의
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {siteConfig.links.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} 선행 심선생. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
