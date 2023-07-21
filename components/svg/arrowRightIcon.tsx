import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const ArrowRightIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 15.287} height={height ?? 12.754} viewBox="0 0 15.287 12.754"
      className={clsx('arrow-right-icon', { [className ?? '']: className })}
    >
      <path d="M55.09,5.393A.986.986,0,1,1,53.7,6.787L50.277,3.365V13.8a.987.987,0,1,1-1.974,0V3.365L44.884,6.787A.986.986,0,0,1,43.49,5.393l5.1-5.1a.984.984,0,0,1,1.394,0Z" transform="translate(15.037 -42.95) rotate(90)" fill={color ?? '#fff'} stroke="#fff" strokeWidth="0.5" />
    </svg>
  );
};

export default ArrowRightIcon;
