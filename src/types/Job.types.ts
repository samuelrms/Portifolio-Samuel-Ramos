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

export interface Jobs {
  uid: string;
  title: string;
  description: Resume[];
  type: string;
  project_link: string;
  thumb: Image;
  route: string;
}

export interface JobsProps {
  jobs: Jobs[];
}

export interface Job {
  job: Jobs;
}
