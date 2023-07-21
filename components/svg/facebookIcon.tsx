import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const FacebookIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 14.73} height={height ?? 29.16} viewBox="0 0 14.731 29.164"
      className={clsx('facebook-icon', { [className ?? '']: className })}
    >
      <g id="XMLID_834_" transform="translate(-76.703)">
        <path id="XMLID_835_"
          d="M77.173,15.533h3.2V28.693a.47.47,0,0,0,.47.47h5.42a.47.47,0,0,0,.47-.47v-13.1h3.675a.47.47,0,0,0,.467-.417l.558-4.845a.47.47,0,0,0-.467-.524H86.731V6.771c0-.916.493-1.38,1.465-1.38h2.768a.47.47,0,0,0,.47-.47V.474a.47.47,0,0,0-.47-.47H87.15c-.027,0-.087,0-.175,0A7.309,7.309,0,0,0,82.2,1.8a5.012,5.012,0,0,0-1.667,4.455V9.808H77.173a.47.47,0,0,0-.47.47v4.783A.47.47,0,0,0,77.173,15.533Z"
          fill={color ?? '#fff'}
        />
      </g>
    </svg>
  )
}

export default FacebookIcon;
