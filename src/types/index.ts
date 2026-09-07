export interface LocalizedString {
  en: string;
  th: string;
}

export interface SocialLinks {
  github: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  facebook?: string;
}

export interface SocialItem {
  id: string;
  label?: string;
  url: string;
  icon: string;
  title: string;
}

export interface ProfileImage {
  id: string;
  src: string;
  alt: LocalizedString;
  caption?: LocalizedString;
  isPrimary?: boolean;
}

export interface Profile {
  name: string;
  title: LocalizedString;
  avatar: string;
  profileImages: ProfileImage[];
  bio: LocalizedString;
  subBio: LocalizedString;
  email: string;
  phone: string;
  socials: SocialLinks;
  availability: {
    enabled: boolean;
    en: string;
    th: string;
  };
  typingWords?: {
    en: string[];
    th: string[];
  };
  heroBadges?: Array<{
    label: string;
    severity: string;
  }>;
}

export interface ExperienceHighlight {
  text: LocalizedString;
}

export interface Experience {
  company: string;
  role: LocalizedString;
  position: string;
  duration: LocalizedString;
  location: LocalizedString;
  description: LocalizedString;
  highlights: ExperienceHighlight[];
  technologies: string[];
  isConfidential: boolean;
  confidentialityNote?: LocalizedString;
  logo?: string;
  companyUrl?: string;
}

export type ProjectCategory = 'featured' | 'additional';

export type FeatureStatus =
  | 'confirmed'
  | 'implemented'
  | 'in-development'
  | 'planned';

export interface ProjectFeature {
  text: LocalizedString;
  status?: FeatureStatus;
}

export interface ProjectContribution {
  area: LocalizedString;
  details: LocalizedString[];
}

export type ProjectLinkType =
  | "repository"
  | "team-repository"
  | "showcase"
  | "live-demo"
  | "video";

export interface ProjectLink {
  type: ProjectLinkType;
  label: LocalizedString;
  url: string;
  isExternal: boolean;
  ownershipNote?: LocalizedString;
}

export interface ProjectGalleryImage {
  id: string;
  src: string;
  isPlaceholder?: boolean;
  alt: LocalizedString;
  caption?: LocalizedString;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: LocalizedString;
  description: LocalizedString;
  thumbnail: string;
  category: ProjectCategory;
  tags: string[];
  role: LocalizedString;
  ownership?: LocalizedString;
  period: LocalizedString;
  status: LocalizedString;
  contributions: ProjectContribution[];
  features: ProjectFeature[];
  exclusions?: LocalizedString[];
  links: ProjectLink[];
  technologies: string[];
  confidentialityNote?: LocalizedString;
  gallery?: ProjectGalleryImage[];
}

export type SkillTier = 'core' | 'project' | 'familiarity';

export interface SkillCategory {
  tier: SkillTier;
  label: LocalizedString;
  description: LocalizedString;
  items: string[];
}

export interface Education {
  institution: string;
  degree: LocalizedString;
  duration: LocalizedString;
  activities: LocalizedString[];
  logo?: string;
  institutionUrl?: string;
}

export interface SoftSkill {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  icon: any;
}

export type WaypointCategory = "academic" | "internship" | "professional";
export type WaypointStatus = "completed" | "active";

export interface JourneyWaypoint {
  id: string;
  code: string; // e.g., "WP-01", "WP-02", "WP-03"
  category: WaypointCategory;
  status: WaypointStatus;
  organization: string;
  shortName?: string;
  role: LocalizedString;
  period: LocalizedString;
  location: LocalizedString;
  description: LocalizedString;
  highlights?: Array<{ text: LocalizedString }>;
  technologies?: string[];
  logo?: string;
  organizationUrl?: string;
  isConfidential?: boolean;
  confidentialityNote?: LocalizedString;
  coCurricular?: LocalizedString[];
}

