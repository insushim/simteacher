import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getAuth, signInAnonymously, type Auth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Lazy init — 빌드(prerender) 시점에 env 없이 모듈이 로드되어도 크래시하지 않도록
// 실제 사용(문의 전송) 순간에만 초기화한다.
let app: FirebaseApp | null = null;
let db: Firestore | null = null;

export function getDb(): Firestore {
  if (!firebaseConfig.apiKey) {
    // env 미설정 시 조용한 실패 대신 명시적 에러 (fail-fast)
    throw new Error('Firebase 환경변수(NEXT_PUBLIC_FIREBASE_*)가 설정되지 않았습니다.');
  }
  if (!db) {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getFirestore(app);
  }
  return db;
}

// ── 익명 인증 ───────────────────────────────────────────────────────────────
// 방명록은 로그인 없이 쓰지만, "본인 글만 지울 수 있게" 하려면 규칙이 검사할 수 있는
// 신원이 하나 필요하다. Firebase 익명 인증은 가입·개인정보 없이 브라우저마다 uid 하나를
// 만들어 주고, 그 uid 는 Firestore 규칙에서 위조할 수 없다.
// (4자리 비밀번호 방식은 Firestore 규칙이 삭제 요청의 비밀번호를 검사할 방법이 없어
//  사실상 아무나 지울 수 있게 된다 — 그래서 uid 방식으로 간다.)
let auth: Auth | null = null
let uidPromise: Promise<string> | null = null

export function getAuthClient(): Auth {
  if (!auth) auth = getAuth(getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0])
  return auth
}

/** 브라우저마다 고정된 익명 uid. 여러 번 불러도 로그인은 한 번만 일어난다. */
export function ensureUid(): Promise<string> {
  if (uidPromise) return uidPromise
  uidPromise = (async () => {
    getDb() // env 검증 + app 초기화
    const a = getAuthClient()
    if (a.currentUser) return a.currentUser.uid
    const cred = await signInAnonymously(a)
    return cred.user.uid
  })()
  return uidPromise
}
