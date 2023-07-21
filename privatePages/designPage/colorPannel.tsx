import React, { FC, useState } from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import ColorTextField from './colorTextField';

import styles from 'assets/jss/pages/designPageStyles';
const useStyles = makeStyles(styles);

const ColorPannel: FC = () => {

  const classes = useStyles();

  const [backgroundColor, setBackgroundColor] = useState('#F5D59C');
  const [btnBackColor, setBtnBackColor] = useState('#F69D00');
  const [fontColor, setFontColor] = useState('#000000');
  const [iconColor, setIconColor] = useState('#9F83EB');

  return (
    <Box className={classes.themePannel}>
      <Grid
        container
        rowSpacing={{ xs: '15px', sm: '15px', md: '20px', lg: '20px' }}
        columnSpacing={{ sm: '20px', md: '30px', xl: '30px' }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Box className={classes.colorPickerItem}>
            <Typography variant='body1'>
              Select Background Color
            </Typography>
            <ColorTextField color={backgroundColor} onChange={(val) => setBackgroundColor(val)} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Box className={classes.colorPickerItem}>
            <Typography variant='body1'>
              Button Background Color
            </Typography>
            <ColorTextField color={btnBackColor} onChange={(val) => setBtnBackColor(val)} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Box className={classes.colorPickerItem}>
            <Typography variant='body1'>
              Select Font Color
            </Typography>
            <ColorTextField color={fontColor} onChange={(val) => setFontColor(val)} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Box className={classes.colorPickerItem}>
            <Typography variant='body1'>
              Select Icon Color
            </Typography>
            <ColorTextField color={iconColor} onChange={(val) => setIconColor(val)} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ColorPannel;
