import { HoverCardContentProps } from '@radix-ui/react-hover-card';
import { ForwardRefExoticComponent, ReactNode } from 'react';

type NodeProps = ReactNode;

export interface Props
  extends Partial<
    ForwardRefExoticComponent<
      HoverCardContentProps & React.RefAttributes<HTMLDivElement>
    >
  > {
  children: NodeProps;
  tooltip: NodeProps;
  arrow?: boolean;
  open?: number;
  close?: number;
}
