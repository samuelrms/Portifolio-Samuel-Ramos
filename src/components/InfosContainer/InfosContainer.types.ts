import {
  About,
  PresentationArea,
  PresentationSkills
} from '../../types/Home.types';

export interface Props {
  data: {
    presentation_skills: PresentationSkills[];
    presentation_area: PresentationArea[];
    about: About[];
  };
}
