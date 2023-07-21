import React, { FC, useState } from 'react';
import timezones from 'timezones.json'
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import RadioGroup from '@mui/material/RadioGroup';

import CustomImage from 'components/customImage';
import CustomSelect from 'components/customSelect';
import { FilledTrashIcon, PlusIcon, RadioCheckedIcon } from 'components/svg';
import CustomRadio from 'components/customRadio';
import CustomInput from 'components/customInput';
import ExcludeDatePicker from './excludeDatePicker';

import { IExcludeDay } from 'types';
import { bufferTimeOptions } from 'assets/mockdata/addProductsData';
import calendarIcon from 'assets/img/product/calendar.svg';

import styles from 'assets/jss/pages/addProductPageStyles';
const useStyles = makeStyles(styles);

const DateRangeSection: FC = () => {

  const classes = useStyles();
  const theme = useTheme();
  const isMobileMode = useMediaQuery(theme.breakpoints.down("lg"));

  const [beforTime, setBeforeTime] = useState('5');
  const [afterTime, setAfterTime] = useState('5');
  const [timezone, setTimezone] = useState('');
  const [timezoneAvailability, setTimezoneAvailability] = useState('');
  const [excludeDays, setExcludeDays] = useState<IExcludeDay[]>([{ id: 1, date: null }]);

  const handleChangeTimezone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimezoneAvailability((event.target as HTMLInputElement).value);
  };

  const handleAddExcludeDay = () => {
    setExcludeDays([...excludeDays, {
      id: excludeDays[excludeDays.length - 1].id + 1,
      date: null
    }]);
  }

  const handleDeleteExcludeDay = (id: number) => {
    setExcludeDays(excludeDays.filter((cell) => cell.id !== id));
  }

  const handleChangeExcludeDay = (date: Date | null, id: number) => {
    setExcludeDays(excludeDays.map((cell) => cell.id === id ? {
      id: id,
      date: date
    } : cell));
  }

  return (
    <Box className={classes.videoRangeSection}>
      <Box className='title-box'>
        <Typography variant='h6' fontWeight={600} color='#474461' fontSize={16} lineHeight='24px'>
          Set a date range for your availability
        </Typography>
        <Typography variant='body1' color='rgba(0, 0, 0, 0.35)' fontSize={14} fontWeight={300} lineHeight='20px'>
          Fans or clients will only be able to book between the selected range of dates.
        </Typography>
      </Box>

      <Box className='exclude-days-section'>
        <Box className='exclude-days-header' display='flex' alignItems='center' justifyContent='space-between' flexWrap='wrap'>
          <Typography variant='h6' fontSize={16} lineHeight='23px' color='#474461' fontWeight={600}>
            Exclude Specific Days
          </Typography>
          <Link variant='button' underline='none' onClick={handleAddExcludeDay}>
            <CustomImage src={calendarIcon} width={24.4} height={24.2} alt='' mdWidth={15.13} mdHeight={15.03} />
            Add Day
          </Link>
        </Box>

        <Grid container rowSpacing={{ xs: '12px', md: '13.5px' }}>
          {
            excludeDays.map((cell) => (
              <Grid item xs={12} key={cell.id}>
                <Box className='exclude-day-item' display='flex' justifyContent='space-between' alignItems='center'>
                  <ExcludeDatePicker
                    onChange={(val) => handleChangeExcludeDay(val, cell.id)}
                    placeholder='Select exclude specific day...'
                    value={cell.date}
                  />
                  <Button className='delete-btn' onClick={() => handleDeleteExcludeDay(cell.id)}>
                    <FilledTrashIcon />
                  </Button>
                </Box>
              </Grid>
            ))
          }
        </Grid>

        <Button variant='outlined' fullWidth className='add-days-btn'
          startIcon={<PlusIcon color='#000' width={15} height={15} />}
          onClick={handleAddExcludeDay}
        >
          Add Days
        </Button>
      </Box>

      <Box className='buffer-section' display='flex' flexDirection='column'>
        <Typography variant='body1'
          fontSize={14} fontWeight={300} color='rgba(0, 0, 0, 0.35)'
          className='desc-text'
        >
          Give yourself a buffer between your meetings to avoid having back-to-back calls.
        </Typography>

        <Grid className='buffer-form' container columnSpacing={{ xs: 3, md: 4 }} rowSpacing={{ xs: '15px', md: '23px' }}>
          <Grid item xs={12} md={6} lg={12} xl={6}>
            <CustomSelect
              fullWidth
              options={bufferTimeOptions}
              value={beforTime}
              variant='outlined'
              onChange={(e) => setBeforeTime(e.target.value as string)}
              className={classes.formField}
              labelText='Buffer before meeting'
            />
          </Grid>
          <Grid item xs={12} md={6} lg={12} xl={6}>
            <CustomSelect
              fullWidth
              options={bufferTimeOptions}
              value={afterTime}
              variant='outlined'
              onChange={(e) => setAfterTime(e.target.value as string)}
              className={classes.formField}
              labelText='Buffer after meeting'
            />
          </Grid>
          <Grid item xs={12}>
            <CustomSelect
              fullWidth
              options={timezones.map((timezone) => ({
                data: timezone.value,
                label: timezone.text
              }))}
              placeholder='GMT'
              value={timezone}
              variant='outlined'
              onChange={(e) => setTimezone(e.target.value as string)}
              className={classes.formField}
              labelText='Set timezone for your availability'
            />
          </Grid>
        </Grid>

        <Box className='timezone-section'>
          <Typography variant='h6' fontWeight={600} color='#474461' fontSize={16} lineHeight='24px'>
            {isMobileMode ? 'Set a date range for your availability' : 'Set timezone for your availability'}
          </Typography>
          <RadioGroup
            defaultValue=""
            value={timezoneAvailability}
            onChange={handleChangeTimezone}
          >
            <Grid container rowSpacing='10px'>
              <Grid item xs={12}>
                <Box display='flex' alignItems='center' className='timezone-option'>
                  <CustomRadio value='1' checkedIcon={<RadioCheckedIcon />} />
                  <Typography variant='body1' color='#000' fontSize={15} lineHeight='21px'>
                    Set yourself as available for a booking indefinitely
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display='flex' alignItems='center' className='timezone-option'>
                  <CustomRadio value='2' checkedIcon={<RadioCheckedIcon />} />
                  <Typography variant='body1' color='#000' fontSize={15} lineHeight='21px'>
                    Set yourself as available for a booking between date range
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display='flex' alignItems='center' className='timezone-option'>
                  <CustomRadio value='3' checkedIcon={<RadioCheckedIcon />} />
                  <Typography variant='body1' color='#000' fontSize={15} lineHeight='21px'>
                    Set yourself as available for a booking for set number of days
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </RadioGroup>
          <Box className='timezone-input' display='flex' alignItems='center'>
            <CustomInput
              onChange={(e) => { }}
              variant='normal'
              className={classes.formField}
            />
            <Typography variant='body1' color='#000' fontSize={15} lineHeight='21px'>
              # days into the future
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default DateRangeSection;
