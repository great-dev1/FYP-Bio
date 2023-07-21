import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const WarningIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg
      width={width ?? 22.7}
      height={height ?? 20.2}
      viewBox="0 0 22.707 20.203"
      className={clsx('warning-icon', { [className ?? '']: className })}
    >
      <g transform="translate(-2.172 -3.511)">
        <path d="M13.525,5.821a2.167,2.167,0,0,1,1.784,1.227l6.83,11.383c.983,1.635.224,2.972-1.682,2.972H6.594c-1.906,0-2.665-1.339-1.682-2.972l6.83-11.383a2.167,2.167,0,0,1,1.784-1.227m0-2.31A4.433,4.433,0,0,0,9.761,5.857L2.931,17.243a4.319,4.319,0,0,0-.271,4.424,4.325,4.325,0,0,0,3.935,2.047H20.457a4.323,4.323,0,0,0,3.935-2.046,4.322,4.322,0,0,0-.271-4.424L17.29,5.861a4.43,4.43,0,0,0-3.765-2.35Z" transform="translate(0)" fill={color ?? '#fff'} />
        <circle cx="1.502" cy="1.502" r="1.502" transform="translate(12.024 16.436)" fill={color ?? '#fff'} />
        <path d="M13.965,10.233a1.732,1.732,0,1,0-3.337.649c.64,1.59,1.6,3.972,1.6,3.972l1.607-3.972A1.775,1.775,0,0,0,13.965,10.233Z" transform="translate(1.293 0.774)" fill={color ?? '#fff'} />
      </g>
    </svg>
  );
};

export default WarningIcon;
