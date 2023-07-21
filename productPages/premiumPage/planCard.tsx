import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import styles from 'assets/jss/pages/premiumPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  title: string;
  price: string;
  description: string;
  options: string[];
  logoIcon: React.ReactNode;
}

const PlanCard: FC<Props> = (props) => {

  const { title, price, description, logoIcon, options } = props;
  const classes = useStyles();

  const classnames = clsx(
    'plan-card', 
    classes.planCard,
    {
      'free-plan': title=== 'Free',
      [classes.starterPlanCard]: title === 'Starter',
      [classes.premiumPlanCard]: title === 'Premium'
    }
  );

  return (
    <Box className={classnames} position='relative'>
      <Box display='flex' className='plan-logo' position='absolute'>
        {logoIcon}
      </Box>
      <Typography variant='h2' className='plan-title' color='#97989E' fontWeight={400} fontSize={35} lineHeight='49px'>
        {title}
      </Typography>
      <Box display='flex' className='plan-price' alignItems='center' justifyContent='space-between'>
        <Box display='flex' alignItems='center' className='price'>
          <Typography component='span' fontSize={39} lineHeight='1' color='#000' fontFamily='Roboto Mono'>
            $
          </Typography>
          <Typography variant='h3' color='#000' fontWeight={700} fontSize={50} lineHeight='71px'>
            {price}
          </Typography>
        </Box>

        <Box className='unit' display='flex' alignItems='center'>
          <Typography variant='h4' className='unit' color='#000' fontWeight={500} fontSize={30} lineHeight='43px'>
            USD
          </Typography>
          <Typography component='span' fontSize={20} lineHeight='28px' color='#000'>
            / Mo
          </Typography>
        </Box>
      </Box>

      <Typography variant='body1' className='plan-desc' fontSize={22} lineHeight='30px' color='rgba(0, 0, 0, 0.9)'>
        {description}
      </Typography>

      <Box className='divider'></Box>

      <Box display='flex' flexDirection='column' className='options-list'>
        {
          options.map((cell, index) => (
            <Box display='flex' alignItems='center' className='option-item' position='relative' key={index}>
              <Typography variant='body1' fontSize={21} lineHeight='29px' color='#000' fontWeight={500}>
                {cell}
              </Typography>
            </Box>
          ))
        }
      </Box>

      <Button fullWidth variant='contained' className='join-btn'>
        Join Plan
      </Button>
    </Box>
  )
}

export default PlanCard;
