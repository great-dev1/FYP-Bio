import React, { FC, useRef, useEffect } from "react";
import clsx from "clsx";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CardActions from "./cardActions";
import LegendLabel from "./legendLabel";

import { topReffersChartOptions } from "assets/mockdata/analyticsData";
import styles from "assets/jss/pages/analyticsPageStyles";
const useStyles = makeStyles(styles);

const TopReferrers: FC = () => {
  const chartRef = useRef<HighchartsReact.RefObject>(null);
  const charWrappertRef = useRef<HTMLDivElement>(null);
  const classes = useStyles();  

  const updateSize = () => {
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

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [charWrappertRef]);  

  return (
    <Box className={clsx(classes.borderCard, classes.commonCard)}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Typography variant="h6" fontWeight={600} className="card-title">
          Top Referrers
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
          <LegendLabel color="#4BB7DF" title="Facebook" value="50k" />
          <LegendLabel color="#FFEEAB" title="Snapchat" value="40k" />
          <LegendLabel color="#E8EDA8" title="Instagram" value="30k" />
          <LegendLabel color="#52D2CF" title="Twitter" value="20k" />
          <LegendLabel color="#DFD25A" title="Linktree" value="10k" />
          <LegendLabel color="#EC4AF8" title="Google" value="5k" mb={0} />
        </Box>
        <Box className={classes.donutChart} ref={charWrappertRef}>
          <HighchartsReact
            highcharts={Highcharts}
            options={topReffersChartOptions}
            containerProps={{ width: "100%" }}
            ref={chartRef}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TopReferrers;
