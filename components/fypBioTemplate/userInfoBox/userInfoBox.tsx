import React, { FC } from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { InstagramIcon, SnapchatIcon, FanslyIcon, YoutubeOutlineIcon, TwitterIcon } from 'components/svg';

import userAvatar from "assets/img/avatar-1.webp";
import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

interface Props {
  moveToTop?: boolean;
}

const UserInfoBox: FC<Props> = (props) => {

  const { moveToTop } = props;
  const classes = useStyles();

  return (
    <Box
      className={clsx("user-info-box", classes.userInfoBox, {['move-top']: moveToTop})}
      display="flex"
      flexDirection="column"
      alignItems="center"
      position='relative'
    >
      <Box className="user-info-avatar" display="flex" alignItems='center' justifyContent='center'>
        <Box width='100%' height='100%' 
          sx={{backgroundImage: `url(${userAvatar.src})`, borderRadius: '50%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
          ></Box>
      </Box>
      <Box textAlign='center'>
        <Typography variant="h2" fontWeight={700}>
          Jessica James
        </Typography>
        <Typography variant="body1" fontWeight={300}>
          Whatever the link you choose, you&apos;ll be addicted.
        </Typography>
      </Box>
      <Box className='social-links' display='flex' alignItems='center'>
        <Link href='/'>
          <InstagramIcon />
        </Link>
        <Link href='/'>
          <SnapchatIcon />
        </Link>
        <Link href='/'>
          <FanslyIcon />
        </Link>
        <Link href='/' className="youtube-link">
          <YoutubeOutlineIcon />
        </Link>
        <Link href='/'>
          <TwitterIcon />
        </Link>
      </Box>
    </Box>
  );
};

export default UserInfoBox;
