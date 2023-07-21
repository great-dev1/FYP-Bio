import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const ChevronRightIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg viewBox="0 0 24 24" width={width ?? 24} height={height ?? 24}
      className={clsx('copy-link-icon', { [className ?? '']: className })}
    >
      <g>
        <path d="M 8 3 L 14 12 L 8 21 L 12 21 L 18 12 L 12 3 Z M 8 3 " fill={color ?? '#fff'} />
      </g>
    </svg>
  )
}

export default ChevronRightIcon;
