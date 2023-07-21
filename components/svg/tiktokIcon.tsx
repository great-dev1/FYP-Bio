import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const TiktokIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg     
      width={width ?? 27.8}
      height={height ?? 32}
      viewBox="0 0 27.801 31.998"
      className={clsx('tiktok-icon', {[className ?? '']: className})}
    >
      <path
        id="tiktok-svgrepo-com_2_"
        data-name="tiktok-svgrepo-com (2)"
        d="M16.708.027C18.453,0,20.188.016,21.921,0a8.3,8.3,0,0,0,2.333,5.563,9.415,9.415,0,0,0,5.652,2.385v5.369a14.164,14.164,0,0,1-5.6-1.291,16.2,16.2,0,0,1-2.161-1.24c-.009,3.9.016,7.787-.025,11.667a10.15,10.15,0,0,1-1.8,5.255,9.927,9.927,0,0,1-7.88,4.276A9.7,9.7,0,0,1,7,30.615,10.047,10.047,0,0,1,2.136,23c-.032-.667-.043-1.333-.016-1.984A10.047,10.047,0,0,1,13.76,12.1c.027,1.975-.052,3.948-.052,5.923a4.587,4.587,0,0,0-5.844,2.828A5.3,5.3,0,0,0,7.683,23a4.551,4.551,0,0,0,8.359,1.683,3.144,3.144,0,0,0,.547-1.417c.131-2.385.079-4.76.095-7.145.011-5.375-.016-10.735.025-16.093Z"
        transform="translate(-2.105)"
        fill={color ?? "#fff"}
      />
    </svg>
  );
};

export default TiktokIcon;
