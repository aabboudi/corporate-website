import { opening_enums } from "@/drizzle/schema";

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

type EnumDepartment = typeof opening_enums.departments[number];
type EnumOption = typeof opening_enums.options[number];
type EnumTimezone = typeof opening_enums.timezones[number];
type EnumCurrency = typeof opening_enums.currencies[number];
type EnumSalaryFrq = typeof opening_enums.salary_frq[number];

export interface OpeningType {
  id: number;
  title: string;
  department: EnumDepartment;
  location: string | null;
  option: EnumOption;
  timezone: EnumTimezone;
  published: Date;
  description: string | null;
  clearance_required: boolean;
  is_urgent: boolean;
  salary_min: number;
  salary_max: number;
  salary_cur: EnumCurrency;
  salary_frq: EnumSalaryFrq;
}

export interface FAQType {
  id: number;
  question: string;
  answer: string;
  keywords: string[] | null;
}
