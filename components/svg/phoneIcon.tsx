import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const PhoneIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 25.665}
      height={height ?? 25.662} viewBox="0 0 25.665 25.662"
      className={clsx('phone-icon', { [className ?? '']: className })}
    >
      <path
        d="M25.39,19.466c-.955-1.806-4.273-3.764-4.419-3.85a2.636,2.636,0,0,0-1.287-.371,1.6,1.6,0,0,0-1.433.8,15.868,15.868,0,0,1-1.233,1.364,2.051,2.051,0,0,1-2.995-.3L8.558,11.643a2.059,2.059,0,0,1-.3-2.993A16.025,16.025,0,0,1,9.623,7.415a1.582,1.582,0,0,0,.736-.949,2.352,2.352,0,0,0-.31-1.775C9.966,4.55,8.006,1.232,6.2.277A2.347,2.347,0,0,0,3.444.692L2.236,1.9A6.6,6.6,0,0,0,.18,8.331a13.607,13.607,0,0,0,3.941,6.218l7,7c2.734,2.734,5.34,4.12,7.747,4.12h0a6.852,6.852,0,0,0,4.9-2.235l1.207-1.207A2.335,2.335,0,0,0,25.39,19.466Z"
        transform="translate(0 -0.004)"
        fill={color ?? '#fff'}
      />
    </svg>
  )
}

export default PhoneIcon;
