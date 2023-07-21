import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import CustomInput from 'components/customInput';
import CustomSelect from 'components/customSelect';

import styles from 'assets/jss/pages/cameoPageStyles';
const useStyles = makeStyles(styles);

const CameoFromForm: FC = () => {

  const classes = useStyles();

  const [toTitle, setToTitle] = useState('He / Him');

  const titleOptions = [
    {
      data: 'He / Him',
      label: 'He / Him'
    },
    {
      data: 'She / Her',
      label: 'She / Her'
    },
    {
      data: 'They / Them',
      label: 'They / Them'
    }
  ];

  return (
    <Box className={clsx(classes.formCard, classes.fromForm)}>
      <Typography variant='h3' fontWeight={700} color='#000' className='form-title'>
        Who is this Cameo from?
      </Typography>

      <Box mt={{ xs: '15.5px', md: '27px' }}>
        <Grid container rowSpacing={2} columnSpacing={3}>
          <Grid item xs={12} lg={8}>
            <CustomInput
              fullWidth
              labelText='From'
              onChange={() => { }}
              variant='normal'
              placeholder='Enter First Name'
              className='text-field'
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <CustomSelect
              fullWidth
              options={titleOptions}
              value={toTitle}
              variant='outlined'
              onChange={(e) => setToTitle(e.target.value as string)}
              labelText='Title'
              className='select-field'
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default CameoFromForm;
