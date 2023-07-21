import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const YoutubeOutlineIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg
      width={width ?? 34.16}
      height={height ?? 24.69}
      viewBox="0 0 34.162 24.69"
      className={clsx('youtube-outlined-icon', {[className ?? '']: className})}
    >
      <g id="youtube-svgrepo-com" transform="translate(0.75 0.75)">
        <path
          id="Path_37092"
          data-name="Path 37092"
          d="M16.216,13.266,10.5,16.532V10Z"
          transform="translate(3.381 -1.671)"
          fill={color ?? "#fff"}
          stroke={color ?? "#fff"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Path_37093"
          data-name="Path 37093"
          d="M2,17.651V15.34c0-4.728,0-7.093,1.479-8.614s3.807-1.587,8.463-1.719c2.206-.062,4.46-.107,6.389-.107s4.183.045,6.389.107c4.656.132,6.984.2,8.463,1.719s1.479,3.885,1.479,8.614v2.311c0,4.728,0,7.093-1.479,8.614s-3.807,1.587-8.463,1.719c-2.206.062-4.46.107-6.389.107s-4.183-.045-6.389-.107c-4.656-.132-6.984-.2-8.463-1.719S2,22.379,2,17.651Z"
          transform="translate(-2 -4.9)"
          fill="none"
          stroke={color ?? "#fff"}
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export default YoutubeOutlineIcon;
