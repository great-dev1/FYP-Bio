import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

import RadioCollapse from 'components/radioCollapse';
import TabContentsHeader from './tabContentsHeader';
import CustomSelect from 'components/customSelect';
import CustomButton from 'components/customButton';

import lockIcon from 'assets/img/lock-1.svg';

import styles from 'assets/jss/components/myLinkItemStyles';

const useStyles = makeStyles(styles);

interface Props {
  handleClose: () => void;
}

const LockContents: FC<Props> = (props) => {

  const { handleClose } = props;

  const classes = useStyles();

  const [lockType, setLockType] = useState('');
  const [age, setAge] = useState('');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(true);
  }, [])

  return (
    <Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <TabContentsHeader
          icon={<Image src={lockIcon} width={15.68} height={17.73} alt='' />}
          title='Lock This Link'
          handleRemove={() => {
            setExpanded(false);
            setTimeout(() => {
              handleClose();
            }, 265);
          }}
        />

        <Box className={classes.collapseItem}>
          <RadioCollapse
            title='Code'
            subTitle='Visitors have to enter a code to access your link'
            expanded={lockType === 'code'}
            setExpanded={() => setLockType('code')}
          >
            <Box className={classes.lockCodeTextField}>
              <OutlinedInput
                fullWidth
                placeholder='Enter The Lock Code'
                endAdornment={<InputAdornment position="end"><Button>Generate <span className='hide-mobile'>&nbsp;Random Code</span></Button></InputAdornment>}
              />
            </Box>
          </RadioCollapse>
        </Box>

        <Box className={classes.collapseItem}>
          <RadioCollapse
            title='Birthday'
            subTitle='Link is accessible to users who enter their birthday'
            expanded={lockType === 'birthday'}
            setExpanded={() => setLockType('birthday')}
          >
            <Box display='flex' justifyContent='space-between' flexWrap='wrap'>
              <Box className={classes.ageSelect}>
                <CustomSelect
                  options={[...Array(49)].map((_, index) => ({
                    data: (index + 12).toString(),
                    label: (index + 12).toString()
                  }))}
                  placeholder='Select Age'
                  value={age}
                  onChange={(e) => setAge(e.target.value as string)}
                />
              </Box>
              <Box className={classes.lockDescription}>
                <OutlinedInput
                  fullWidth
                  placeholder='Lock Description'
                  startAdornment={<InputAdornment position="start"><Image src={lockIcon} width={19} height={21.6} alt='' /></InputAdornment>}
                />
              </Box>
            </Box>
          </RadioCollapse>
        </Box>

        <Box mb={0} className={classes.markLockCollapse}>
          <RadioCollapse
            title='Mark as Sensitive Content'
            subTitle='Users verify they are 18+ to access your link'
            expanded={lockType === 'mark'}
            setExpanded={() => setLockType('mark')}
            headerChildren={lockType === 'mark' ? <Button className={clsx(classes.lockActiveBtn, classes.pcLockActive)}>Active</Button> : null}
          >
            <Button className={clsx(classes.lockActiveBtn, classes.mobileLockActive)}>Active</Button>
          </RadioCollapse>
        </Box>

        <Box mt={3}>
          <CustomButton background='blueGradient' fullWidth
            onClick={() => {
              setExpanded(false);
              setTimeout(() => {
                handleClose();
              }, 265);
            }}
          >
            Set Lock
          </CustomButton>
        </Box>
      </Collapse>
    </Box>
  )
}

export default LockContents;
