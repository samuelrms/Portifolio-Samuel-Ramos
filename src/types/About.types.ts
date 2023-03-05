import { Image } from '.';

export interface Resume {
  type: string;
  text: string;
}

export interface About {
  about_me: string;
  name: string;
  presentation: string;
  experience: string;
  motivational: string;
  title_resume: string;
  resume: Resume[];
  image_person: Image;
  graduation: string;
  graduation_label: string;
}

export interface Props {
  about: About;
}
