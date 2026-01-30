import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostContent from './BlogPostContent'

const posts: Record<string, {
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  readingTime: string
  content: string
}> = {
  'ai-in-education': {
    title: 'AI를 교실에 도입하며 배운 것들',
    description: 'ChatGPT와 Claude를 수업에 활용하면서 느낀 장점과 주의점, 그리고 실제 적용 사례를 공유합니다.',
    date: '2024-01-15',
    category: 'AI',
    tags: ['AI', '에듀테크', '수업사례'],
    readingTime: '8분',
    content: `## AI와 함께하는 새로운 교실

2023년, ChatGPT가 등장하면서 교육계에도 큰 변화의 바람이 불었습니다. 처음에는 "아이들이 숙제를 AI로 대신 시키면 어쩌지?"라는 걱정이 앞섰지만, 직접 수업에 활용해보면서 생각이 많이 바뀌었습니다.

### AI를 수업에 활용한 사례

#### 1. 글쓰기 수업에서의 활용

학생들에게 AI와 함께 이야기를 만들어보는 활동을 진행했습니다. 학생이 첫 문장을 쓰면, AI가 이어서 쓰고, 다시 학생이 이어가는 방식이었죠.

결과는 놀라웠습니다. 평소 글쓰기를 어려워하던 학생들도 AI와의 "대화"를 통해 자연스럽게 이야기를 완성해 나갔습니다.

#### 2. 수학 문제 해결 도우미

어려운 수학 문제를 만났을 때, AI에게 "힌트"를 요청하는 방법을 가르쳤습니다. 정답을 바로 알려주지 않고, 단계별로 생각하는 방법을 물어보도록 했죠.

### 주의해야 할 점

물론 AI 활용에는 주의가 필요합니다:

1. **비판적 사고력 강조**: AI의 답변이 항상 옳은 것은 아님을 알려줍니다.
2. **출처 확인 습관**: AI가 알려준 정보는 반드시 확인하는 습관을 기릅니다.
3. **윤리적 사용**: 표절과 저작권에 대해 함께 이야기합니다.

### 마무리

AI는 도구입니다. 어떻게 사용하느냐에 따라 훌륭한 학습 도우미가 될 수도, 학습을 방해할 수도 있습니다. 중요한 것은 아이들이 AI를 "생각하는 도구"로 활용하도록 가르치는 것이 아닐까요?`,
  },
  'coding-education-tips': {
    title: '초등 코딩 교육, 어디서부터 시작할까?',
    description: 'Scratch와 Entry를 활용한 초등학교 코딩 교육의 첫걸음을 안내합니다.',
    date: '2024-01-10',
    category: '코딩',
    tags: ['코딩', 'Scratch', '초등교육'],
    readingTime: '6분',
    content: `## 코딩 교육의 첫걸음

"코딩을 어떻게 가르쳐야 하나요?"

SW 교육이 필수가 되면서 많은 선생님들이 이런 고민을 하십니다. 오늘은 제가 5년간 코딩 교육을 하면서 배운 것들을 나눠볼게요.

### 블록 코딩부터 시작하기

초등학생에게는 **블록 코딩**이 최고입니다.

- **Scratch**: MIT에서 만든 무료 프로그램
- **Entry**: 네이버에서 만든 한글 지원 프로그램

저는 Entry를 주로 사용하는데, 한글 지원이 잘 되어있고 교육청에서 제공하는 자료도 많기 때문입니다.

### 첫 수업 진행 방법

1. **스프라이트 움직이기** (1차시) - 방향키로 캐릭터 움직이기
2. **간단한 애니메이션** (2-3차시) - 캐릭터가 말하고 움직이는 애니메이션
3. **미니 게임** (4-6차시) - 간단한 피하기 게임 만들기

### 수업 팁

- 완벽하지 않아도 됩니다: 실수해도 다시 하면 됩니다
- 자유롭게 탐색하기: 정해진 답이 없어도 괜찮습니다
- 짝 프로그래밍: 둘이 함께 하면 더 재미있습니다

코딩은 어렵지 않습니다. 함께 시작해봐요!`,
  },
  'gamification-classroom': {
    title: '게이미피케이션으로 수업을 재미있게',
    description: '게임의 요소를 수업에 적용하여 학생들의 참여도를 높이는 방법을 소개합니다.',
    date: '2024-01-05',
    category: '에듀테크',
    tags: ['게이미피케이션', '수업설계', '동기유발'],
    readingTime: '7분',
    content: `## 게이미피케이션이란?

게이미피케이션은 게임이 아닌 환경에 게임의 요소를 적용하는 것입니다. 수업에 포인트, 뱃지, 레벨업 시스템을 도입하면 학생들의 참여도가 크게 높아집니다.

### 수업에 적용할 수 있는 게임 요소

1. **포인트 시스템**: 과제 완료, 발표, 협동 시 포인트 부여
2. **레벨업**: 일정 포인트 달성 시 레벨 상승
3. **뱃지**: 특별한 성취에 대한 인정
4. **리더보드**: 건전한 경쟁 유도

### 주의사항

- 경쟁보다는 협동을 강조하세요
- 모든 학생이 성공 경험을 할 수 있도록 설계하세요
- 외적 동기에만 의존하지 않도록 내적 동기도 함께 키워주세요`,
  },
  'teacher-growth-mindset': {
    title: '교사의 성장 마인드셋',
    description: '끊임없이 배우고 성장하는 교사가 되기 위한 저만의 방법을 나눕니다.',
    date: '2024-01-01',
    category: '교육철학',
    tags: ['성장', '자기개발', '교사'],
    readingTime: '5분',
    content: `## 배움을 멈추지 않는 교사

교사는 가르치는 사람이기도 하지만, 먼저 배우는 사람이기도 합니다. 저는 항상 학생들보다 한 발 먼저 배우고, 그것을 나누는 것을 즐깁니다.

### 성장을 위한 습관

1. **매일 30분 독서**: 교육 관련 도서와 기술 서적을 번갈아 읽습니다
2. **주 1회 새로운 도구 탐색**: 새로운 에듀테크 도구를 찾아 시험해봅니다
3. **월 1회 수업 나눔**: 동료 교사들과 수업 사례를 공유합니다

### 실패를 두려워하지 않기

새로운 것을 시도하면 실패할 수도 있습니다. 하지만 실패 없이는 성장도 없습니다. 실패를 배움의 기회로 삼는 마음가짐이 중요합니다.

함께 성장하는 교사가 되어봐요!`,
  },
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    return { title: '글을 찾을 수 없습니다' }
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    notFound()
  }

  return <BlogPostContent post={post} />
}
