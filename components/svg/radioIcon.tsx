import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const RadioIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 29} height={height ?? 29} viewBox="0 0 29 29"
      className={clsx('radio-icon', { [className ?? '']: className })}
    >
      <g transform="translate(0.399 -18.02)">
        <g transform="translate(-0.399 18.02)" fill="none" stroke={color ?? "#e8e8e8"} strokeWidth="1" opacity="0.55">
          <circle cx="14.5" cy="14.5" r="14.5" stroke="none" />
          <circle cx="14.5" cy="14.5" r="14" fill="none" />
        </g>
        <circle cx="8.5" cy="8.5" r="8.5" transform="translate(5.601 24.02)" fill={color ?? "#eaeaea"} />
      </g>
    </svg>
  )
}

export default RadioIcon;
