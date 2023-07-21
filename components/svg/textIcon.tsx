import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const TextIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg
      width={width ?? 17.2}
      height={height ?? 18.32}
      viewBox="0 0 17.203 18.323"
      className={clsx('text-icon', { [className ?? '']: className })}
    >
      <path
        d="M24.736,0H9.511A1.008,1.008,0,0,0,8.5.989V3.164a.989.989,0,1,0,1.977,0V1.977h4.548V16.346H13.861a.989.989,0,1,0,0,1.977h6.525a.989.989,0,1,0,0-1.977H19.178V1.977h4.548V3.164a.989.989,0,1,0,1.977,0V.989A.97.97,0,0,0,24.736,0Z"
        transform="translate(-8.5)"
        fill={color ?? '#fff'}
      />
    </svg>
  )
}

export default TextIcon;
