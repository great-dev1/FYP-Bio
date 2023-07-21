import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const OutlinedLockIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 13.39} height={height ?? 18.18} viewBox="0 0 13.387 18.184"
    className={clsx('outlined-lock-icon', { [className ?? '']: className })}
    >
      <g transform="translate(0.1 0.1)">
        <path d="M26.79,17.793h-1.2v-2.4a4.2,4.2,0,1,0-8.392,0v2.4H16v-2.4a5.395,5.395,0,1,1,10.79,0Z" transform="translate(-14.801 -10)" fill={color ?? '#fff'} strokeWidth="0.2" />
        <path d="M25.389,32.79H15.8a1.766,1.766,0,0,1-1.8-1.8V23.8A1.766,1.766,0,0,1,15.8,22h9.591a1.766,1.766,0,0,1,1.8,1.8v7.193A1.766,1.766,0,0,1,25.389,32.79ZM15.8,23.2a.566.566,0,0,0-.6.6v7.193a.566.566,0,0,0,.6.6h9.591a.566.566,0,0,0,.6-.6V23.8a.566.566,0,0,0-.6-.6Z" transform="translate(-14 -14.807)" fill={color ?? '#fff'} strokeWidth="0.2" />
        <circle cx="1.532" cy="1.532" r="1.532" transform="translate(5.106 9.813)" fill={color ?? "#fff"} strokeWidth="0.2" />
        <path d="M24.7,28h-.6l-.6,3.6h1.8Z" transform="translate(-17.762 -17.21)" fill={color ?? "#fff"} />
      </g>
    </svg>
  )
}

export default OutlinedLockIcon;
