import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import CustomButton from 'components/customButton';
import CustomImage from 'components/customImage';
import { ChevronRightIcon } from 'components/svg';

import styles from 'assets/jss/pages/monetizePageStyles';
const useStyles = makeStyles(styles);

interface Props {
  data: any
}

const MonetizeCard: FC<Props> = (props) => {

  const { data } = props;
  const router = useRouter();
  const classes = useStyles();
  const theme = useTheme();  
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={classes.monetizeCard} display='flex' flexDirection='column'>
      <Box className={classes.monetizeCardImg} display='flex' alignItems='center' justifyContent='center'>
        <CustomImage src={data.icon} alt='' unoptimized width={data.pcIconWidth} height={data.pcIconHeight} mdWidth={data.mdIconWidth} mdHeight={data.mdIconHeight} />
      </Box>
      <Typography variant='h6' fontWeight={700}>
        {data.title}
      </Typography>
      <Typography variant='body1'>
        {data.description}
      </Typography>
      <CustomButton background='blueGradient' fullWidth onClick={() => router.push(`/monetize/add${data.link}`)}>
        {
          !!data.mobileBtnText ? (
            <>
              {
                isMobile ? data.mobileBtnText : data.btnText
              }
            </>
          ) : data.btnText
        }
      </CustomButton>
      <Link variant='button' underline='none' href={`/monetize${data.link}`}>
        Manage
        <ChevronRightIcon color='#6454F5' width={14} height={14} />
      </Link>
    </Box>
  )
}

export default MonetizeCard;
