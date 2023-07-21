import { Theme } from "@mui/system";
import signUpMobileBg from 'assets/img/claim/sign-up-mobile-bg.webp';
import signUpSocialGroupBg from 'assets/img/claim/sign-up-social-group-bg.webp';
import linkItemBg from 'assets/img/fypbio/only-fans-bg.webp';

const claimPageStyles = ((theme: Theme) => ({
  title: {
    '& h3': {
      fontSize: '55px',
      lineHeight: '77px',
      color: theme.palette.common.black,
      marginBottom: '6px'
    },
    '& p': {
      fontSize: '21px',
      color: 'rgba(0, 0, 0, 0.5)',
      lineHeight: '29px'
    },
    [theme.breakpoints.down("md")]: {
      '& h3': {
        fontSize: '23px',
        lineHeight: '32px'
      },
      '& p': {
        fontSize: '15px',
        lineHeight: '21px',
        color: 'rgba(0, 0, 0, 0.8)'
      }
    }
  },
  contents: {
    maxWidth: '544px',
    [theme.breakpoints.down("md")]: {
      maxWidth: '100%',
      display: 'flex' as const,
      flexDirection: 'column',
      '& form': {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }
  },
  claimNowField: {
    marginTop: '7vh',
    height: '85px',
    '& .MuiInputBase-root': {
      width: '59.9%',
      borderRadius: '57px',
      position: 'relative',
      fontSize: '20px',
      lineHeight: '16px',
      paddingLeft: '0',
      paddingRight: '0',
      '&::before': {
        position: 'absolute',
        content: `''`,
        width: '100%',
        height: '100%',
        backgroundImage: 'repeating-linear-gradient(right, #676CE6, #D3A2EF 10%, #F3DA33 60%, #F57059 100%)',
        opacity: '0.2',
        borderRadius: '53px'
      },
      '& .MuiInputBase-input': {
        borderRadius: '53px',
        position: 'relative',
        backgroundColor: theme.palette.white.light,
        margin: '6px',
        boxSizing: 'border-box',
        height: 'calc(100% - 12px)',
        paddingLeft: '112px'
      },
      '& .MuiInputAdornment-root': {
        zIndex: '2',
        left: '35px',
        position: 'absolute',
        '& p': {
          fontSize: '20px',
          fontWeight: '600',
          color: theme.palette.common.black
        }
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '0'
      },
      '&.Mui-focused::before': {
        opacity: '0.1'
      }
    },
    '& .MuiButtonBase-root': {
      width: '35%',
      fontSize: '20px',
      fontWeight: '700',
      height: '85px',
      maxHeight: 'unset'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '36px',
      '& .MuiInputBase-root': {
        width: '100%',
        marginBottom: '16px',
        fontSize: '15px',
        '& .MuiInputAdornment-root': {
          left: 'calc(50% - 68px) !important',
          '& p': {
            fontSize: '15px !important',
          }
        },
        '& .MuiInputBase-input': {
          paddingLeft: 'calc(50% - 10PX) !important',
          height: 'calc(100% - 8px) !important',
          margin: '4px !important'
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderWidth: '4px !important'
        }
      },
      '& .MuiButtonBase-root': {
        width: '100%',
        fontSize: '16px',
        height: '56px'
      },
      '& .MuiButtonBase-root:first-of-type': {
        display: 'none !important'
      }
    }
  },

  continueBtn: {
    marginTop: 'calc((100vh - 300px) * 0.45)',
    '& .MuiButtonBase-root': {
      fontSize: '22px',
      fontWeight: '700',
      lineHeight: '31px',
      paddingTop: '20px',
      paddingBottom: '21px',
      maxHeight: 'unset'
    },
    [theme.breakpoints.down("md")]: {
      marginTop: 'auto !important',
      '& .MuiButtonBase-root': {
        fontSize: '17px',
        lineHeight: '24px',
        height: '58px'
      },
      '&.claim-first-step-btn': {
        display: 'none'
      }
    }
  },
  errorText: {
    '&.MuiTypography-root': {
      fontSize: '17px',
      lineHeight: '24px',
      marginTop: '24px',
      [theme.breakpoints.down('md')]: {
        fontSize: '15px',
        lineHeight: '16px',
        marginTop: '12px'
      }
    }
  },
  startMyPageBtn: {
    display: 'none',
    '& .MuiButton-endIcon': {
      top: '50%',
      position: 'absolute',
      transform: 'translateY(-50%)',
      right: '30px'
    },
    [theme.breakpoints.down("md")]: {
      display: 'inline-flex'
    }
  },
  linkForm: {
    marginTop: '85px',
    marginBottom: '40px',
    '& .MuiInputBase-root': {
      fontSize: '18px',
      height: '85px'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: '2px',
      borderColor: 'rgba(228, 22, 98, 0.18) !important'
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(228, 22, 98, 0.1) !important'
    },
    '& .MuiInputAdornment-positionStart': {
      marginRight: '0',
      '& p': {
        fontSize: '18px',
        fontWeight: 'bold',
        color: theme.palette.common.black
      }
    },    
    '& .MuiButtonBase-root': {
      fontSize: '18px',
      lineHeight: '15px',
      width: '200px',
      position: 'absolute',
      height: '100%',
      maxHeight: 'unset',
      right: '0',
      fontWeight: 'bold'
    },
    '& .MuiInputBase-inputAdornedStart': {
      paddingLeft: '0 !important'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '40px',
      marginBottom: '32px',
      '& .MuiInputBase-root': {
        fontSize: '15px',
        height: '58px !important'
      },
      '& .MuiInputAdornment-positionStart p': {
        fontSize: '15px',
      },
      '& .MuiButtonBase-root': {
        fontSize: '15px',
        width: '138px'
      }
    }
  },
  nameItem: {
    '& h6': {
      fontSize: '20px',
      lineHeight: '15px',
      color: 'rgba(0, 0, 0, 0.55)'
    },
    '& .MuiButtonBase-root': {
      fontSize: '16px',
      fontWeight: '500',
      padding: '13px 33px',
      height: '50px'
    },
    [theme.breakpoints.down('md')]: {
      '& h6': {
        fontSize: '15px',
      },
      '& .MuiButtonBase-root': {
        fontSize: '15px',
        padding: '10px 26px',
        height: '42px'
      },
    }
  },
  divider: {
    borderColor: 'rgba(112, 112, 112, 0.06)',
    margin: '20px 0',
    [theme.breakpoints.down('md')]: {
      margin: '17px 0'
    }
  },
  reRollBtn: {
    marginTop: '44px',
    marginBottom: '126px',
    '&.MuiButtonBase-root': {
      fontSize: '19px',
      fontWeight: '700',
      height: '72px'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '16px',
      '&.MuiButtonBase-root': {
        fontSize: '17px',
        height: '58px',
        maxHeight: 'unset'
      },
    }
  },
  emailField: {
    marginBottom: '20px',
    marginTop: '45px',
    [theme.breakpoints.down('md')]: {
      marginTop: '28px',
      marginBottom: '14px'
    }
  },
  authField: {
    [theme.breakpoints.down('md')]: {
      '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '1px !important'
      }
    }
  },
  orText: {
    marginTop: 'auto',
    marginBottom: '31px',
    '& p': {
      fontSize: '20px',
      color: theme.palette.common.black,
      lineHeight: '28px',
      backgroundColor: theme.palette.white.light,
      padding: '0 36.5px',
      position: 'relative',
      zIndex: '2'
    },
    '&::before': {
      content: `''`,
      position: 'absolute',
      left: '0',
      width: '100%',
      height: '1px',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.05)'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '58px',
      marginBottom: '18px',
      '& p': {
        fontSize: '15px',
        lineHeight: '20px',
        padding: '0 20px'
      }
    }
  },
  socialLinks: {
    marginBottom: '45px',
    '& .MuiLink-root': {
      borderRadius: '8px',
      backgroundColor: '#FBFBFB',
      height: '65px',
      width: '170px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '15px'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '34px',
      '& .MuiLink-root': {
        width: 'calc((100% - 20px) / 3)',
        height: '40px',
        '& > span': {
          height: '100% !important'
        }
      },
      '& .google-icon': {
        width: '14.55px',
        height: '14.55px'
      }
    }
  },
  authText: {
    marginBottom: '34px',
    '&.MuiTypography-root': {
      fontSize: '18px',
      lineHeight: '25px',
      color: theme.palette.common.black
    },
    '& .MuiLink-root': {
      color: theme.palette.common.black,
      fontWeight: '600'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '20px',
      '&.MuiTypography-root': {
        fontSize: '15px',
        lineHeight: '20px',
      }
    }
  },
  authBottomText: {
    marginTop: '34px',
    '&.MuiTypography-root': {
      fontSize: '16px',
      lineHeight: '23px',
      letterSpacing: '0',
      color: theme.palette.common.black
    },
    '& .MuiLink-root': {
      color: theme.palette.common.black,
      fontWeight: '600'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '16px',
      '&.MuiTypography-root': {
        fontSize: '15px',
        lineHeight: '20px',
      }
    }
  },
  categories: {
    maxWidth: '605px',
    marginTop: '57px',
    '& .MuiButtonBase-root': {
      fontSize: '17px',
      lineHeight: '24px',
      padding: '18px 25px',
      marginBottom: '22px',
      marginRight: '16px'
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      marginTop: '33px',
      '& .MuiButtonBase-root': {
        fontSize: '15px',
        lineHeight: '20px',
        minHeight: 'unset',
        marginRight: '11px',
        marginBottom: '17px'
      }
    }
  },
  aboutContinue: {
    marginTop: '100px',
    [theme.breakpoints.down('md')]: {
      marginTop: 'auto !important'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '16px !important'
    },
  },
  activeCategory: {
    '&.MuiButtonBase-root': {
      background: 'linear-gradient(left, rgba(22, 31, 228, 0.46), rgba(187, 20, 226, 0.46))',
      color: theme.palette.white.light,
      borderColor: 'transparent'
    }
  },
  mobileContents: {
    [theme.breakpoints.down('md')]: {
      height: '100%'
    }
  },
  aboutContents: {
    display: 'flex' as const,
    flexDirection: 'column' as const,
    height: '100%'
  },
  signUpMobile: {
    backgroundImage: `url(${signUpMobileBg.src})`,
    backgroundSize: '100% auto',
    backgroundPosition: 'center top',    
    backgroundColor: '#000',
    borderColor: '#fff',
    '& .user-avatar': {
      marginTop: '26px',
      borderWidth: '0'
    },
    '& .user-info-text': {
      '& p': {
        color: 'rgba(255, 255, 255, 0.8)'
      }
    },
    '& .social-links': {
      '& svg': {
        filter: 'drop-shadow(0 0 16px #148AFF)'
      },
      '& .instagram-icon path, & .instagram-icon ellipse, & .snapchat-icon path, & .fansly-icon path, & .youtube-outlined-icon path:first-child, & .twitter-icon path': {
        fill: '#54AAF5'
      },
      '& .youtube-outlined-icon path': {
        stroke: '#54AAF5'
      }
    },
    '& .social-link-item': {
      background: 'rgba(56, 77, 106, 0.4)',
      boxShadow: 'inset 0 5px 20px rgba(255, 255, 255, 0.22)',
      filter: 'drop-shadow(0 5px 20px rgba(0, 0, 0, 0.34))',
      borderRadius: '17px',
      '& .social-link-item-icon': {
        backgroundColor: '#445E81'
      }
    }
  },
  signUpPage: {
    '& .left-section': {
      minHeight: '100vh',
      dispaly: 'flex',
      flexDirection: 'column'
    },
    '& .contents-inner': {
      height: 'calc(100% - 156px)'
    },
    '& .auth-form': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    '& .sorcial-group': {
      backgroundImage: `url(${signUpSocialGroupBg.src})`,
      backgroundSize: '100% 100%',
      '& .social-link-item': {
        background: 'rgba(56, 77, 106, 0.4)',
        boxShadow: 'inset 0 5px 20px rgba(255, 255, 255, 0.22)',
        filter: 'drop-shadow(0 5px 20px rgba(0, 0, 0, 0.34))',
        borderRadius: '17px',
        '& .social-link-item-icon': {
          backgroundColor: '#445E81'
        }
      }
    }
  },
  aboutMobile: {
    backgroundColor: '#fff',
    borderColor: "#fff",
    '& .logo-icon': {
      '& p': {
        color: "#000"
      },
      '& .line-bar': {
        borderColor: "#000",
        backgroundColor: '#000'
      }
    },
    '& .nav-bar': {
      '& .MuiButtonBase-root': {
        backgroundColor: '#F5F5F5'
      },
      '& svg path': {
        fill: '#000'
      }
    },
    '& .user-info-text': {
      '& h6': {
        color: '#000'
      },
      '& p': {
        color: 'rgba(0, 0, 0, 0.8)'
      }
    },
    '& .social-links': {
      '& .instagram-icon path, & .instagram-icon ellipse, & .snapchat-icon path, & .fansly-icon path, & .youtube-outlined-icon path:first-child, & .twitter-icon path': {
        fill: '#000'
      },
      '& .youtube-outlined-icon path': {
        stroke: '#000'
      }
    },
    '& .user-avatar': {
      borderColor: '#fff',
      backgroundColor: "#fff"
    },
    '& .social-link-item': {
      background: 'rgba(0, 0, 0, 0.84)'
    },
    '& .social-link-item-icon': {
      backgroundColor: '#636363'
    },
    '& .social-link-item-list': {
      '& .social-link-item:first-child': {
        position: 'relative',
        backgroundImage: `url(${linkItemBg.src})`,
        '&::before': {
          background: 'rgba(0, 0, 0, 0.84)',
          position: 'absolute',
          content: `''`,
          width: '100%',
          height: '100%',
          top: '0',
          left: '0',
          borderRadius: '10px'
        }
      }
    }
  },
  aboutPage: {
    '& .sorcial-group': {     
      backgroundColor: '#fff',
      borderColor: '#fff',
      '& .social-link-item': {
        background: 'rgba(0, 0, 0, 0.84)',
        
        '& .social-link-item-icon': {
          backgroundColor: '#636363'
        }
      }
    }
  }
}));

export default claimPageStyles;
