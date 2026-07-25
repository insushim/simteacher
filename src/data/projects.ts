// 학습 사이트 목록 — 모든 내용은 각 프로젝트 저장소(README/docs/소스)에서 확인된 사실만 기재.
// 수치를 바꿀 땐 반드시 원본 저장소에서 근거를 재확인할 것.

export interface LearningSite {
  slug: string;
  name: string;
  subject: string;
  tagline: string;
  description: string;
  features: string[];
  target: string;
  tech: string[];
  image: string;
  /** 공개 링크. 비공개(운영 중이라 링크 미공개)면 undefined */
  url?: string;
}

export interface TeacherTool {
  slug: string;
  name: string;
  platform: string;
  tagline: string;
  description: string;
  features: string[];
  tech: string[];
  image: string;
  /** 다운로드/실행 링크 */
  url?: string;
  urlLabel?: string;
}

// 선생님을 위한 프로그램
export const teacherTools: TeacherTool[] = [
  {
    slug: 'schooldesk',
    name: '스쿨데스크 SchoolDesk',
    platform: 'Windows 데스크톱',
    tagline: '선생님의 책상 위, 가장 똑똑한 도우미',
    description:
      '시간표·할일·D-Day·급식·학급 체크를 바탕화면 위젯으로 띄워 두는 교사용 프로그램입니다. 위젯은 바탕화면에 고정돼 클릭이 통과하니, 일하다 고개만 들면 오늘 할 일이 보입니다.',
    features: [
      '위젯 20종 — 시간표·할일·D-Day·급식·습관 등',
      '학사일정 파일(HWP·엑셀·워드) 자동 불러오기',
      '학생 기록은 암호화 + 변조 탐지 잠금',
      '데이터는 내 컴퓨터에 저장 · 광고 없음 · 무료',
    ],
    tech: ['Electron', 'React', 'SQLite'],
    image: '/images/portfolio/schooldesk.webp',
    url: 'https://github.com/iwschooldesk-app/SchoolDesk/releases/latest/download/SchoolDesk-Setup.zip',
    urlLabel: 'Windows용 내려받기',
  },
  {
    slug: 'ddobak',
    name: '또박또박',
    platform: '안드로이드 · 웹',
    tagline: '또박또박 적는 나의 기록',
    description:
      '할일·메모·일정·습관·목표·루틴을 한 곳에 적는 기록 앱입니다. 스쿨데스크와 계정을 연결하면 교실 컴퓨터에 적어둔 할일을 퇴근길 휴대폰에서 이어서 볼 수 있습니다.',
    features: [
      '할일 · 메모 · 일정 · 습관 · 목표 · 루틴',
      '스쿨데스크와 계정 연동 (선택)',
      '할일·메모·일정은 종단간 암호화',
      '학생 기록은 동기화하지 않음',
    ],
    tech: ['React Native', 'Next.js', 'Cloudflare D1'],
    image: '/images/portfolio/ddobak.webp',
    url: 'https://ddobak.simssijjang-d79.workers.dev',
    urlLabel: '안드로이드 앱 내려받기',
  },
];

