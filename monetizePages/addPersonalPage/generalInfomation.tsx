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
import { UploadFileIcon, OutlinedVideoIcon, SpeakerIcon, TextIcon } from 'components/svg';

import { currencyOptions } from 'assets/mockdata/addProductsData';

import styles from 'assets/jss/pages/addProductPageStyles';
const useStyles = makeStyles(styles);

const GeneralInfomation: FC = () => {

  const classes = useStyles();

  const [respondType, setRespondType] = useState('video');
  const [currency, setCurrency] = useState('USD');
  const [price, setPrice] = useState(100);
  const [isFree, setIsFree] = useState(false);
  const [description, setDescription] = useState('');

  const handleSelectFree = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFree(e.target.checked);
    if (e.target.checked) {
      setPrice(0);
    }
  }

  return (
    <Box className={classes.personalGeneralInfo} display='flex' flexDirection='column'>
      <Box className='respond-type-box' mb={{ xs: '22px', md: 3 }}>
        <Typography variant='h6' color='#474461' fontWeight={600} className='field-title'>
          Response Type
        </Typography>
        <Typography variant='body1' color='rgba(0, 0, 0, 0.35)' className='field-subtext' fontWeight={300}>
          What type of responses you will be sending to your customers
        </Typography>
        <Box mt={{ xs: 2, md: 3 }}>
          <Grid container columnSpacing='20px' rowSpacing='11px'>
            <Grid item xs={12} sm={4} md={4}>
              <Button
                fullWidth
                className={clsx('respond-type-btn', { 'active': respondType === 'video' })}
                startIcon={<OutlinedVideoIcon color='#000' />}
                onClick={() => setRespondType('video')}
              >
                Video
              </Button>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Button
                fullWidth
                className={clsx('respond-type-btn', { 'active': respondType === 'audio' })}
                startIcon={<SpeakerIcon color='#000' />}
                onClick={() => setRespondType('audio')}
              >
                Audio
              </Button>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Button
                fullWidth
                className={clsx('respond-type-btn', { 'active': respondType === 'text' })}
                startIcon={<TextIcon color='#000' />}
                onClick={() => setRespondType('text')}
              >
                Text
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Grid container columnSpacing='30px' rowSpacing={{ xs: '13px', md: 3 }} className='form-section'>
        <Grid item xs={12} md={6}>
          <CustomInput
            labelText='Title of content you are selling'
            onChange={(e) => { }}
            variant='normal'
            placeholder='Enter Content Title'
            fullWidth
            className={classes.formField}
          />
        </Grid>
        <Grid item xs={12} md={6} className='delivery-time'>
          <Typography variant='body1' fontSize={14} lineHeight='20px' fontWeight={600} color='#474461' sx={{ marginBottom: '8.6px' }}>
            Delivery Time
          </Typography>
          <Grid container columnSpacing={2}>
            <Grid item xs={6}>
              <CustomInput
                onChange={(e) => { }}
                variant='normal'
                placeholder='Days'
                fullWidth
                className={classes.formField}
                inputProps={{
                  type: 'number'
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomInput
                onChange={(e) => { }}
                variant='normal'
                placeholder='Hours'
                fullWidth
                className={classes.formField}
                inputProps={{
                  type: 'number'
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} className='maximum-word'>
          <CustomInput
            labelText='Maximum Words'
            onChange={(e) => { }}
            variant='normal'
            placeholder='Enter Maximum Words'
            fullWidth
            className={classes.formField}
          />
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Box mb={{ xs: '17px', md: '14px' }}>
              <Typography variant='h6' color='#474461' fontWeight={600} className='field-title'>
                Video Duration
              </Typography>
              <Typography variant='body1' color='rgba(0, 0, 0, 0.35)' className='field-subtext' fontWeight={300}>
                Maximum duration of video you will make for buyers.
              </Typography>
            </Box>
            <Grid container columnSpacing='28px' rowSpacing={2}>
              <Grid item xs={12} md={6}>
                <CustomInput
                  onChange={(e) => { }}
                  variant='normal'
                  placeholder='Number of Minutes'
                  fullWidth
                  className={classes.formField}
                  inputProps={{
                    type: 'number'
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomInput
                  onChange={(e) => { }}
                  variant='normal'
                  placeholder='Number of Seconds'
                  fullWidth
                  className={classes.formField}
                  inputProps={{
                    type: 'number'
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} className='description-field'>
          <Box mb='18px'>
            <Typography variant='h6' color='#474461' fontWeight={600} className='field-title'>
              Description
            </Typography>
            <Typography variant='body1' color='rgba(0, 0, 0, 0.35)' className='field-subtext' fontWeight={300}>
              {`Be sure to clarify what type of responses you will be sending in this description as audio or video so that your customers know what
              type of response to expect! You don’t want them thinking they’ll be getting a personalized video only to receive a written response.`}
            </Typography>
          </Box>
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
        </Grid>
      </Grid>

      <Box className='file-dropzone-box'>
        <Typography variant='body1' color='rgba(0, 0, 0, 0.35)' fontWeight={300}>
          Add a video/image further explaining what your followers should ask you about
        </Typography>
        <CommonFileDropzone
          setFiles={(files) => { }}
          text='Upload File'
          dropzoneIcon={<UploadFileIcon color='#000' />}
        />
      </Box>
    </Box>
  )
}

export default GeneralInfomation;
