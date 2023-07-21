import { Theme } from "@mui/system";

import arrowLeftIcon from 'assets/img/design/up-arrow-transparent.png';
import arrowRightIcon from 'assets/img/design/down-arrow-transparent.png';

const designMobileStyles = ((theme: Theme) => ({
  designMobile: {
    border: `13px solid ${theme.palette.common.black}`,
    borderRadius: '40px',
    backgroundColor: '#F57059',
    maxHeight: '1020px',
    overflowY: 'hidden' as const,
    [theme.breakpoints.down('sm')]: {
      maxHeight: '920px'
    }
  },
  navbar: {
    padding: '27px 30px 20px',
    '& .logo-icon': {
      '& .line-bar': {
        borderWidth: '3px',
        marginRight: '16px'
      },
      '& p': {
        fontSize: '26px',
        color: '#fff'
      }
    },
    [theme.breakpoints.down('sm')]: {
      padding: '27px 16px 20px'
    }
  },
  topIconBtn: {
    '& .MuiIconButton-root': {
      width: '42px',
      height: '42px',
      backgroundColor: 'rgba(255, 255, 255, 0.35)'
    }
  },
  carouselBox: {
    '& .react-multiple-carousel__arrow': {
      backgroundColor: 'unset',
      '&::before': {
        content: `''`
      }
    },
    '& .react-multiple-carousel__arrow--left': {
      backgroundImage: `url(${arrowLeftIcon.src})`,
      left: '34px'
    },
    '& .react-multiple-carousel__arrow--right': {
      backgroundImage: `url(${arrowRightIcon.src})`,
      right: '34px'
    }
  },
  carouselCell: {
    height: '455px',
    [theme.breakpoints.down('sm')]: {
      height: '350px',
    }
  },
  contentsInner: {
    paddingLeft: '32px',
    paddingRight: '32px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '16px',
      paddingRight: '16px'
    }
  },
  userAvatar: {
    border: '16px solid #ED676F',
    borderRadius: '50%',
    width: 'fit-content',
    marginTop: '-120px',
    zIndex: '2',
    marginBottom: '25px'
  },
  userInfoText: {
    '& h6': {
      color: theme.palette.white.light,
      fontSize: '27px',
      lineHeight: '37px'
    },
    '& p': {
      marginTop: '7px',
      color: theme.palette.white.light,
      fontSize: '17px',
      lineHeight: '21px'
    }
  },
  socialLinks: {
    marginTop: '33px',
    marginBottom: '57.6px',
    '& .MuiLink-root': {
      margin: '0 15px'
    },
    [theme.breakpoints.down('sm')]: {
      '& .MuiLink-root': {
        margin: '0 8px'
      },
    }
  },
  socialBtn: {
    marginBottom: '20px',
    padding: '10px 20px 12px 12px',
    color: theme.palette.white.light,
    cursor: 'pointer',
    borderRadius: '10px',
    '& h6': {
      marginBottom: '4px'
    }
  },
  socialBtnIcon: {
    backgroundColor: theme.palette.white.light,
    borderRadius: '7px',
    width: '50px',
    height: '50px',
    marginRight: '30px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '16px'
    }
  },
  claimLinkMobile: {
    maxHeight: 'unset',
    '& .nav-bar': {
      padding: '23px 25px 18px',
      '& .logo-icon': {
        '& p': {
          fontSize: '23px',
          lineHeight: '22px'
        },
        '& .line-bar': {
          marginRight: '14px'
        }
      },
      '& .top-icon-btns': {
        '& button': {
          width: '36px',
          height: '36px'
        },
        '& button:first-child': {
          marginRight: '13px'
        }
      }
    },
    '& .hero-image': {
      height: '402px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },   
    '& .user-avatar': {
      borderWidth: '13px',
      marginTop: '-95px',
      width: '155px',
      height: '160px'
    },
    '& .user-info-text': {
      '& h6': {
        fontSize: '25px',
        lineHeight: '35px'
      },
      '& p': {
        marginTop: '4px',
        fontSize: '16px',
        lineHeight: '20px'
      }
    },
    '& .social-links': {
      marginTop: '27px',
      marginBottom: '51px',
      '& .MuiLink-root': {
        margin: '0 13px'
      },
    },
    '& .social-link-item-list': {
      '& .social-link-item:first-child': {
        '&::after': {
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          content: `''`,
          position: 'absolute',
          borderRadius: '10px'
        }
      }
    },
    '& .social-link-item': {
      padding: '10px',
      '& .social-link-item-icon': {
        width: '46px',
        height: '43px',
        marginRight: '25px'
      },
      '& .social-link-item-text': {
        '& h6': {
          fontSize: '17px',
          marginBottom: '0'
        },
        '& p': {
          fontSize: '11px',
          marginTop: '2px'
        }
      },
      '& .links-up-icon': {
        zIndex: '1'
      }
    }
  },
}));

export default designMobileStyles;
