import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const BankCashIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 27} height={height ?? 18.62} viewBox="0 0 27 18.624"
      className={clsx('bank-cash-icon', { [className ?? '']: className })}
    >
      <g transform="translate(-0.5 -5)">
        <path d="M14.012,10.811a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,14.012,10.811Zm-1.814,3.5a1.815,1.815,0,1,1,1.814,1.815A1.815,1.815,0,0,1,12.2,14.312Z" fillRule="evenodd" fill={color ?? '#fff'} />
        <path d="M7.195,14.312A1.309,1.309,0,1,1,5.886,13,1.309,1.309,0,0,1,7.195,14.312Z" fill={color ?? '#fff'} />
        <path d="M22.087,15.621a1.309,1.309,0,1,0-1.309-1.309A1.309,1.309,0,0,0,22.087,15.621Z" fill={color ?? '#fff'} />
        <path d="M25.02,5H2.98A2.48,2.48,0,0,0,.5,7.48V21.145a2.48,2.48,0,0,0,2.48,2.48H25.02a2.48,2.48,0,0,0,2.48-2.48V7.48A2.48,2.48,0,0,0,25.02,5ZM2.484,7.48a.5.5,0,0,1,.5-.5H25.02a.5.5,0,0,1,.5.5V21.145a.5.5,0,0,1-.5.5H2.98a.5.5,0,0,1-.5-.5Z" fillRule="evenodd" fill={color ?? '#fff'} />
      </g>
    </svg>
  );
};

export default BankCashIcon;
