import { Theme } from "@mui/system";
import polygonImg from 'assets/img/share-ui/polygon.svg';

const navbarStyles = ((theme: Theme) => ({
  appbar: {
    backgroundColor: theme.palette.white.light,
    boxShadow: 'none',
    color: theme.palette.common.black,
    '& .MuiToolbar-root': {
      padding: '24px 40px 24px 44px'
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiToolbar-root': {
        padding: '20px 0px 0px 0px'
      }
    }
  },
  infoItem: {
    marginRight: '28px',
    '& span': {
      fontWeight: '700'
    },
    '& .MuiBox-root': {

    }
  },
  viewsIcon: {
    backgroundColor: theme.palette.orange.main
  },
  clicksIcon: {
    backgroundColor: theme.palette.blue[600]
  },
  ctrIcon: {
    backgroundColor: theme.palette.yellow.main
  },
  revenueIcon: {
    backgroundColor: theme.palette.success.main
  },
  calendarBtn: {
    '&.MuiButtonBase-root': {
      width: '47px',
      height: '47px',
      backgroundColor: theme.palette.primary.purple
    }
  },
  rightBox: {
    padding: '9px 13px 10px 36.4px',
    backgroundColor: '#FBFBFE',
    borderRadius: '46px',
    '& .MuiTypography-root': {
      color: theme.palette.common.black,
      '& .MuiLink-root': {
        color: theme.palette.blue.main
      }
    },
    '& .MuiIconButton-root': {
      marginLeft: '40px',
      marginRight: '9px',
      width: '43px',
      height: '43px',
      backgroundColor: theme.palette.blue[600]
    },
    '& .MuiButton-root': {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.white.light,
      textTransform: 'none',
      fontSize: '15px',
      fontWeight: '700',
      padding: '10px 29px 13px',
      borderRadius: '46px',
      lineHeight: '21px',
      boxShadow: 'none !important'
    },
    '& .preview-btn': {
      marginLeft: '9px'
    },
    [theme.breakpoints.up('lg')]: {
      '& .preview-btn': {
        display: 'none'
      }
    }
  },
  mobileTop: {
    padding: '0 25px',
    marginBottom: '30px',
    '& .share-btn': {
      textTransform: 'none',
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '20px',
      borderColor: '#707070',
      color: theme.palette.common.black,
      boxShadow: 'none !important',
      borderRadius: '46px',
      padding: '13px 15px',
      '& > span': {
        marginRight: '8px !important'
      }
    },
    '& .MuiIconButton-root': {
      padding: '0'
    }
  },
  linksBox: {
    padding: '0 0 14px 0',
    borderBottom: `1px solid ${theme.palette.border['grey008']}`,
    minWidth: '350px',
    '& .MuiLink-root': {
      textTransform: 'none',
      color: '#000',
      fontSize: '14px',
      lineHeight: '20px',
      position: 'relative',
      transition: 'all 1s',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontWeight: '400',
      '& .icon-box': {
        display: 'flex',
        width: '36px',
        height: '36px',
        borderRadius: '36px',
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '7.5px'
      },
      '&:hover': {
        transition: 'all 0.5s',
        color: theme.palette.common.black,
        '& .icon-box': {
          background: 'linear-gradient(to right, rgba(245, 236, 248, 0.7), rgba(219, 219, 255, 0.7))'
        }
      }
    }
  },
  activatedLink: {
    '&.MuiLink-root': {
      color: theme.palette.common.black,
      fontWeight: '700',
      '&::before': {
        content: `''`,
        position: 'absolute',
        width: '100%',
        height: '1px',
        backgroundColor: theme.palette.grey.dark,
        bottom: '-15px',
        left: '0'
      },
      '& .icon-box': {
        background: 'linear-gradient(to right, rgba(245, 236, 248, 0.7), rgba(219, 219, 255, 0.7))'
      }
    }
  },
  linkWrapper: {
    overflowX: 'auto' as const,
    width: '100%',
    paddingLeft: '25px',
    paddingRight: '25px',
    display: 'block' as const,
    paddingBottom: '8px'  
  },
  pcVersion: {
    '@media screen and (max-width: 1675px)': {
      '& h6': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('md')]: {
      display: 'none !important'
    }
  },
  mobileVersion: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  },
  lifeData: {
    marginLeft: '48px',
    '@media screen and (max-width: 1675px)': {
      marginLeft: '0 !important'
    }
  },
  sharePopoverWrapper: {
    '& .MuiPopover-paper': {
      width: '415px',
      boxShadow: 'none',
      paddingTop: '33px',
      background: 'transparent',
      overflowY: 'clip',
      '&::before': {
        position: 'absolute',
        content: `''`,
        width: '22px',
        height: '15px',
        backgroundImage: `url(${polygonImg.src})`,
        backgroundSize: '100% 100%',
        right: '55px',
        top: '20px'
      },
      '& .popoverContents': {
        background: '#fff',
        borderRadius: '30px',
      }
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
}));

export default navbarStyles;
