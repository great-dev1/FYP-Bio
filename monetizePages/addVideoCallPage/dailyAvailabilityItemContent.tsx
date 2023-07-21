import React, { FC, useState } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

import { SelectChangeEvent } from '@mui/material/Select';
import CustomSelect from 'components/customSelect';
import { PlusIcon } from 'components/svg';

import { hoursOptions } from 'assets/mockdata/addProductsData';

import styles from 'assets/jss/pages/addProductPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  isAvailability: boolean;
}

const DailyAvailabilityItemContent: FC<Props> = (props) => {

  const { isAvailability } = props;
  const classes = useStyles();

  const [times, setTimes] = useState([{ from: '', to: '' }]);

  const handleChangeTime = (e:SelectChangeEvent<unknown>, index: number) => {
    setTimes(times.map((cell, i) => i === index ? {
      ...cell,
      [e.target.name]: e.target.value
    } : cell));
  }

  const handleAddNewInterval = () => {
    setTimes([...times, {from: '', to: ''}]);
  }

  return (
    <Collapse in={isAvailability} timeout="auto" unmountOnExit>
      <Box className={classes.videoDailyItemContent}>
        <Grid container rowSpacing={{ xs: '12px', md: '16px' }}>
          {
            times.map((cell, index) => (
              <Grid item xs={12} key={index}>
                <Box display='flex' alignItems='center' className='daily-item-form'>
                  <Box className='daily-time-select' flex={1}>
                    <CustomSelect
                      fullWidth
                      options={hoursOptions}
                      value={cell.from}
                      variant='outlined'
                      onChange={(e) => handleChangeTime(e, index)}
                      className={classes.formField}
                      name='from'
                    />
                  </Box>
                  <Typography variant='body1' align='center' fontSize={16} lineHeight='24px' color='#000'>
                    To
                  </Typography>
                  <Box className='daily-time-select' flex={1}>
                    <CustomSelect
                      fullWidth
                      options={hoursOptions}
                      value={cell.to}
                      variant='outlined'
                      onChange={(e) => handleChangeTime(e, index)}
                      className={classes.formField}
                      name='to'
                    />
                  </Box>
                </Box>
              </Grid>
            ))
          }
        </Grid>

        <Box display='flex' justifyContent='center' mt={1}>
          <Button startIcon={<PlusIcon color='#000' width={14} height={14} />} className='add-btn' onClick={handleAddNewInterval}>
            New Interval
          </Button>
        </Box>
      </Box>
    </Collapse>
  )
}

export default DailyAvailabilityItemContent;
