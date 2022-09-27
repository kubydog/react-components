import React, { useState } from 'react';
import TextInput from '../textInput/TextInput';
import { Data, Header } from './types';

export interface InputFieldProps {
  initValue: number;
  name: string;
  header: Header;
  record: Data;
  onChange: any;
}
const InputFieldCell = ({
  initValue,
  name,
  header,
  record,
  onChange,
}: InputFieldProps) => {
  const [value, setValue] = useState(initValue);

  const onInputChange = (e: any) => {
    setValue(e.target.value);
    onChange(header, record, e.target.value);
  };
  return (
    <TextInput
      type="string"
      placeholder="ml"
      name={name}
      value={value}
      onChange={onInputChange}
    />
  );
};

export default InputFieldCell;