export interface Skill {
  id: number;
  name: string;
  proficiency?: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  date: string;
  githubLink?: string;
  demoLink?: string;
  image?: string;
}

export interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  location: string;
  date: string;
  score: string;
}

export interface Certification {
  id: number;
  name: string;
  provider: string;
  date?: string;
  link?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
