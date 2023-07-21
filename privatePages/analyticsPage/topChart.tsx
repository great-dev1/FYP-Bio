import React, { FC, useState, useRef, useEffect } from "react";
import clsx from "clsx";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TopChartTabCell from "./topChartTabCell";
import CardActions from "./cardActions";

import { topChartOptions } from "assets/mockdata/analyticsData";
import styles from "assets/jss/pages/analyticsPageStyles";
const useStyles = makeStyles(styles);

const TopChart: FC = () => {
  const chartRef = useRef<HighchartsReact.RefObject>(null);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [tab, setTab] = useState("users");
  const [day, setDay] = useState(7);

  useEffect(() => {
    const chart = chartRef.current?.chart;
    if (chart) {
      if (isMobile) {
        chart.update({
          xAxis: {
            categories: ["Jan 13th", "Jan 14th", "Jan 15th", "Jan 16th"]
          },
          series: [
            {
              data: [10, 21, 15, 6],
              color: "#54AAF5",
              name: "Line 1",
              type: "line",
              marker: {
                enabled: false
              }
            },
            {
              data: [12, 23, 17, 17],
              color: "#54AAF5",
              name: "Line 2",
              type: "line",
              dashStyle: "ShortDash",
              marker: {
                enabled: false
              }
            }
          ]
        });
      } else {
        chart.update({
          xAxis: {
            categories: [
              "Jan 13th",
              "Jan 14th",
              "Jan 15th",
              "Jan 16th",
              "Jan 17th",
              "Jan 18th",
              "Jan 19th",
              "Jan 20th",
              "Jan 21th",
              "Jan 22th",
              "Jan 23th"
            ]
          },
          series: [
            {
              data: [10, 21, 15, 6, 19, 27, 23, 14, 11, 16, 9],
              color: "#54AAF5",
              name: "Line 1",
              type: "line",
              marker: {
                enabled: false
              }
            },
            {
              data: [12, 23, 17, 17, 15, 23, 16, 8, 3, 12, 23],
              color: "#54AAF5",
              name: "Line 2",
              type: "line",
              dashStyle: "ShortDash",
              marker: {
                enabled: false
              }
            }
          ]
        });
      }
    }
  }, [isMobile]);

  return (
    <Box className={clsx(classes.topChart, classes.borderCard)}>
      <Box
        className={classes.topChartHeader}
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Typography variant="h6" fontWeight={700}>
          Overall Graph
        </Typography>
        <Box className={classes.topChartTab} display="flex" position="relative">
          <TopChartTabCell
            title="Users"
            value="263k"
            trending="1.6k"
            selected={tab === "users"}
            handleClick={() => setTab("users")}
          />
          <TopChartTabCell
            title="Sessions"
            value="213k"
            trending="2.2k"
            selected={tab === "sessions"}
            handleClick={() => setTab("sessions")}
          />
          <TopChartTabCell
            title="Clicks"
            value="117k"
            trending="3.1k"
            selected={tab === "clicks"}
            handleClick={() => setTab("clicks")}
          />
          <TopChartTabCell
            title="CTR"
            value="18.03%"
            trending="2.2k"
            selected={tab === "ctr"}
            handleClick={() => setTab("ctr")}
          />
        </Box>
        <Box>
          <CardActions
            handleChangeDay={val => {
              console.log(val);
            }}
          />
        </Box>
      </Box>
      <Box className={classes.topChartInner}>
        <HighchartsReact
          highcharts={Highcharts}
          options={topChartOptions}
          containerProps={{ style: { height: "260px" } }}
          ref={chartRef}
        />
      </Box>
    </Box>
  );
};

export default TopChart;
