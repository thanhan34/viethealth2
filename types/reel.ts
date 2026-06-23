export type FirestoreTimestampLike = {
  seconds?: number;
  nanoseconds?: number;
} | string | Date;

export type ReelItem = {
  id: string;
  title: string;
  subtitle: string;
  facebookUrl: string;
  embedUrl: string;
  duration?: string;
  order: number;
  isActive: boolean;
  createdAt: FirestoreTimestampLike;
  updatedAt: FirestoreTimestampLike;
};

export type ReelInput = {
  title: string;
  subtitle?: string;
  facebookUrl: string;
  duration?: string;
  order?: number;
  isActive?: boolean;
};
