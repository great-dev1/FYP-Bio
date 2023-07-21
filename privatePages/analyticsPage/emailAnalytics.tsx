import React, { FC, useState } from "react";
import clsx from "clsx";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import CardActions from "./cardActions";

import { emailSmsChartOptions } from "assets/mockdata/analyticsData";
import styles from "assets/jss/pages/analyticsPageStyles";
const useStyles = makeStyles(styles);

const EmailAnalytics: FC = () => {
  const classes = useStyles();

  const [day, setDay] = useState(7);
  const [tab, setTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Box className={clsx(classes.borderCard, classes.commonCard)} sx={{paddingBottom: '4px !important'}}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        className={classes.emailSmsHeader}
      >
        <Typography variant="h6" fontWeight={600} className="card-title">
          Email & SMS Analytics
        </Typography>
        <Box className={classes.emailSmsTab}>
          <Tabs value={tab} onChange={handleChange}>
            <Tab label="All" />
            <Tab label="Email" />
            <Tab label="Phone" />
          </Tabs>
        </Box>
        <CardActions
          handleChangeDay={val => {
            console.log(val);
          }}
        />
      </Box>
      <Box className={classes.retentionChart}>
        <HighchartsReact
          highcharts={Highcharts}
          options={emailSmsChartOptions}
          containerProps={{ style: { height: "290px" } }}
        />
      </Box>
    </Box>
  );
};

export default EmailAnalytics;
