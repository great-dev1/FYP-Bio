import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const CloseIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 10.55} height={height ?? 10.55} viewBox="0 0 10.554 10.553"
      className={clsx('close-icon', { [className ?? '']: className })}
    >
      <path d="M10.554.789,9.765,0,5.277,4.488.789,0,0,.789,4.488,5.277,0,9.765l.789.789L5.277,6.066l4.488,4.488.789-.789L6.066,5.277Z"
        fill={color ?? "#fff"}
      />
    </svg>
  )
}

export default CloseIcon;
