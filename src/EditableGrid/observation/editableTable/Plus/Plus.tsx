import React from 'react';

const Plus = ({ onAdd }: { onAdd: () => void }) => (
  <>
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onAdd}
    >
      <ellipse cx="12.2307" cy="12" rx="9" ry="9" fill="#007BFF" />
      <path
        d="M12.2839 17.3564V6.74984M17.5872 12.0531L6.98064 12.0531"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </>
);

export default Plus;
