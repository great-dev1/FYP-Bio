import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import CustomImage from 'components/customImage';
import { ShareIcon, PlusIcon, PhoneIcon, CopyLinkIcon, MailIcon } from 'components/svg';

import userAvatar from "assets/img/avatar-1.webp";
import styles from 'assets/jss/components/shareDialogStyles';
const useStyles = makeStyles(styles);

interface Props {
  open: boolean;
  handleClose: () => void;
}

const ShareDialog: FC<Props> = (props) => {

  const { handleClose, open } = props;
  const classes = useStyles();

  return (
    <Dialog onClose={handleClose} open={open} className={classes.dialog}>
      <Box className={classes.dialogInner}>
        <Box className={classes.userInfoBox} display='flex' flexDirection='column' alignItems='center'>
          <CustomImage src={userAvatar} width={84.72} unoptimized={true} height={87.3} mdWidth={75.5} mdHeight={77.78} alt='' loading='lazy' />
          <Typography variant='h3' fontWeight={700} color='#000'>
            Share
          </Typography>
          <Typography variant='body1' color='rgba(0, 0, 0, 0.8)'>
            @Jessica Adams
          </Typography>
        </Box>

        <Box className={classes.usersList}>
          <Grid container rowSpacing={{ xs: '19px', md: '22px' }}>
            {
              [...Array(4)].map((el, index) => (
                <Grid item xs={12} key={index}>
                  <Box className={classes.userLine} display='flex' alignItems='center'>
                    <Box display='flex'>
                      <CustomImage src={userAvatar} unoptimized={true} width={55} height={52} mdWidth={47.2} mdHeight={45} alt='' loading='lazy' />
                    </Box>
                    <Box className='user-name-email'>
                      <Typography variant='h4' color='#000' fontWeight={700}>
                        Emma Stone
                      </Typography>
                      <Typography variant='body1' color='#000'>
                        @EmaaLova
                      </Typography>
                    </Box>
                    <Link href='/' className='share-link'>
                      <ShareIcon />
                    </Link>
                  </Box>
                </Grid>
              ))
            }
          </Grid>
          <Button variant='contained' className='view-more-btn' fullWidth>
            View More
            <PlusIcon color='#000' />
          </Button>
        </Box>

        <Box className={classes.footerText}>
          <Typography variant='h5' fontWeight={700} color='#000' align='center'>
            Looking for nearby devices
          </Typography>
          <Typography variant='body1' color='rgba(0, 0, 0, 0.8)' align='center'>
            Make sure that the other device has sharing turned on from action center
          </Typography>
        </Box>

        <Box className={classes.footerLinks} display='flex' alignItems='center' justifyContent='center'>
          <Box className='footer-link-cell' display='flex' flexDirection='column' alignItems='center'>
            <Link href='/'>
              <PhoneIcon />
            </Link>
            <Typography variant='body1' color='rgba(0, 0, 0, 0.8)' align='center'>
              Phone Link
            </Typography>
          </Box>
          <Box className='footer-link-cell' display='flex' flexDirection='column' alignItems='center'>
            <Link href='/'>
              <CopyLinkIcon />
            </Link>
            <Typography variant='body1' color='rgba(0, 0, 0, 0.8)' align='center'>
              Copy Link
            </Typography>
          </Box>
          <Box className='footer-link-cell' display='flex' flexDirection='column' alignItems='center'>
            <Link href='/'>
              <MailIcon />
            </Link>
            <Typography variant='body1' color='rgba(0, 0, 0, 0.8)' align='center'>
              Mail
            </Typography>
          </Box>
        </Box>
      </Box>
    </Dialog>
  )
}

export default ShareDialog;
