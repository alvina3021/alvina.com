export type PageId =
  | 'about'
  | 'experience'
  | 'education'
  | 'awards'
  | 'projects'
  | 'certifications'
  | 'contact';

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  iconName: 'github' | 'linkedin' | 'mail' | 'phone' | 'globe' | 'instagram' | 'twitter';
  handle: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 1 to 100
    experienceYears: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  locationType: 'On-site' | 'Remote' | 'Hybrid';
  employmentType: 'Full-time' | 'Contract' | 'Freelance' | 'Internship' | 'Part-time';
  period: {
    start: string;
    end: string;
    isCurrent?: boolean;
    duration: string;
  };
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  major: string;
  location: string;
  period: {
    start: string;
    end: string;
  };
  gpa?: string;
  gpaScale?: string;
  thesisTitle?: string;
  thesisDescription?: string;
  relevantCourses: string[];
  activitiesAndSocieties?: string[];
  honors?: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  month?: string;
  level: 'Internasional' | 'Nasional' | 'Regional' | 'Institusi';
  category: string;
  description: string;
  associatedWith?: string;
  certificateUrl?: string;
  proofBadge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: 'Web App' | 'Mobile App' | 'Backend API' | 'UI/UX Design' | 'Full Stack';
  featured: boolean;
  shortDescription: string;
  fullDescription: string;
  thumbnailUrl: string;
  previewImages: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  role: string;
  timeline: string;
  client?: string;
  keyFeatures: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issuerLogo?: string;
  issueDate: string;
  expirationDate?: string;
  isNeverExpires?: boolean;
  credentialId: string;
  credentialUrl: string;
  category: 'Web Development' | 'Cloud & DevOps' | 'Software Engineering' | 'Database' | 'AI & Data';
  skillsCovered: string[];
  description: string;
}

export interface ProfileData {
  name: string;
  preferredName: string;
  title: string;
  subTitle: string;
  bio: string;
  detailedBio: string[];
  email: string;
  phone: string;
  whatsappNumber: string;
  location: string;
  availability: 'Available for Hire' | 'Open for Freelance' | 'Busy';
  availabilityText: string;
  avatarUrl: string;
  yearsOfExperience: number;
  completedProjectsCount: number;
  satisfiedClientsCount: number;
  certificationsCount: number;
  socials: SocialLink[];
  coreValues: {
    title: string;
    description: string;
    icon: string;
  }[];
  skillCategories: SkillCategory[];
  experiences: ExperienceItem[];
  educations: EducationItem[];
  awards: AwardItem[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  faqs: {
    question: string;
    answer: string;
    category: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  category: 'Penawaran Projek' | 'Peluang Kerja / Rekrutmen' | 'Konsultasi Teknis' | 'Lainnya';
  message: string;
}
