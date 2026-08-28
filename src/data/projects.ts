// 학습 사이트 목록 — 모든 내용은 각 프로젝트 저장소(README/docs/소스)에서 확인된 사실만 기재.
// 수치를 바꿀 땐 반드시 원본 저장소에서 근거를 재확인할 것.

/** 카탈로그 필터용 큰 묶음. subject 는 카드에 그대로 보이는 세부 과목명. */
export type SiteCategory = '수학' | '영어' | '국어·통합' | '미술·놀이';

export const SITE_CATEGORIES: SiteCategory[] = ['수학', '영어', '국어·통합', '미술·놀이'];

export interface LearningSite {
  slug: string;
  name: string;
  subject: string;
  category: SiteCategory;
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
    category: '미술·놀이',
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
    category: '미술·놀이',
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
    category: '영어',
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
    category: '영어',
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
    url: 'https://echotale.simssijjang-d79.workers.dev/',
  },
  {
    slug: 'seulgisem',
    name: '슬기셈',
    subject: '수학',
    category: '수학',
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
    url: 'https://word-e329c.web.app',
  },
  {
    slug: 'mathcastle',
    name: '수학 성 수호자',
    subject: '수학',
    category: '수학',
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
    slug: 'gugu',
    name: '구구성 수호대',
    subject: '수학 연산',
    category: '수학',
    tagline: '계산이 빨라질수록 내 군대가 강해진다',
    description:
      '숫자가 살아 있는 셈나라를 지키는 라인 디펜스입니다. 문제를 맞히면 셈력이 차오르고, 그 힘으로 셈지기를 불러내 전선을 밀어냅니다. 곱셈구구를 가운데 두고 1학년 한 자리 덧셈부터 3학년 나눗셈까지 다룹니다.',
    features: [
      '스테이지 무한 · 셈지기 24종 · 엉킴괴수 12종',
      '숫자패드로 직접 입력 — 찍기로는 뚫리지 않게',
      '틀린 문제는 엉킴 봉인으로 남아 다음 판에 다시',
      '로그인 없이 바로 · 기록은 기기에만 (주간 순위는 선택)',
    ],
    target: '초등 2~4학년',
    tech: ['TypeScript', 'Canvas 2D', 'Cloudflare Workers'],
    image: '/images/portfolio/gugu.webp',
    url: 'https://gugu-guardians.pages.dev/',
  },
  {
    slug: 'araharu',
    name: '아라하루',
    subject: '아침 학습',
    category: '국어·통합',
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
    url: 'https://araharu-ecp.pages.dev/',
  },
  {
    slug: 'numeroquest',
    name: '칸채움',
    subject: '스도쿠',
    category: '수학',
    tagline: '매일 새로운 도전, 매일 더 강해지는 두뇌',
    description:
      '가로·세로·상자에 숫자를 겹치지 않게 채우는 스도쿠입니다. 생성기가 답이 하나뿐인 판만 내보내기 때문에 찍어서 맞는 칸이 없고, 난이도는 "필요한 풀이 기법"으로 갈라 놓아 위 단계가 실제로 더 깊은 생각을 요구합니다.',
    features: [
      '난이도 6단계 — 입문 · 쉬움 · 보통 · 어려움 · 전문가 · 마스터',
      '오늘의 도전 · 주간 미션 · 연속 기록(스트릭)',
      '두뇌 점수와 업적 40종',
      '퍼즐을 A4로 인쇄해 종이로도 풀기',
    ],
    target: '초등 고학년 · 어른',
    tech: ['Next.js', 'Cloudflare Pages', 'D1'],
    image: '/images/portfolio/numeroquest.webp',
    url: 'https://numero-quest.pages.dev',
  },
  {
    slug: 'typingverse',
    name: '타이핑버스 TypingVerse',
    subject: '타자',
    category: '국어·통합',
    tagline: '손끝으로 여는 무한한 세계',
    description:
      '한글·영문 타자 연습에 성장 요소를 얹었습니다. 정확도는 시도 단위로 세기 때문에 오타를 지우고 다시 쳐도 100%로 세탁되지 않고, 자주 틀리는 키를 모아 맞춤 드릴을 만들어 줍니다.',
    features: [
      '연습 7종 · 테스트 3종 · 타자 게임 6종',
      '한글 오토마타 기반 손가락 매핑 · 취약 키 드릴',
      'XP · 레벨 · 스트릭 · 일일 퀘스트 · 리그',
      '순위 점수는 서버가 검증 — 자동 입력 차단',
    ],
    target: '초등 전 학년',
    tech: ['Next.js', 'Cloudflare Pages Functions', 'D1'],
    image: '/images/portfolio/typingverse.webp',
    url: 'https://typingverse.pages.dev',
  },
  {
    slug: 'chromafall',
    name: '크로마폴 ChromaFall',
    subject: '색채 퍼즐',
    category: '미술·놀이',
    tagline: '색을 섞어 터뜨리는 낙하 퍼즐',
    description:
      '떨어지는 블록의 색을 섞어 같은 색을 만들고 연쇄로 터뜨립니다. 수학 모드에서는 융합 조건이 색이 아니라 값이라, 1/2 · 0.5 · 50%가 한 덩어리로 터집니다.',
    features: [
      '모드 7종 — 클래식 · 수학 · 퍼즐 · 젠 · 일일 챌린지 · 서바이벌 · 챌린지',
      '수학 모드 — 분수 · 소수 · 백분율을 같은 값끼리',
      '일일 챌린지는 매일 같은 판으로 3분 승부',
      '젠 모드는 게임오버 없이 편안하게',
    ],
    target: '초등 3~6학년',
    tech: ['React', 'TypeScript', 'Vite'],
    image: '/images/portfolio/chromafall.webp',
    url: 'https://chromafall.pages.dev/',
  },
  {
    slug: 'keywordschool',
    name: '열쇠말 학교',
    subject: '학습 방탈출',
    category: '국어·통합',
    tagline: '배움이 곧 열쇠',
    description:
      'ZEP 풍 2D 탑다운 방탈출입니다. 문제를 풀어야 자물쇠가 열리고, 여섯 개의 열쇠말을 모으면 정문이 열립니다. 조각 4개를 모으기 전에는 자물쇠 입력 자체가 잠겨 완전탐색으로 통과할 수 없습니다.',
    features: [
      '문항 2,300여 개 — 수학 · 국어 · 과학 · 사회',
      '학년·학기를 고르면 그때까지 배운 범위에서만 출제',
      '6번 틀리면 해설과 함께 조각 지급 — 누구도 갇히지 않는다',
      '이름·학교·계정 없음 · 진행은 기기 안에만',
    ],
    target: '초등 3~6학년',
    tech: ['Phaser 3', 'TypeScript', 'Vite'],
    image: '/images/portfolio/keywordschool.webp',
    url: 'https://yeolsoemal-school.vercel.app/',
  },
  {
    slug: 'kongkong',
    name: '콩콩배구',
    subject: '캐주얼 게임',
    category: '미술·놀이',
    tagline: '3개 키만 알면 되는데, 옆사람과 30분을 싸우게 되는 배구',
    description:
      '이동·점프·때리기 세 가지만 알면 시작하는 2D 물리 배구입니다. 스파이크 각도는 그 순간 누르고 있는 이동 방향이 정하고, 타구를 이어가면 필살 게이지가 찹니다. 한 대에서 둘이 하거나, 방 코드를 나눠 다른 컴퓨터끼리 붙을 수 있습니다.',
    features: [
      '1인 플레이 · 2인 대전 · 방 코드 4글자 온라인 대전',
      '오리지널 캐릭터 4종 · 난이도 3단계',
      '목표 점수와 공 중력까지 고르는 경기 규칙',
      '스파이크 가이드는 색이 아니라 선 모양과 기호로도 구분',
    ],
    target: '전 연령',
    tech: ['JavaScript', 'Canvas 2D', 'Cloudflare Pages'],
    image: '/images/portfolio/kongkong.webp',
    url: 'https://kongkong-volley.pages.dev/',
  },
];
