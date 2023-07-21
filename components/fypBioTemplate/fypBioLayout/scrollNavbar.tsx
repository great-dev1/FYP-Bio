import React, { FC } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import CustomImage from "components/customImage";
import { AddUserIcon, ShareIcon } from "components/svg";

import userAvatar from "assets/img/avatar-1.webp";
import styles from "assets/jss/pages/fypBioPageStyles";

const useStyles = makeStyles(styles);

interface Props {
  className?: string;
  handleOpenShareDialog: () => void;
  handleOpenSubscribeDialog: () => void;
  logoColor: 'white' | 'black'
}

const ScrollNavbar: FC<Props> = props => {
  const { className, handleOpenShareDialog, handleOpenSubscribeDialog, logoColor } = props;

  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
    <Box
      className={clsx(
        classes.navbar,
        classes.scrollNavbar,
        "navbar",
        "scroll-navbar",
        "animate__animated animate__fadeIn",
        { [className ?? ""]: className }
      )}
      position="fixed"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        className={classes.navbarInner}
        mx='auto'
      >
        <Link
          href="/"
          className="logo"
          underline="none"
          onClick={e => {
            e.preventDefault();
            router.push("/");
          }}
        >
          <svg width="90" height="76" viewBox="0 0 90 76">
            <text transform="translate(28 36)" fill={logoColor} fontSize="33" fontFamily="Gilroy" fontWeight="700"><tspan x="0" y="0">FYP.</tspan><tspan x="0" y="32">BIO</tspan></text>
            <rect width="8" height="55" rx="3" transform="translate(0 13)" fill={logoColor} />
          </svg>
        </Link>

        <Box display="flex" alignItems="center" className="nav-user-info-box">
          <CustomImage
            src={userAvatar}
            alt=""
            width={64}
            height={65.78}
            mdHeight={37}
            mdWidth={36}
            unoptimized={true}
          />
          <Typography variant="h2" fontWeight={700}>
            Jessica James
          </Typography>
        </Box>

        <Box className="links-box" display="flex">
          <Link href="/" onClick={(e) => {
            e.preventDefault();
            handleOpenSubscribeDialog();
          }}>
            <AddUserIcon />
          </Link>
          <Link href="/" onClick={(e) => {
            e.preventDefault();
            handleOpenShareDialog();
          }} className="share-link">
            {
              isMobile ? (
                <svg width="14.22" height="17.885" viewBox="0 0 14.22 17.885" className="share-icon">
                  <path fill='#fff' d="M58.4,12.266a2.8,2.8,0,0,0-1.506.438L52.5,9.636a2.806,2.806,0,0,0,0-1.55L56.775,5.1a2.808,2.808,0,1,0-1.121-1.695L51.27,6.468a2.81,2.81,0,1,0,0,4.787l4.418,3.085A2.81,2.81,0,1,0,58.4,12.266Z" transform="translate(-46.989)" />
                </svg>
              ) : (
                <svg width="22.783" height="28.655" viewBox="0 0 22.783 28.655" className="share-icon">
                  <g>
                    <path fill='#fff' d="M65.271,19.652a4.479,4.479,0,0,0-2.413.7l-7.04-4.915a4.5,4.5,0,0,0,0-2.483l6.85-4.783a4.5,4.5,0,1,0-1.8-2.715l-7.024,4.9a4.5,4.5,0,1,0,0,7.67l7.079,4.942a4.5,4.5,0,1,0,4.344-3.322Z" transform="translate(-46.989)" />
                  </g>
                </svg>
              )
            }
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ScrollNavbar;
