import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const EthIcon: FC<Props> = props => {
  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 18.78} height={height ?? 30.59} viewBox="0 0 18.782 30.588"
      className={clsx('eth-icon', { [className ?? '']: className })}
    >
      <path id="Path_37119" data-name="Path 37119" d="M125.371,0l-.205.7V20.922l.205.2,9.388-5.549Z" transform="translate(-115.983)" fill={color ?? "#fff"} />
      <path id="Path_37120" data-name="Path 37120" d="M9.388,0,0,15.578l9.388,5.55V0Z" fill={color ?? "#fff"} />
      <path id="Path_37121" data-name="Path 37121" d="M126.5,242.134l-.116.141v7.2l.116.338,9.394-13.23Z" transform="translate(-117.113 -219.229)" fill={color ?? "#fff"} />
      <path id="Path_37122" data-name="Path 37122" d="M9.388,249.815v-7.683L0,236.585Z" transform="translate(0 -219.227)" fill={color ?? "#fff"} />
      <path id="Path_37123" data-name="Path 37123" d="M127.961,163.976l9.388-5.549-9.388-4.267Z" transform="translate(-118.573 -142.849)" fill={color ?? "#fff"} />
      <path id="Path_37124" data-name="Path 37124" d="M0,158.426l9.388,5.549v-9.817Z" transform="translate(-0.001 -142.849)" fill={color ?? "#fff"} />
    </svg>
  );
};

export default EthIcon;
