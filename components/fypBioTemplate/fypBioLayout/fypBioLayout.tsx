import React, { FC, ReactNode, useEffect, useState } from "react";
import clsx from "clsx";
import Head from "next/head";
import { useRouter } from "next/router";

import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import Navbar from "./navbar";
import ScrollNavbar from "./scrollNavbar";
import ShareDialog from 'components/shareDialog';
import SubscribeDialog from 'components/subscribeDialog';

import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

interface Props {
  children?: ReactNode;
  title?: string;
  className?: string;
  logoColor: 'white' | 'black'
}

const FypBioLayout: FC<Props> = props => {
  const { children, title, className, logoColor } = props;

  const classes = useStyles();
  const router = useRouter();

  const [openShare, setOpenShare] = useState(false);
  const [openSubscribe, setOpenSubscribe] = useState(false);
  const [showFixedNav, setShowScrollNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        setShowScrollNav(true);
      } else {
        setShowScrollNav(false);
      }
    });
  }, []);

  return (
    <Box>
      <Head>
        <title>{title}</title>
      </Head>
      <Box
        className={clsx(classes.root, { [className ?? ""]: className })}
        position="relative"
      >
        <Navbar
          logoColor={logoColor}
          handleOpenShareDialog={() => setOpenShare(true)}
          handleOpenSubscribeDialog={() => setOpenSubscribe(true)}
        />
        <ScrollNavbar
          logoColor={logoColor}
          className={clsx({ [classes.showScrollNav]: showFixedNav })}
          handleOpenShareDialog={() => setOpenShare(true)}
          handleOpenSubscribeDialog={() => setOpenSubscribe(true)}
        />
        <Box className={classes.contents} mx="auto">
          {children}
        </Box>
        <Box className={clsx(classes.footer, "footer")} display='flex' flexDirection='column' alignItems='center' position='relative'>
          <Typography variant="body1">Powered by</Typography>
          <Link
            href="/"
            className="footer-logo"
            underline="none"
            onClick={e => {
              e.preventDefault();
              router.push("/");
            }}
          >
            <svg width="66" height="55" viewBox="0 0 66 55">
              <g transform="translate(-0.401 0.051)">
                <text transform="translate(21.401 25.949)" fill={logoColor} fontSize="24" fontFamily="Gilroy" fontWeight="700"><tspan x="0" y="0">FYP.</tspan><tspan x="0" y="23">BIO</tspan></text>
                <rect width="6" height="39" rx="3" transform="translate(0.401 9.949)" fill={logoColor} />
              </g>
            </svg>
          </Link>
        </Box>

        <ShareDialog open={openShare} handleClose={() => setOpenShare(false)} />
        <SubscribeDialog open={openSubscribe} handleClose={() => setOpenSubscribe(false)} />
      </Box>
    </Box>
  );
};

export default FypBioLayout;
