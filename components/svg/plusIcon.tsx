import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const PlusIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 19.5} height={height ?? 19.5} viewBox="0 0 19.5 19.5"
      className={clsx('plus-icon', { [className ?? '']: className })}
    >
      <path 
        d="M19,8.874H10.126V0H8.874V8.874H0v1.253H8.874V19h1.253V10.126H19Z" 
        transform="translate(0.25 0.25)" stroke={color ?? "#000"} strokeWidth="1" 
        fill={color ?? '#fff'}
      />
    </svg>
  )
}

export default PlusIcon;
