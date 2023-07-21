import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

import CustomSwitch from 'components/customSwitch';
import { FilledTrashIcon } from 'components/svg';

import styles from 'assets/jss/pages/addProductPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  isAvailability: boolean;
  onChangeAvailability: (e: React.ChangeEvent<HTMLInputElement>) => void;
  day: string;
}

const DailyAvailabilityItemHeader: FC<Props> = (props) => {

  const { isAvailability, onChangeAvailability, day } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(classes.videoDailyItemHeader, 'daily-item-header')} display='flex' alignItems='center'>
      <CustomSwitch checked={isAvailability} onChange={onChangeAvailability} />
      <Typography variant='body1' color='#000' fontSize={18} lineHeight='25px' className='day-title'>
        {day}
      </Typography>
      {
        isAvailability ? (
          <Button className='delete-btn'>
            <FilledTrashIcon color='#EC3868' />
          </Button>
        ) : (
          <Typography variant='body1' color='#BFBFBF' fontSize={16} lineHeight='23px' className='unavailable'>
            Unavailable
          </Typography>
        )
      }
    </Box>
  )
}

export default DailyAvailabilityItemHeader;
