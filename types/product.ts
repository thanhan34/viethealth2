export type ProductFeatureIcon =
  | "Activity"
  | "Footprints"
  | "Hand"
  | "Bone"
  | "Settings"
  | "Wrench"
  | "Star"
  | "Users"
  | "Clock"
  | "PackageCheck"
  | "ShieldCheck";

export type ProductFeature = {
  title: string;
  description: string;
  icon?: ProductFeatureIcon;
};

export type Product = {
  slug: string;
  group: string;
  title: string;
  shortName: string;
  category: string;
  summary: string;
  longDescription: string[];
  suitableFor: string;
  image: string;
  features: ProductFeature[];
};