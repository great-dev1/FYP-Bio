import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const TimeIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 27.96} height={height ?? 27.97} viewBox="0 0 27.975 27.974"
      className={clsx('time-icon', { [className ?? '']: className })}
    >
      <g transform="translate(-2.498 -2.497)">
        <path d="M23.568,11.906a8.239,8.239,0,0,0-5.831-2.411v8.242l-5.831,5.831A8.247,8.247,0,0,0,23.568,11.906ZM17.737,4A13.737,13.737,0,1,0,31.474,17.737,13.733,13.733,0,0,0,17.737,4Zm0,24.727a10.99,10.99,0,1,1,10.99-10.99A10.987,10.987,0,0,1,17.737,28.727Z" transform="translate(-1.253 -1.253)" />
        <path d="M17.737,3.75a13.987,13.987,0,0,1,9.891,23.876A13.988,13.988,0,0,1,7.846,7.846,13.9,13.9,0,0,1,17.737,3.75Zm0,27.474A13.487,13.487,0,1,0,4.25,17.737,13.5,13.5,0,0,0,17.737,31.224Zm0-24.727A11.237,11.237,0,1,1,9.789,9.789,11.167,11.167,0,0,1,17.737,6.5Zm0,21.979A10.74,10.74,0,1,0,7,17.737,10.752,10.752,0,0,0,17.737,28.477Zm0-19.232h.008a8.495,8.495,0,1,1-6.016,14.5l-.177-.177,5.935-5.935V9.245Zm0,16.49a7.995,7.995,0,0,0,.253-15.986v8.092l-5.725,5.725A7.936,7.936,0,0,0,17.734,25.734Z" transform="translate(-1.253 -1.253)" fill={color ?? '#fff'} />
      </g>
    </svg>
  );
};

export default TimeIcon;
