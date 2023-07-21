import React, { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import styles from 'assets/jss/components/exploreEmbedsStyles';
const useStyles = makeStyles(styles);

interface Props {
  data: any,
  showAddBtn?: boolean,
  onClickAdd?: () => void;
}

const ContentItem: FC<Props> = (props) => {

  const { data, showAddBtn, onClickAdd } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(classes.contentItem, 'content-item')} display='flex' alignItems='center' position='relative'>
      <Box className='icon-box' display='flex' alignItems='center' justifyContent='center'>
        <Image src={data.img} alt='' width={data.imgWidth} height={data.imgHeight} />
      </Box>
      <Box>
        <Typography variant='h6' color='#000' fontSize={14} lineHeight='20px' fontWeight={500}>
          {data.title}
        </Typography>
        <Typography variant='body1' fontSize={14} lineHeight='20px' fontWeight={300} color='#000'>
          {data.text}
        </Typography>
      </Box>
      {
        showAddBtn && (
          <Link variant='button' color='#3333DA' className='add-btn' underline='none' onClick={onClickAdd}>
            Add
          </Link>
        )
      }
    </Box>
  )
}

export default ContentItem;
