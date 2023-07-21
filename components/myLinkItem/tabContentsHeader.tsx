import React, { FC } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import closeIcon from 'assets/img/close-red.svg';

import styles from 'assets/jss/components/myLinkItemStyles';

const useStyles = makeStyles(styles);

interface Props {
  icon: React.ReactNode;
  title: string;
  handleRemove: () => void;
}

const TabContentsHeader: FC<Props> = (props) => {

  const { icon, title, handleRemove } = props;
  const classes = useStyles();

  return (
    <Box className={classes.tabContentsHeader} position='relative' display='flex' alignItems='center' justifyContent='center'>
      <Box className={classes.tabContentsHeaderInner} display='flex' alignItems='center' position='relative'>
        {icon}
        <Typography variant='body1' fontWeight={500}>
          {title}
        </Typography>
      </Box>
      <IconButton className={classes.removeBtn} onClick={handleRemove}>
        <Image src={closeIcon} alt='' width={11.33} height={11.33} />
      </IconButton>
    </Box>
  )
}

export default TabContentsHeader;
