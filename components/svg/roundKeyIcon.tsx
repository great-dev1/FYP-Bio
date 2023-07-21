import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const RoundKeyIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 13.242} height={height ?? 19} viewBox="0 0 13.242 19"
      className={clsx('round-key-icon', { [className ?? '']: className })}
    >
      <path d="M56.621,19A6.618,6.618,0,0,0,61.515,7.924V4.894a4.894,4.894,0,1,0-9.788,0v3.03A6.618,6.618,0,0,0,56.621,19Zm.864-6.334v1.152a.864.864,0,0,1-1.727,0V12.666a1.439,1.439,0,1,1,1.727,0Zm-4.03-7.772a3.167,3.167,0,1,1,6.333,0V6.565a6.611,6.611,0,0,0-6.333,0Z"
        transform="translate(-50)" fill={color ?? "#fff"}
      />
    </svg>
  );
};

export default RoundKeyIcon;