export const learningSites: LearningSite[] = [
  {
    slug: 'arton',
    name: '아트온 ArtON',
    subject: '미술',
    tagline: '로그인 없이 바로 색칠하는 도안 라이브러리',
    description:
      'AI로 직접 만든 색칠 도안을 주제·학년별로 골라 화면에서 칠하거나 A4로 인쇄해 쓰는 사이트입니다. 선을 SVG 벡터로 뽑아 크게 인쇄해도 계단 현상이 없고, 결정론 게이트로 도안 품질을 자동 검수합니다.',
    features: [
      '도안 1,300여 장 · 29개 테마',
      '저·중·고학년 난이도 3단계',
      '내 사진을 도안으로 변환',
      '저작권 만료 명화 포함',
    ],
    target: '초등 전 학년',
    tech: ['Node.js 생성 파이프라인', 'SVG 벡터화', 'Firebase Hosting'],
    image: '/images/portfolio/arton.webp',
    url: 'https://arton.simssijjang.workers.dev/coloring',
  },
  {
    slug: 'papersky',
    name: '종이하늘',
    subject: '논리 퍼즐',
    tagline: '종이비행기를 날려 보드를 비우는 원터치 퍼즐',
    description:
      '경로가 뚫린 비행기만 날 수 있어 "지금 뺄 수 있는 것"을 찾는 게 재미의 핵심입니다. 레벨을 역순으로 배치해 생성하기 때문에 무한히 만들어도 100% 풀 수 있고, 실패도 재시작도 없는 힐링 퍼즐입니다.',
    features: [
      '레벨 자동 생성 — 무한 플레이',
      '5의 배수 레벨은 그림이 되는 도안 29종',
      '엽서 수집 · 업적 18종 · 데일리 퍼즐',
      '색약 모드 등 접근성 지원',
    ],
    target: '전 연령',
    tech: ['TypeScript', 'Canvas 2D', 'Vite'],
    image: '/images/portfolio/papersky.webp',
    url: 'https://papersky.pages.dev/',
  },
  {
    slug: 'vocaworm',
    name: '보카웜 디펜스',
    subject: '영어 단어',
    tagline: '단어를 맞히면 포탄이 나가는 학습 디펜스 게임',
    description:
      '영단어 퀴즈로 거대 단어웜을 막아내는 게임입니다. 자동 공격은 보조일 뿐이라 문제를 풀지 않으면 절대 클리어할 수 없고, 틀린 단어는 황금 보스 마디로 다시 나타나 자연스럽게 복습됩니다.',
    features: [
      '교육과정 어휘 960개 (학년별 240개)',
      '오답 단어 재출현 — 간격 반복을 게임으로',
      '콤보 · 피버 · 궁극기 · 무한 원정',
      '찍기로는 못 깨는 학습 게이트 (테스트로 고정)',
    ],
    target: '초등 3~6학년',
    tech: ['Phaser 3', 'TypeScript', 'PWA'],
    image: '/images/portfolio/vocaworm.webp',
    url: 'https://vocaworm-defense.vercel.app/',
  },
  {
    slug: 'echotale',
    name: '에코테일 EchoTale',
    subject: '영어 읽기',
    tagline: 'AI가 읽어주는 단계별 영어 그림책',
    description:
      '읽고(Read) · 듣고(Hear) · 따라 하고(Echo) · 말하는(Speak) 셰도잉 루프로 영어 그림책을 읽습니다. 교사의 발음 부담 없이, 아이가 자기 수준을 골라 계정 없이 바로 시작할 수 있습니다.',
    features: [
      '단계별 콘텐츠 353권 (그림책 · 생활영어 · 신화)',
      'CEFR preA1부터 단계별 라이브러리',
      'Leitner 간격 반복 단어장',
      '삽화·음성 모두 AI로 제작',
    ],
    target: '초등 영어 학습자',
    tech: ['Next.js', 'Cloudflare Workers', 'D1'],
    image: '/images/portfolio/echotale.webp',
  },
  {
    slug: 'seulgisem',
    name: '슬기셈',
    subject: '수학',
    tagline: '내 수준에 맞춰 매일 10문제씩',
    description:
      '배치고사로 지금 수준을 찾고, 매일 10문제 미션을 풉니다. 성공률에 따라 다음 미션의 난이도와 복습 비율이 자동으로 조정되고, 막히면 선수 개념을 디딤돌로 먼저 보충합니다.',
    features: [
      '수준 진단 배치고사',
      '매일 10문제 적응형 미션',
      '막히면 선수 개념 자동 보충',
      '성장 대시보드',
    ],
    target: '초등 1~6학년',
    tech: ['Next.js', 'React', 'Firebase'],
    image: '/images/portfolio/seulgisem.webp',
  },
  {
    slug: 'mathcastle',
    name: '수학 성 수호자',
    subject: '수학',
    tagline: '문제를 맞혀 마법을 쏘는 수학 타워 디펜스',
    description:
      '학년·학기를 고르면 그 학기 교육과정 안에서만 문제가 나옵니다. 마법사를 움직여 타워를 세우고 밀려오는 몬스터를 막는데, 틀리면 한 줄 풀이 힌트가 뜨고 그 문제는 맞힐 때까지 3·7·15웨이브 뒤에 다시 나옵니다.',
    features: [
      '3-1부터 6-2까지 8개 학기 · 문제 약 2만 문항',
      '오답 풀이 힌트 + 간격 반복 재출제 · 오답노트',
      '타워 23종 · 몬스터 34종 · 마법 10종',
      '일간 · 주간 · 월간 랭킹 · 업적 19종',
    ],
    target: '초등 3~6학년',
    tech: ['JavaScript', 'Canvas 2D', 'Cloudflare Pages · D1'],
    image: '/images/portfolio/mathcastle.webp',
    url: 'https://mathcastle.pages.dev/',
  },
  {
    slug: 'araharu',
    name: '아라하루',
    subject: '아침 학습',
    tagline: '매일 아침, 알아가는 즐거움',
    description:
      "'알아가다'의 순우리말 '아라'와 '하루'를 합친 이름입니다. 학년·학기에 맞춘 하루치 학습 세트를 매일 자동으로 만들어, 아침 시간에 여러 과목을 조금씩 다룹니다.",
    features: [
      '학년·학기별 일일 세트 자동 생성',
      '수학 · 글쓰기 · 맞춤법 · 어휘 · 한자 · 영어 · 독해 등',
      '출제 이력 기반 중복 방지',
      '2022 개정 교육과정 기준',
    ],
    target: '초등 1~6학년',
    tech: ['Next.js', 'Cloudflare Pages', 'D1'],
    image: '/images/portfolio/araharu.webp',
  },
];
