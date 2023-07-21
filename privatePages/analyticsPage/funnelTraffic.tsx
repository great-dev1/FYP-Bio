import React, { FC, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";

import CardActions from "./cardActions";
import CustomButton from "components/customButton";
import CustomImage from "components/customImage";

import { trafficList } from "assets/mockdata/analyticsData";
import funnelBgImg from "assets/img/analytics/funnel.png";
import avatarImg from "assets/img/avatar-1.webp";

import styles from "assets/jss/pages/analyticsPageStyles";
const useStyles = makeStyles(styles);

const FunnelTraffic: FC = () => {
  const classes = useStyles();

  const [day, setDay] = useState(7);
  const [funnel, setFunnel] = useState("Traffic");

  return (
    <Box className={clsx(classes.borderCard)}>
      <Grid container columnSpacing="20px">
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Box className={classes.commonCard}>
            <Box
              display="flex"
              justifyContent="space-between"
              flexWrap="wrap"
              alignItems="center"
              className={classes.funnelTitle}
            >
              <Typography variant="h6" fontWeight={600} className="card-title">
                Your Funnel
              </Typography>
              <CardActions
                handleChangeDay={val => {
                  console.log(val);
                }}
              />
              <Typography variant="body1" fontWeight={300}>
                Traffic In
                <span>1</span>
              </Typography>
            </Box>

            <Box
              className={classes.funnelContents}
              display="flex"
              justifyContent="space-between"
            >
              <Box
                className={classes.funnelImgs}
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                <CustomImage
                  src={funnelBgImg}
                  alt=""
                  width={238}
                  height={202}
                  mdWidth={144}
                  mdHeight={122}
                />
                <Box>
                  <CustomImage
                    src={avatarImg}
                    alt=""
                    width={81}
                    height={83}
                    mdWidth={50}
                    mdHeight={50}
                  />
                </Box>
              </Box>
              <Box className={classes.funnelBtns}>
                <CustomButton
                  fullWidth
                  background="greyFill"
                  className={clsx({
                    [classes.activeFunnelBtn]: funnel === "Traffic"
                  })}
                  onClick={() => setFunnel("Traffic")}
                >
                  Traffic
                </CustomButton>
                <CustomButton
                  fullWidth
                  background="greyFill"
                  className={clsx({
                    [classes.activeFunnelBtn]: funnel === "Clicks"
                  })}
                  onClick={() => setFunnel("Clicks")}
                >
                  Clicks
                </CustomButton>
                <CustomButton
                  fullWidth
                  background="greyFill"
                  className={clsx({
                    [classes.activeFunnelBtn]: funnel === "Sales"
                  })}
                  onClick={() => setFunnel("Sales")}
                >
                  Sales
                </CustomButton>
                <CustomButton
                  fullWidth
                  background="greyFill"
                  className={clsx({
                    [classes.activeFunnelBtn]: funnel === "Tips"
                  })}
                  onClick={() => setFunnel("Tips")}
                >
                  Tips
                </CustomButton>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <Box className={classes.commonCard}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              className={classes.trafficTitle}
            >
              <Typography variant="h6" fontWeight={600} className="card-title">
                Traffic In
                <span>1</span>
              </Typography>
              <CardActions
                handleChangeDay={val => {
                  console.log(val);
                }}
              />
            </Box>
            <Box className={classes.trafficContents}>
              {trafficList.map(cell => (
                <Box
                  display="flex"
                  alignItems="center"
                  className={clsx(classes.trafficCell)}
                  key={cell.title}
                >
                  <Box
                    className={classes.trafficImgCell}
                    display="flex"
                    justifyContent="center"
                  >
                    <Image
                      src={cell.icon}
                      alt=""
                      width={cell.width}
                      height={cell.height}
                    />
                  </Box>
                  <Box
                    className={clsx(classes.trafficProgress, `${cell.color}`)}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="body1">{cell.title}</Typography>
                      <Typography variant="body1">
                        1&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;100%
                      </Typography>
                    </Box>
                    <LinearProgress
                      value={cell.progress}
                      variant="determinate"
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FunnelTraffic;
