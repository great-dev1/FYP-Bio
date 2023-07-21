import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const LocationIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 19.7} height={height ?? 24.31} viewBox="0 0 19.708 24.315"
      className={clsx('location-icon', { [className ?? '']: className })}
    >
      <g transform="translate(0.5 0.5)">
        <path d="M44.39,0a9.365,9.365,0,0,0-9.354,9.354,9.238,9.238,0,0,0,2.017,5.8c1.709,2.154,6.677,7.269,6.888,7.486l.449.462.449-.462c.211-.217,5.181-5.333,6.89-7.488a9.235,9.235,0,0,0,2.015-5.795A9.365,9.365,0,0,0,44.39,0Zm6.357,14.37c-1.376,1.735-5.07,5.594-6.357,6.928-1.287-1.335-4.98-5.192-6.355-6.927a8,8,0,0,1-1.746-5.018,8.1,8.1,0,1,1,16.2,0A7.994,7.994,0,0,1,50.747,14.37Z" transform="translate(-35.036)" stroke={color ?? '#fff'} strokeWidth="1" />
        <path d="M99.3,59.265a3.345,3.345,0,1,0,3.345,3.345A3.349,3.349,0,0,0,99.3,59.265Zm0,5.933a2.588,2.588,0,1,1,2.588-2.588A2.591,2.591,0,0,1,99.3,65.2Z" transform="translate(-89.95 -53.36)" stroke={color ?? '#fff'} strokeWidth="1" />
      </g>
    </svg>
  );
};

export default LocationIcon;
