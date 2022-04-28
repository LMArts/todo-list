import React from 'react';
import { Button } from './styles';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonRemove({...rest}: Props) {
  return (
    <Button {...rest}>
        <img alt='Lixeira' src={require('../../../Assets/Icons/ic-delete.png')}/>
    </Button>
  );
}