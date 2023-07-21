import React, { FC, useState } from 'react';
import { makeStyles } from "@mui/styles";
import Image from 'next/image';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Backdrop from '@mui/material/Backdrop';

import CustomSnackbar from 'components/customSnackbar';
import ShareInterfaceContents from 'components/shareInterface/shareInterfaceContents';

import calendarSvg from 'assets/img/white-calendar.svg';
import copySvg from 'assets/img/copy-white-icon.svg';
import blackLinkIcon from 'assets/img/black-link.svg';
import layoutDesignIcon from 'assets/img/embeds/layout-design.svg';
import statisticsIcon from 'assets/img/navbar/statistics.svg';
import moneyIcon from 'assets/img/navbar/money.svg';
import settingIcon from 'assets/img/navbar/setting.svg';
import shareIcon from 'assets/img/navbar/share.svg';

import styles from 'assets/jss/components/navbarStyles';
const useStyles = makeStyles(styles);

interface Props {
  handleOpenPreview: () => void;
  handleOpenShareUI: () => void;
}

const Navbar: FC<Props> = (props) => {

  const { handleOpenPreview, handleOpenShareUI } = props;
  const classes = useStyles();
  const router = useRouter();

  const [copied, setCopied] = useState(false);
  const [shareEl, setShareEl] = useState<HTMLButtonElement | null>(null);

  const handleClickShare = (event: React.MouseEvent<HTMLButtonElement>) => {
    setShareEl(event.currentTarget);
  };

  const open = Boolean(shareEl);
  const id = open ? 'share-ui' : undefined;

  const menuLinks = [
    {
      text: 'Links',
      link: '/',
      icon: blackLinkIcon,
      width: 15.43,
      height: 15.42
    },
    {
      text: 'Design',
      link: '/design',
      icon: layoutDesignIcon,
      width: 12,
      height: 15.71
    },
    {
      text: 'Stats',
      link: '/analytics',
      icon: statisticsIcon,
      width: 17.37,
      height: 15.71
    },
    {
      text: 'Money',
      link: '/monetize',
      icon: moneyIcon,
      width: 18.47,
      height: 10.84
    },
    {
      text: 'Settings',
      link: '/settings',
      icon: settingIcon,
      width: 15.46,
      height: 15.46
    }
  ];

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Box display='flex' alignItems='center' width='100%' flexWrap='wrap' className={classes.pcVersion}>
          <Typography variant="h6" fontSize={17} fontWeight={700} lineHeight='29px'>
            Lifetime Analytics:
          </Typography>
          <Box display='flex' alignItems='center' className={classes.lifeData}>
            <Box className={classes.infoItem} display='flex' alignItems='center'>
              <Box width={9} height={9} borderRadius='50%' className={classes.viewsIcon}></Box>
              <Typography variant="body1" fontSize={15} lineHeight='28px' sx={{ marginLeft: '11.4px' }}>
                <span>Views: </span>
                1,928
              </Typography>
            </Box>
            <Box className={classes.infoItem} display='flex' alignItems='center'>
              <Box width={9} height={9} borderRadius='50%' className={classes.clicksIcon}></Box>
              <Typography variant="body1" fontSize={15} lineHeight='28px' sx={{ marginLeft: '11.4px' }}>
                <span>Clicks: </span>
                2,483
              </Typography>
            </Box>
            <Box className={classes.infoItem} display='flex' alignItems='center'>
              <Box width={9} height={9} borderRadius='50%' className={classes.ctrIcon}></Box>
              <Typography variant="body1" fontSize={15} lineHeight='28px' sx={{ marginLeft: '11.4px' }}>
                <span>CTR: </span>
                50%
              </Typography>
            </Box>
            <Box className={classes.infoItem} display='flex' alignItems='center'>
              <Box width={9} height={9} borderRadius='50%' className={classes.revenueIcon}></Box>
              <Typography variant="body1" fontSize={15} lineHeight='28px' sx={{ marginLeft: '11.4px' }}>
                <span>Revenue: </span>
                $23,483,00
              </Typography>
            </Box>

            <IconButton className={classes.calendarBtn}>
              <Image src={calendarSvg} width={16.5} height={16.4} alt='' />
            </IconButton>
          </Box>
          <Box display='flex' alignItems='center' ml='auto' className={classes.rightBox}>
            <Typography variant='body1' fontSize={18} lineHeight='12px' fontWeight={500}>
              My FYP: &nbsp;
              <Link href='https://FYP.bio/KhalidGFX' target='_blank'>
                https://FYP.bio/KhalidGFX
              </Link>
            </Typography>
            <CopyToClipboard
              text='https://FYP.bio/KhalidGFX'
              onCopy={() => setCopied(true)}
            >
              <IconButton>
                <Image src={copySvg} width={23} height={15.56} alt='' />
              </IconButton>
            </CopyToClipboard>
            <Box>
              <Button variant='contained' onClick={handleClickShare} aria-describedby={id}>
                Share
              </Button>
              <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={() => { }}
              >
                <Popover
                  id={id}
                  open={open}
                  anchorEl={shareEl}
                  onClose={() => setShareEl(null)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  className={classes.sharePopoverWrapper}
                >
                  <Box position='relative' className='popoverContents'>
                    <ShareInterfaceContents handleClose={() => setShareEl(null)} />
                  </Box>
                </Popover>
              </Backdrop>
            </Box>

            <Button variant='contained' sx={{ marginRight: '9px' }} onClick={handleOpenPreview} className='preview-btn'>
              Preview
            </Button>
          </Box>
        </Box>

        <Box width='100%' className={classes.mobileVersion}>
          <Box display='flex' alignItems='center' className={classes.mobileTop} width='100%' flexWrap='wrap'>
            <Link href='/' underline='none' sx={{ display: 'flex' }} onClick={(e) => {
              e.preventDefault();
              router.push('/');
            }}>
              <svg width="64" height="53" viewBox="0 0 64 53">
                <g transform="translate(-135 -37.657)">
                  <text transform="translate(156 62.657)" fontSize="23" fontFamily="Gilroy" fontWeight="700">
                    <tspan x="0" y="0">FYP.</tspan><tspan x="0" y="22">BIO</tspan></text>
                  <rect width="6" height="39" rx="3" transform="translate(135 46.657)" fill="#a854f5" />
                </g>
              </svg>
            </Link>
            <Box ml='auto'>
              <Button variant='outlined' className='share-btn' onClick={handleOpenShareUI}>
                <Image src={shareIcon} alt='' width={16.68} height={17.58} />
                Share
              </Button>
            </Box>
          </Box>
          <Box className={clsx(classes.linkWrapper, 'navbar-links-wrapper')}>
            <Box className={classes.linksBox} display='flex' justifyContent='space-between'>
              {
                menuLinks.map((cell) => (
                  <Link
                    href='/'
                    variant='button'
                    underline='none'
                    key={cell.text}
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(cell.link);
                    }}
                    className={clsx({ [classes.activatedLink]: cell.link === router.pathname })}
                  >
                    <span className='icon-box'>
                      <Image src={cell.icon} alt='' width={cell.width} height={cell.height} />
                    </span>
                    {cell.text}
                  </Link>
                ))
              }
            </Box>
          </Box>
        </Box>
      </Toolbar>
      <CustomSnackbar
        open={copied}
        handleClose={() => setCopied(false)}
      />
    </AppBar>
  )
}

export default Navbar;
