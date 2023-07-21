import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const DogeIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 22.5} height={height ?? 24.39} viewBox="0 0 22.497 24.387"
      className={clsx('doge-icon', { [className ?? '']: className })}
    >
      <path id="Path_39873" data-name="Path 39873" d="M220.413,192.795v10.853h-2.9v2.68h2.9v10.853h7.4c8.436,0,12.193-4.24,12.193-12.193,0-6.459-3.537-12.193-12.193-12.193Zm15.115,12.193c0,4.993-2.549,7.655-7.052,7.655h-3.405v-6.315h5.009v-2.68h-5.009v-6.315h3.16c4.619,0,7.3,3.6,7.3,7.655Z" transform="translate(-217.513 -192.795)" fill={color ?? "#fff"} />
    </svg>
  );
};

export default DogeIcon;
