import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const TrashIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 16.37} height={height ?? 17.38} viewBox="0 0 16.378 17.386"
      className={clsx('trash-icon', { [className ?? '']: className })}
    >
      <path d="M4.913,3.426V1.67A1.133,1.133,0,0,1,6.005.5h4.367a1.133,1.133,0,0,1,1.092,1.17V3.426M0,4.011H16.378m-14.74,0v11.7a1.133,1.133,0,0,0,1.092,1.17H13.648a1.133,1.133,0,0,0,1.092-1.17V4.011m-6.551,4.1V13.96M4.913,10.448V13.96m6.551-3.511V13.96" fill="none" stroke={color ?? '#fff'} strokeWidth="1" />
    </svg>
  );
};

export default TrashIcon;
