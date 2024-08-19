import { FC } from 'react';

export type SingleLineProps = {
  className: string;
};

export const SingleLine: FC<SingleLineProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height="24px"
      viewBox="0 0 24 24"
      fill="#000000"
    >
      <rect fill="none" height="24" width="24" />
      <path d="M19.2,11H3v2h16.2 M4.6,13h16.2v-2H4.6" />
    </svg>
  );
};
