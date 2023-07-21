import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const ClockIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 22.13} height={height ?? 22.13} viewBox="0 0 22.13 22.13"
      className={clsx('clock-icon', { [className ?? '']: className })}
    >
      <g id="Group_49710" data-name="Group 49710" transform="translate(0.5 0.5)">
        <path d="M10.565,0A10.565,10.565,0,1,0,21.13,10.566,10.577,10.577,0,0,0,10.565,0Zm0,20.077a9.512,9.512,0,1,1,9.512-9.512A9.523,9.523,0,0,1,10.565,20.078Z" transform="translate(0 -0.001)" stroke={color ?? '#fff'} strokeWidth="1" />
        <path d="M87.349,50.841h-4.2v1.053H88.4V43.883H87.349Z" transform="translate(-77.311 -38.802)" stroke={color ?? '#fff'} strokeWidth="1" />
      </g>
    </svg>
  )
}

export default ClockIcon;
