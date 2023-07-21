import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import CustomButton from 'components/customButton';
import TabContentsHeader from './tabContentsHeader';
import FileDropzone from 'components/fileDropzone';

import photoIcon from 'assets/img/photo.svg';
import whitePhotoIcon from 'assets/img/photo-white.png';
import styles from 'assets/jss/components/myLinkItemStyles';

const useStyles = makeStyles(styles);

interface Props {
  handleClose: () => void;
}

const AddImageContents: FC<Props> = (props) => {

  const { handleClose } = props;

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [imgType, setImgType] = useState('upload');
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    setExpanded(true);
  }, [])

  return (
    <Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <TabContentsHeader
          icon={<Image src={photoIcon} width={19} height={15} alt='' />}
          title='Add Image'
          handleRemove={() => {
            setExpanded(false);
            setTimeout(() => {
              handleClose();
            }, 265);
          }}
        />
        <Box className={classes.addImgContents}>
          <Typography variant='body1'>
            Upload an Icon or Picture to this Link
          </Typography>

          <ButtonGroup className={classes.uploadImgTab} fullWidth>
            <Button onClick={() => setImgType('gif')} className={clsx({ [classes.activeImgTab]: imgType === 'gif' })}>GIFs</Button>
            <Button onClick={() => setImgType('upload')} className={clsx({ [classes.activeImgTab]: imgType === 'upload' })}>Upload</Button>
            <Button onClick={() => setImgType('icon')} className={clsx({ [classes.activeImgTab]: imgType === 'icon' })}>Icons</Button>
          </ButtonGroup>

          <FileDropzone setFiles={(acceptedFiles) => setFiles(acceptedFiles)} />

          <CustomButton
            background='blueGradient'
            fullWidth
            className={classes.setThumbnailBtn}
            onClick={() => setExpanded(false)}
          >
            <Image src={whitePhotoIcon} width={23} height={18.2} alt='' />
            Set Thumbnail
          </CustomButton>
        </Box>
      </Collapse>
    </Box>
  )
}

export default AddImageContents;
