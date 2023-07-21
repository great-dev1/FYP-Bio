import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const CopyLinkIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 30} height={height ?? 30.11} viewBox="0 0 29.955 30.113"
      className={clsx('copy-link-icon', { [className ?? '']: className })}
    >
      <path
        d="M157.595,0H140.949A2.154,2.154,0,0,0,138.8,2.151V7.2h1.964V2.151a.188.188,0,0,1,.187-.187h16.645a.188.188,0,0,1,.187.187V18.8a.188.188,0,0,1-.187.188H152.7v1.964h4.892a2.154,2.154,0,0,0,2.151-2.151V2.151A2.154,2.154,0,0,0,157.595,0Z"
        transform="translate(-129.791)"
        fill={color ?? '#fff'}
      />
      <path
        d="M20,140H3.354A2.154,2.154,0,0,0,1.2,142.149v16.645a2.154,2.154,0,0,0,2.151,2.151H20a2.154,2.154,0,0,0,2.151-2.151V142.149A2.154,2.154,0,0,0,20,140Zm0,18.984H3.354a.188.188,0,0,1-.188-.187V142.149a.188.188,0,0,1,.188-.188H20a.188.188,0,0,1,.188.188v16.645h0A.188.188,0,0,1,20,158.982Z"
        transform="translate(-1.203 -130.833)"
        fill={color ?? '#fff'}
      />
    </svg>
  )
}

export default CopyLinkIcon;
