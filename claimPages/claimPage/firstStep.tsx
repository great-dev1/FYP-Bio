import React, { FC, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import CustomButton from 'components/customButton';

import arrowRightIcon from 'assets/img/arrow-right-white.svg';

import styles from 'assets/jss/pages/claimPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  handleContinue: (username: string) => void;
}

const FirstStep: FC<Props> = (props) => {

  const { handleContinue } = props;
  const classes = useStyles();

  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (name === '') {
      setError(true);
    } else {
      setError(false);
      handleContinue(name);
    }
  }

  return (
    <Box className={clsx(classes.contents, classes.mobileContents)}>
      <Box className={classes.title}>
        <Typography variant='h3' fontWeight={700}>
          Claim Your Link
        </Typography>
        <Typography variant='body1'>
          Start by picking your domain name
        </Typography>
      </Box>
      <Box className={classes.claimNowField} display='flex' flexWrap='wrap' justifyContent='space-between'>
        <OutlinedInput
          placeholder='Your Name'
          fullWidth
          startAdornment={<InputAdornment position="start">FYP.bio/</InputAdornment>}
          onChange={(e) => setName(e.target.value)}
        />
        <CustomButton background='blueGradient' onClick={handleSubmit}>
          Claim Now
        </CustomButton>
        <CustomButton 
          background='blueGradient' 
          onClick={handleSubmit}
          className={classes.startMyPageBtn}
          endIcon={<Image src={arrowRightIcon} width={16} height={16} alt='' />}
        >
          Start My Page
        </CustomButton>
        {
          error && (
            <Typography variant='body1' color='rgba(217, 34, 34, 0.5)' sx={{ paddingLeft: '4px' }} className={classes.errorText}>
              Please enter your name!
            </Typography>
          )
        }
      </Box>

      <Box className={clsx(classes.continueBtn, 'claim-first-step-btn')}>
        <CustomButton background='blueGradient' fullWidth onClick={handleSubmit}>
          Continue
        </CustomButton>
      </Box>
    </Box>
  )
}

export default FirstStep;
