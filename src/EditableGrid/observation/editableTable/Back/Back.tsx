/* eslint-disable no-unused-vars */
import React from 'react';

const Back = ({
  onBack,
  recorderId,
}: {
  onBack: (recorderId: number) => void;
  recorderId: number;
}) => (
  <>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onBack(recorderId)}
    >
      <path
        d="M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75Z"
        fill="#676767"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.85225 7.85225C8.07192 7.63258 8.42808 7.63258 8.64775 7.85225L12 11.2045L15.3523 7.85225C15.5719 7.63258 15.9281 7.63258 16.1477 7.85225C16.3674 8.07192 16.3674 8.42808 16.1477 8.64775L12.7955 12L16.1477 15.3523C16.3674 15.5719 16.3674 15.9281 16.1477 16.1477C15.9281 16.3674 15.5719 16.3674 15.3523 16.1477L12 12.7955L8.64775 16.1477C8.42808 16.3674 8.07192 16.3674 7.85225 16.1477C7.63258 15.9281 7.63258 15.5719 7.85225 15.3523L11.2045 12L7.85225 8.64775C7.63258 8.42808 7.63258 8.07192 7.85225 7.85225Z"
        fill="white"
      />
    </svg>
  </>
);

export default Back;
