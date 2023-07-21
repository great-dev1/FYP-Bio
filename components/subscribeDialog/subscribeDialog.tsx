import React, { FC, useState } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Dialog from '@mui/material/Dialog';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Checkbox from '@mui/material/Checkbox';
import CheckIcon from '@mui/icons-material/Check';

import CustomImage from 'components/customImage';
import CustomInput from 'components/customInput';
import CustomButton from 'components/customButton';

import userAvatar from "assets/img/avatar-1.webp";
import styles from 'assets/jss/components/subscribeDialogStyles';

const useStyles = makeStyles(styles);

interface Props {
  open: boolean;
  handleClose: () => void;
}

const SubscribeDialog: FC<Props> = (props) => {

  const { handleClose, open } = props;
  const classes = useStyles();

  const [tab, setTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Dialog onClose={handleClose} open={open} className={classes.dialog}>
      <Box className={classes.dialogInner}>
        <Box className={classes.header} display='flex' flexDirection='column' alignItems='center'>
          <Box display='flex'>
            <CustomImage src={userAvatar} unoptimized={true} alt='' width={102.3} height={105.5} mdWidth={75.5} mdHeight={77.7} />
          </Box>
          <Typography variant='h3' fontWeight={700} color='#000'>
            Subscribe to Jessica
          </Typography>
          <Typography variant='body1' color='rgba(0, 0, 0, 0.8)'>
            Enter your details to be notified about new content on this Fyp.bio
          </Typography>
        </Box>

        <Box className={classes.form}>
          <Tabs value={tab} onChange={handleChange} centered>
            <Tab label="Email" />
            <Tab label="SMS" />
            <Tab label="Whatsapp" />
          </Tabs>
          <Box className={classes.tabContents}>
            {
              tab === 0 && (
                <CustomInput
                  variant='normal'
                  onChange={(e) => { }}
                  fullWidth
                  placeholder='Email Address'
                />
              )
            }
            {
              tab === 1 && (
                <CustomInput
                  variant='normal'
                  onChange={(e) => { }}
                  fullWidth
                  placeholder='SMS Address'
                />
              )
            }
            {
              tab === 2 && (
                <CustomInput
                  variant='normal'
                  onChange={(e) => { }}
                  fullWidth
                  placeholder='Whatsapp Address'
                />
              )
            }
            <Box
              display='flex'
              alignItems='center'
              className={classes.checkbox} mb={{ xs: '14px', md: '20px' }}
              mt={{ xs: '28px', md: '37px' }}
            >
              <Checkbox
                icon={<Box className='checkbox-icon' />}
                checkedIcon={<Box className='checked-icon' display='flex' alignItems='center' justifyContent='center'><CheckIcon sx={{ color: '#fff' }} /></Box>}
              />
              <Typography variant='body1' color='rgba(0, 0, 0, 0.8)'>
                I agree to Fyp.bio&apos;s&nbsp;
                <Link href='/' target='_blank' underline='none' color='#000' fontWeight={700}>
                  Terms & conditions
                </Link>&nbsp;and&nbsp;
                <Link href='/' target='_blank' underline='none' color='#000' fontWeight={700}>
                  Privacy Policy
                </Link>
              </Typography>
            </Box>
            <Box display='flex' alignItems='center' className={classes.checkbox} mb={{ xs: '32px', md: '54px' }}>
              <Checkbox
                icon={<Box className='checkbox-icon' />}
                checkedIcon={<Box className='checked-icon' display='flex' alignItems='center' justifyContent='center'><CheckIcon sx={{ color: '#fff' }} /></Box>}
              />
              <Typography variant='body1' color='rgba(0, 0, 0, 0.8)'>
                I agree to my contact details being shared with Jessica, who may contact me
              </Typography>
            </Box>
            <CustomButton variant='contained' background='blueGradient' fullWidth className='submit-btn' boxShadow='none'>
              Subscribe Now
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Dialog>
  )
}

export default SubscribeDialog;
