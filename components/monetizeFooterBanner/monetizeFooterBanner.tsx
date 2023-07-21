import React, { FC } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ChevronRightIcon } from 'components/svg';

import footerImage from 'assets/img/monetize/monetize-footer.png';
import footerImgMd from 'assets/img/monetize/monetize-footer-full.png';

import styles from 'assets/jss/components/monetizeFooterBannerStyles';
const useStyles = makeStyles(styles);

const MonetizeFooterBanner: FC = () => {

  const classes = useStyles();
  const theme = useTheme();  
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box position='relative' className={classes.monetizeFooterCard}>
      <Box position='relative' zIndex={1} className={classes.contents}>
        <Typography variant='h3' fontWeight={700}>
          Make your FYP Pop Out
        </Typography>
        <Typography variant='body1'>
          Create an amazing first impression by making your FYP page unique and eye-catching.
        </Typography>
        <Button variant='contained'>
          Personalize Your Page&nbsp;
          <ChevronRightIcon width={14} height={14} color='#9E19E3' />
        </Button>
      </Box>
      <Box position='absolute' className={classes.bannerImg} display='flex'>
        {
          isMobile ? <Image src={footerImgMd} alt='' width={494} height={136} unoptimized /> : <Image src={footerImage} alt='' width={500} height={184} unoptimized />
        }
        {/* <Image src={footerImage} alt='' width={500} height={184} /> */}
        
      </Box>
    </Box>
  )
}

export default MonetizeFooterBanner;
