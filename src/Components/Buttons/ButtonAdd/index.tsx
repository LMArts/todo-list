import React from 'react';
import { Button } from './styles';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonAdd({...rest}: Props) {
  return (
    <Button {...rest}>
        <img alt='Adicionar' src={require('../../../Assets/Icons/ic-add.png')} />
    </Button>
  );
}