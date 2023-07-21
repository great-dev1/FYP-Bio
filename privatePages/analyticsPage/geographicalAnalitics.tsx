import React, { FC, useState, useEffect } from "react";
import clsx from "clsx";
import axios from "axios";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CardActions from "./cardActions";
import LegendLabel from "./legendLabel";

import { geographicalChartOptions } from "assets/mockdata/analyticsData";
import styles from "assets/jss/pages/analyticsPageStyles";
const useStyles = makeStyles(styles);

const GeographicalAnalitics: FC = () => {
  const classes = useStyles();

  const [day, setDay] = useState(7);

  const [chartOptions, setChartOptions] = useState<any>({
    ...geographicalChartOptions
  });

  useEffect(() => {
    axios
      .get(
        "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population-density.json"
      )
      .then(res => {
        setChartOptions({
          series: [
            {
              name: "Visitors",
              states: {
                hover: {
                  color: "#BADA55"
                }
              },
              dataLabels: {
                enabled: false,
                format: "{point.name}"
              },
              // allAreas: true,
              borderWidth: 0,
              data: res.data.map((cell: any) => [
                cell.code.toLowerCase(),
                Math.round(cell.value)
              ])
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Box className={clsx(classes.borderCard, classes.commonCard)}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Typography variant="h6" fontWeight={600} className="card-title">
          Geographical Analitics
        </Typography>
        <CardActions
          handleChangeDay={val => {
            console.log(val);
          }}
          sx={{ ml: "auto" }}
        />
      </Box>
      <Box className={classes.geoChart}>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          constructorType={"mapChart"}
        />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        className={classes.geoChartLegend}
      >
        <LegendLabel color="#F1E5F4" title="10+ Visitors" />
        <LegendLabel color="#E8C3F1" title="100+ Visitors" />
        <LegendLabel color="#BB14E2" title="1000+ Visitors" />
      </Box>
    </Box>
  );
};

export default GeographicalAnalitics;
