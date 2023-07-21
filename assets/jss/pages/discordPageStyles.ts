import { Theme } from "@mui/system";
import bannerImg from 'assets/img/product/discord-banner.webp';
import mobileBannerImg from 'assets/img/product/discord-banner-mobile.webp';

const discordPageStyles = ((theme: Theme) => ({
  wrapper: {
    backgroundColor: '#FCFCFC'
  },
  banner: {
    backgroundImage: `url(${bannerImg.src})`,
    height: '283px',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      height: '222px',
      backgroundImage: `url(${mobileBannerImg.src})`
    }
  },
  contents: {
    padding: '0 165px',
    [theme.breakpoints.down('xl')]: {
      padding: '0 50px'
    },
    [theme.breakpoints.down('lg')]: {
      padding: '0 25px'
    }
  },
  header: {
    marginBottom: '74px',
    marginTop: '-65px',
    '& .header-img': {
      marginBottom: '35px',
      border: '6px solid #9F83EB',
      borderRadius: '26px',
      backgroundColor: '#9F83EB',
      '& > span': {
        borderRadius: '23px'
      }
    },
    '& h1': {
      fontSize: '30px',
      lineHeight: '43px',
      marginBottom: '14px',
      transition: 'all .3s',
      '&:hover': {
        transform: 'scale(1.05)',
        transition: 'all .3s'
      }
    },
    '& p': {
      fontSize: '20px',
      lineHeight: '30px',
      maxWidth: '1120px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '42px',
      '& .header-img': {
        marginBottom: '30px',
        border: '4px solid #9F83EB',
        borderRadius: '17px',
        '& > span': {
          borderRadius: '14px !important'
        }
      },
      '& h1': {
        fontSize: '22px',
        lineHeight: '31px',
        marginBottom: '10px'
      },
      '& p': {
        fontSize: '14px',
        lineHeight: '21px'
      },
    }
  },
  optionsBox: {
    '& h2': {
      fontSize: '25px',
      lineHeight: '35px',
      marginBottom: '36px'
    },
    [theme.breakpoints.down('md')]: {
      '& h2': {
        fontSize: '18px',
        lineHeight: '25px',
        marginBottom: '22px'
      },
    }
  },
  membershipCard: {
    padding: '33px 45px 46.5px',
    borderRadius: '12px',
    border: '1px solid #EAEAEA',
    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.04)',
    height: '100%',
    '& .level-type': {
      fontSize: '28px',
      lineHeight: '40px',
      marginBottom: '8px'
    },
    '& .level-price': {
      marginBottom: '80px',
      '& h3': {
        fontSize: '45px',
        lineHeight: '60px',
        marginRight: '8px'
      },
      '& p': {
        fontSize: '22px',
        lineHeight: '30px'
      }
    },
    '& .level-desc': {
      fontSize: '20px',
      lineHeight: '30px',
      marginBottom: '55px',
      marginTop: '-10px'
    },
    '& .options-list': {
      marginBottom: '34px',
      [theme.breakpoints.down('md')]: {
        marginBottom: '30px',
      }
    },
    '& .level-option': {
      '& span': {
        marginTop: '5px !important'
      },
      '& p': {
        marginLeft: '18px',
        fontSize: '20px',
        lineHeight: '30px',
        flex: '1'
      }
    },
    '& .roles-box': {
      marginBottom: '40px',
      marginTop: 'auto',
      '& .roles-given': {
        fontSize: '20px',
        lineHeight: '28px',
        marginBottom: '20px'
      }
    },
    '& .roles-type': {
      width: 'fit-content',
      borderRadius: '22px',
      padding: '10.8px 22.5px 12.3px 16px',
      '& p': {
        fontSize: '15px',
        lineHeight: '22px',
        marginLeft: '14px'
      },
      '& .MuiBox-root': {
        width: '14px',
        height: '14px',
        borderRadius: '50%'
      }
    },
    '& .join-btn': {
      textTransform: 'none',
      boxShadow: 'none',
      color: '#fff',
      background: '#000',
      borderRadius: '46px',
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: '28px',
      height: '58px',
      transition: 'none',
      '&:hover': {
        background: 'rgba(0, 0, 0, 0.8)'
      }
    },
    '& .center-join-btn': {
      background: 'linear-gradient(to right, #BB14E2, #161FE4) !important',
      '&:hover': {
        opacity: '0.7'
      }
    },
    '& .more-link': {
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: '500',
      color: '#9F83EB',
      display: 'block',
      textAlign: 'center',
      marginTop: '22.5px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '20px 26px 24.5px',
      '& .level-type': {
        fontSize: '18px',
        lineHeight: '25px',
        marginBottom: '5px'
      },
      '& .level-price': {
        marginBottom: '43px',
        '& h3': {
          fontSize: '29px !important',
          lineHeight: '38px !important',
          marginRight: '4px !important'
        },
        '& p': {
          fontSize: '14px !important',
          lineHeight: '20px !important'
        }
      },
      '& .level-desc': {
        fontSize: '14px',
        lineHeight: '18px',
        marginBottom: '28px',
        marginTop: '-14px'
      },
      '& .level-option': {
        '& > span:first-child': {
          marginTop: '0px !important'
        },
        '& p': {
          marginLeft: '12px !important',
          fontSize: '14px !important',
          lineHeight: '18px !important',
        }
      },
      '& .roles-box': {
        marginBottom: '32px',
        '& .roles-given': {
          fontSize: '12px !important',
          lineHeight: '17px !important',
          marginBottom: '10.5px !important'
        }
      },
      '& .roles-type': {
        padding: '7px 22.5px 7.7px 17.7px !important',
        '& p': {
          fontSize: '14px !important',
          lineHeight: '20px !important',
          marginLeft: '12px !important'
        },
        '& .MuiBox-root': {
          width: '9px !important',
          height: '9px !important',
          borderRadius: '50%'
        }
      },
      '& .join-btn': {
        fontSize: '15px',
        lineHeight: '21px',
        height: '40px',
        background: 'linear-gradient(to right, #BB14E2, #161FE4)',
        '&:hover': {
          opacity: '0.7',
          transition: 'opacity .3s'
        }
      },
      '& .more-link': {
        fontSize: '15px',
        lineHeight: '21px',
        marginTop: '20.5px'
      },
    }
  },
  behindScenes: {
    paddingRight: '27px !important',
    background: 'linear-gradient(to right, rgba(234, 63, 29, 0.06), rgba(267, 157, 0, 0.06))',
    '& p': {
      color: '#F69D00'
    },
    '& .MuiBox-root': {
      background: 'linear-gradient(to right, rgba(234, 63, 29, 1), rgba(267, 157, 0, 1))'
    }
  },
  secretGroup: {
    background: 'linear-gradient(to right, rgba(225, 55, 219, 0.06), rgba(0, 29, 215, 0.06))',
    '& p': {
      color: '#C36CE2'
    },
    '& .MuiBox-root': {
      background: 'linear-gradient(to right, #E137AE, #9E7DDF)'
    }
  },
  oneToOne: {
    background: 'linear-gradient(to right, rgba(255, 155, 212, 0.06), rgba(246, 0, 98, 0.06))',
    '& p': {
      color: '#F60062'
    },
    '& .MuiBox-root': {
      background: 'linear-gradient(to right, #F60062, #F69D00)'
    }
  },
  footer: {
    marginTop: '80px',
    paddingBottom: '50px',
    '& h4': {
      fontSize: '30px',
      lineHeight: '43px',
      marginBottom: '42px'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '42px',
      paddingBottom: '30px',
      '& h4': {
        fontSize: '22px',
        lineHeight: '31px',
        marginBottom: '25px'
      }
    }
  },
  footerInner: {
    padding: '40px 30px',
    background: 'linear-gradient(to right, rgba(22, 31, 228, 0.02), rgba(187, 20, 226, 0.02))',    
    borderRadius: '16px',
    [theme.breakpoints.down('md')]: {
      padding: '33px 16px'
    }
  },
  workCard: {
    '& .card-img': {
      height: '46px'
    },
    '& p': {
      fontSize: '23px',
      lineHeight: '32px',
      marginTop: '26px'
    },
    [theme.breakpoints.down('md')]: {
      '& .card-img': {
        height: '37.2pxpx'
      },
      '& p': {
        fontSize: '15px',
        lineHeight: '21px',
        marginTop: '18px'
      },
    }
  },
  secretGroupCard: {
    borderColor: '#E4DAFF',
    background: 'linear-gradient(to right, #FDFAFE, #FBFBFE)'
  }
}));

export default discordPageStyles;
