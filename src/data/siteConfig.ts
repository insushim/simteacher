import { SiteConfig, NavItem, Lecture, Testimonial } from '@/types';

export const siteConfig: SiteConfig = {
  name: '선행 심선생',
  description: '먼저 배워서 나누고, 선한 영향력을 전하다 - 초등학교 교사의 에듀테크 여정',
  url: 'https://madchumbub.web.app',
  ogImage: '/images/og/og-default.png',
  links: {
    github: 'https://github.com/iw-lab',
    youtube: 'https://youtube.com/@sunhaeng-teacher',
    instagram: 'https://instagram.com/sunhaeng_teacher',
    email: 'sunhaeng.teacher@gmail.com',
  },
};

export const navigation: NavItem[] = [
  { label: '홈', href: '/' },
  { label: '소개', href: '/about' },
  { label: '블로그', href: '/blog' },
  { label: '포트폴리오', href: '/portfolio' },
  { label: '강의', href: '/lectures' },
  { label: '학급', href: '/classroom' },
  { label: '연락처', href: '/contact' },
];

export const lectures: Lecture[] = [
  {
    id: '1',
    title: 'AI 활용 수업 설계',
    description: 'ChatGPT, Claude 등 AI 도구를 활용한 효과적인 수업 설계 방법을 배웁니다.',
    duration: '2시간',
    target: '초중고 교사',
    topics: ['AI 도구 소개', '프롬프트 엔지니어링', '수업 설계 실습', '윤리적 고려사항'],
    price: '협의',
  },
  {
    id: '2',
    title: '코딩 교육의 첫걸음',
    description: 'Scratch와 Entry를 활용한 초등 코딩 교육 실전 노하우를 공유합니다.',
    duration: '3시간',
    target: '초등 교사, 학부모',
    topics: ['블록 코딩 기초', '언플러그드 활동', '프로젝트 기반 학습', '평가 방법'],
    price: '협의',
  },
  {
    id: '3',
    title: '에듀테크 도구 마스터',
    description: '수업에 바로 적용 가능한 다양한 에듀테크 도구를 소개합니다.',
    duration: '2시간',
    target: '전 학교급 교사',
    topics: ['협업 도구', '평가 도구', '제작 도구', '관리 도구'],
    price: '협의',
  },
  {
    id: '4',
    title: '게임 기반 학습 설계',
    description: '게이미피케이션과 교육용 게임 개발을 통한 학습 동기 유발 전략',
    duration: '4시간',
    target: '초중등 교사',
    topics: ['게이미피케이션 이론', 'Phaser.js 기초', '학습 게임 설계', '실습 프로젝트'],
    price: '협의',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: '김영희',
    role: '초등교사',
    organization: '서울 OO초등학교',
    content: '심선생님의 AI 수업 강의 덕분에 ChatGPT를 수업에 효과적으로 활용할 수 있게 되었어요. 학생들의 반응도 정말 좋았습니다!',
  },
  {
    id: '2',
    name: '이철수',
    role: '정보교사',
    organization: '경기 OO중학교',
    content: '코딩 교육에 대한 새로운 시각을 얻었습니다. 특히 프로젝트 기반 학습 설계 부분이 많은 도움이 되었습니다.',
  },
  {
    id: '3',
    name: '박민정',
    role: '연구사',
    organization: 'OO교육청',
    content: '에듀테크 연수 중 가장 실용적인 강의였습니다. 현장에서 바로 적용할 수 있는 내용들로 가득했어요.',
  },
];

export const categories = {
  blog: ['AI', '코딩', '에듀테크', '교육철학', '수업사례', '후기'],
  portfolio: ['웹앱', '게임', 'AI', '도구'],
};
