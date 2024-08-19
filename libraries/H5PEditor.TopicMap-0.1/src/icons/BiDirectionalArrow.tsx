import { FC } from 'react';

export type BiDirectionalArrowProps = {
  className: string;
};

export const BiDirectionalArrow: FC<BiDirectionalArrowProps> = ({
  className,
}) => {
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
      <path d="M16,5l-1.4,1.4l4.6,4.6H3v2h16.2l-4.6,4.6L16,19l7-7L16,5z" />
      <path d="M7.8,19l1.4-1.4L4.6,13h16.2v-2H4.6l4.6-4.6L7.8,5l-7,7L7.8,19z" />
    </svg>
  );
};
