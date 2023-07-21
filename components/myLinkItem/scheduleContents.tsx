import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';

import ScheduleTime from './scheduleTime';
import CustomButton from 'components/customButton';
import TabContentsHeader from './tabContentsHeader';

import calendarIcon from 'assets/img/calendar.svg';

import styles from 'assets/jss/components/myLinkItemStyles';

const useStyles = makeStyles(styles);

interface Props {
  handleClose: () => void;
}

const ScheduleContents: FC<Props> = (props) => {

  const { handleClose } = props;

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(true);
  }, [])

  return (
    <Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <TabContentsHeader
          icon={<Image src={calendarIcon} width={15.73} height={15.63} alt='' />}
          title='Schedule Link'
          handleRemove={() => {
            setExpanded(false);
            setTimeout(() => {
              handleClose();
            }, 265);
          }}
        />

        <Box className={classes.scheduleText}>
          <Typography variant='h6' fontWeight={600}>
            Set Time Range
          </Typography>
          <Typography variant='body1'>
            Set when you want to publish this link to your FYP page
          </Typography>
        </Box>
        <Box display='flex' flexWrap='wrap' justifyContent='space-between'>
          <ScheduleTime label='Activate On' />
          <ScheduleTime label='Deactivate On' />
        </Box>
        <Box className={classes.setScheduleBtn}>
          <CustomButton
            background='blueGradient'
            fullWidth
            onClick={() => {
              setExpanded(false);
              setTimeout(() => {
                handleClose();
              }, 265);
            }}
          >
            Set Schedule
          </CustomButton>
        </Box>
      </Collapse>
    </Box>
  )
}

export default ScheduleContents;
