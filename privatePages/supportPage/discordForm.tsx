import React, { FC } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

import CustomButton from 'components/customButton';
import { DiscordIcon } from 'components/svg';

import sectionImg from 'assets/img/support/discrod-support.webp';
import styles from 'assets/jss/pages/supportPageStyles';
const useStyles = makeStyles(styles);

const DiscordForm: FC = () => {

  const classes = useStyles();

  const theme = useTheme();  
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={classes.discordForm}>
      <Typography variant='h2' fontWeight={700} color='#000'>
        Discord Support
      </Typography>
      <Typography variant='body1' color='#000'>
        Join our Discord community for fast support from our team. Our staff are here to answer all of your questions
      </Typography>
      <Box display='flex'>
        <Image src={sectionImg} alt='' width={827} height={640} unoptimized />
      </Box>
      <CustomButton variant='contained' background='blueGradient' fullWidth boxShadow='none'
        startIcon={<DiscordIcon width={25.4} height={18.8} />}
      >
        {
          isMobile ? 'Submit' : 'Join Discord Server'
        }
      </CustomButton>
    </Box>
  )
}

export default DiscordForm;
