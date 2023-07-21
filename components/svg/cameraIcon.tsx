import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const CameraIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 25} height={height ?? 14} viewBox="0 0 25 14"
      className={clsx('camera-icon', { [className ?? '']: className })}
    >
      <path d="M17,21.5H4a2,2,0,0,1-2-2V9.5a2,2,0,0,1,2-2H17a2,2,0,0,1,2,2v10A2,2,0,0,1,17,21.5Z" transform="translate(-2 -7.5)" fill={color ?? "#fff"} />
      <path d="M21,11.5v6l4.445,2.964A1,1,0,0,0,27,19.631V9.369a1,1,0,0,0-1.555-.832Z" transform="translate(-2 -7.5)" fill={color ?? "#fff"} />
    </svg>
  )
}

export default CameraIcon;
