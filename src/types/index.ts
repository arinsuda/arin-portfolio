export interface SocialLinks {
  github: string;
  linkedin?: string;
}

export interface Profile {
  name: string;
  title: string;
  avatar: string;
  bio: string;
  subBio: string;
  email: string;
  socials: SocialLinks;
}

export interface ExperienceHighlight {
  text: string;
}

export interface Experience {
  company: string;
  role: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  highlights: ExperienceHighlight[];
  technologies: string[];
  isConfidential: boolean;
  confidentialityNote?: string;
}

export type ProjectCategory = 'featured' | 'additional';

export type FeatureStatus =
  | 'confirmed'
  | 'implemented'
  | 'in-development'
  | 'planned';

export interface ProjectFeature {
  text: string;
  status?: FeatureStatus;
}

export interface ProjectContribution {
  area: string;
  details: string[];
}

export type ProjectLinkType =
  | "repository"
  | "team-repository"
  | "showcase"
  | "live-demo"
  | "video";

export interface ProjectLink {
  type: ProjectLinkType;
  label: string;
  url: string;
  isExternal: boolean;
  ownershipNote?: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  category: ProjectCategory;
  tags: string[];
  role: string;
  ownership?: string;
  period: string;
  status: string;
  contributions: ProjectContribution[];
  features: ProjectFeature[];
  exclusions?: string[];
  links: ProjectLink[];
  technologies: string[];
  confidentialityNote?: string;
}

export type SkillTier = 'core' | 'project' | 'familiarity';

export interface SkillCategory {
  tier: SkillTier;
  label: string;
  description: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  activities: string[];
}
