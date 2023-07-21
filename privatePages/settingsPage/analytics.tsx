import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Switch from '@mui/material/Switch';
import Collapse from '@mui/material/Collapse';

import CustomInput from 'components/customInput';
import TabContentsBox from './tabContentsBox';
import MobileMenuItem from './mobileMenuItem';

import { settingsMenuList } from 'assets/mockdata/settingsData';
import styles from 'assets/jss/pages/settingsPageStytles';
const useStyles = makeStyles(styles);

interface Props {
  currentTab: boolean;
  handleSetTab: () => void;
}

const Analytics: FC<Props> = (props) => {

  const { currentTab, handleSetTab } = props;
  const classes = useStyles();

  const [checkUtm, setCheckUtm] = useState(false);

  return (
    <Box className={clsx(classes.tabContent, { [classes.deactiveTab]: !currentTab })} id='analytics'>
      <Typography variant='h3' fontWeight={700} className='tab-title'>
        Analytics
      </Typography>
      <MobileMenuItem
        active={currentTab}
        data={settingsMenuList.find((cell) => cell.title === 'Analytics')}
        handleClick={handleSetTab}
      />
      <TabContentsBox expanded={currentTab}>
        <Box className={classes.analyticsSection}>
          <Grid container
            rowSpacing={{ xs: '32px', sm: '32px', md: '28px', lg: '28px', xl: '28px' }}
            columnSpacing={{ md: '18px', lg: '18px', xl: '18px' }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box className={clsx('google-analytics', classes.analyticsField)}>
                <Typography variant='h6' fontWeight={700}>
                  Google Analytics
                </Typography>
                <Typography variant='body1'>
                  Link for more accurate results
                </Typography>
                <CustomInput
                  onChange={() => { }}
                  placeholder='XXXXXXXXX'
                  fullWidth
                  variant='normal'
                  inputProps={{
                    startAdornment: <InputAdornment position='start'>G - </InputAdornment>
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.analyticsField}>
                <Typography variant='h6' fontWeight={700}>
                  Facebook
                </Typography>
                <Typography variant='body1'>
                  Link to monitor your ad activity
                </Typography>
                <Grid container rowSpacing={{ xs: '16px', sm: '16px', md: '28px', lg: '28px', xl: '28px' }} columnSpacing={{ md: '18px', lg: '18px', xl: '18px' }}>
                  <Grid item xs={12} sm={12} md={6} lg={12} xl={6}>
                    <CustomInput
                      onChange={() => { }}
                      placeholder='Pixel ID'
                      fullWidth
                      variant='normal'
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={12} xl={6}>
                    <CustomInput
                      onChange={() => { }}
                      placeholder='Conversions API Access Token'
                      fullWidth
                      variant='normal'
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ paddingTop: { xs: '16px !important', md: '28px !important' } }}>
              <Box className={clsx(classes.utmParameterLabels, classes.analyticsField)} display='flex' alignItems='center' justifyContent='space-between'>
                <Box>
                  <Typography variant='h6' fontWeight={700}>
                    UTM Parameters
                  </Typography>
                  <Typography variant='body1'>
                    Make Google Analytics show FYP.bio traffic as ‘Social’ Traffic. The campaign parameter is set dynamically from the title of each link.
                  </Typography>
                </Box>
                <Switch checked={checkUtm} onChange={(e) => setCheckUtm(e.target.checked)} className={classes.customSwitch} />
              </Box>
            </Grid>
            <Collapse in={checkUtm} timeout="auto" unmountOnExit>
              <Grid item xs={12} sx={{ paddingTop: { xs: '16px !important', md: '28px !important' } }}>
                <Grid container rowSpacing={{ xs: '16px', sm: '16px', md: '28px', lg: '28px' }} columnSpacing={{ md: '18px', lg: '18px', xl: '18px' }}>
                  <Grid item xs={12} sm={12} md={6} lg={12} xl={6}>
                    <CustomInput
                      onChange={() => { }}
                      placeholder='Social'
                      fullWidth
                      variant='normal'
                      labelText='Medium'
                      className={classes.utmFields}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={12} xl={6}>
                    <CustomInput
                      onChange={() => { }}
                      placeholder='Enter Source'
                      fullWidth
                      variant='normal'
                      labelText='Source'
                      className={classes.utmFields}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Collapse>
          </Grid>
        </Box>
      </TabContentsBox>
    </Box>
  )
}

export default Analytics;
