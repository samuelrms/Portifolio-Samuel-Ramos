import { ReactNode } from 'react';

type NodeProps = ReactNode;

export interface Props {
  children: NodeProps;
  tooltip: NodeProps;
  arrow?: boolean;
  open?: number;
  close?: number;
}
