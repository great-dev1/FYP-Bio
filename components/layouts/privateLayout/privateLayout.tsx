import React, { FC, ReactNode, useState } from 'react';
import clsx from 'clsx';
import Head from "next/head";
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import SidebarContent from './sidebarContent';
import Navbar from './navbar';
import PreviewDialog from 'components/previewDialog';
import ShareInterfaceDialog from 'components/shareInterface/shareInterfaceDialog';
import eyeIcon from 'assets/img/navbar/eye.svg';

import styles from 'assets/jss/components/privateLayoutStyles';
const useStyles = makeStyles(styles);

interface Props {
  children?: ReactNode;
  title?: string;
  showDesignModal?: boolean;
  className?: string;
}

const PrivateLayout: FC<Props> = (props) => {

  const { children, title, showDesignModal, className } = props;

  const classes = useStyles();

  const [openPreview, setOpenPreview] = useState(false);
  const [openShare, setOpenShare] = useState(false);

  return (
    <Box>
      <Head>
        <title>{title}</title>
      </Head>
      <Box className={clsx(classes.root, {[className ?? '']: className})} display='flex' justifyContent='space-between'>
        <SidebarContent />
        <Box className={classes.contents}>
          <Navbar 
            handleOpenPreview={() => setOpenPreview(true)} 
            handleOpenShareUI={() => setOpenShare(true)}
            />
          <Box className={clsx(classes.contentsInner, 'contents-inner')}>
            {children}
          </Box>
        </Box>

        <Button variant='contained' className={classes.mobilePreviewBtn} onClick={() => setOpenPreview(true)}>
          <Image src={eyeIcon} alt='' width={18.83} height={12.84} />
          Preview
        </Button>
      </Box>
      <PreviewDialog 
        open={openPreview}
        handleClose={() => setOpenPreview(false)}
        showDesignModal={showDesignModal}
      />
      <ShareInterfaceDialog 
        open={openShare}
        handleClose={() => setOpenShare(false)}
      />
    </Box>
  )
}

export default PrivateLayout;
