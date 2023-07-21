import React, { FC } from 'react';
import Image, { StaticImageData, ImageProps } from 'next/image';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface Props extends ImageProps {
  src: StaticImageData | string;
  width: number;
  height: number;
  mdWidth?: number;
  mdHeight?: number;
}

const CustomImage: FC<Props> = (props) => {

  const { src, width, alt, height, mdWidth, mdHeight, ...otherProps } = props;  
  const theme = useTheme();  
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Image src={src} alt={alt} width={isMobile ? mdWidth: width} height={isMobile ? mdHeight : height} {...otherProps} />
  )
}

export default CustomImage;
