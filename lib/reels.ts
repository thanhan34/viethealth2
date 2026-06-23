import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
  type DocumentData,
} from "firebase/firestore";
import { getFirebaseDb, getFirebaseStatus, REAL_STORIES_REELS_COLLECTION } from "@/lib/firebase";
import type { ReelInput, ReelItem } from "@/types/reel";

const nowIso = () => new Date().toISOString();

export function isValidFacebookReelUrl(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "").toLowerCase();
    const path = parsed.pathname.toLowerCase();

    return (
      (host === "facebook.com" && (path.startsWith("/reel/") || path.startsWith("/watch/"))) ||
      (host === "fb.watch" && path.length > 1)
    );
  } catch {
    return false;
  }
}

export function createFacebookEmbedUrl(facebookUrl: string) {
  return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(facebookUrl)}&show_text=false&width=360`;
}

export function validateReelInput(input: Partial<ReelInput>) {
  const title = input.title?.trim();
  const facebookUrl = input.facebookUrl?.trim();

  if (!title) return "Vui lòng nhập tiêu đề.";
  if (!facebookUrl) return "Vui lòng nhập link Facebook Reel.";
  if (!isValidFacebookReelUrl(facebookUrl)) {
    return "Link không hợp lệ. Chỉ chấp nhận facebook.com/reel/, facebook.com/watch/ hoặc fb.watch/.";
  }

  return null;
}

export const demoReels: ReelItem[] = [
  {
    id: "demo-anh-hung",
    title: "Anh Hùng",
    subtitle: "Phục hồi sau tai nạn giao thông",
    facebookUrl: "https://www.facebook.com/reel/1234567890",
    embedUrl: createFacebookEmbedUrl("https://www.facebook.com/reel/1234567890"),
    duration: "1:28",
    order: 1,
    isActive: true,
    createdAt: nowIso(),
    updatedAt: nowIso(),
  },
  {
    id: "demo-co-lan",
    title: "Cô Lan",
    subtitle: "Tập đi lại với chân giả",
    facebookUrl: "https://www.facebook.com/watch/1234567891",
    embedUrl: createFacebookEmbedUrl("https://www.facebook.com/watch/1234567891"),
    duration: "1:36",
    order: 2,
    isActive: true,
    createdAt: nowIso(),
    updatedAt: nowIso(),
  },
  {
    id: "demo-anh-duc",
    title: "Anh Đức",
    subtitle: "Phục hồi vận động",
    facebookUrl: "https://fb.watch/abcdef1234/",
    embedUrl: createFacebookEmbedUrl("https://fb.watch/abcdef1234/"),
    duration: "1:42",
    order: 3,
    isActive: true,
    createdAt: nowIso(),
    updatedAt: nowIso(),
  },
];

let memoryReels: ReelItem[] = [...demoReels];

function sorted(reels: ReelItem[]) {
  return [...reels].sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

function toReelItem(id: string, data: DocumentData): ReelItem {
  return {
    id,
    title: data.title ?? "",
    subtitle: data.subtitle ?? "",
    facebookUrl: data.facebookUrl ?? "",
    embedUrl: data.embedUrl ?? "",
    duration: data.duration || undefined,
    order: Number(data.order ?? 0),
    isActive: Boolean(data.isActive),
    createdAt: data.createdAt ?? "",
    updatedAt: data.updatedAt ?? "",
  };
}

function reelsCollection() {
  const db = getFirebaseDb();
  return db ? collection(db, REAL_STORIES_REELS_COLLECTION) : null;
}

export async function getReels(options: { activeOnly?: boolean } = {}) {
  const firebaseStatus = getFirebaseStatus();

  if (firebaseStatus.enabled) {
    const collectionRef = reelsCollection();
    if (!collectionRef) return sorted(options.activeOnly ? demoReels.filter((reel) => reel.isActive) : demoReels);

    // Avoid requiring a Firestore composite index for `where(isActive) + orderBy(order)`.
    // The collection is expected to be small for homepage reels, so we filter/sort in code.
    const snapshot = await getDocs(collectionRef);
    const reels = snapshot.docs.map((item) => toReelItem(item.id, item.data()));
    return sorted(options.activeOnly ? reels.filter((reel) => reel.isActive) : reels);
  }

  // Firestore integration hook: when Firebase is configured, replace this
  // in-memory branch with CRUD against collection `real_stories_reels`.
  if (!firebaseStatus.enabled) {
    const source = memoryReels.length ? memoryReels : demoReels;
    return sorted(options.activeOnly ? source.filter((reel) => reel.isActive) : source);
  }

  return [] satisfies ReelItem[];
}

export async function createReel(input: ReelInput) {
  const error = validateReelInput(input);
  if (error) throw new Error(error);

  const facebookUrl = input.facebookUrl.trim();
  const timestamp = nowIso();
  const payload = {
    title: input.title.trim(),
    subtitle: input.subtitle?.trim() ?? "",
    facebookUrl,
    embedUrl: createFacebookEmbedUrl(facebookUrl),
    duration: input.duration?.trim() || null,
    order: Number(input.order ?? memoryReels.length + 1),
    isActive: input.isActive ?? true,
  };

  const firebaseStatus = getFirebaseStatus();
  if (firebaseStatus.enabled) {
    const collectionRef = reelsCollection();
    if (!collectionRef) throw new Error("Firebase chưa được cấu hình đúng.");

    const docRef = await addDoc(collectionRef, {
      ...payload,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    const savedDoc = await getDoc(docRef);
    return toReelItem(savedDoc.id, savedDoc.data() ?? payload);
  }

  const reel: ReelItem = {
    id: crypto.randomUUID(),
    ...payload,
    duration: payload.duration || undefined,
    createdAt: timestamp,
    updatedAt: timestamp,
  };

  memoryReels = sorted([...memoryReels.filter((item) => !item.id.startsWith("demo-")), reel]);
  return reel;
}

export async function updateReel(id: string, input: Partial<ReelInput>) {
  const firebaseStatus = getFirebaseStatus();

  if (firebaseStatus.enabled) {
    const db = getFirebaseDb();
    if (!db) throw new Error("Firebase chưa được cấu hình đúng.");

    const docRef = doc(db, REAL_STORIES_REELS_COLLECTION, id);
    const currentDoc = await getDoc(docRef);
    if (!currentDoc.exists()) throw new Error("Không tìm thấy reel cần cập nhật.");

    const current = toReelItem(currentDoc.id, currentDoc.data());
    const nextFacebookUrl = input.facebookUrl?.trim() ?? current.facebookUrl;
    const error = validateReelInput({
      title: input.title ?? current.title,
      facebookUrl: nextFacebookUrl,
    });
    if (error) throw new Error(error);

    const patch = {
      title: input.title?.trim() ?? current.title,
      subtitle: input.subtitle?.trim() ?? current.subtitle,
      facebookUrl: nextFacebookUrl,
      embedUrl: nextFacebookUrl !== current.facebookUrl ? createFacebookEmbedUrl(nextFacebookUrl) : current.embedUrl,
      duration: input.duration === undefined ? current.duration || null : input.duration.trim() || null,
      order: input.order === undefined ? current.order : Number(input.order),
      isActive: input.isActive === undefined ? current.isActive : Boolean(input.isActive),
      updatedAt: serverTimestamp(),
    };

    await updateDoc(docRef, patch);
    const updatedDoc = await getDoc(docRef);
    return toReelItem(updatedDoc.id, updatedDoc.data() ?? patch);
  }

  const current = memoryReels.find((reel) => reel.id === id);
  if (!current) throw new Error("Không tìm thấy reel cần cập nhật.");

  const nextFacebookUrl = input.facebookUrl?.trim() ?? current.facebookUrl;
  const error = validateReelInput({
    title: input.title ?? current.title,
    facebookUrl: nextFacebookUrl,
  });
  if (error) throw new Error(error);

  const updated: ReelItem = {
    ...current,
    title: input.title?.trim() ?? current.title,
    subtitle: input.subtitle?.trim() ?? current.subtitle,
    facebookUrl: nextFacebookUrl,
    embedUrl: nextFacebookUrl !== current.facebookUrl ? createFacebookEmbedUrl(nextFacebookUrl) : current.embedUrl,
    duration: input.duration === undefined ? current.duration : input.duration.trim() || undefined,
    order: input.order === undefined ? current.order : Number(input.order),
    isActive: input.isActive === undefined ? current.isActive : Boolean(input.isActive),
    updatedAt: nowIso(),
  };

  memoryReels = sorted(memoryReels.map((reel) => (reel.id === id ? updated : reel)));
  return updated;
}

export async function deleteReel(id: string) {
  const firebaseStatus = getFirebaseStatus();

  if (firebaseStatus.enabled) {
    const db = getFirebaseDb();
    if (!db) throw new Error("Firebase chưa được cấu hình đúng.");

    const docRef = doc(db, REAL_STORIES_REELS_COLLECTION, id);
    const currentDoc = await getDoc(docRef);
    if (!currentDoc.exists()) throw new Error("Không tìm thấy reel cần xóa.");

    await deleteDoc(docRef);
    return { ok: true };
  }

  const exists = memoryReels.some((reel) => reel.id === id);
  if (!exists) throw new Error("Không tìm thấy reel cần xóa.");
  memoryReels = memoryReels.filter((reel) => reel.id !== id);
  return { ok: true };
}

export function isAdminPasswordValid(password: string | null) {
  const configuredPassword = process.env.ADMIN_REELS_PASSWORD || "your-password-here";
  return Boolean(password && password === configuredPassword);
}
