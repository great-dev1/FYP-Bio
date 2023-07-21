import React, { FC } from 'react';
import Image from 'next/image';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import CustomButton from 'components/customButton';

import styles from 'assets/jss/components/monetizeStyles';
const useStyles = makeStyles(styles);

interface Props {
  onClickRefund: () => void;
  image: string;
  link: string;
}

const DiscordTelegramCard: FC<Props> = (props) => {

  const { onClickRefund, image, link } = props;
  const classes = useStyles();

  return (
    <Box className={classes.discordTelegramCard}>
      <Box className='card-image' display='flex'>
        <Image src={image} alt='' width={418} height={165} />
      </Box>
      <Box className='card-header' display='flex' alignItems='center' justifyContent='space-between' flexWrap='wrap'>
        <Box>
          <Typography variant='h3' fontWeight={700} color='#000' className='product-title'>
            <Link href={link} underline='hover' color='#000' target='_blank'>
              Product Name
            </Link>
          </Typography>
          <Box display='flex' alignItems='center' className='date-time'>
            <Typography variant='body1' color='rgba(0, 0, 0, 0.65)'>
              22th Aug, 2021
            </Typography>
            <span></span>
            <Typography variant='body1' color='rgba(0, 0, 0, 0.65)'>
              09:00 AM
            </Typography>
          </Box>
        </Box>

        <Box className='revenue-value'>
          <Typography variant='body1' color='rgba(0, 0, 0, 1)'>
            Revenue
          </Typography>
          <Typography variant='h4' fontWeight={600} color='#000'>
            $1,500
          </Typography>
        </Box>
      </Box>

      <Box display='flex' alignItems='center' justifyContent='space-between' className='properties'>
        <Box>
          <Typography variant='body1' color='rgba(0, 0, 0, 0.65)'>
            Invite Given
          </Typography>
          <Typography variant='h5' fontWeight={400} color='rgba(0, 0, 0, 0.65)'>
            Discord.gg/MB72t
          </Typography>
        </Box>

        <Box>
          <Typography variant='body1' color='rgba(0, 0, 0, 0.65)'>
            Username
          </Typography>
          <Typography variant='h5' fontWeight={400} color='rgba(0, 0, 0, 0.65)'>
            Henry#1234
          </Typography>
        </Box>

        <Box>
          <Typography variant='body1' color='rgba(0, 0, 0, 0.65)'>
            Stock
          </Typography>
          <Typography variant='h5' fontWeight={400} color='rgba(0, 0, 0, 0.65)'>
            Infinite
          </Typography>
        </Box>
      </Box>

      <CustomButton onClick={onClickRefund} variant='contained' background='blueGradient' boxShadow='none' fullWidth className='refund-btn'>
        Refund
      </CustomButton>
    </Box>
  )
}

export default DiscordTelegramCard;
