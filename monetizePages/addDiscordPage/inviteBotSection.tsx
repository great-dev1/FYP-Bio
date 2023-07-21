import React, { FC, useState } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import CustomSelect from 'components/customSelect';
import CustomButton from 'components/customButton';
import { WarningIcon } from 'components/svg';

import { periodOptions, roleOptions } from 'assets/mockdata/addProductsData';

import styles from 'assets/jss/pages/addProductPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  times: string;
  isFree: boolean;
}

const InviteBotSection: FC<Props> = (props) => {

  const { times, isFree } = props;
  const classes = useStyles();

  const [role, setRole] = useState('');
  const [period, setPeriod] = useState('1');

  return (
    <Box className={classes.inviteBotSection}>
      <Box display='flex' alignItems='center' justifyContent='space-between' className='invite-header'>
        <Grid container rowSpacing={{ xs: '17px' }}>
          <Grid item xs={12} md={12} lg={12} xl={7}>
            <Box className='title-box'>
              <Typography variant='h6' color='#000' fontWeight={700}>
                Invite our Discord Bot
              </Typography>
              <Typography variant='body1' color='#000' fontWeight={300}>
                In order to proceed you need to invite our discord bot
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={12} xl={5}>
            <Box display='flex' alignItems='center' className='invite-link'>
              <WarningIcon color='#EA3F1D' />
              <Box flex={1}>
                <Typography variant='h6' color='#EA3F1D' fontWeight={700}>
                  Invite Our Discord Bot
                </Typography>
                <Typography variant='body1' color='#EA3F1D' fontWeight={300}>
                  Not Done
                </Typography>
              </Box>
              <Link href='/' underline='always' target='_blank'>
                Invite
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box className='give-roles invite-form'>
        <Typography variant='h6' color='#474461' fontWeight={600}>
          Give Roles To Subscribers
        </Typography>
        <Typography variant='body1' color='#000' fontWeight={300}>
          Describe what your exclusive content is and why visitors should purchase it.
        </Typography>
        <CustomSelect
          fullWidth
          options={roleOptions}
          value={role}
          variant='outlined'
          onChange={(e) => setRole(e.target.value as string)}
          placeholder='Select Role'
          className={classes.formField}
        />
      </Box>

      <CustomButton className='invite-btn' fullWidth variant='contained' boxShadow='none' background='blueGradient'>
        Give Role
      </CustomButton>

      {
        times !== 'One-Time' && !isFree && (
          <Box className='grace-period invite-form'>
            <Typography variant='h6' color='#474461' fontWeight={600}>
              Grace Period
            </Typography>
            <Typography variant='body1' color='#000' fontWeight={300}>
              Select how many months they let a user not pay the subscription before the buyer is kicked out of the server
            </Typography>
            <CustomSelect
              fullWidth
              options={periodOptions}
              value={period}
              variant='outlined'
              onChange={(e) => setPeriod(e.target.value as string)}
              className={classes.formField}
              placeholder='Select Role'
            />
          </Box>
        )
      }
    </Box>
  )
}

export default InviteBotSection;
