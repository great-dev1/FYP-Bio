import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const TelegramIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 30.62} height={height ?? 25.52} viewBox="0 0 30.622 25.518"
      className={clsx('telegram-icon', { [className ?? '']: className })}
    >
      <path
        id="telegram-svgrepo-com_1_"
        data-name="telegram-svgrepo-com (1)"
        d="M31.011,7.225s2.833-1.1,2.6,1.578c-.079,1.1-.787,4.971-1.338,9.152L30.382,30.343s-.157,1.815-1.574,2.13-3.541-1.1-3.934-1.42c-.315-.237-5.9-3.787-7.869-5.523A1.5,1.5,0,0,1,17.084,23l8.262-7.89c.944-.947,1.888-3.156-2.046-.473l-11.016,7.5a4.612,4.612,0,0,1-3.62.079L3.549,20.638s-1.889-1.183,1.338-2.367C12.756,14.563,22.434,10.776,31.011,7.225Z"
        transform="translate(-3 -7)"
        fill={color ?? '#fff'}
      />
    </svg>
  )
}

export default TelegramIcon;
