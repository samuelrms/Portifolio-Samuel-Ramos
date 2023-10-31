import { Ref } from 'react';
import { Control, Path } from 'react-hook-form';

export type PropsSearch<T> = {
  control: Control<T>;
  ref?: Ref<HTMLInputElement>;
  watchAllFields: boolean;
  onClear: () => void;
  placeholder: string;
  name: Path<T>;
};
