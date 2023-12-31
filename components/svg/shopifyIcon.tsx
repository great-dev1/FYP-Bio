import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const ShopifyIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 28.7} height={height ?? 32.64} viewBox="0 0 28.7 32.638"
      className={clsx('shopify-icon', { [className ?? '']: className })}
    >
      <path
        id="shopify-svgrepo-com"
        d="M20.239,3.929a.374.374,0,0,1,.052.044l1.936,1.921,2.625.2a.314.314,0,0,1,.285.264l3.563,24.1L18.615,32.638,0,29.151S2.388,10.677,2.479,10.023c.12-.86.149-.887,1.063-1.175l2.946-.914C7.118,5.262,9.129,0,13.336,0a2.2,2.2,0,0,1,1.7.974l.153,0c1.806,0,2.833,1.54,3.415,3.215l.976-.3a.864.864,0,0,1,.656.046Zm-5.047,7.734a5.44,5.44,0,0,0-2.543-.487c-4.416,0-6.6,2.949-6.6,6,0,3.622,3.614,3.72,3.614,5.923a1.251,1.251,0,0,1-1.3,1.263,6.114,6.114,0,0,1-3.1-1.444L4.4,25.744a6.452,6.452,0,0,0,4.829,1.988c2.662,0,4.637-2,4.637-5.118,0-3.958-4.4-4.6-4.4-6.294,0-.312.1-1.539,2.057-1.539a5.724,5.724,0,0,1,2.424.581l1.245-3.7ZM17.578,4.5c-.4-1.219-1.019-2.278-1.95-2.395a7.736,7.736,0,0,1,.377,2.543l0,.341L17.578,4.5ZM14.473,2.313c-1.027.44-2.2,1.608-2.826,4.025L14.9,5.331V5.149a7.819,7.819,0,0,0-.426-2.838Zm-1.25-1.184C10.2,1.129,8.5,5.1,7.785,7.534l2.57-.8c.612-3.192,2.057-4.79,3.407-5.425a.951.951,0,0,0-.541-.18Z"
        fill={color ?? "#fff"}
      />
    </svg>

  );
};

export default ShopifyIcon;
