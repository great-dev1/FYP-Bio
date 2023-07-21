import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import TabContentsBox from './tabContentsBox';
import MobileMenuItem from './mobileMenuItem';
import CustomRadio from 'components/customRadio';

import { settingsMenuList } from 'assets/mockdata/settingsData';
import styles from 'assets/jss/pages/settingsPageStytles';
const useStyles = makeStyles(styles);

interface Props {
  currentTab: boolean;
  handleSetTab: () => void;
}

const NsfwWarning: FC<Props> = (props) => {

  const { currentTab, handleSetTab } = props;
  const classes = useStyles();

  const [isSensitive, setIsSensitive] = useState(true);
  const [value, setValue] = useState('18+');

  return (
    <Box className={clsx(classes.tabContent, { [classes.deactiveTab]: !currentTab })} id='nsfw-warning'>
      <Typography variant='h3' fontWeight={700} className='tab-title'>
        NSFW Warning
      </Typography>
      <MobileMenuItem
        active={currentTab}
        data={settingsMenuList.find((cell) => cell.title === 'NSFW Warning')}
        handleClick={handleSetTab}
      />
      <TabContentsBox expanded={currentTab}>
        <Box className={classes.nsfwWarning}>
          <Box className={classes.nsfwSensitiveContent} display='flex' alignItems='center' justifyContent='space-between'>
            <Box>
              <Typography variant='h6' fontWeight={700}>
                Sensitive Content
              </Typography>
              <Typography variant='body1'>
                Visitors to your FYP.bio will see a Sensitive Content message before being able to view your profile.
              </Typography>
            </Box>
            <Switch checked={isSensitive} onChange={(e) => setIsSensitive(e.target.checked)} className={classes.customSwitch} />
          </Box>
          <Box className={classes.nsfwOptions}>
            <Typography variant='body1'>
              Select One
            </Typography>
            <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
              <FormControlLabel value="18+" control={<CustomRadio />} label="18+" />
              <FormControlLabel value="21+" control={<CustomRadio />} label="21+" />
              <FormControlLabel value="25+" control={<CustomRadio />} label="25+" />
              <FormControlLabel value="sensitive-content" control={<CustomRadio />} label="Sensitive Content" />
            </RadioGroup>
          </Box>
        </Box>
      </TabContentsBox>
    </Box>
  )
}

export default NsfwWarning;
