import React, { FC } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { DNDTrigger, DNDItem } from 'components/dndWidget';

import triggerIcon from 'assets/img/dndTrigger.svg';

import styles from 'assets/jss/pages/editPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  index: number,
  data: any
}

const PinnedSocialItem: FC<Props> = (props) => {

  const { index, data } = props;
  const classes = useStyles();

  return (
    <DNDItem key={`item-${index}`} index={index} className={classes.dndItem}>
      <DNDTrigger className={classes.dndTriggerIcon}>
        <Image src={triggerIcon.src} alt="" width={10} height={17} />
      </DNDTrigger>
      <DNDTrigger className='contents-box'>
        <Box display='flex' alignItems='center'>
          <Box className='social-icon' display='flex' justifyContent='center'>
            <Image src={data.icon} alt="" width={data.width} height={data.height} />
          </Box>
          <Typography variant='body1' color='#000' fontSize={14} lineHeight='20px'>
            {data.name}
          </Typography>
          <Link href='/' underline='hover'>
            @jkndif
          </Link>
        </Box>
      </DNDTrigger>
    </DNDItem>
  )
}

export default PinnedSocialItem;
