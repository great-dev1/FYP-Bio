import React, { FC, useState } from 'react';
import clsx from 'clsx';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CardActions from "./cardActions";

import { retentionChartOptions } from 'assets/mockdata/analyticsData';
import menuIcon from 'assets/img/analytics/menu-white.png';

import styles from 'assets/jss/pages/analyticsPageStyles';
const useStyles = makeStyles(styles);

const RetentionTime: FC = () => {

  const classes = useStyles();

  const [day, setDay] = useState(7);

  return (
    <Box className={clsx(classes.borderCard, classes.commonCard, classes.rententionTimeCard)}>
      <Box display='flex' justifyContent='space-between' alignItems='center' flexWrap='wrap'>
        <Typography variant='h6' fontWeight={600} className='card-title'>
          Retention Time
        </Typography>
        <CardActions
          handleChangeDay={val => {
            console.log(val);
          }}
          sx={{ ml: "auto" }}
          customImage={menuIcon}
        />
      </Box>
      <Box className={classes.retentionChart}>
        <HighchartsReact
          highcharts={Highcharts}
          options={retentionChartOptions}
          containerProps={{ style: { height: "290px" } }}
        />
      </Box>
    </Box>
  )
}

export default RetentionTime;
