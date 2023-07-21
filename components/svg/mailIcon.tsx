import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const MailIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 28} height={height ?? 27.96} viewBox="0 0 28 27.967"
      className={clsx('mail-icon', { [className ?? '']: className })}
    >
      <path 
        d="M27.582.6s0-.006-.007-.008-.014-.007-.021-.013a1.078,1.078,0,0,0-.207-.127c-.023-.012-.041-.031-.065-.042l-.008,0C27.247.4,27.226.382,27.2.373a1.151,1.151,0,0,0-.3-.057C26.866.313,26.836.3,26.8.3a1.162,1.162,0,0,0-.4.069L.767,9.689a1.164,1.164,0,0,0-.278,2.044l7.749,5.536,1.094,7.663a1.165,1.165,0,0,0,2.086.534l2.75-3.664,7.211,6.185a1.167,1.167,0,0,0,.76.281,1.187,1.187,0,0,0,.389-.066,1.168,1.168,0,0,0,.756-.889L27.98,1.7A1.162,1.162,0,0,0,27.582.6ZM13.114,19.311l-.084.121-1.789,2.385-.677-4.742,10.11-8.763Z" 
        transform="translate(0.001 -0.299)" 
        fill={color ?? "#fff"}
      />
    </svg>
  );
};

export default MailIcon;
