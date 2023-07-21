import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const LockIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 20.28} height={height ?? 25.36} viewBox="0 0 20.287 25.359"
      className={clsx('lock-icon', { [className ?? '']: className })}
    >
      <path d="M20.484,10.876V8.34a6.34,6.34,0,0,0-12.68,0v2.536A3.736,3.736,0,0,0,4,14.68v8.876a3.736,3.736,0,0,0,3.8,3.8h12.68a3.736,3.736,0,0,0,3.8-3.8V14.68A3.736,3.736,0,0,0,20.484,10.876ZM10.34,8.34a3.8,3.8,0,1,1,7.608,0v2.536H10.34Zm5.2,10.778-.127.127V21.02a1.2,1.2,0,0,1-1.268,1.268,1.2,1.2,0,0,1-1.268-1.268V19.244a1.885,1.885,0,1,1,2.663-.127Z" transform="translate(-4 -2)" fill={color ?? "#fff"} />
    </svg>
  );
};

export default LockIcon;
