import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const TwitchIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg
      id="twitch-svgrepo-com"
      width={width ?? 27.43}
      height={height ?? 32}
      viewBox="0 0 27.428 32"
      className={clsx('twitch-icon', {[className ?? '']: className})}
    >
      <path
        id="Path_37094"
        data-name="Path 37094"
        d="M6.714,0,1,5.714V26.285H7.858V32l5.714-5.714H18.14L28.427,16V0ZM26.142,14.858l-4.57,4.57H17l-4,4v-4H7.858V2.286H26.142Z"
        transform="translate(-1)"
        fill={color ?? "#fff"}
      />
      <path
        id="Path_37095"
        data-name="Path 37095"
        d="M16.143,3.143H13.857V10h2.286Zm-6.286,0H7.571V10H9.857V3.143Z"
        transform="translate(5.571 3.143)"
        fill={color ?? "#fff"}
      />
    </svg>
  );
};

export default TwitchIcon;
