import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const CalendarIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 19.8} height={height ?? 21.8} viewBox="0 0 19.801 21.801"
      className={clsx('calendar-icon', { [className ?? '']: className })}
    >
      <g transform="translate(0.9 0.9)">
        <line x2="17.824" transform="translate(0.093 7.404)" fill="none" stroke={color ?? '#fff'} stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.8" />
        <line x2="0.009" transform="translate(13.442 11.31)" fill="none" stroke={color ?? '#fff'} stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.8" />
        <line x2="0.009" transform="translate(9.005 11.31)" fill="none" stroke={color ?? '#fff'} stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.8" />
        <line x2="0.009" transform="translate(4.558 11.31)" fill="none" stroke={color ?? '#fff'} stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.8" />
        <line x2="0.009" transform="translate(13.442 15.196)" fill="none" stroke={color ?? '#fff'} stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.8" />
        <line x2="0.009" transform="translate(9.005 15.196)" fill="none" stroke={color ?? '#fff'} stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.8" />
        <line x2="0.009" transform="translate(4.558 15.196)" fill="none" stroke={color ?? '#fff'} stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.8" />
        <line y2="3.291" transform="translate(13.044)" fill="none" stroke={color ?? '#fff'} stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.8" />
        <line y2="3.291" transform="translate(4.966)" fill="none" stroke={color ?? '#fff'} stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.8" />
        <path d="M13.238,1.579H4.771C1.834,1.579,0,3.215,0,6.222v9.05C0,18.326,1.834,20,4.771,20h8.458C16.175,20,18,18.355,18,15.347V6.222C18.009,3.215,16.184,1.579,13.238,1.579Z" fill="none" stroke={color ?? '#fff'} stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.8" fillRule="evenodd" />
      </g>
    </svg>
  )
}

export default CalendarIcon;
