export interface CourseModule {
  title: string;
  topics: string[];
}

export interface CourseContent {
  fullTitle: string;
  duration: string;
  hours: string;
  instructor: string;
  area: string;
  audience: string;
  description: string;
  modality: string;
  modules: CourseModule[];
  requirements?: string;
  evaluation?: string;
}

export interface CoursePricing {
  installmentPrice: string;
  paymentFullUrl: string;
  paymentInstallmentUrl: string;
}

export interface Course {
  id: number;
  title: string;
  slug: string;
  category: string;
  price: string;
  track: 'ai' | 'geo' | 'data' | 'water';
  desc: string;
  externalLink: string;
  content?: CourseContent;
  pricing?: CoursePricing;
}

export interface Milestone {
  year: string;
  title: string;
  tool: string;
  desc: string;
}

export type FilterType = 'all' | 'ai' | 'geo' | 'data' | 'water';

export interface FilterOption {
  id: FilterType;
  label: string;
}

export interface Session {
  name: string;
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  courseIds: number[];
}

export interface SessionData {
  currentSession: Session;
  announcement: string;
  showBanner: boolean;
}