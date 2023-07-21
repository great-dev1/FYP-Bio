import React, { FC } from 'react';
import clsx from 'clsx';
import { StaticImageData } from "next/image";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CustomImage from 'components/customImage';

import heartImg from 'assets/img/fypbio/heart-red.webp';
import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

interface Props {
  backgroundImg: StaticImageData;
  title?: string;
  subTitle?: string;
  showDetails?: boolean;
}

const HeartCard: FC<Props> = (props) => {

  const { backgroundImg, title, subTitle, showDetails } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(classes.heartCard, 'heart-card')} display='flex' sx={{ backgroundImage: `url(${backgroundImg.src})` }}>
      {
        showDetails && (
          <Box mt='auto' className={classes.heartCardInner}>
            <Typography variant='h4' fontWeight={700}>
              {title}
            </Typography>
            <Box display='flex' alignItems='center'>
              <Typography variant='body1' fontWeight={300}>
                {subTitle}
              </Typography>
              <CustomImage src={heartImg} width={21} alt='' height={21} mdWidth={15} mdHeight={15} unoptimized={true} />
            </Box>
          </Box>
        )
      }
    </Box>
  )
}

export default HeartCard;
