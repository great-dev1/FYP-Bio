import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const PlayArrowIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 20.5} height={height ?? 23.3} viewBox="0 0 20.492 23.291"
      className={clsx('play-arrow-icon', { [className ?? '']: className })}
    >
      <path d="M7,27.17V7.6A1.86,1.86,0,0,1,9.8,5.994L26.57,15.78a1.86,1.86,0,0,1,0,3.213L9.8,28.778A1.86,1.86,0,0,1,7,27.17Z" transform="translate(-7 -5.74)"
        fill={color ?? '#fff'} />
    </svg>
  )
}

export default PlayArrowIcon;
