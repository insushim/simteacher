import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectDetailContent from './ProjectDetailContent'

const projects: Record<string, {
  title: string
  description: string
  longDescription: string
  tech: string[]
  category: string
  features: string[]
  challenges: string[]
  demoUrl?: string
  githubUrl?: string
}> = {
  'ssak-writing-ai': {
    title: '싹글쓰기 AI',
    description: 'AI 기반 초등학생 글쓰기 도우미',
    longDescription: '싹글쓰기 AI는 초등학생들의 창의적 글쓰기를 돕기 위해 개발된 웹 애플리케이션입니다. AI가 학생들의 글쓰기를 분석하고, 맞춤형 피드백을 제공하며, 글쓰기 아이디어를 제안합니다.',
    tech: ['Next.js', 'OpenAI API', 'Firebase', 'Tailwind CSS'],
    category: 'AI',
    features: [
      'AI 기반 글쓰기 피드백',
      '맞춤법 및 문법 검사',
      '글쓰기 아이디어 제안',
      '학생별 포트폴리오 관리',
      '교사용 대시보드',
    ],
    challenges: [
      '초등학생 눈높이에 맞는 피드백 생성',
      '안전한 AI 사용을 위한 필터링',
      '실시간 피드백을 위한 최적화',
    ],
    demoUrl: '#',
    githubUrl: '#',
  },
  'math-tower-defense': {
    title: '수학 타워 디펜스',
    description: '수학 문제를 풀어 적을 물리치는 교육용 게임',
    longDescription: '수학 타워 디펜스는 타워 디펜스 게임과 수학 학습을 결합한 교육용 게임입니다. 학생들이 수학 문제를 풀면 타워가 강화되고, 적을 물리칠 수 있습니다. 재미있게 수학을 배울 수 있도록 게이미피케이션 요소를 적극 활용했습니다.',
    tech: ['Phaser.js', 'TypeScript', 'React', 'Vite'],
    category: '게임',
    features: [
      '단계별 수학 문제 (사칙연산, 분수, 소수)',
      '다양한 타워와 업그레이드 시스템',
      '학습 진도 추적',
      '멀티플레이어 협동 모드',
      '리더보드 및 업적 시스템',
    ],
    challenges: [
      '게임 재미와 학습 효과의 균형',
      '난이도 조절 알고리즘',
      '모바일 터치 지원',
    ],
    demoUrl: '#',
    githubUrl: '#',
  },
  'history-adventure': {
    title: '역사 어드벤처',
    description: '한국사를 배우는 인터랙티브 어드벤처 게임',
    longDescription: '역사 어드벤처는 학생들이 한국사를 재미있게 배울 수 있는 인터랙티브 게임입니다. 역사 속 인물이 되어 당시의 상황을 체험하고, 역사적 선택을 내리며 학습합니다.',
    tech: ['React', 'Zustand', 'Framer Motion', 'Tailwind CSS'],
    category: '게임',
    features: [
      '인터랙티브 스토리라인',
      '역사적 선택 시뮬레이션',
      '퀴즈 및 평가 시스템',
      '캐릭터 커스터마이징',
      '진행 상황 저장',
    ],
    challenges: [
      '역사적 정확성 유지',
      '교육적 가치와 재미의 균형',
      '다양한 분기 스토리 관리',
    ],
    demoUrl: '#',
    githubUrl: '#',
  },
  'lesson-planner': {
    title: '수업 플래너 AI',
    description: 'AI가 도와주는 수업 설계 도구',
    longDescription: '수업 플래너 AI는 교사들의 수업 설계를 돕는 도구입니다. 성취기준을 입력하면 AI가 수업 계획서 초안을 자동으로 생성해줍니다.',
    tech: ['Next.js', 'Claude API', 'Prisma', 'PostgreSQL'],
    category: 'AI',
    features: [
      '성취기준 기반 수업 계획 생성',
      '활동지 자동 생성',
      '평가 루브릭 제안',
      '수업 자료 추천',
      '협업 기능',
    ],
    challenges: [
      '교육과정과의 정합성',
      '다양한 학년/과목 지원',
      '교사 피드백 반영 시스템',
    ],
    demoUrl: '#',
    githubUrl: '#',
  },
  'class-management': {
    title: '학급 관리 시스템',
    description: '학급 관리에 필요한 모든 기능을 담은 올인원 도구',
    longDescription: '출석, 상벌점, 좌석 배치, 역할 분담 등 학급 관리에 필요한 모든 기능을 담은 올인원 도구입니다.',
    tech: ['Next.js', 'Firebase', 'Chart.js', 'Tailwind CSS'],
    category: '도구',
    features: [
      '출석 체크',
      '상벌점 관리',
      '좌석 배치',
      '역할 분담',
      '통계 및 리포트',
    ],
    challenges: [
      '실시간 동기화',
      '오프라인 지원',
      '학부모 연동',
    ],
    demoUrl: '#',
    githubUrl: '#',
  },
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    return { title: '프로젝트를 찾을 수 없습니다' }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    notFound()
  }

  return <ProjectDetailContent project={project} />
}
