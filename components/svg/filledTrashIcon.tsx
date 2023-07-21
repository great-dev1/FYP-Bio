import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const FilledTrashIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 22.05} height={height ?? 22.05} viewBox="0 0 22.05 22.05"
    className={clsx('filled-trash-icon', {[className ?? '']: className})}
    >
      <g transform="translate(1 1)">
        <path
          d="M9.759,7H21.038V20.784a2.506,2.506,0,0,1-2.506,2.506H8.506A2.506,2.506,0,0,1,6,20.784V7Z" 
          transform="translate(-3.494 -3.241)"
          fill={color ?? "#fff"}
        />
        <path
          d="M24.05,7.759H21.544M4,7.759H6.506m0,0H21.544m-15.038,0V21.544A2.506,2.506,0,0,0,9.013,24.05H19.038a2.506,2.506,0,0,0,2.506-2.506V7.759M10.266,7.133h0A3.133,3.133,0,0,1,13.4,4h1.253a3.133,3.133,0,0,1,3.133,3.133h0" 
          transform="translate(-4 -4)"
          fill="none"
          stroke={color ?? "#fff"}
          strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export default FilledTrashIcon;
