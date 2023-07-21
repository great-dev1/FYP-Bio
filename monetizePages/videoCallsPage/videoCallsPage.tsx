import React, { FC, useState } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import PrivateLayout from 'components/layouts/privateLayout';
import GlobalSummary from 'components/globalSummary';
import TabHeader from 'components/monetize/tabHeader';
import { VideoCallCard, MainTabCard } from 'components/monetize/card';
import PageTitle from 'components/monetize/pageTitle';
import ConfirmDialog from 'components/monetize/dialog/confirmDialog';

import dollarIcon from 'assets/img/monetize/dollar.svg';
import videoCall from 'assets/img/monetize/video-call-phone.svg';

import styles from 'assets/jss/pages/monetizePageStyles';
const useStyles = makeStyles(styles);

const VideoCallsPage: FC = () => {

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [currentTab, setCurrentTab] = useState('My Orders');
  const [sortKey, setSortKey] = useState('Latest');
  const [globalTerm, setGlobalTerm] = useState(7);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const longCardText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedo eiusmod tempor incididunt ut labore et doloe weror
    magna alra. Ut enim ad minim veniam, quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  ewr qer
    laboris nisi ut aliquip ex ea commodo consequat. Duis aui.`;

  const shortCardText = "Lorem ipsum dolor sit ame adipiscing elit";

  return (
    <PrivateLayout title='Video Calls' className={classes.monetizeSubPage}>
      <Box display='flex' flexWrap='wrap' justifyContent='space-between'>
        <Box className={classes.leftColumn}>
          <Box className={classes.mainContents}>
            <PageTitle
              title='1:1 Video Call'
              searchPlaceholder={currentTab === 'My Orders' ? 'Search orders' : 'Search content'}
              addBtnText='Create 1:1 Video Call'
              onClickAdd={() => { }}
            />

            <Box className={classes.mainContentsInner}>
              <TabHeader
                tabs={['My Calls', 'My Orders']}
                tabVal={currentTab}
                handleChangeTab={(val) => setCurrentTab(val)}
                sortKey={sortKey}
                handleChangeSortKey={(val) => setSortKey(val)}
              />
              <Box className={classes.tabContents}>
                {
                  currentTab === 'My Calls' && (
                    <Grid container spacing={{ xs: '13px', md: '35px' }}>
                      {
                        [...Array(3)].map((el, index) => (
                          <Grid item xs={12} key={index}>
                            <MainTabCard
                              onClickEdit={() => { }}
                              onClickTrash={() => setOpenDeleteDialog(true)}
                              title='Shoutout Title'
                              text={isMobile ? shortCardText : longCardText}
                              bankCash='$ 10.00'
                              date={isMobile ? '19th Mar, 22' : '19th March, 2022'}
                              showCallZoom
                            />
                          </Grid>
                        ))
                      }
                    </Grid>
                  )
                }
                {
                  currentTab === 'My Orders' && (
                    <Grid container columnSpacing={3} rowSpacing={{ xs: '17px', md: 3 }}>
                      {
                        [...Array(4)].map((el, index) => (
                          <Grid item xs={12} sm={6} md={6} xl={6} key={index}>
                            <VideoCallCard
                              onClickConfirm={() => { }}
                              onClickReject={() => { }}
                            />
                          </Grid>
                        ))
                      }
                    </Grid>
                  )
                }
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={classes.rightColumn}>
          <GlobalSummary
            termValue={globalTerm}
            setTermValue={(val) => setGlobalTerm(val)}
            firstValue='3,928'
            firstLabel='Video Calls'
            firstIcon={<Image src={videoCall} alt='' width={34.3} height={46} />}
            secondValue='$19,928'
            secondLabel='Total Revenue'
            secondIcon={<Image src={dollarIcon} alt='' width={23.54} height={43.59} />}
            thirdValue='$32,614'
            thirdLabel='Total Purchases'
            thirdIcon={<Image src={dollarIcon} alt='' width={23.54} height={43.59} />}
          />
        </Box>
      </Box>

      <ConfirmDialog
        text='Are you sure you want to delete?'
        btnText='Continue'
        open={openDeleteDialog}
        handleClose={() => setOpenDeleteDialog(false)}
        handleSubmit={() => setOpenDeleteDialog(false)}
      />
    </PrivateLayout>
  )
}

export default VideoCallsPage;
