import React, { useState } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import PrivateLayout from 'components/layouts/privateLayout';
import MonetizeCard from './monetizeCard';
import GlobalSummary from 'components/globalSummary';
import MonetizeFooterBanner from 'components/monetizeFooterBanner';

import { monetizeYourFypList } from 'assets/mockdata/monetizeData';
import eyeIcon from 'assets/img/monetize/eye-icon.svg';
import dollarIcon from 'assets/img/monetize/dollar.svg';

import styles from 'assets/jss/pages/monetizePageStyles';
const useStyles = makeStyles(styles);

const MonetizePage = () => {

  const classes = useStyles();

  const [globalTerm, setGlobalTerm] = useState(7);

  return (
    <PrivateLayout title='Main Monetization' className={classes.monetizePage}>
      <Box>
        <Box display='flex' flexWrap='wrap' justifyContent='space-between'>
          <Box className={classes.leftColumn}>
            <Box className={classes.leftInner}>
              <Typography variant='h3' fontWeight={700}>
                Monetize Your FYP
              </Typography>
              <Grid container columnSpacing={3} rowSpacing='18px'>
                {
                  monetizeYourFypList.map((cell) => (
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={4} key={cell.title}>
                      <MonetizeCard data={cell} />
                    </Grid>
                  ))
                }
              </Grid>
            </Box>
          </Box>
          <Box className={classes.rightColumn}>
            <GlobalSummary 
              termValue={globalTerm}
              setTermValue={(val) => setGlobalTerm(val)}
              firstValue='3,928'
              firstLabel={`${globalTerm} Day Views`}
              firstIcon={<Image src={eyeIcon} alt='' width={49.34} height={33.47} />}
              secondValue='$19,928'
              secondLabel='Gross Earnings'
              secondIcon={<Image src={dollarIcon} alt='' width={23.54} height={43.59} />}
              thirdValue='$32,614'
              thirdLabel='Net Earnings'
              thirdIcon={<Image src={dollarIcon} alt='' width={23.54} height={43.59} />}
            />
          </Box>
          <Box className={classes.footerBanner}>
            <MonetizeFooterBanner />
          </Box>
        </Box>
      </Box>
    </PrivateLayout>
  )
}

export default MonetizePage;
