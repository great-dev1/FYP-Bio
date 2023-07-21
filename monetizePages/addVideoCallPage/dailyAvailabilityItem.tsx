import React, { FC, useState } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";

import DailyAvailabilityItemHeader from './dailyAvailabilityItemHeader';
import DailyAvailabilityItemContent from './dailyAvailabilityItemContent';

import styles from 'assets/jss/pages/addProductPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  day: string;
}

const DailyAvailabilityItem: FC<Props> = (props) => {

  const { day } = props;
  const classes = useStyles();

  const [isAvailability, setIsAvailability] = useState(true);

  return (
    <Box>
      <DailyAvailabilityItemHeader 
        isAvailability={isAvailability}
        onChangeAvailability={(e) => setIsAvailability(e.target.checked)}
        day={day}
      />
      <DailyAvailabilityItemContent isAvailability={isAvailability} />
    </Box>
  )
}

export default DailyAvailabilityItem;
