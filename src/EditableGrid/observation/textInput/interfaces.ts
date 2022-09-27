import { InputHTMLAttributes } from 'react';

export type BaseInputProps = InputHTMLAttributes<HTMLInputElement> & {
  /**
   * Mandatory input field unique name
   */
  name: string;
  /**
   * Optional Label to show at top of the input box. Default ''
   */
  label?: string;
  /**
   * Optional overriding accessibility label for screen-reader users. Falls back to 'label' prop.
   */
  ariaLabel?: string;
  /**
   * Optional Hint message to explain what was the error from. default 'undefined'
   */
   placeholder?: string;
  /**
   * Optional Enable/disable the input, default 'False'
   */
  disabled?: boolean;

  tablecell?:boolean;

  isValid?: boolean;

  validationFn?: any;
};
