import React, { FC, useState, useRef } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import { ITemplate } from 'types';
import styles from 'assets/jss/components/templatesStyles';
const useStyles = makeStyles(styles);

interface Props {
  template: ITemplate;
  onSelect: () => void;
  active?: boolean;
  avatar?: React.ReactNode
}

const TemplateItem: FC<Props> = (props) => {

  const { template, onSelect, active, avatar } = props;
  const classes = useStyles();

  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const classNames = clsx(
    classes.templateItem,
    {
      [classes.onlyFansType]: template.type === 'onlyfans',
      [classes.minimalType]: template.type === 'minimal',
      [classes.glassType]: template.type === 'glass',
      [classes.snowType]: template.type === 'snow',
      [classes.neonType]: template.type === 'neon',
      [classes.threeDType]: template.type === '3d',
      [classes.backgroundType]: template.type === 'background',
      [classes.solidColorType]: template.type === 'solidColor',
      [classes.backgroundPhotoType]: template.type === 'backgroundPhoto',
      [classes.backgroundVideoType]: template.type === 'backgroundVideo',
      [classes.gradientType]: template.type === 'gradient',
      [classes.coverPhotoType]: template.type === 'coverPhoto'
    }
  );

  const handleToggleVideo = () => {
    if (playing) {
      videoRef.current?.pause();
      setPlaying(false);
    } else {
      videoRef.current?.play();
      setPlaying(true);
    }
  }

  return (
    <Box className={classNames}>      
      <Box
        className={clsx('template-head', classes.templateHead, { [classes.activeHead]: active, 'active': active })}
        onClick={onSelect}
        position='relative'
      >
        {avatar}
        <Box className='template-head-lines' position='relative'>
          <Box className='template-head-line'></Box>
          <Box className='template-head-line'></Box>
          <Box className='template-head-line'></Box>
        </Box>
        {
          template.type === 'backgroundPhoto' && (
            <Box className={clsx('template-head-background', classes.templateHeadBackground)} position='absolute' display='flex'>
              <Image src={template.backgroundImage ?? ''} alt='' unoptimized />
            </Box>
          )
        }
        {
          template.type === 'coverPhoto' && (
            <Box className={clsx('template-cover-photo', classes.templateHeadCoverPhoto)} position='absolute' display='flex'>
              <Image src={template.coverImg ?? ''} alt='' unoptimized />
            </Box>
          )
        }
        {
          template.type === 'backgroundVideo' && (
            <Box position='absolute' display='flex' className={clsx('template-background-video', classes.templateHeadVideo)}>
              <Button onClick={handleToggleVideo} className='video-toggle-btn'>
                {
                  playing ? <PauseIcon /> : <PlayArrowIcon />
                }
              </Button>
              <video loop autoPlay={false} ref={videoRef} muted>
                <source src='/video/video.mp4' type='video/mp4' />
              </video>
            </Box>
          )
        }
      </Box>
      <Typography variant='body1' align='center' fontWeight={700} className='template-title'>
        {template.title}
      </Typography>
    </Box>
  )
}

export default TemplateItem;
