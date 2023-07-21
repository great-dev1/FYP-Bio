import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import CustomImage from 'components/customImage';

import closeIcon from 'assets/img/premium/close-icon.svg';
import checkIcon from 'assets/img/premium/check-icon.svg';

import styles from 'assets/jss/pages/premiumPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  title: string;
  free: string | boolean;
  starter: string | boolean;
  premium: string | boolean;
  description: string;
}

const ComparisonRow: FC<Props> = (props) => {

  const { title, free, starter, premium, description } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  return (
    <Box className={clsx('comparison-row', classes.comparisonRow, { 'opened': expanded })} position='relative'>
      <Box className={clsx(classes.comparisonRowHeader, 'comparison-row-header')} display='flex' flexWrap='wrap' alignItems='center' position='relative'>
        <Box className='title-col' display='flex' alignItems='center'>
          <Button className={clsx('action-btn')} onClick={() => setExpanded(!expanded)}>
          </Button>
          <Typography onClick={() => setExpanded(!expanded)} variant='body1' color='rgba(0, 0, 0, 0.6)' fontSize={18} lineHeight='25px' sx={{cursor: 'pointer'}}>
            {title}
          </Typography>
        </Box>
        <Box className='plan-col free-col' display='flex' alignItems='center' justifyContent='center'>
          <Typography variant='h6' fontSize={14} fontWeight={300} color='rgba(0, 0, 0, 0.45)' lineHeight='20px'>
            Free
          </Typography>
          {
            typeof free === 'string' && (
              <Typography variant='body1' color='rgba(0, 0, 0, 0.6)' fontSize={19} lineHeight='27px' fontWeight={500}>
                {free}
              </Typography>
            )
          }
          {
            typeof free === 'boolean' && <>
              {
                free === true ? (
                  <Box className='enable-mark' display='flex' alignItems='center' justifyContent='center'>
                    <CustomImage src={checkIcon} alt='' width={21.16} height={16.01} mdWidth={16.71} mdHeight={12.64} />
                  </Box>
                ) : (
                  <Box className='disable-mark' display='flex' alignItems='center' justifyContent='center'>
                    <CustomImage src={closeIcon} alt='' width={16} height={16} mdWidth={12.25} mdHeight={12.25} />
                  </Box>
                )
              }
            </>
          }
        </Box>
        <Box className='plan-col starter-col' display='flex' alignItems='center' justifyContent='center'>
          <Typography variant='h6' fontSize={14} fontWeight={300} color='rgba(0, 0, 0, 0.45)' lineHeight='20px'>
            Starter
          </Typography>
          {
            typeof starter === 'string' && (
              <Typography variant='body1' color='rgba(0, 0, 0, 0.6)' fontSize={19} lineHeight='27px' fontWeight={500}>
                {starter}
              </Typography>
            )
          }
          {
            typeof starter === 'boolean' && <>
              {
                starter === true ? (
                  <Box className='enable-mark' display='flex' alignItems='center' justifyContent='center'>
                    <CustomImage src={checkIcon} alt='' width={21.16} height={16.01} mdWidth={16.71} mdHeight={12.64} />
                  </Box>
                ) : (
                  <Box className='disable-mark' display='flex' alignItems='center' justifyContent='center'>
                    <CustomImage src={closeIcon} alt='' width={16} height={16} mdWidth={12.25} mdHeight={12.25} />
                  </Box>
                )
              }
            </>
          }
        </Box>
        <Box className='plan-col premium-col' display='flex' alignItems='center' justifyContent='center'>
          <Typography variant='h6' fontSize={14} fontWeight={300} color='rgba(0, 0, 0, 0.45)' lineHeight='20px'>
            Premium
          </Typography>
          {
            typeof premium === 'string' && (
              <Typography variant='body1' color='rgba(0, 0, 0, 0.6)' fontSize={19} lineHeight='27px' fontWeight={500}>
                {premium}
              </Typography>
            )
          }
          {
            typeof premium === 'boolean' && <>
              {
                premium === true ? (
                  <Box className='enable-mark' display='flex' alignItems='center' justifyContent='center'>
                    <CustomImage src={checkIcon} alt='' width={21.16} height={16.01} mdWidth={16.71} mdHeight={12.64} />
                  </Box>
                ) : (
                  <Box className='disable-mark' display='flex' alignItems='center' justifyContent='center'>
                    <CustomImage src={closeIcon} alt='' width={16} height={16} mdWidth={12.25} mdHeight={12.25} />
                  </Box>
                )
              }
            </>
          }
        </Box>
      </Box>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box className='comparison-row-content' position='relative'>
          <Typography variant='body1' fontSize={17} fontWeight={300} lineHeight='25px' color='rgba(0, 0, 0, 0.51)'>
            {description}
          </Typography>
        </Box>
      </Collapse>
    </Box>
  )
}

export default ComparisonRow;
