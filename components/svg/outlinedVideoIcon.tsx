import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const OutlinedVideoIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 20.83} height={height ?? 15.51} viewBox="0 0 20.833 15.512"
    className={clsx('outlined-video-icon', {[className ?? '']: className})}
    >
      <g id="video-svgrepo-com" transform="translate(-1.549 -4.249)">
        <path d="M16.3,15.538A3.376,3.376,0,0,1,12.995,19c-.14.006-6.979-.008-6.979-.008a3.405,3.405,0,0,1-3.7-3.043C2.3,15.81,2.3,8.472,2.3,8.472A3.378,3.378,0,0,1,5.6,5c.142-.007,6.972.006,6.972.006A3.421,3.421,0,0,1,16.29,8.074C16.3,8.206,16.3,15.538,16.3,15.538Z" fill="none" stroke={color ?? "#fff"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fillRule="evenodd" />
        <path d="M16.3,9.98l3.293-2.7a1.248,1.248,0,0,1,2.039.967L21.62,15.6a1.248,1.248,0,0,1-2.04.962L16.3,13.868" fill="none" stroke={color ?? "#fff"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
    </svg>
  );
};

export default OutlinedVideoIcon;
