/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';

const Add = ({ onSave, recorderId }: { onSave: (recorderId: number) => void, recorderId: number }) => (
  <>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onSave(recorderId)}
    >
      <path
        d="M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5Z"
        fill="#66B832"
        stroke="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8977 8.60225C17.1174 8.82192 17.1174 9.17808 16.8977 9.39775L10.5227 15.7727C10.3031 15.9924 9.94692 15.9924 9.72725 15.7727L6.72725 12.7727C6.50758 12.5531 6.50758 12.1969 6.72725 11.9773C6.94692 11.7576 7.30308 11.7576 7.52275 11.9773L10.125 14.5795L16.1023 8.60225C16.3219 8.38258 16.6781 8.38258 16.8977 8.60225Z"
        fill="white"
      />
    </svg>
  </>
);

export default Add;
