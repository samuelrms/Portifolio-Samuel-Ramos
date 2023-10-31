import { Controller } from 'react-hook-form';
import { TiDeleteOutline } from 'react-icons/ti';

import React from 'react';
import { Input } from '../Input';
import { Container } from './styles';
import { PropsSearch } from './Search.types';

export const Search = <T extends Record<string, any>>({
  control,
  ref,
  watchAllFields,
  onClear,
  placeholder,
  name
}: PropsSearch<T>) => (
  <Container data-aos="fade-left">
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input
          {...field}
          placeholder={placeholder}
          autoComplete="off"
          ref={ref}
        />
      )}
    />
    {watchAllFields && (
      <button type="button" onClick={onClear}>
        <TiDeleteOutline size="2rem" />
      </button>
    )}
  </Container>
);
