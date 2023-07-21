import React, { FC, Fragment } from 'react';
import Image from "next/image";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';

import { LockIcon, DownloadIcon } from 'components/svg';

import cardImg from 'assets/img/fypbio/main-card-img.webp';

import styles from 'assets/jss/pages/exclustionPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  locked: boolean;
  filepath: string;
}

const LockCard: FC<Props> = (props) => {

  const { locked, filepath } = props;
  const classes = useStyles();

  return (
    <Fragment>
      {
        locked ? (
          <Tooltip title='Purchase to Unlock' arrow
            classes={{
              popper: classes.lockTooltip
            }}
          >
            <Box position='relative' className={clsx(classes.lockCard, 'locked')} display='flex'>
              <Image src={filepath} alt='' width={155} height={115} />
              <LockIcon />
            </Box>
          </Tooltip>
        ) : (
          <Box position='relative' className={clsx(classes.lockCard, 'unlocked')} display='flex'>
            <Image src={cardImg} alt='' width={155} height={115} />
            <Link href={filepath} download target='_blank'>
              <DownloadIcon />
            </Link>
          </Box>
        )
      }
    </Fragment>
  )
}

export default LockCard;
