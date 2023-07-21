import React, { FC, useState } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';

import CustomButton from 'components/customButton';
import CustomSelect from 'components/customSelect';

import userAvatar from 'assets/img/avatar-1.webp';
import starterLogo from 'assets/img/checkout/starter-logo.webp';

import styles from 'assets/jss/pages/checkoutPageStyles';
const useStyles = makeStyles(styles);

const DetailBox: FC = () => {

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [plan, setPlan] = useState('');

  return (
    <Box className={classes.detailBox} display='flex' flexDirection='column' height='100%'>
      <Box className='user-name' display='flex' alignItems='center'>
        <Image src={userAvatar} alt='' width={37} height={37} />
        <Typography variant='h3' color='#000' fontWeight={700} fontSize={21} lineHeight='29px'>
          Isabella Adams
        </Typography>
      </Box>
      <Typography variant='body1' color='#000000' fontSize={16} lineHeight='24px' className='description'>
        Starter package costs $5.00 monthly to subscribe. You can cancel at any time
        through your dashboard or by contacting us
      </Typography>

      <Box className='plan-card' mb='26px'>
        <Box display='flex' justifyContent='space-between' alignItems='end' mb='50px'>
          <Box display='flex' alignItems='center'>
            <Image src={starterLogo} alt='' width={76} height={76} />
            <Box ml='28px'>
              <Typography variant='body1' fontSize={25} lineHeight='35px' color='rgba(255, 255, 255, 0.72)'>
                Starter
              </Typography>
              <Typography variant='h3' fontWeight={700} fontSize={35} lineHeight='49px' color='#fff'>
                5.00
              </Typography>
            </Box>
          </Box>
          <Typography variant='h6' fontSize={30} lineHeight='43px' fontWeight={300} color='#fff'>
            USD
          </Typography>
        </Box>
        <Typography variant='body1' fontSize={22} lineHeight='30px' color='rgba(255, 255, 255, 0.9)'>
          Remove branding, lower fees, and unlock themes for creators who want unlimited customizability.
        </Typography>
      </Box>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box pb={3}>
          <CustomSelect
            labelText='State'
            fullWidth
            options={[{data: 'free', label: 'Free'}, {data: 'premium', label: 'Premium'}]}
            value={plan}
            variant='outlined'
            onChange={(e) => {
              setPlan(e.target.value as string);
              setExpanded(false);
            }}
            className={classes.formField}
            placeholder='Enter State'
          />
        </Box>
      </Collapse>

      <CustomButton variant='contained' boxShadow='none' className='change-plan-btn' fullWidth onClick={() => setExpanded(true)}>
        Change Plan
      </CustomButton>

      <Box className='detail-values' pl='6px' mt='auto'>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <Typography variant='body1' fontSize={20} lineHeight='28px' fontWeight={300} color='#000'>
            Subtotal
          </Typography>
          <Typography variant='body1' fontSize={20} lineHeight='28px' fontWeight={300} color='#000'>
            USD&nbsp;&nbsp;
            <Typography component='span' fontSize={20} lineHeight='28px' fontWeight={400} color='#000'>
              19.99
            </Typography>
          </Typography>
        </Box>

        <Box display='flex' alignItems='center' justifyContent='space-between' className='discount-value' mt={2}>
          <Typography variant='body1' fontSize={20} fontWeight={300} lineHeight='28px' color='#000'>
            Discount
          </Typography>
          <Typography variant='body1' fontSize={20} fontWeight={300} lineHeight='28px' color='#000'>
            USD&nbsp;&nbsp;
            <Typography component='span' fontSize={20} lineHeight='28px' fontWeight={400} color='#000'>
              0.00
            </Typography>
          </Typography>
        </Box>

        <Box className='divider'></Box>

        <Box display='flex' alignItems='center' justifyContent='space-between' className='total-value'>
          <Typography variant='body1' fontSize={20} fontWeight={300} lineHeight='28px' color='#000'>
            Total Price
          </Typography>
          <Typography variant='body1' fontSize={23} lineHeight='32px' fontWeight={500} color='#000'>
            USD&nbsp;&nbsp;19.99
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default DetailBox;
