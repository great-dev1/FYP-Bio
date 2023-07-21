import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const RoudedPinterestIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 26.68} height={height ?? 26.68} viewBox="0 0 26.68 26.68"
      className={clsx('rounded-pinterest-icon', { [className ?? '']: className })}
    >
      <path 
        d="M13.122,2A11.124,11.124,0,0,0,9.07,23.483a10.689,10.689,0,0,1,.038-3.193c.2-.868,1.3-5.529,1.3-5.529a4.019,4.019,0,0,1-.333-1.652c0-1.545.9-2.7,2.013-2.7A1.4,1.4,0,0,1,13.5,11.976a22.467,22.467,0,0,1-.921,3.7,1.615,1.615,0,0,0,1.647,2.01c1.976,0,3.5-2.084,3.5-5.094a4.391,4.391,0,0,0-4.646-4.525A4.815,4.815,0,0,0,8.053,12.9a4.328,4.328,0,0,0,.828,2.538.334.334,0,0,1,.077.318c-.085.351-.273,1.107-.308,1.261-.049.2-.161.247-.373.149-1.388-.647-2.257-2.678-2.257-4.31,0-3.508,2.548-6.73,7.349-6.73a6.527,6.527,0,0,1,6.857,6.424c0,3.834-2.417,6.917-5.772,6.917a2.977,2.977,0,0,1-2.55-1.276l-.694,2.643A12.43,12.43,0,0,1,9.83,23.751,11.124,11.124,0,1,0,13.122,2" 
        transform="matrix(0.974, -0.225, 0.225, 0.974, -2.398, 3.506)" 
        fill={color ?? '#fff'}
      />
    </svg>

  );
};

export default RoudedPinterestIcon;
