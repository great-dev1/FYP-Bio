import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const SpeakerIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg
      width={width ?? 21.2}
      height={height ?? 17.13}
      viewBox="0 0 21.2 17.129"
      className={clsx('speaker-icon', { [className ?? '']: className })}
    >
      <g transform="translate(0 1.906)">
        <path
          d="M85.2,86.528c0,.5-.351.7-.779.444l-4.941-2.456a1.765,1.765,0,0,1-.779-1.367V77.7a1.765,1.765,0,0,1,.779-1.367l4.941-2.456c.429-.254.779-.054.779.444Z"
          transform="translate(-74.5 -73.765)"
          fill={color ?? '#fff'}
        />
        <path
          d="M3.062,136.551a.908.908,0,0,1-.906.906H.906A.908.908,0,0,1,0,136.551v-5.48a.908.908,0,0,1,.906-.906h1.25a.908.908,0,0,1,.906.906Z"
          transform="translate(0 -127.152)"
          fill={color ?? '#fff'}
        />
      </g>
      <path
        d="M246.277,110.244a7.635,7.635,0,0,0,.127-9.9c-.031-.037-.063-.073-.1-.106-.287-.287-.574-.329-.787-.115l-.66.66a.494.494,0,0,0,.03.771l.043.049a5.678,5.678,0,0,1-.044,7.284l-.017.02a.482.482,0,0,0-.031.73l.693.693a.487.487,0,0,0,.356.173.528.528,0,0,0,.361-.231Z"
        transform="translate(-231.611 -96.682)"
        fill={color ?? '#fff'}
      />
      <path
        d="M311.071,46.785a12.24,12.24,0,0,0-3.057-8.243l-.042-.049c-.045-.053-.1-.113-.155-.171-.265-.265-.5-.3-.693-.107l-.732.732c-.318.317.029.714.216.927l.036.041a10.342,10.342,0,0,1-.179,13.68c-.109.12-.4.439-.1.737l.773.773a.358.358,0,0,0,.265.116.651.651,0,0,0,.425-.249A12.238,12.238,0,0,0,311.071,46.785Z"
        transform="translate(-289.872 -38.093)"
      />
    </svg>
  )
}

export default SpeakerIcon;
