import React, { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const JqueryIcon: FC<Props> = (props) => {

  const { className, color, width, height } = props;

  return (
    <svg width={width ?? 16.83} height={height ?? 16.22} viewBox="0 0 16.834 16.221"
      className={clsx('jquery-icon', { [className ?? '']: className })}
    >
      <g transform="translate(-2.086 -2.447)">
        <path d="M3.155,6.673a7.071,7.071,0,0,0-.166,7.206l.083.161c.018.034.035.07.053.1s.022.04.033.059q.08.148.168.292l.062.1q.087.142.179.28t.188.271l.031.042c.053.075.11.149.166.222l.063.08.155.189.059.07c.07.082.142.165.214.245l0,0a.045.045,0,0,1,.008.009c.07.077.144.154.217.23l.07.07.174.171.071.068c.078.074.158.146.239.217l0,0,.042.035c.07.062.143.123.217.183l.089.071q.234.188.48.36c.025.018.048.036.074.053l.02.014c.065.045.131.087.2.13.028.019.056.038.086.057q.366.233.752.432c.055.029.11.058.166.086l.038.019.068.033c.087.041.174.082.262.121l.056.025c.1.044.2.087.306.127l.075.03q.161.063.324.121c.106.037.214.072.323.105l.078.024a3.079,3.079,0,0,0,.331.093c7.21,1.314,9.3-4.332,9.3-4.332-1.759,2.291-4.88,2.9-7.839,2.223-.112-.025-.222-.06-.331-.093l-.082-.025q-.325-.1-.641-.224L9.543,16.4c-.1-.04-.2-.082-.3-.126l-.06-.026q-.129-.058-.256-.119L8.851,16.1c-.066-.032-.132-.067-.2-.1-.043-.023-.088-.045-.132-.07q-.119-.064-.236-.132l-.08-.044q-.156-.092-.308-.189l-.083-.055q-.111-.071-.22-.146l-.07-.05c-.07-.049-.139-.1-.207-.149q-.141-.106-.278-.217l-.084-.067c-.078-.065-.156-.129-.233-.2q-.138-.12-.271-.245c-.024-.022-.047-.043-.069-.066q-.09-.085-.177-.172l-.069-.069q-.11-.112-.216-.228l-.01-.01q-.112-.123-.219-.249l-.057-.069q-.11-.131-.216-.266t-.183-.243A7.6,7.6,0,0,1,4.318,5.2" transform="translate(0 -0.415)" fill={color ?? '#fff'} />
        <path d="M8.65,4.588a5.182,5.182,0,0,0-.178,5.268,6.925,6.925,0,0,0,.476.8,3.781,3.781,0,0,0,.555.693c.078.086.159.169.241.25l.065.063c.08.078.161.155.247.23l.009.008,0,0c.094.082.19.161.289.239l.066.051q.152.118.311.228c.045.031.092.061.137.091.022.014.043.03.066.043q.126.081.256.156c.065.037.132.074.2.11.022.013.047.025.07.037.047.024.092.048.138.07q.153.076.31.145l.063.026c.079.033.158.065.239.1l.1.037c.073.027.145.051.217.076l.1.031a2.467,2.467,0,0,0,.314.091c5.566.922,6.85-3.363,6.85-3.363a5.288,5.288,0,0,1-5.795,1.842q-.32-.083-.631-.2l-.1-.037q-.151-.058-.3-.123t-.292-.135l-.144-.074-.084-.043q-.231-.125-.453-.266l-.068-.045q-.264-.172-.511-.369A6.713,6.713,0,0,1,9.138,7.378a5.027,5.027,0,0,1,.392-4.033" transform="translate(-0.869 -0.135)" fill={color ?? '#fff'} />
        <path d="M13.283,3.1a3.243,3.243,0,0,0-.258,3.13A4.41,4.41,0,0,0,15.556,8.6q.1.037.2.067a1.554,1.554,0,0,0,.2.057,3.432,3.432,0,0,0,4.128-1.9c-.73,1.052-1.958,1.3-3.462.938a4.447,4.447,0,0,1-1.557-.755,3.7,3.7,0,0,1-1.3-4.561" transform="translate(-1.608)" fill={color ?? '#fff'} />
      </g>
    </svg>
  )
}

export default JqueryIcon;