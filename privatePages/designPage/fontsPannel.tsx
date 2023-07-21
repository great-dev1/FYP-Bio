import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import CustomButton from 'components/customButton';

import { fontsList } from 'assets/mockdata/designData';
import styles from 'assets/jss/pages/designPageStyles';
const useStyles = makeStyles(styles);

const FontsPannel: FC = () => {

  const classes = useStyles();

  const [font, setFont] = useState('');
  
  const theme = useTheme();  
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={clsx(classes.themePannel, classes.fontsPannel)}>
      <Typography variant='h5'>
        Select Fonts
      </Typography>
      <Grid container columnSpacing={{ xs: '9px', sm: '9px', md: '11px' }} rowSpacing={{ xs: '8px', sm: '8px', md: '11px' }}>
        {
          fontsList.map((cell, index) => (
            <Grid item xs={4} sm={4} md={3} lg={2} xl={1.5} key={`${cell.title}-${index}`}>
              <CustomButton fullWidth 
                onClick={() => setFont(cell.font)}
                className={clsx({[classes.activeFont]: font === cell.font})}
              >
                <Typography variant='body1' 
                  fontSize={isMobile ? cell.smFontSize : cell.fontSize} 
                  lineHeight={1.2} fontWeight={cell.fontWeight} fontFamily={cell.font}>
                  {cell.title}
                </Typography>
              </CustomButton>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}

export default FontsPannel;
