import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const PinterestIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 24.38} height={height ?? 31.35} viewBox="0 0 24.386 31.348"
      className={clsx('pinterest-icon', { [className ?? '']: className })}
    >
      <path id="pinterest-svgrepo-com"
        d="M12.246,20.732c-.824,4.317-1.829,8.454-4.809,10.616-.918-6.523,1.35-11.421,2.4-16.622-1.8-3.025.216-9.11,4-7.61,4.663,1.843-4.038,11.241,1.8,12.417,6.1,1.224,8.588-10.58,4.806-14.418-5.462-5.545-15.9-.13-14.617,7.809.312,1.94,2.317,2.528.8,5.207-3.5-.774-4.541-3.533-4.406-7.21C2.448,4.9,7.638.69,12.845.105c6.585-.738,12.765,2.418,13.619,8.611.961,6.992-2.972,14.566-10.014,14.02-1.909-.149-2.708-1.1-4.2-2Z"
        transform="translate(-2.221 0)"
        fill={color ?? '#fff'}
      />
    </svg>
  )
}

export default PinterestIcon;
