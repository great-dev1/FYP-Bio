import React, { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import CustomImage from 'components/customImage';

import dotImg from 'assets/img/product/level-dot.svg';
import smallDotImg from 'assets/img/product/level-dot-mobile.svg';

import styles from 'assets/jss/pages/discordPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  levelType: string;
  price: number;
  description?: string;
  options: string[];
  role: string
}

const MembershipCard: FC<Props> = (props) => {

  const { levelType, price, description, options, role } = props;
  const classes = useStyles();
  const theme = useTheme();  
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={clsx(classes.membershipCard, {[classes.secretGroupCard]: role === 'Secret Group Member'})} display='flex' flexDirection='column'>
      <Typography variant='body1' fontWeight={600} color='#97989E' className='level-type'>
        {levelType}
      </Typography>
      <Box display='flex' alignItems='center' className='level-price'>
        <Typography variant='h3' fontWeight={700} color='#000'>
          {`$${price}`}
        </Typography>
        <Typography variant='body1' color='#97989E'>
          / Month
        </Typography>
      </Box>
      {
        description && (
          <Typography variant='body1' fontWeight={700} color='#5B5D65' className='level-desc'>
            {description}
          </Typography>
        )
      }
      <Box className='options-list'>
        <Grid container rowSpacing={{ xs: '20px', md: '24px' }}>
          {
            options.map((cell, index) => (
              <Grid item xs={12} key={index}>
                <Box display='flex' alignItems='flex-start' className='level-option'>
                  {
                    isMobile ? <Image src={smallDotImg} alt='' width={14} height={15} /> : <Image src={dotImg} alt='' width={22} height={23} />
                  }
                  <Typography variant='body1' color='#000'>
                    {cell}
                  </Typography>
                </Box>
              </Grid>
            ))
          }
        </Grid>
      </Box>

      <Box className='roles-box'>
        <Typography variant='h4' color='#5B5D65' className='roles-given' fontWeight={700}>
          Roles Given
        </Typography>
        <Box
          className={clsx('roles-type', {
            [classes.behindScenes]: role === 'Behind Scenes',
            [classes.secretGroup]: role === 'Secret Group Member',
            [classes.oneToOne]: role === 'One on One'
          })}
          display='flex' alignItems='center'
        >
          <Box></Box>
          <Typography variant='body1'>
            {role}
          </Typography>
        </Box>
      </Box>

      <Button fullWidth variant='contained' className={clsx('join-btn', { 'center-join-btn': role === 'Secret Group Member' })}>
        Join Plan
      </Button>

      <Link href='/' underline='hover' className='more-link'>
        Learn More
      </Link>
    </Box>
  )
}

export default MembershipCard;
