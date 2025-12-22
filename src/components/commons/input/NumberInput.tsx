import type { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import { Input } from './Input';

export const NumberInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({ onChange, ...props }) => {
  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const onlyNumbers = event.target.value.replace(/\D/g, '');
    event.target.value = onlyNumbers;
    if (onChange) onChange(event);
  }
  return <Input inputMode="numeric" type="text" onChange={handleOnChange} {...props} />;
};
