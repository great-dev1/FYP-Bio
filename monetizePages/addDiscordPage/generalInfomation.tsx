import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

import CommonFileDropzone from 'components/fileDropzone/commonFileDropzone';
import CustomInput from 'components/customInput';
import CustomSelect from 'components/customSelect';
import CustomSwitch from 'components/customSwitch';
import { UploadFileIcon } from 'components/svg';

import { generalTimeOptions, currencyOptions } from 'assets/mockdata/addProductsData';

import styles from 'assets/jss/pages/addProductPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  times: string;
  onChangeTimes: (val: string) => void;
  isFree: boolean;
  onChangeIsFree: (val: boolean) => void;
}

const GeneralInfomation: FC<Props> = (props) => {

  const { times, onChangeTimes, isFree, onChangeIsFree } = props;
  const classes = useStyles();

  const [currency, setCurrency] = useState('USD');
  const [price, setPrice] = useState(100);
  const [description, setDescription] = useState('');

  const handleSelectFree = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setPrice(0);
    }
    onChangeIsFree(e.target.checked);
  }

  return (
    <Box className={clsx(classes.generalInfoBox, 'general-infomation-box')}>
      <Box className='general-info-header'>
        <Typography variant='h2' color='#000' fontWeight={700}>
          General information
        </Typography>
        <Typography variant='body1' color='#000' fontWeight={300}>
          The below information will give everyone an idea of what your exclusive content is all about. Here you can
          upload and sell videos, pictures, guides, tutorials, audios and more.
        </Typography>
      </Box>

      <Box className='file-dropzone-box'>
        <Typography variant='body1' color='rgba(0, 0, 0, 0.35)' fontWeight={300}>
          Add discord channel banner
        </Typography>
        <CommonFileDropzone
          setFiles={(files) => { }}
          text='Upload File'
          dropzoneIcon={<UploadFileIcon color='#000' />}
        />
      </Box>

      <Grid container rowSpacing={{ xs: '10px', md: 3 }} columnSpacing={{ xs: '', md: '29px' }}>
        <Grid item xs={12} md={6} lg={6} xl={6.7}>
          <CustomInput
            labelText='Title of the community'
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
          <CustomSelect
            fullWidth
            options={generalTimeOptions}
            value={times}
            variant='outlined'
            onChange={(e) => onChangeTimes(e.target.value as string)}
            className={classes.formField}
          />
        </Grid>

        <Grid item xs={12}>
          <Box className='description-field'>
            <Typography variant='h6' color='#474461' fontWeight={600}>
              Description and overview of content
            </Typography>
            <Typography variant='body1' color='#000'>
              Describe what your exclusive content is and why visitors should purchase it.
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
      </Grid>
    </Box>
  )
}

export default GeneralInfomation;
