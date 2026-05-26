export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string;
  tags: string[];
  imagePrompt: string;
  imageFilename: string;
  stats?: { label: string; value: string }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: number;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
