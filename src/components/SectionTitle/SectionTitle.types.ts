import { HTMLAttributes, ReactNode } from 'react';

export interface Props
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'title'> {
  title: string | number | ReactNode;
  description?: string | ReactNode;
}
