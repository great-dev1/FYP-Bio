import React, { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import { CloseIcon } from 'components/svg';

import anchorLeftIcon from 'assets/img/share-ui/anchor-left.svg';

import styles from 'assets/jss/components/shareInterfaceDialogStyles';
const useStyles = makeStyles(styles);

interface Props {
  title: string;
  subTitle?: string;
  handleClose: () => void;
  showPrev?: boolean;
  handleClickPrev?: () => void;
  className?: string;
}

const TitleBox: FC<Props> = (props) => {

  const { title, subTitle, handleClose, showPrev, handleClickPrev, className } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(classes.titleBox, { [className ?? '']: className })}>
      <Box position='relative' className='title' mb={1}>
        {
          showPrev && (
            <IconButton className='prev-btn' onClick={handleClickPrev}>
              <Image src={anchorLeftIcon} alt='' width={6.83} height={12.64} />
            </IconButton>
          )
        }
        <Typography variant='h1' fontWeight={700} color='#000' fontSize={20} lineHeight='28px' align='center'>
          {title}
        </Typography>
        <IconButton className='close-btn' onClick={handleClose}>
          <CloseIcon color='#000' width={11.82} height={11.82} />
        </IconButton>
      </Box>
      {
        subTitle && (
          <Typography variant='body1' align='center' fontSize={14} fontWeight={300} color='#000' lineHeight='21px'>
            {subTitle}
          </Typography>
        )
      }
    </Box>
  )
}

export default TitleBox;
