import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import CommonFileDropzone from 'components/fileDropzone/commonFileDropzone';
import CustomInput from 'components/customInput';
import CustomSelect from 'components/customSelect';
import CustomSwitch from 'components/customSwitch';
import { UploadFileIcon } from 'components/svg';

import { currencyOptions } from 'assets/mockdata/addProductsData';

import styles from 'assets/jss/pages/addProductPageStyles';
const useStyles = makeStyles(styles);

const GeneralInfomation: FC = () => {

  const classes = useStyles();

  const [currency, setCurrency] = useState('USD');
  const [price, setPrice] = useState(100);
  const [meetingDuration, setMeetingDuration] = useState<number | null>();
  const [isFree, setIsFree] = useState(false);
  const [description, setDescription] = useState('');

  const handleSelectFree = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFree(e.target.checked);
    if (e.target.checked) {
      setPrice(0);
    }
  }

  return (
    <Box className={clsx(classes.generalInfoBox, classes.videoCallGeneral, 'general-infomation-box')}>
      <Box className='file-dropzone-box'>
        <Typography variant='body1' color='#474461' fontWeight={600}>
          Add cover image or video
        </Typography>
        <CommonFileDropzone
          setFiles={(files) => { }}
          text='Upload File'
          dropzoneIcon={<UploadFileIcon color='#000' />}
        />
      </Box>

      <Grid container rowSpacing={{ xs: '10px', md: '27px' }} columnSpacing={{ xs: '', md: '30px' }}>
        <Grid item xs={12} md={6} lg={6} xl={6.7}>
          <CustomInput
            labelText='Meeting Title'
            onChange={(e) => { }}
            variant='normal'
            placeholder='Enter Content Title'
            fullWidth
            className={classes.formField}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={5.3}>
          <Box className={classes.priceField}>
            <Typography variant='body1' className='form-label'>
              Price
            </Typography>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
              <Box display='flex' alignItems='center' className='price-value'>
                <CustomSelect
                  fullWidth
                  options={currencyOptions}
                  value={currency}
                  variant='outlined'
                  onChange={(e) => setCurrency(e.target.value as string)}
                  className='currency-field'
                />
                <CustomInput
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                  variant='normal'
                  fullWidth
                  value={price}
                  className='price-input'
                  inputProps={{
                    type: 'number'
                  }}
                />
              </Box>
              <Box display='flex' alignItems='center' className='free-switch'>
                <CustomSwitch checked={isFree} onChange={handleSelectFree} />
                <Typography variant='body1' color='#000'>
                  Free
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box className='description-field'>
            <Typography variant='h6' color='#474461' fontWeight={600}>
              Meeting Description
            </Typography>
            <Typography variant='body1' color='#000' fontSize={14} lineHeight='20px'>
              Describe what your will discuss with your fans at this meeting
            </Typography>
            <Box position='relative'>
              <CustomInput
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                variant='normal'
                placeholder='Enter the description here ..'
                fullWidth
                inputProps={{
                  rows: 4,
                  multiline: true
                }}
                className={classes.formField}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box className='meeting-duration-box'>
            <Typography variant='h6' fontWeight={600} color='#474461'>
              Meeting Duration
            </Typography>
            <Box display='flex' alignItems='center' flexWrap='wrap'>
              <Box flex={1}>
                <Grid container columnSpacing={{ xs: '12.5px', md: 2 }} rowSpacing={{ xs: '11px', md: '14px' }}>
                  {
                    [10, 20, 30, 45, 60].map((cell) => (
                      <Grid item xs={4} lg={6} xl={2.4} key={cell}>
                        <Button fullWidth
                          onClick={() => setMeetingDuration(cell)}
                          className={clsx('meeting-duration-btn', { 'active': meetingDuration === cell })}
                        >
                          {`${cell} min`}
                        </Button>
                      </Grid>
                    ))
                  }
                </Grid>
              </Box>
              <Box display='flex' alignItems='center' className='specific-time'>
                <Typography variant='body1' color='#000'>
                  Or
                </Typography>
                <CustomInput
                  onChange={(e) => { }}
                  variant='normal'
                  placeholder='Enter Specific Time'
                  fullWidth
                  className={classes.formField}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default GeneralInfomation;
