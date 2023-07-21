import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const DownloadIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 14.14} height={height ?? 17.17} viewBox="0 0 14.139 17.169"
      className={clsx('download-icon', { [className ?? '']: className })}
    >
      <path d="M24.139,12.06H20.1V6H14.04v6.06H10l7.069,7.069ZM10,21.149v2.02H24.139v-2.02Z" transform="translate(-10 -6)"
        fill={color ?? '#fff'}
      />
    </svg>

  );
};

export default DownloadIcon;
