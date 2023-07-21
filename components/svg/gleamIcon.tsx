import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const GleamIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg id="gleam-svgrepo-com" width={width ?? 29.3} height={height ?? 29.3} viewBox="0 0 29.305 29.305"
      className={clsx('gleam-icon', { [className ?? '']: className })}
    >
      <path id="Path_37111" data-name="Path 37111" d="M142.652,74.981V87.119l-.391.038-14.122-5.932L128,81.05l14.652-6.069" transform="translate(-113.348 -66.398)" fill={color ?? "#fff"} />
      <path id="Path_37112" data-name="Path 37112" d="M142.267,134.069l-8.583,8.583-.131-.1-5.988-14.15.05-.4,14.652,6.069" transform="translate(-112.962 -113.348)" fill={color ?? "#fff"} />
      <path id="Path_37113" data-name="Path 37113" d="M80.656,128l-.324.222-5.8,14.183.051.247H86.725L80.656,128" transform="translate(-66.004 -113.348)" fill={color ?? "#fff"} />
      <path id="Path_37114" data-name="Path 37114" d="M0,133.67l.363-.283,13.965-5.838.324.052L8.583,142.253,0,133.67" transform="translate(0 -112.948)" fill={color ?? "#fff"} />
      <path id="Path_37115" data-name="Path 37115" d="M0,74.791l.363-.025,14.088,5.778.2.316L0,86.929V74.791" transform="translate(0 -66.207)" fill={color ?? "#fff"} />
      <path id="Path_37116" data-name="Path 37116" d="M8.583,0,0,8.583l14.652,6.069.026-.373L9.214.346,8.583,0" fill={color ?? "#fff"} />
      <path id="Path_37117" data-name="Path 37117" d="M74.981,0H87.119L81.05,14.652,74.981,0" transform="translate(-66.398)" fill={color ?? "#fff"} />
    </svg>

  );
};

export default GleamIcon;
