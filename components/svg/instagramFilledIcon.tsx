import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const InstagramFilledIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 22.25} height={height ?? 21.93} viewBox="0 0 22.254 21.93"
      className={clsx('instagram-filled-icon', { [className ?? '']: className })}
    >
      <path d="M378.717,91.9a1.117,1.117,0,1,0,1.117,1.117A1.118,1.118,0,0,0,378.717,91.9Z" transform="translate(-360.835 -88.543)" fill="none" />
      <circle cx="5.239" cy="5.239" r="5.239" transform="translate(5.888 5.726)" fill="none" />
      <path d="M33.78,19.5H20.474A4.474,4.474,0,0,0,16,23.974V36.956a4.474,4.474,0,0,0,4.474,4.474H33.78a4.474,4.474,0,0,0,4.474-4.474V23.974A4.474,4.474,0,0,0,33.78,19.5ZM27.127,35.7a5.239,5.239,0,1,1,5.239-5.239A5.24,5.24,0,0,1,27.127,35.7Zm6.755-10.612A1.117,1.117,0,1,1,35,23.974,1.118,1.118,0,0,1,33.882,25.091Z" transform="translate(-16 -19.5)" fill={color ?? '#fff'}/>
    </svg>
  );
};

export default InstagramFilledIcon;
