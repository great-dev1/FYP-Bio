import { Theme } from "@mui/system";

import carouselControlUp from 'assets/img/design/up-arrow-transparent.png';
import carouselControlDown from 'assets/img/design/down-arrow-transparent.png';
import onlyFansBg from 'assets/img/fypbio/only-fans-bg.webp';
import carouselControlBg from 'assets/img/fypbio/carousel-control.svg';

const fypBioPageStyles = ((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    paddingBottom: '64px',
    [theme.breakpoints.down('md')]: {
      paddingBottom: '30px',
    }
  },
  navbar: {
    zIndex: '1299' as const,
    padding: '18px 0 18px 0',
    top: '0',
    width: '100%',
    left: '0%',
    boxSizing: 'border-box' as const,
    '& .links-box': {
      '& .MuiLink-root': {
        width: '58px',
        height: '58px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.26)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all .3s',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          transition: 'all .3s'
        }
      },
      '& .MuiLink-root:first-child': {
        marginRight: '23px'
      },
      '& .share-link': {
        justifyContent: 'unset',
        paddingLeft: '15.5px'
      }
    },
    [theme.breakpoints.down('md')]: {
      padding: '23px 26px 23px 26px',
      '& .links-box': {
        '& .MuiLink-root': {
          width: '36px !important',
          height: '36px !important',
        },
        '& .add-user-icon': {
          width: '16.6px',
          height: '17.9px'
        },
        '& .MuiLink-root:first-child': {
          marginRight: '13px !important'
        },
        '& .share-link': {
          paddingLeft: '10px !important'
        }
      }
    }
  },
  navbarInner: {
    width: '90%',
    maxWidth: '1680px',
    '& .navbar-logo': {
      display: 'flex'
    },   
    [theme.breakpoints.down('md')]: {
      width: '100%',
      '& .navbar-logo': {
        '& svg': {
          width: '63px',
          height: '53px'
        }
      }
    }
  },
  scrollNavbar: {
    display: 'none' as const,
    opacity: '0',
    transition: 'all .3s',
    borderBottom: '1px solid #707070',
    '& .nav-user-info-box': {
      '& h2': {
        fontSize: '30px',
        lineHeight: '45px',
        marginLeft: '32.6px'
      }
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '24px',
      paddingBottom: '24px',
      '& .logo': {
        display: 'none'
      },
      '& .nav-user-info-box': {
        '& h2': {
          fontSize: '16px !important',
          lineHeight: '24px !important',
          marginLeft: '16px !important'
        }
      }
    }
  },
  showScrollNav: {
    display: 'block' as const,
    opacity: '1',
    transition: 'all .3s'
  },
  contents: {
    maxWidth: '1190px',
    width: '80%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      paddingTop: '99px'
    }
  },
  footer: {
    '& > p': {
      fontSize: '20px',
      lineHeight: '28px',
      marginBottom: '9px'
    },
    '& .footer-logo': {
      display: 'flex'
    },
    [theme.breakpoints.down('md')]: {
      '& > p': {
        fontSize: '15px',
        lineHeight: '21px',
        marginBottom: '7px'
      },
      '& .footer-logo': {
        '& svg': {
          width: '50px',
          height: '41px'
        }
      }
    }
  },
  bannerCarousel: {
    '& .react-multi-carousel-list': {
      borderRadius: '0 0 26px 26px'
    },
    '& .carousel-img': {
      height: '358px'
    },
    '& .react-multiple-carousel__arrow': {
      width: '48px',
      height: '48px',
      backgroundColor: 'unset',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      minWidth: 'unset',
      minHeight: 'unset',
      top: '140px',
      '&::before': {
        content: `''`
      },
      '&:hover': {
        opacity: '0.5'
      }
    },
    '& .react-multiple-carousel__arrow--right': {
      backgroundImage: `url(${carouselControlDown.src})`,
      right: '40px'
    },
    '& .react-multiple-carousel__arrow--left': {
      backgroundImage: `url(${carouselControlUp.src})`,
      left: '40px'
    },
    [theme.breakpoints.down('md')]: {
      '& .react-multi-carousel-list': {
        borderRadius: '0'
      },
      '& .carousel-img': {
        height: '402px'
      },
      '& .react-multiple-carousel__arrow': {
        width: '39px',
        height: '39px',
        top: '187.6px'
      },
      '& .react-multiple-carousel__arrow--right': {
        right: '27px'
      },
      '& .react-multiple-carousel__arrow--left': {
        left: '27px'
      },
    }
  },
  contentsInner: {
    [theme.breakpoints.down('md')]: {
      padding: '0 28px'
    }
  },
  userInfoBox: {
    marginBottom: '39px',
    '& .user-info-avatar': {
      padding: '19.3px 17.3px',
      borderRadius: '50%',
      marginBottom: '25.8px',
      width: '201px',
      height: '210px',
      boxSizing: 'border-box'
    },
    '& h2': {
      fontSize: '30px',
      lineHeight: '45px'
    },
    '& p': {
      fontSize: '18px',
      lineHeight: '20px'
    },
    '& .social-links': {
      marginTop: '33.4px',
      '& .MuiLink-root': {
        margin: '0 12px',
        display: 'flex',
        '&:hover svg': {
          transform: 'scale(1.2)',
          transition: 'all 0.2s'
        }
      }     
    },
    '&.move-top': {
      marginTop: '-140px'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '27.4px',
      padding: '0 16px',
      '& .user-info-avatar': {
        padding: '14.6px 13px',
        marginBottom: '22.8px',
        width: '155px',
        height: '162px'
      },
      '& h2': {
        fontSize: '25px',
        lineHeight: '35px',
        marginBottom: '4px'
      },
      '& p': {
        fontSize: '16px'
      },
      '& .social-links': {
        marginTop: '27.4px',
        '& .instagram-icon': {
          width: '20.87px',
          height: '20.87px'
        },
        '& .snapchat-icon': {
          width: '22.34px',
          height: '20.87px'
        },
        '& .fansly-icon': {
          width: '25.37px',
          height: '20.87px'
        },
        '& .youtube-outlined-icon': {
          width: '25.42px',
          height: '18.05px'
        },
        '& .twitter-icon': {
          width: '22.89px',
          height: '18.74px'
        }
      },
      '&.move-top': {
        marginTop: '-102px'
      },
    }
  },
  linkItem: {
    padding: '13px 33px 13px 14px',
    borderRadius: '17px',
    marginBottom: '26px',
    cursor: 'pointer',
    position: 'relative' as const,
    '& .link-item-icon': {
      zIndex: '2'
    },
    '& .link-item-text': {
      zIndex: '2',
      flex: '1'
    },
    '& h3': {
      fontSize: '25px',
      lineHeight: '35px'
    },
    '& p': {
      fontSize: '14px',
      lineHeight: '20px',
      marginTop: '4px'
    },
    '& .links-up-icon': {
      position: 'relative',
      zIndex: '2'
    },
    '&:hover': {
      boxShadow: 'rgb(186 146 255 / 40%) 0px 0px 15px 0px'
    },
    '&::after': {
      width: 'calc(100% + 2px)',
      height: 'calc(100% + 2px)',
      position: 'absolute' as const,
      left: '-1px',
      top: '-1px',
      borderRadius: '17px',
      content: `''`
    },
    [theme.breakpoints.down('md')]: {
      padding: '10px 18.8px 10px 10px',
      borderRadius: '10px',
      marginBottom: '18px',
      '& h3': {
        fontSize: '17px',
        lineHeight: '24px'
      },
      '& p': {
        fontSize: '11px',
        lineHeight: '16px',
        marginTop: '2px'
      },
      '&::after': {
        borderRadius: '10px'
      },
      '& .only-fans-icon': {
        width: '23px',
        height: '23.4px'
      },
      '& .vimeo-icon': {
        width: '21.7px',
        height: '18.72px'
      },
      '& .twitch-icon': {
        width: '19.13px',
        height: '22.32px'
      },
      '& .spotify-icon': {
        width: '21.87px',
        height: '21.87px'
      },
      '& .tiktok-icon': {
        width: '19.4px',
        height: '22.32px'
      },
      '& .discord-icon': {
        width: '22.41px',
        height: '17.08px'
      },
      '& .cameo-icon': {
        width: '19.4px',
        height: '21.32px'
      },
      '& .paypal-icon': {
        width: '16.52px',
        height: '19.8px'
      },
      '& .go-fund-me-icon': {
        width: '24.63px',
        height: '18.75px'
      },
      '& .facebook-icon': {
        width: '11.05px',
        height: '21.87px'
      },
      '& .soundcloud-icon': {
        width: '21.91px',
        height: '10.95px'
      },
      '& .pinterest-icon': {
        width: '17.37px',
        height: '22.33px'
      },
      '& .telegram-icon': {
        width: '22.35px',
        height: '18.63px'
      },
      '& .reddit-icon': {
        width: '22.78px',
        height: '18.47px'
      },
      '& .shopify-icon': {
        width: '20.56px',
        height: '22.39px'
      },
      '& .cashapp-icon': {
        width: '22.72px',
        height: '22.71px'
      },
      '& .gleam-icon': {
        width: '22.29px',
        height: '22.29px'
      },
      '& .bitcoin-icon': {
        width: '16.53px',
        height: '23.39px'
      },
      '& .eth-icon': {
        width: '15.69px',
        height: '25.55px'
      },
      '& .doge-icon': {
        width: '18.71px',
        height: '20.28px'
      }
    }
  },
  bgImgLink: {
    backgroundImage: `url(${onlyFansBg.src}) !important`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: 'calc(100% - 2px)',
    paddingTop: '12px',
    paddingBottom: '12px',
    marginLeft: '1px',
    [theme.breakpoints.down('md')]: {
      paddingTop: '9px',
    paddingBottom: '9px',
    }
  },
  linkItemIcon: {
    borderRadius: '12px',
    width: '67px',
    height: '62px',
    marginRight: '36px',
    [theme.breakpoints.down('md')]: {
      borderRadius: '7px',
      width: '46px',
      height: '43px',
      marginRight: '25px'
    }
  },
  subscribeForm: {
    marginBottom: '36px',
    padding: '14px 36px 20px',
    borderRadius: '17px',
    '& > p': {
      fontSize: '25px',
      fontWeight: '700',
      marginBottom: '18px'
    },
    '& .MuiInputBase-root': {
      height: '64px',
      borderRadius: '9px',
      '& .MuiInputBase-input': {
        padding: '20px 35px',
        fontSize: '16px'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        display: 'none'
      },
      '& input::placeholder': {
        opacity: '0.76'
      }
    },
    '& .MuiButtonBase-root': {
      position: 'absolute',
      right: '0',
      top: '0',
      height: '100%',
      boxShadow: 'none',
      fontSize: '24px',
      textTransform: 'none',
      fontWeight: '700',
      borderRadius: '9px',
      width: '196px',
      '&:hover': {
        boxShadow: 'rgb(186 146 255 / 40%) 0px 0px 15px 0px'
      }
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '21px',
      padding: '11px 20px 14px',
      borderRadius: '10px',
      '& > p': {
        fontSize: '17px',
        marginBottom: '12px',
        lineHeight: '24px'
      },
      '& .MuiInputBase-root': {
        height: '45px',
        borderRadius: '7px',
        '& .MuiInputBase-input': {
          padding: '13px 18px 15px !important',
          fontSize: '15px !important'
        }
      },
      '& .MuiButtonBase-root': {
        fontSize: '15px',
        width: '93px'
      },
    }
  },
  heartCard: {
    padding: '0 18px 20px',
    borderRadius: '17px',
    height: '403px',
    boxSizing: 'border-box' as const,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-peat',
    backgroundPosition: 'center'   
  },
  heartCardInner: {
    backgroundColor: theme.palette.white.light,
    width: '100%',
    padding: '18px 40px',
    borderRadius: '12px',
    '& h4': {
      fontSize: '25px',
      lineHeight: '35px',
      color: theme.palette.common.black,
      marginBottom: '4px'
    },
    '& p': {
      fontSize: '14px',
      lineHeight: '20px',
      color: theme.palette.common.black,
      marginRight: '14px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '12px 20px',
      borderRadius: '12px',
      '& h4': {
        fontSize: '18px',
        lineHeight: '25px'
      },
      '& p': {
        marginRight: '9px'
      },
    }
  },
  viewMoreCards: {
    '& .section-label': {
      fontSize: '25px',
      lineHeight: '35px',
      marginBottom: '32px'
    },
    '& .react-multi-carousel-item': {
      width: '436px',
      paddingRight: '30px'
    },
    '& .react-multiple-carousel__arrow': {
      width: '48px',
      height: '48px',
      backgroundImage: `url(${carouselControlBg.src})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      opacity: '0.8',
      border: '0',
      background: 'rgba(0, 0, 0, 0)',
      '&::before': {
        content: `''`
      }
    },
    '& .react-multiple-carousel__arrow--left': {
      left: '93px',
      transform: 'rotate(180deg)'
    },
    '& .react-multiple-carousel__arrow--right': {
      right: '93px'
    },
    [theme.breakpoints.down('md')]: {
      '& .section-label': {
        fontSize: '16px',
        lineHeight: '23px',
        marginBottom: '20px'
      }
    }
  },
  mainCardItem: {
    padding: '18px 19px 13px',
    borderRadius: '17px',
    cursor: 'pointer' as const,
    '& .card-img': {
      height: '170px',
      borderRadius: '14px',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      marginBottom: '20px'
    },
    '& .card-title': {
      fontSize: '22px',
      lineHeight: '31px',
      marginBottom: '4px'
    },
    '& .card-description': {
      fontSize: '15px',
      lineHeight: '20px',
      marginBottom: '13px'
    },
    '& .card-price': {
      fontSize: '17px',
      lineHeight: '24px',
      marginLeft: '14px'
    },
    '&:hover': {
      boxShadow: 'rgb(186 146 255 / 40%) 0px 0px 15px 0px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '16px 17px 12px',
      '& .card-img': {
        height: '150px',
        borderRadius: '14px',
        marginBottom: '14px'
      },
      '& .card-title': {
        fontSize: '17px',
        marginBottom: '2px',
        lineHeight: '24px'
      },
      '& .card-description': {
        fontSize: '12px',
        lineHeight: '15px',
        marginBottom: '13px'
      },
      '& .card-price': {
        fontSize: '14px',
        lineHeight: '15px',
        marginLeft: '12.3px'
      },
    }
  },
  carouselItem: {
    paddingBottom: '1px'
  },
  videoWrapper: {
    '& iframe': {
      width: '100%',
      height: '503px',
      borderRadius: '17px'
    }
  }
}));

export default fypBioPageStyles;
