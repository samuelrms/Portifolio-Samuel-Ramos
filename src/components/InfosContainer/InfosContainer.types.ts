import { PresentationArea, PresentationSkills } from '../../types';

export interface Props {
  data: {
    presentation_skills: PresentationSkills[];
    presentation_area: PresentationArea[];
  };
}
