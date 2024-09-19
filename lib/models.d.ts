export interface ArticleType {
  id: number;
  title: string;
  slug: string;
  image: string | null;
  alt_text: string | null;
  category: string | null;
  location: string | null;
  published: Date;
  // content: string[] | null;
  content: unknown;
  read_time: number | null;
}

export interface OpeningType {
  id: number;
  title: string;
  location: string | null;
  type: "Full-time" | "Part-time" | "Remote" | "Contract" | "Internship";
  timezone: "UTC" | "EST" | "PST" | null;
  published: Date;
  description: string | null;
  clearance_required: boolean;
  is_urgent: boolean;
}

export interface FAQType {
  id: number;
  question: string;
  answer: string;
  keywords: string[] | null;
}
