import { Image, Year } from '.';
import { Courses } from './Courses.types';
import { Jobs } from './Job.types';

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

export type ProjectProps = {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumb: string;
  language: string;
  topics: string;
  created: string;
  updated: string;
  created_at: string;
  updated_at: string;
  name: string;
  content: string;
  homepage: string;
};

export interface PropsProjectArr {
  projects: ProjectProps[];
}

export interface Projects {
  items: ProjectProps[];
  incomplete_results: false;
  total_count: number;
}

export interface LatestJobsArr {
  jobs: Jobs[];
}

export interface ProjectUID {
  project: ProjectProps;
}

export interface SkillArr {
  logo_skill: Image;
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
  skills: Skills;
  courses: Courses[];
  jobs: Jobs[];
}
