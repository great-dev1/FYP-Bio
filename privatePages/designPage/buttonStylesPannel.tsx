import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import CustomButton from 'components/customButton';

import styles from 'assets/jss/pages/designPageStyles';
const useStyles = makeStyles(styles);

const ButtonStylesPannel: FC = () => {

  const classes = useStyles();
 
  const [btnStyle, setBtnStyle] = useState('');

  return (
    <Box className={classes.themePannel}>
      <Typography variant='h5'>
        Select Button Style
      </Typography>
      <Grid container columnSpacing='16px' rowSpacing={{xs: '10px', sm: '10px', md: '22px'}}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
          <Box className={classes.buttonGroup}>
            <Typography variant='h6' fontWeight={700}>
              Fill Buttons
            </Typography>
            <Grid container columnSpacing={{ xs: '8px', sm: '8px', md: '14px' }}>
              <Grid item xs={4}>
                <CustomButton
                  fullWidth variant='contained' boxShadow='none' background='yellow'
                  rounded='none'
                  className={clsx({ [classes.activeBtnStyle]: btnStyle === 'fill-1' })}
                  onClick={() => setBtnStyle('fill-1')}
                >
                </CustomButton>
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  fullWidth variant='contained' boxShadow='none' background='yellow'
                  className={clsx('medium-btn', { [classes.activeBtnStyle]: btnStyle === 'fill-2' })}
                  onClick={() => setBtnStyle('fill-2')}
                >
                </CustomButton>
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  fullWidth variant='contained' boxShadow='none' background='yellow'
                  className={clsx({ [classes.activeBtnStyle]: btnStyle === 'fill-3' })}
                  onClick={() => setBtnStyle('fill-3')}
                >
                </CustomButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
          <Box className={classes.buttonGroup}>
            <Typography variant='h6' fontWeight={700}>
              Outline Buttons
            </Typography>
            <Grid container columnSpacing={{ xs: '8px', sm: '8px', md: '14px' }}>
              <Grid item xs={4}>
                <CustomButton
                  fullWidth variant='outlined' boxShadow='none'
                  sx={{ borderColor: '#F69D00 !important' }}
                  rounded='none'
                  className={clsx({ [classes.activeBtnStyle]: btnStyle === 'outlined-1' })}
                  onClick={() => setBtnStyle('outlined-1')}
                >
                </CustomButton>
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  fullWidth variant='outlined' boxShadow='none'
                  sx={{ borderColor: '#F69D00 !important' }}
                  className={clsx('medium-btn', { [classes.activeBtnStyle]: btnStyle === 'outlined-2' })}
                  onClick={() => setBtnStyle('outlined-2')}
                >
                </CustomButton>
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  fullWidth variant='outlined' boxShadow='none'
                  sx={{ borderColor: '#F69D00 !important' }}
                  className={clsx({ [classes.activeBtnStyle]: btnStyle === 'outlined-3' })}
                  onClick={() => setBtnStyle('outlined-3')}
                >
                </CustomButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
          <Box className={classes.buttonGroup}>
            <Typography variant='h6' fontWeight={700}>
              Soft Shadow Buttons
            </Typography>
            <Grid container columnSpacing={{ xs: '8px', sm: '8px', md: '14px' }}>
              <Grid item xs={4}>
                <CustomButton
                  fullWidth variant='contained' boxShadow='soft' background='yellow'
                  rounded='none'
                  className={clsx({ [classes.activeBtnStyle]: btnStyle === 'soft-shadow-1' })}
                  onClick={() => setBtnStyle('soft-shadow-1')}
                >
                </CustomButton>
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  fullWidth variant='contained' boxShadow='soft' background='yellow'
                  className={clsx('medium-btn', { [classes.activeBtnStyle]: btnStyle === 'soft-shadow-2' })}
                  onClick={() => setBtnStyle('soft-shadow-2')}
                >
                </CustomButton>
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  fullWidth variant='contained' boxShadow='soft' background='yellow'
                  className={clsx({ [classes.activeBtnStyle]: btnStyle === 'soft-shadow-3' })}
                  onClick={() => setBtnStyle('soft-shadow-3')}
                >
                </CustomButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
          <Box className={classes.buttonGroup}>
            <Typography variant='h6' fontWeight={700}>
              Hard Shadow
            </Typography>
            <Grid container columnSpacing={{ xs: '8px', sm: '8px', md: '14px' }}>
              <Grid item xs={4}>
                <CustomButton
                  fullWidth variant='contained' boxShadow='hard' background='yellow'
                  rounded='none'
                  className={clsx({ [classes.activeBtnStyle]: btnStyle === 'hard-shadow-1' })}
                  onClick={() => setBtnStyle('hard-shadow-1')}
                >
                </CustomButton>
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  fullWidth variant='contained' boxShadow='hard' background='yellow'
                  className={clsx('medium-btn', { [classes.activeBtnStyle]: btnStyle === 'hard-shadow-2' })}
                  onClick={() => setBtnStyle('hard-shadow-2')}
                >
                </CustomButton>
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  fullWidth variant='contained' boxShadow='hard' background='yellow'
                  className={clsx({ [classes.activeBtnStyle]: btnStyle === 'hard-shadow-3' })}
                  onClick={() => setBtnStyle('hard-shadow-3')}
                >
                </CustomButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ButtonStylesPannel;
