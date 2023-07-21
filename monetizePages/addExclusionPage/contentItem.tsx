import React, { FC } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import { DNDTrigger } from 'components/dndWidget';
import FileDropzone from 'components/fileDropzone';
import { ImageIcon, DescriptionIcon, TrashIcon } from 'components/svg';
import DescriptionField from './descriptionField';
import TitleField from './titleField';

import triggerIcon from 'assets/img/dndTrigger.svg';
import mobileTriggerIcon from 'assets/img/dndTriggerMobile.svg';

import styles from 'assets/jss/pages/addProductPageStyles';
const useStyles = makeStyles(styles);

interface Props {
  data: any;
  onChangeTitle: (id: number, val: string) => void;
  onChangeDescription: (id: number, val: string) => void;
}

const ContentItem: FC<Props> = (props) => {

  const { data, onChangeTitle, onChangeDescription } = props;
  const classes = useStyles();
  const theme = useTheme();  
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={classes.exclusionContentItem} position='relative'>
      <DNDTrigger className='trigger-btn'>
        <IconButton>
          {
            isMobile ? (
              <Image src={mobileTriggerIcon} alt='' width={6} height={10.21} />
            ) : (
              <Image src={triggerIcon} alt='' width={10} height={17} />
            )
          }
        </IconButton>
      </DNDTrigger>
      <Box pl={{ xs: '20px', md: '0' }}>
        <TitleField
          title={data.title}
          onChangeTitle={(val: string) => onChangeTitle(data.id, val)}
        />
        <DescriptionField
          description={data.description}
          onChangeDescription={(val) => onChangeDescription(data.id, val)}
        />
      </Box>
      <Box className='copy-text-box' position='relative'>
        <Button className='description-btn'>
          <DescriptionIcon color='#BB14E2' />
        </Button>
        <IconButton className='trash-btn'>
          <TrashIcon color='#000' />
        </IconButton>
      </Box>
      <Box className='upload-file-title' position='relative' display='flex' justifyContent='center'>
        <Typography variant='h6' color='#000' fontWeight={600}>
          Upload Files
        </Typography>
      </Box>

      <FileDropzone
        setFiles={(files) => { }}
        icon={<ImageIcon color='#000' />}
      />
    </Box>
  )
}

export default ContentItem;
