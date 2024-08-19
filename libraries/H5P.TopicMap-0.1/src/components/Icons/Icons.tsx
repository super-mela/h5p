import * as React from 'react';

export type IconProps = {
  iconColor: string;
  width: number | undefined;
  height: number | undefined;
};

export const EditIcon: React.FC<IconProps> = ({ iconColor, width, height }) => {
  return (
    <svg
      width={width ? `${width}` : '10'}
      height={height ? `${height}` : '10'}
      viewBox="0 0 17 17"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMin"
    >
      <path
        d="M0 13.8534V16.5556C0 16.8045 0.195556 17 0.444444 17H3.14667C3.26222 17 3.37778 16.9556 3.45778 16.8667L13.1644 7.16891L9.83111 3.83558L0.133333 13.5334C0.0444445 13.6222 0 13.7289 0 13.8534ZM15.7422 4.59114C16.0889 4.24447 16.0889 3.68447 15.7422 3.3378L13.6622 1.2578C13.3156 0.911136 12.7556 0.911136 12.4089 1.2578L10.7822 2.88447L14.1156 6.2178L15.7422 4.59114Z"
        fill={iconColor}
      />
    </svg>
  );
};

export const NoteIcon: React.FC<IconProps> = ({ iconColor, width, height }) => (
  <svg
    width={width ? `${width}` : '12'}
    height={height ? `${height}` : '12'}
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMin"
  >
    <path
      d="M0 0.75H12V2.25H0V0.75ZM0 3.75H12V5.25H0V3.75ZM0 6.75H12V8.25H0V6.75ZM0 9.75H7.5V11.25H0V9.75Z"
      fill={iconColor}
    />
  </svg>
);

export const DoneIcon: React.FC<IconProps> = ({ iconColor, width, height }) => (
  <svg
    width={width ? `${width}` : '12'}
    height={height ? `${height}` : '12'}
    viewBox="0 -1 18 14"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMin"
  >
    <path
      d="M5.9999 11.2L1.7999 6.99998L0.399902 8.39998L5.9999 14L17.9999 1.99998L16.5999 0.599976L5.9999 11.2Z"
      fill={iconColor}
    />
  </svg>
);
