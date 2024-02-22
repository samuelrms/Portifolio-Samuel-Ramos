import { Image } from '.';

export interface Resume {
  type: string;
  text: string;
  spans: {
    start: number;
    end: number;
    type: string;
  }[];
}

export interface Experiences {
  uid: string;
  title: string;
  type: string;
  link_enterprise: string;
  thumb: Image;
  route: string;
  enterprise: string;
  entry_year: string;
  exit_year: string;
  function: string;
  description_function: Resume[];
}

export interface ExperienceProps {
  experiences: Experiences[];
}

export interface Experience {
  experience: Experiences;
}
