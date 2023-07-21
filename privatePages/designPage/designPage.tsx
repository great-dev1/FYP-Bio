import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';

import PrivateLayout from 'components/layouts/privateLayout';
import TemplatesSection from './templatesSection';
import CustomDesignSection from './customDesignSection';
import GeneralInfo from './generalInfo';
import DesignMobile from 'components/mobileDevice/designMobile';
import Tabs from './tabs';

import styles from 'assets/jss/pages/designPageStyles';
const useStyles = makeStyles(styles);

const DesignPage = () => {

  const classes = useStyles();

  return (
    <PrivateLayout title='Design - General Info' showDesignModal={true}>
      <Box display='flex' justifyContent='space-between' className={classes.wrapper}>
        <Box className={classes.contents}>
          <Tabs />
          <GeneralInfo />
          <TemplatesSection />
          <CustomDesignSection />
        </Box>
        <Box className={classes.mobileDivice}>
          <DesignMobile />
        </Box>
      </Box>
    </PrivateLayout>
  )
}

export default DesignPage;
