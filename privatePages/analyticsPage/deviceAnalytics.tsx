import React, { FC, useEffect, useRef } from "react";
import clsx from "clsx";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CardActions from "./cardActions";
import LegendLabel from "./legendLabel";

import { deviceChartOptions } from "assets/mockdata/analyticsData";
import styles from "assets/jss/pages/analyticsPageStyles";
const useStyles = makeStyles(styles);

const DeviceAnalytics: FC = () => {

  const classes = useStyles();

  const chartRef = useRef<HighchartsReact.RefObject>(null);
  const charWrappertRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateSize() {
      const chart = chartRef.current?.chart;
      if (chart) {
        const width = charWrappertRef.current?.offsetWidth as number;
        if (width < 290) {
          if (chart.options.chart) {
            chart.options.chart.height = width;
          }
        } else {
          if (chart.options.chart) {
            chart.options.chart.height = 280;
          }
        }
        chart.reflow();
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [charWrappertRef, chartRef]);

  return (
    <Box className={clsx(classes.borderCard, classes.commonCard)}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Typography variant="h6" fontWeight={600} className="card-title">
          Device Analytics
        </Typography>
        <CardActions
          handleChangeDay={val => {
            console.log(val);
          }}
          sx={{ ml: "auto" }}
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        className={classes.donutChartWrapper}
      >
        <Box className={classes.donutChartLegend}>
          <LegendLabel color="#8AD2FC" title="Mobile" value="25%" />
          <LegendLabel color="#9F83EB" title="Tablet" value="35%" />
          <LegendLabel color="#D39DDF" title="Desktop" value="55%" />
        </Box>
        <Box className={classes.donutChart} ref={charWrappertRef}>
          <HighchartsReact
            ref={chartRef}
            highcharts={Highcharts}
            options={deviceChartOptions}
            containerProps={{
              style: { width: "100%" }
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DeviceAnalytics;
