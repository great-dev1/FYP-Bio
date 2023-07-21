import React, { FC, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import TabContentsBox from './tabContentsBox';
import MobileMenuItem from './mobileMenuItem';
import CustomButton from 'components/customButton';
import CustomImage from 'components/customImage';

import { settingsMenuList, freeOptions, proOptions } from 'assets/mockdata/settingsData';
import checkedIcon from 'assets/img/settings/checked-blue.svg';
import detailIcon from 'assets/img/settings/detail-icon.svg';

import styles from 'assets/jss/pages/settingsPageStytles';
const useStyles = makeStyles(styles);

interface Props {
  currentTab: boolean;
  handleSetTab: () => void;
}

const UpgradeAccount: FC<Props> = (props) => {

  const { currentTab, handleSetTab } = props;
  const classes = useStyles();

  const [upgradeOption, setUpgradeOption] = useState('');

  return (
    <Box className={clsx(classes.tabContent, { [classes.deactiveTab]: !currentTab })} id='upgrade-account'>
      <Typography variant='h3' fontWeight={700} className='tab-title'>
        Upgrade Account
      </Typography>
      <MobileMenuItem
        active={currentTab}
        data={settingsMenuList.find((cell) => cell.title === 'Upgrade Account')}
        handleClick={handleSetTab}
      />

      <TabContentsBox expanded={currentTab}>
        <Box className={classes.upgradeAccountSection}>
          <Grid container columnSpacing={{ xs: '10px', sm: '16px', md: '16px', lg: '27px', xl: '27px' }} rowSpacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box className={clsx(classes.upgradeCard, { [classes.activeUpgrade]: upgradeOption === 'free' })} display='flex' flexDirection='column'>
                <Box display='flex' justifyContent='space-between' className='upgrade-card-title'>
                  <Typography variant='h6' fontWeight={700}>
                    Free
                  </Typography>
                  {
                    upgradeOption === 'free' && (
                      <Typography variant='button' className={classes.upgradeActiveMark}>
                        Active
                      </Typography>
                    )
                  }
                  <Typography variant='body1'>
                    USD 0.00
                  </Typography>
                </Box>
                <Typography variant='body1' className='upgrade-card-top-note'>
                  Unlimited links and customization to create the bio of your dreams
                </Typography>
                <Box className='upgrade-card-detail-box'>
                  <Typography variant='h6' fontWeight={700}>
                    Included in Free
                  </Typography>
                  {
                    freeOptions.map((cell, index) => (
                      <Box className='upgrade-detail' display='flex' alignItems='center' key={`free-${index}`}>
                        <Box className='upgrade-detail-icon' display='flex' alignItems='center' justifyContent='center'>
                          <CustomImage src={checkedIcon} alt='' width={9.1} height={7} mdWidth={8.7} mdHeight={6.5} />
                        </Box>
                        <Typography variant='body1'>
                          {cell}
                        </Typography>
                      </Box>
                    ))
                  }
                </Box>
                <CustomButton
                  background='black'
                  fullWidth
                  className='upgrade-option-btn'
                  onClick={() => setUpgradeOption('free')}
                >
                  { upgradeOption === 'free' ? 'Renew on 9th Aug' : 'Get Free!' }
                </CustomButton>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box className={clsx(classes.upgradeCard, { [classes.activeUpgrade]: upgradeOption === 'pro' })} display='flex' flexDirection='column'>
                <Box display='flex' justifyContent='space-between' className='upgrade-card-title'>
                  <Typography variant='h6' fontWeight={700}>
                    Pro
                  </Typography>
                  {
                    upgradeOption === 'pro' && (
                      <Typography variant='button' className={classes.upgradeActiveMark}>
                        Active
                      </Typography>
                    )
                  }
                  <Typography variant='body1'>
                    USD 5.00
                  </Typography>
                </Box>
                <Typography variant='body1' className='upgrade-card-top-note'>
                  More customization and control over your bio page
                </Typography>
                <Box className='upgrade-card-detail-box'>
                  <Typography variant='h6' fontWeight={700}>
                    Everything in Free, plus:
                  </Typography>
                  {
                    proOptions.map((cell, index) => (
                      <Box className='upgrade-detail' display='flex' alignItems='center' key={`free-${index}`}>
                        <Box className='upgrade-detail-icon' display='flex' alignItems='center' justifyContent='center'>
                          <CustomImage src={checkedIcon} alt='' width={9.1} height={7} mdWidth={8.7} mdHeight={6.5} />
                        </Box>
                        <Typography variant='body1'>
                          {cell}
                        </Typography>
                        <Tooltip title="lorem ipsum">
                          <IconButton>
                            <Image src={detailIcon} alt='' width={14} height={14} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    ))
                  }
                </Box>
                <CustomButton
                  background='black'
                  fullWidth
                  className='upgrade-option-btn'
                  onClick={() => setUpgradeOption('pro')}
                >
                  { upgradeOption === 'pro' ? 'Renew on 9th Aug' : 'Get Pro!' }
                </CustomButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </TabContentsBox>
    </Box>
  )
}

export default UpgradeAccount;
