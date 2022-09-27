/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BaseInput, InvalidInput } from './styled';
import { BaseInputProps } from './interfaces';

const TextInput = ({
  name,
  label = '',
  ariaLabel = '',
  type = 'text',
  placeholder,
  tablecell,
  isValid,
  ...props
} : BaseInputProps) => (isValid ? (
  <BaseInput
    name={name}
    type={type}
    tablecell={tablecell}
    aria-label={ariaLabel || label}
    placeholder={placeholder}
    {...props}
  />
) : (
  <InvalidInput
    name={name}
    type={type}
    tablecell={tablecell}
    aria-label={ariaLabel || label}
    placeholder={placeholder}
    {...props}
  />
));

export default TextInput;
