import { SiteConfig, NavItem } from '@/types';

export const siteConfig: SiteConfig = {
  name: '선행 심선생',
  description:
    '교실에서 14년, 코드로 만드는 새로운 교육 — 초등학교 교사이자 바이브코딩 개발자',
  url: 'https://sunhaengssam.web.app',
  ogImage: '/images/og/og-default.png',
  links: {
    github: 'https://github.com/iw-lab',
    email: '215253422+iw-lab@users.noreply.github.com',
  },
};

// 사실 기반 프로필 (허위 금지 — 수치 변경 시 근거 확인)
export const profile = {
  teachingSince: '2013년 9월', // 교직 시작
  teachingYears: 14, // 교직 경력 (년차)
  vibeCodingSince: 2025, // 바이브코딩 시작 연도
  vibeCodingYears: '1년차',
};

export const navigation: NavItem[] = [
  { label: '홈', href: '/' },
  { label: '소개', href: '/about' },
  { label: '포트폴리오', href: '/portfolio' },
  { label: '블로그', href: '/blog' },
  { label: '문의', href: '/contact' },
];
