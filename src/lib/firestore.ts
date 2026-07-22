import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { getDb } from './firebase';
import { ContactForm } from '@/types';

// Contact Form — contacts 컬렉션에 저장 (rules: 필드·크기 검증 후 create만 허용)
export async function submitContactForm(
  form: ContactForm
): Promise<string | null> {
  try {
    const write = addDoc(collection(getDb(), 'contacts'), {
      ...form,
      createdAt: Timestamp.now(),
      status: 'pending',
    });
    // 오프라인이면 addDoc이 무한 대기(offline queue) → 10초 타임아웃 가드
    const timeout = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), 10_000)
    );
    const docRef = await Promise.race([write, timeout]);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return null;
  }
}
