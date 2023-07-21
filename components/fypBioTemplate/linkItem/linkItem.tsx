import React, { FC } from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

interface Props {
  title: string;
  description?: string;
  icon: React.ReactNode;
  hasBgImg?: boolean;
  className?: string;
}

const LinkItem: FC<Props> = props => {
  const { title, description, icon, hasBgImg, className } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Link
      underline="none"
      display="flex"
      alignItems="center"
      className={clsx("link-item", classes.linkItem, {
        ['has-bg-link']: hasBgImg,
        [classes.bgImgLink]: hasBgImg,
        [className ?? '']: className
      })}
      href="/"
      target='_blank'
    >
      <Box
        className={clsx(classes.linkItemIcon, "link-item-icon")}
        display="flex"
        alignItems="center"
        justifyContent="center"
        position='relative'
      >
        {icon}
      </Box>
      <Box mr="auto" className="link-item-text" position='relative'>
        <Typography variant="h3" fontWeight={900} letterSpacing='0.07em'>
          {title}
        </Typography>
        {description && <Typography variant="body1">{description}</Typography>}
      </Box>
      {
        isMobile ? (
          <svg width="21.196" height="18.614" viewBox="0 0 21.196 18.614" className="links-up-icon">
            <g transform="translate(1 1.414)">
              <path d="M10.128,7.24H3V20.2H15.96V13.072M12.72,4H19.2v6.48M19.2,4l-9.072,9.072" transform="translate(-3 -4)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M1504.378,633.889v12.824h16.367l-6.589-6.122-6.334,4.251-2.338-1.02v-3.231l4.294-2.466v-2.083Z" transform="translate(-1500.549 -633.889)" fill="none" />
            </g>
          </svg>
        ) : (
          <svg width="29.951" height="25.636" viewBox="0 0 29.951 25.636" className="links-up-icon">
            <g transform="translate(-1132.889 -29.475)">
              <path d="M13.218,8.644H3V27.222H21.578V17M16.933,4h9.289v9.289m0-9.289-13,13" transform="translate(1130.889 26.889)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M1504.378,633.889v18.383h23.461l-9.446-8.775-9.08,6.094-3.352-1.463V643.5l6.155-3.534v-2.986Z" transform="translate(-365 -603)" fill="none" />
            </g>
          </svg>
        )
      }
    </Link>
  );
};

export default LinkItem;
