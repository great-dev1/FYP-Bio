import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const DescriptionIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 15.93} height={height ?? 17.44} viewBox="0 0 15.932 17.442"
      className={clsx('description-icon', { [className ?? '']: className })}
    >
      <line x1="6.252" transform="translate(4.86 12.417)" fill="none" stroke={color ?? '#fff'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <line x1="6.252" transform="translate(4.86 8.792)" fill="none" stroke={color ?? '#fff'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <line x1="2.386" transform="translate(4.86 5.175)" fill="none" stroke={color ?? '#fff'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M11.279.75l-6.659,0A3.681,3.681,0,0,0,.751,4.739V12.7a3.684,3.684,0,0,0,3.9,3.99l6.659,0A3.682,3.682,0,0,0,15.182,12.7V4.739A3.685,3.685,0,0,0,11.279.75Z" fill="none"
        stroke={color ?? '#fff'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fillRule="evenodd" />
    </svg>
  )
}

export default DescriptionIcon;
