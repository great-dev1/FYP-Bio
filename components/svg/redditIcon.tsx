import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const RedditIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 32.97} height={height ?? 26.3} viewBox="0 0 32.973 26.729"
      className={clsx('reddit-icon', { [className ?? '']: className })}
    >
      <g id="reddit-svgrepo-com" transform="translate(0 -4.059)">
        <path id="Path_37106" data-name="Path 37106"
          d="M32.973,15.667a4.618,4.618,0,0,0-4.637-4.637,4.489,4.489,0,0,0-2.988,1.133A18.2,18.2,0,0,0,16.486,10a18.2,18.2,0,0,0-8.861,2.164A4.489,4.489,0,0,0,4.637,11.03,4.618,4.618,0,0,0,0,15.667a4.831,4.831,0,0,0,2.061,3.916V20.3c0,5.667,6.491,10.3,14.426,10.3s14.426-4.637,14.426-10.3v-.721A4.831,4.831,0,0,0,32.973,15.667Zm-23.7,3.606a3.091,3.091,0,1,1,3.091,3.091A3.036,3.036,0,0,1,9.274,19.274ZM22.257,25.25c-1.133.927-3.709,1.236-5.77,1.236s-4.637-.309-5.77-1.236A1.03,1.03,0,1,1,11.953,23.6a9.236,9.236,0,0,0,4.534.824A9.236,9.236,0,0,0,21.02,23.6a1.03,1.03,0,0,1,1.236,1.649Zm-1.649-2.885A3.091,3.091,0,1,1,23.7,19.274,3.036,3.036,0,0,1,20.608,22.365Z" transform="translate(0 0.181)"
          fill={color ?? '#fff'}
        />
        <g id="Group_47520" data-name="Group 47520" transform="translate(15.517 4.059)">
          <path id="Path_37107"
            data-name="Path 37107"
            d="M16.029,12.241c-.206,0-.309,0-.412-.1A.909.909,0,0,1,15.2,10.8L18.3,4.616a.909.909,0,0,1,1.34-.412l4.122,2.061a.909.909,0,0,1,.412,1.34.909.909,0,0,1-1.34.412L19.635,6.368l-2.679,5.255A.99.99,0,0,1,16.029,12.241Z"
            transform="translate(-15.059 -4.059)"
            fill={color ?? '#fff'}
          />
        </g>
        <g id="Group_47521" data-name="Group 47521" transform="translate(22.669 5.029)">
          <path
            id="Path_37108"
            data-name="Path 37108"
            d="M25.091,11.182A3.036,3.036,0,0,1,22,8.091a3.091,3.091,0,1,1,6.182,0A3.036,3.036,0,0,1,25.091,11.182Z"
            fill={color ?? '#fff'}
            transform="translate(-22 -5)"
          />
        </g>
      </g>
    </svg>
  )
}

export default RedditIcon;
