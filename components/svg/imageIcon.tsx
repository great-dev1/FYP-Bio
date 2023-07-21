import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const ImageIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 33.38} height={height ?? 26.7} viewBox="0 0 33.379 26.707"
      className={clsx('image-icon', { [className ?? '']: className })}
    >
      <g transform="translate(0.5 0.5)">
        <path d="M31.333,23.935H1.045A1.045,1.045,0,0,0,0,24.98V48.6a1.045,1.045,0,0,0,1.045,1.045H31.333A1.045,1.045,0,0,0,32.378,48.6V24.98A1.045,1.045,0,0,0,31.333,23.935Zm-1.045,2.091V45.968l-8.361-8.892a1.045,1.045,0,0,0-.761-.329h0a1.046,1.046,0,0,0-.761.329l-3.571,3.795-4.787-6.312a1.045,1.045,0,0,0-.833-.414h0a1.045,1.045,0,0,0-.833.415L2.091,45.527v-19.5ZM28.907,47.551H3.181l8.034-10.63,4.7,6.2a1.045,1.045,0,0,0,1.594.085l3.656-3.885Z"
          transform="translate(0 -23.935)"
          fill={color ?? '#fff'}
          stroke="#fbfbfb"
          strokeWidth="1"
        />
        <path d="M134.017,59.241a3.436,3.436,0,1,0-3.436-3.436A3.44,3.44,0,0,0,134.017,59.241Zm0-4.782a1.346,1.346,0,1,1-1.346,1.346A1.348,1.348,0,0,1,134.017,54.458Z"
          fill={color ?? '#fff'}
          transform="translate(-112.382 -48.405)"
          stroke="#fbfbfb"
          strokeWidth="1"
        />
      </g>
    </svg>
  )
}

export default ImageIcon;
