import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

import { ArrowRightIcon, CopyLinkIcon, RoundKeyIcon } from 'components/svg';

import styles from 'assets/jss/components/addProductStyles';
const useStyles = makeStyles(styles);

interface Props {
  specificLinkTitle: string;
  specificLinkSubTitle: string;
  specificLink: string;
  hideBlog?: boolean;
}

const SellMoreContents: FC<Props> = (props) => {

  const { specificLinkTitle, specificLinkSubTitle, specificLink, hideBlog } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(classes.sellMoreContents, 'sell-more-contents')}>
      {
        !hideBlog && (
          <Box className='blog-content'>
            <Typography variant='h3' fontWeight={700} color='#000' fontSize={19} lineHeight='27px'>
              Sell More Content
            </Typography>
            <Box display='flex' flexDirection='column' rowGap='44px' mt='12.7px' mb='28px'>
              <Typography variant='body1' color='rgba(0, 0, 0, 0.32)' fontSize={16} lineHeight='25px'>
                The most crucial part of adding content is choosing eye-catching
                thumbnails to grab and keep users&apos; attention. You can also garner
                attention by adding titles and descriptions to each image/video
              </Typography>
              <Typography variant='body1' color='rgba(0, 0, 0, 0.32)' fontSize={16} lineHeight='25px'>
                Not sure how best to add content to this page? Check out our blog post below, where we discuss strategies
              </Typography>
            </Box>

            <Link href='/' underline='hover'>
              Read Blog Post Here <ArrowRightIcon color='#56BC50' />
            </Link>
          </Box>
        )
      }

      <Box className='specific-link'>
        <Typography variant='h3' fontWeight={700} color='#000' fontSize={19} lineHeight='27px'>
          {specificLinkTitle}
        </Typography>
        <Typography variant='body1' color='rgba(0, 0, 0, 0.32)' fontSize={16} lineHeight='23px'>
          {specificLinkSubTitle}
        </Typography>

        <Link href={specificLink} underline='hover' target='_blank' color='#000'>
          <RoundKeyIcon color='#56BC50' />
          <Typography variant='body1' color='#000' fontSize={15} lineHeight='21px'>
            {specificLink}
          </Typography>
          <span>
            <CopyLinkIcon color='#fff' width={13.87} height={13.95} />
          </span>
        </Link>
      </Box>
    </Box>
  )
}

export default SellMoreContents;
