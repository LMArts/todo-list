import React from 'react';
import { InputText } from './styles';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({...rest}: Props) {
  return (
    <InputText {...rest} />
  );
}