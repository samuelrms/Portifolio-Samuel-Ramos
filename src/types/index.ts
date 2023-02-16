export type Year = number | string;

export interface ProjectProps {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumb: string;
}

export interface PresentationArea {
  comment: string;
  title: string;
  open: string;
  label_function: string;
  content_function: string;
  label_level: string;
  content_level: string;
  close: string;
}

export interface PresentationSkills {
  title: string;
  open: string;
  label_tech_stack: string;
  content_tech_stack: string;
  label_frameworks: string;
  content_frameworks: string;
  close: string;
}

export interface About {
  open: string;
  title: string;
  label: string;
  resume: string;
  close: string;
}

export interface HomeHero {
  img: string;
  title: string;
  subtitle: string;
  presentation_area: PresentationArea[];
  presentation_skills: PresentationSkills[];
  about: About[];
}

export interface WorkExperience {
  entry_year: Year;
  exit_year: Year;
  function: string;
  description_function: string;
}

export interface Experience {
  title: string;
  subtitle: string;
  work_experience: WorkExperience[];
}

export interface PropsProjectArr {
  projects: ProjectProps[];
}

export interface ProjectUID {
  project: ProjectProps;
}

export interface LogoSkill {
  dimensions: { width: number; height: number };
  alt: null;
  copyright: null;
  url: string;
}

export interface SkillArr {
  logo_skill: LogoSkill;
  name_skill: string;
}

export interface Skills {
  skills_title: string;
  skills: SkillArr[];
}

export interface PropsHome {
  projects: ProjectProps[];
  homeHero: HomeHero;
  experience: Experience;
  skills?: Skills;
}
