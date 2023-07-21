import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import CustomButton from 'components/customButton';

import styles from 'assets/jss/pages/designPageStyles';
const useStyles = makeStyles(styles);


const ButtonTransparencyPannel: FC = () => {

  const classes = useStyles();

  const [transparency, setTransparency] = useState(100);

  return (
    <Box className={clsx(classes.themePannel, classes.btnTransparencyPannel)}>
      <Typography variant='h5'>
        Select Button Transparency
      </Typography>
      <Grid container columnSpacing={{ xs: '11px', sm: '11px', md: '20px' }} rowSpacing={{ xs: '10px', sm: '10px', md: '20px' }}>
        {
          [100, 70, 50, 20].map((cell) => (
            <Grid item key={cell} xs={6} sm={6} md={6} lg={6} xl={3}>
              <CustomButton
                fullWidth
                className={clsx({ [classes.activeFont]: transparency === cell })}
                onClick={() => setTransparency(cell)}
              >
                {`${cell}%`}
              </CustomButton>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}

export default ButtonTransparencyPannel;
