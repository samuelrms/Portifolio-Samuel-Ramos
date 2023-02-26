import { ReactNode } from 'react';

export interface Props {
  title: string | ReactNode;
  description?: string | ReactNode;
}
