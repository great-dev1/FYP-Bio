import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const InstagramIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg
      id="XMLID_13_"
      width={width ?? 26.81}
      height={height ?? 26.82}
      viewBox="0 0 26.814 26.815"
      className={clsx('instagram-icon', {[className ?? '']: className})}
    >
      <path
        id="XMLID_17_"
        d="M18.827,0H7.988A8,8,0,0,0,0,7.988V18.827a8,8,0,0,0,7.988,7.988H18.827a8,8,0,0,0,7.988-7.988V7.988A8,8,0,0,0,18.827,0Zm5.291,18.827a5.291,5.291,0,0,1-5.291,5.291H7.988A5.291,5.291,0,0,1,2.7,18.827V7.988A5.291,5.291,0,0,1,7.988,2.7H18.827a5.291,5.291,0,0,1,5.291,5.291V18.827Z"
        fill={color ?? "#fff"}
      />
      <path
        id="XMLID_81_"
        d="M139.935,133a6.935,6.935,0,1,0,6.935,6.935A6.943,6.943,0,0,0,139.935,133Zm0,11.173a4.238,4.238,0,1,1,4.238-4.238A4.238,4.238,0,0,1,139.935,144.173Z"
        transform="translate(-126.528 -126.528)"
        fill={color ?? "#fff"}
      />
      <ellipse
        id="XMLID_83_"
        cx="1.662"
        cy="1.662"
        rx="1.662"
        ry="1.662"
        transform="translate(18.694 4.863)"
        fill={color ?? "#fff"}
      />
    </svg>
  );
};

export default InstagramIcon;
