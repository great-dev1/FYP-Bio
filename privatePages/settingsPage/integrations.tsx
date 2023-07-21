import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import MobileMenuItem from './mobileMenuItem';
import TabContentsBox from './tabContentsBox';
import PaymentCard from './paymentCard';
import CustomImage from 'components/customImage';

import { settingsMenuList } from 'assets/mockdata/settingsData';
import mailchipIcon from 'assets/img/settings/mailchip.svg';
import zoomIcon from 'assets/img/settings/zoom.svg';
import googleCalendarIcon from 'assets/img/settings/google-calendar.svg';
import googleSheetIcon from 'assets/img/settings/google-sheet.svg';

import styles from 'assets/jss/pages/settingsPageStytles';
const useStyles = makeStyles(styles);

interface Props {
  currentTab: boolean;
  handleSetTab: () => void;
}

const Integrations: FC<Props> = (props) => {

  const { currentTab, handleSetTab } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(classes.tabContent, { [classes.deactiveTab]: !currentTab })} id='integrations'>
      <Typography variant='h3' fontWeight={700} className='tab-title'>
        Integrations
      </Typography>
      <MobileMenuItem
        active={currentTab}
        data={settingsMenuList.find((cell) => cell.title === 'Integrations')}
        handleClick={handleSetTab}
      />
      <TabContentsBox expanded={currentTab}>
        <Box className={classes.integrations}>
          <Typography variant='body1' fontWeight={300}>
            Adjust integrations that they can use on their page
          </Typography>
          <Grid container rowSpacing={{ xs: '20px', sm: '20px', md: '28px', lg: '28px', xl: '28px' }}>
            <Grid item xs={12}>
              <PaymentCard
                icon={<CustomImage src={mailchipIcon} alt='' width={33.1} height={37.3} mdWidth={25.4} mdHeight={28.6} />}
                title='Mailchimp'
                description="With MailChimp's all in one marketing platform, you have
                  all the tools you need to establish your online presence,
                  market smarter, and grow faster"
                handleConnect={() => { }}
              />
            </Grid>
            <Grid item xs={12}>
              <PaymentCard
                icon={<CustomImage src={zoomIcon} alt='' width={35.4} height={22.6} mdWidth={25.6} mdHeight={16.4} />}
                title='Zoom Integeration'
                description="Automatically create Zoom meetings at the time and
                  event is scheduled, enable zoon integrations in order
                  to allow that on your profile"
                handleConnect={() => { }}
              />
            </Grid>
            <Grid item xs={12}>
              <PaymentCard
                icon={<CustomImage src={googleCalendarIcon} alt='' width={32.3} height={31} mdWidth={28.44} mdHeight={27.4} />}
                title='Google Calendar'
                description="Connect your Google Calendar below to add your
                  livestream to your calendar and to receive a reminder
                  before your livestreams starts."
                handleConnect={() => { }}
              />
            </Grid>
            <Grid item xs={12}>
              <PaymentCard
                icon={<CustomImage src={googleSheetIcon} alt='' width={35} height={35} mdWidth={28} mdHeight={28} unoptimized />}
                title='Google Sheets'
                description="Google Sheets is an online spreadsheet app that lets
                  you create and format spreadsheets and work with
                  other people."
                handleConnect={() => { }}
              />
            </Grid>
          </Grid>
        </Box>
      </TabContentsBox>
    </Box>
  )
}

export default Integrations;
