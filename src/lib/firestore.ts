import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
  DocumentData,
} from 'firebase/firestore';
import { db } from './firebase';
import { Notice, ContactForm } from '@/types';

// Collection references
const noticesCollection = collection(db, 'notices');
const contactsCollection = collection(db, 'contacts');

// Notices CRUD
export async function getNotices(limitCount = 10): Promise<Notice[]> {
  try {
    const q = query(
      noticesCollection,
      orderBy('isPinned', 'desc'),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate(),
    })) as Notice[];
  } catch (error) {
    console.error('Error getting notices:', error);
    return [];
  }
}

export async function getNoticesByCategory(category: Notice['category']): Promise<Notice[]> {
  try {
    const q = query(
      noticesCollection,
      where('category', '==', category),
      orderBy('createdAt', 'desc')
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate(),
    })) as Notice[];
  } catch (error) {
    console.error('Error getting notices by category:', error);
    return [];
  }
}

export async function getNoticeById(id: string): Promise<Notice | null> {
  try {
    const docRef = doc(noticesCollection, id);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      return {
        id: snapshot.id,
        ...snapshot.data(),
        createdAt: snapshot.data().createdAt?.toDate(),
        updatedAt: snapshot.data().updatedAt?.toDate(),
      } as Notice;
    }
    return null;
  } catch (error) {
    console.error('Error getting notice:', error);
    return null;
  }
}

export async function createNotice(
  notice: Omit<Notice, 'id' | 'createdAt'>
): Promise<string | null> {
  try {
    const docRef = await addDoc(noticesCollection, {
      ...notice,
      createdAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating notice:', error);
    return null;
  }
}

export async function updateNotice(
  id: string,
  data: Partial<Omit<Notice, 'id' | 'createdAt'>>
): Promise<boolean> {
  try {
    const docRef = doc(noticesCollection, id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: Timestamp.now(),
    });
    return true;
  } catch (error) {
    console.error('Error updating notice:', error);
    return false;
  }
}

export async function deleteNotice(id: string): Promise<boolean> {
  try {
    const docRef = doc(noticesCollection, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error('Error deleting notice:', error);
    return false;
  }
}

// Contact Form
export async function submitContactForm(
  form: ContactForm
): Promise<string | null> {
  try {
    const docRef = await addDoc(contactsCollection, {
      ...form,
      createdAt: Timestamp.now(),
      status: 'pending',
    });
    return docRef.id;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return null;
  }
}

// Helper function to convert Firestore timestamp
export function convertTimestamp(timestamp: Timestamp | Date): Date {
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate();
  }
  return timestamp;
}
