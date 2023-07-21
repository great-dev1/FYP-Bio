import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';

import CustomButton from 'components/customButton';
import CustomInput from 'components/customInput';
import MobileStepper from 'components/mobileStepper';

import styles from 'assets/jss/pages/claimPageStyles';
const useStyles = makeStyles(styles);

const SecondStep: FC = () => {

  const classes = useStyles();
  const router = useRouter();

  const [link, setLink] = useState('');
  const [error, setError] = useState(false);

  const handleContinue = () => {
    if (link === '') {
      setError(true);
    } else {
      setError(false);
      router.push('/claim/signup');
    }
  }

  return (
    <Box className={clsx(classes.mobileContents, classes.contents)}>
      <Box className={classes.title}>
        <Typography variant='h3' fontWeight={700}>
          Claim Your Link
        </Typography>
        <Typography variant='body1'>
          Start by picking your domain name
        </Typography>       
      </Box>
      <MobileStepper step={1} />
      <Box className={classes.linkForm}>
        <CustomInput
          onChange={(e) => setLink(e.target.value)}
          placeholder='Your Name'
          fullWidth
          name='link'
          inputProps={{
            startAdornment: <InputAdornment position='start'>FYP.bio/</InputAdornment>,
            endAdornment: <CustomButton onClick={handleContinue} background='blueGradient'>Claim My Link</CustomButton>
          }}
        />
        {
          error && (
            <Typography variant='body1' color='rgba(217, 34, 34, 0.5)' sx={{ paddingLeft: '4px' }} className={classes.errorText}>
              Please enter your name!
            </Typography>
          )
        }
      </Box>
      <Box>
        <Box display='flex' alignItems='center' justifyContent='space-between' className={classes.nameItem}>
          <Typography variant='h6' fontWeight={700}>
            @ DancingPanda
          </Typography>
          <CustomButton variant='outlined'>
            Select
          </CustomButton>
        </Box>
        <Divider className={classes.divider} />
        <Box display='flex' alignItems='center' justifyContent='space-between' className={classes.nameItem}>
          <Typography variant='h6' fontWeight={700}>
            @ EleganBio
          </Typography>
          <CustomButton variant='outlined'>
            Select
          </CustomButton>
        </Box>
        <Divider className={classes.divider} />
        <Box display='flex' alignItems='center' justifyContent='space-between' className={classes.nameItem}>
          <Typography variant='h6' fontWeight={700}>
            @ SychoMania
          </Typography>
          <CustomButton variant='outlined'>
            Select
          </CustomButton>
        </Box>
      </Box>
      <CustomButton variant='outlined' fullWidth className={classes.reRollBtn}>
        Re-Roll Names
      </CustomButton>
      <Box className={classes.continueBtn} sx={{marginTop: '0 !important'}}>
        <CustomButton background='blueGradient' fullWidth onClick={handleContinue}>
          Continue
        </CustomButton>
      </Box>
    </Box>
  )
}

export default SecondStep;
