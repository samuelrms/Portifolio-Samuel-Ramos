import { Image } from '.';

type CertificatesLink = {
  link_type: string;
  url: string;
};

interface Resume {
  spans: [];
  text: string;
  type: string;
}

export interface Courses {
  title: string;
  achievement_platform: string;
  certificates_link: CertificatesLink;
  completion_period: string;
  resume: Resume[];
  route: string;
  workload: string;
  certificate_image: Image;
}

export interface CoursesProps {
  courses: Courses[];
}

export interface Course {
  course: Courses;
}
