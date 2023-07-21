import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const RefundIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 25.9} height={height ?? 25.9} viewBox="0 0 25.901 25.9"
    className={clsx('refund-icon', { [className ?? '']: className })}
    >
      <g transform="translate(-1 -1)">
        <path d="M13.95,26.9A12.95,12.95,0,0,1,1,13.95a.863.863,0,1,1,1.727,0,11.224,11.224,0,1,0,3.2-7.857.863.863,0,0,1-1.476-.6V2.727a.863.863,0,1,1,1.727,0V3.59A12.821,12.821,0,0,1,13.95,1a12.95,12.95,0,0,1,0,25.9Z"
          fill={color ?? '#fff'}
        />
        <path d="M18.044,15.18H13.727V13.453h4.317a.863.863,0,0,0,0-1.727H16.317v-.863a.863.863,0,1,0-1.727,0v.863H12.863A.863.863,0,0,0,12,12.59v3.453a.863.863,0,0,0,.863.863H17.18v1.727H12.863a.863.863,0,1,0,0,1.727H14.59v.863a.863.863,0,0,0,1.727,0V20.36h1.727a.863.863,0,0,0,.863-.863V16.044A.863.863,0,0,0,18.044,15.18Z" transform="translate(-1.503 -1.23)"
          fill={color ?? '#fff'}
        />
      </g>
    </svg>

  )
}

export default RefundIcon;
