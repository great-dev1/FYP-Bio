import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";
import Image from 'next/image';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

import SidebarLogo from './sidebarLogo';

import linkSvg from 'assets/img/white-link.svg';
import designSvg from 'assets/img/white-design.svg';
import statisticsSvg from 'assets/img/white-statistics.svg';
import whiteSvg from 'assets/img/white-money.svg';
import settingsSvg from 'assets/img/white-settings.svg';
import bookSvg from 'assets/img/book.svg';
import supportSvg from 'assets/img/support.svg';
import userAvatar from 'assets/img/user-avatar.png';

import styles from 'assets/jss/components/sidebarStyles';

const useStyles = makeStyles(styles);

const SidebarContent: FC = () => {

  const classes = useStyles();
  const router = useRouter();

  const menuLinks = [
    {
      text: 'Links',
      link: '/',
      svg: <Image src={linkSvg} alt='Link' width={25.7} height={25.7} />
    },
    {
      text: 'Design',
      link: '/design',
      svg: <Image src={designSvg} alt='Link' width={23} height={30} />
    },
    {
      text: 'Analytics',
      link: '/analytics',
      svg: <Image src={statisticsSvg} alt='Link' width={29.76} height={26.93} />
    },
    {
      text: 'Monetize',
      link: '/monetize',
      svg: <Image src={whiteSvg} alt='Link' width={33.2} height={19.48} />
    },
    {
      text: 'Settings',
      link: '/settings',
      svg: <Image src={settingsSvg} alt='Link' width={25.69} height={25.69} />
    }
  ];

  return (
    <Box className={classes.sidebarContents}>
      <Box display='flex' justifyContent='center' sx={{ marginBottom: '52px' }}>
        <Box width={79} height={66} display='flex'>
          <Link href='/' underline='none' className='logo' onClick={(e) => {
            e.preventDefault();
            router.push('/');
          }}>
            <SidebarLogo />
          </Link>
        </Box>
      </Box>
      <Box>
        {
          menuLinks.map((cell) => (
            <Box className={clsx(classes.menuItem, { [classes.activedMenu]: router.pathname === cell.link || (cell.link === '/monetize' && router.pathname.includes('/monetize')) })} key={cell.text} display='flex' flexDirection='column' alignItems='center'>
              <IconButton onClick={() => router.push(cell.link)}>
                {cell.svg}
              </IconButton>
              <Link variant='button' href={cell.link} underline='none' fontSize={15} lineHeight='21px' 
                onClick={(e) => {
                  e.preventDefault();
                  router.push(cell.link);
                }}
              >
                {cell.text}
              </Link>
            </Box>
          ))
        }
      </Box>

      <Box className={classes.bottomBox}>
        <Box className={clsx(classes.menuItem, classes.bottomLink)} display='flex' flexDirection='column' alignItems='center'>
          <IconButton onClick={() => router.push('/support')}>
            <Image src={bookSvg} alt='Link' width={30} height={30} />
          </IconButton>
        </Box>
        <Box className={clsx(classes.menuItem, classes.bottomLink)} display='flex' flexDirection='column' alignItems='center'>
          <IconButton>
            <Image src={supportSvg} alt='Link' width={30.3} height={30.3} />
          </IconButton>
        </Box>
        <Box className={classes.avatarItem} display='flex' flexDirection='column' alignItems='center'>
          <IconButton>
            <Image src={userAvatar} alt='Link' width={60} height={60} unoptimized />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default SidebarContent;
