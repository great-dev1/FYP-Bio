import React from "react";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import PrivateLayout from "components/layouts/privateLayout";
import TopChart from "./topChart";
import TopLinks from "./topLinks";
import TopReferrers from "./topReferrers";
import GeographicalAnalitics from "./geographicalAnalitics";
import RetentionTime from "./retentionTime";
import FunnelTraffic from "./funnelTraffic";
import DeviceAnalytics from "./deviceAnalytics";
import EmailAnalytics from "./emailAnalytics";

import styles from "assets/jss/pages/analyticsPageStyles";
const useStyles = makeStyles(styles);

const AnalyticsPage = () => {
  
  const classes = useStyles();

  return (
    <PrivateLayout title="Analytics Page">
      <Box className={classes.wrapper}>
        <Grid container columnSpacing="20px" rowSpacing={3}>
          <Grid item xs={12} sm={12} lg={8} xl={8} width="100%">
            <TopChart />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} width="100%">
            <TopLinks />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} width="100%">
            <TopReferrers />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} width="100%">
            <GeographicalAnalitics />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} width="100%">
            <RetentionTime />
          </Grid>
          <Grid item xs={12} width="100%">
            <FunnelTraffic />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} width="100%">
            <DeviceAnalytics />
          </Grid>
          <Grid item xs={12} sm={12} lg={8} xl={8} width="100%">
            <EmailAnalytics />
          </Grid>
        </Grid>
      </Box>
    </PrivateLayout>
  );
};

export default AnalyticsPage;
