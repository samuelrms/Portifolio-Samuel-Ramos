import { Image } from '.';
import { Resume } from './About.types';

export interface Jobs {
  uid: string;
  title: string;
  description: string;
  type: string;
  project_link: string;
  thumb: Image;
  route: string;
  resume: Resume[];
}

export interface JobsProps {
  jobs: Jobs[];
}

export interface Job {
  job: Jobs;
}
