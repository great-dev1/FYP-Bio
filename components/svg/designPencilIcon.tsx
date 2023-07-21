import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const DesignPencilIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 18.9} height={height ?? 18.9} viewBox="0 0 18.893 18.893"
      className={clsx('design-pencil-icon', { [className ?? '']: className })}
    >
      <g transform="translate(-1.5 -1.5)">
        <path d="M10.946,2a8.946,8.946,0,1,0,8.946,8.946A8.946,8.946,0,0,0,10.946,2Z" fill="none" stroke={color ?? "#000"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
        <path d="M8,19.675V13.262L11.579,7l3.579,6.262v6.413" transform="translate(-0.632 -0.527)" fill="none" stroke={color ?? "#000"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
        <path d="M8,14a3.631,3.631,0,0,0,1.789.895A3.631,3.631,0,0,0,11.579,14a3.631,3.631,0,0,0,1.789.895A3.631,3.631,0,0,0,15.157,14" transform="translate(-0.632 -1.264)" fill="none" stroke={color ?? "#000"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
      </g>
    </svg>
  )
}

export default DesignPencilIcon;
