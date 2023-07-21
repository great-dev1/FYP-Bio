import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import styles from 'assets/jss/pages/cameoPageStyles';
const useStyles = makeStyles(styles);

const Questions: FC = () => {

  const classes = useStyles();

  return (
    <Box className={classes.questionsBox}>
      <Box display='flex' justifyContent='space-between' position='relative' className='questions' flexWrap='wrap'>
        <Box className='question-item'>
          <Box className='question-title'>
            <Typography variant='h3' fontWeight={600} color='#fff'>
              Lorem ipsum dolor sit amet, consectetwr ?
            </Typography>
          </Box>
          <Typography variant='body1' color='rgba(107, 107, 107, 0.65)' fontWeight={300}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei
            a aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla
            ea commodo conseqiuat. Duis aute irure dolor in reprehenderit n
            ur adipiscing elit, sed do eiusmod tempor
          </Typography>
        </Box>
        <Box className='question-item'>
          <Box className='question-title'>
            <Typography variant='h3' fontWeight={600} color='#fff'>
              Lorem ipsum dolor sit amet, consectetwr ?
            </Typography>
          </Box>
          <Typography variant='body1' color='rgba(107, 107, 107, 0.65)' fontWeight={300}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei
            a aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla
            ea commodo conseqiuat. Duis aute irure dolor in reprehenderit n
            ur adipiscing elit, sed do eiusmod tempor
          </Typography>
        </Box>
      </Box>

      <Button fullWidth className='show-more-btn'>
        Show More Questions
      </Button>
    </Box>
  )
}

export default Questions;
