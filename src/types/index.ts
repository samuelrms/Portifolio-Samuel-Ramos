export interface ProjectProps {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumb: string;
}

export interface PropsProjectArr {
  projects: ProjectProps[];
}

export interface ProjectUID {
  project: ProjectProps;
}
