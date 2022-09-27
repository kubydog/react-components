/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';

const Edit = ({ onEdit, recorderId }: { onEdit: (recorderId: number) => void, recorderId: number }) => (
  <>
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onEdit(recorderId)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.8075 0.632469C11.2949 0.119906 10.4639 0.119906 9.95132 0.632469L2.74636 7.83742C2.50022 8.08356 2.36194 8.4174 2.36194 8.7655L2.36194 10.8868C2.36194 11.6117 2.94957 12.1993 3.67444 12.1993L5.79576 12.1993C6.14386 12.1993 6.4777 12.061 6.72384 11.8149L13.9288 4.60994C14.4414 4.09738 14.4414 3.26635 13.9288 2.75379L11.8075 0.632469ZM10.7468 1.42796C10.82 1.35474 10.9388 1.35474 11.012 1.42796L13.1333 3.54928C13.2065 3.62251 13.2065 3.74123 13.1333 3.81445L12.2052 4.74253L9.81873 2.35604L10.7468 1.42796ZM9.02324 3.15154L11.4097 5.53802L5.92834 11.0194C5.89318 11.0546 5.84549 11.0743 5.79576 11.0743L3.67444 11.0743C3.57089 11.0743 3.48694 10.9904 3.48694 10.8868V8.7655C3.48694 8.71577 3.5067 8.66808 3.54186 8.63292L9.02324 3.15154ZM1.33337 14.1874C1.02271 14.1874 0.770874 14.4392 0.770874 14.7499C0.770874 15.0606 1.02271 15.3124 1.33337 15.3124H13.3334C13.644 15.3124 13.8959 15.0606 13.8959 14.7499C13.8959 14.4392 13.644 14.1874 13.3334 14.1874H1.33337Z"
        fill="#676767"
      />
    </svg>
  </>
);

export default Edit;
