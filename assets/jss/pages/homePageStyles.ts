import { Theme } from "@mui/system";
import claimSectionBg from 'assets/img/fypbio/only-fans-bg.webp';
import socialLinkBg from 'assets/img/fypbio/only-fans-bg.webp';
import neonBg from 'assets/img/homepage/neon-bg.webp';


const homePageStyles = ((theme: Theme) => ({
  headerSection: {
    padding: '222px 47px 178px 124px',
    '& .left-section': {
      width: '39.44%',
      '& h1': {
        textTransform: 'uppercase',
        marginBottom: '26px'
      },
      '& .details-info': {
        marginTop: '40px'
      }
    },
    '& .right-section': {
      width: '53.7%',
      right: '47px',
      top: '-122px',
      height: '1244px'
    },
    [theme.breakpoints.down('xl')]: {
      paddingTop: '34px',
      '& .left-section': {
        width: '46%'
      },
      '& div.right-section': {
        width: '50%',
        height: '900px',
        top: '-50px'
      }
    },
    [theme.breakpoints.up('md')]: {
      '& .left-section': {
        '& .details-info': {
          display: 'none'
        }
      }
    },
    [theme.breakpoints.down('lg')]: {
      paddingTop: '120px',
      paddingBottom: '50px',
      padding: '0 26px',
      '& .left-section': {
        '& h1': {
          fontSize: '37px',
          lineHeight: '45px',
          marginBottom: '15px !important'
        },
        '& > p': {
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '300'
        }
      },
      '& .right-section': {
        height: '600px !important',
        width: '455px !important'
      }
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '20px',
      paddingBottom: '32px',
      '& .left-section': {
        width: '100%'
      },
      '& .right-section': {
        display: 'none'
      }
    }
  },
  claimNowField: {
    marginTop: '64px',
    '& .MuiInputBase-root': {
      width: '60.9%',
      borderRadius: '57px',
      position: 'relative',
      fontSize: '25px',
      lineHeight: '21px',
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
        margin: '8px',
        boxSizing: 'border-box',
        height: 'calc(100% - 16px)',
        paddingLeft: '158px'
      },
      '& .MuiInputAdornment-root': {
        zIndex: '2',
        left: '54px',
        position: 'absolute',
        '& p': {
          fontSize: '25px',
          fontWeight: '700',
          color: 'rgba(0, 0, 0, 0.55)'
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
      fontSize: '25px',
      fontWeight: '600',
      height: '91px',
      maxHeight: 'unset'
    },
    [theme.breakpoints.down('lg')]: {
      marginTop: '25px',
      '& .MuiInputBase-root': {
        width: '100%',
        marginBottom: '16px',
        fontSize: '14px',
        '& .MuiInputAdornment-root': {
          left: 'calc(50% - 68px) !important',
          '& p': {
            fontSize: '14px !important',
          }
        },
        '& .MuiInputBase-input': {
          paddingLeft: 'calc(50% - 10PX) !important',
          height: 'calc(100% - 8px) !important',
          margin: '4px !important'
        }
      },
      '& .MuiButtonBase-root': {
        width: '100%',
        fontSize: '16px',
        height: '56px'
      },
      '& .claim-btn': {
        display: 'none !important'
      }
    }
  },
  startMyPageBtn: {
    display: 'none' as const,
    '&:hover': {
      '& .MuiButton-endIcon': {
        right: '24px'
      },
    },
    '& .MuiButton-endIcon': {
      top: '50%',
      position: 'absolute',
      transform: 'translateY(-50%)',
      right: '30px'
    },
    [theme.breakpoints.down("lg")]: {
      display: 'inline-flex'
    }
  },
  headerMobile: {
    height: '745px',
    overflowY: 'hidden' as const,
    width: '372px',
    border: '12px solid #fff',
    boxShadow: '21px 20px 32px rgba(168, 168, 168, 0.54)',
    borderRadius: '36px',
    '& .hero-img': {
      height: '274px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
    },
    '& .mobile-contents': {
      padding: '0 20px'
    },
    '& .user-avatar': {
      width: '148px',
      height: '148px',
      padding: '10px',
      borderRadius: '50%',
      marginTop: '-100px'
    },
    '& .user-info-text': {
      marginBottom: '28px',
      '& h6': {
        marginBottom: '4px'
      }
    },
    '& .social-links': {
      columnGap: '24px',
      marginBottom: '42px'
    },
    '& .social-link-item': {
      borderRadius: '10px',
      padding: '8px',
      '& .social-link-item-icon': {
        width: '38px',
        height: '36px',
        borderRadius: '7px'
      }
    },

    '&.first-device': {
      background: '#313744',
      '& .user-avatar': {
        background: '#313744'
      },
      '& .social-link-item': {
        background: '#555E72',
        '&.first-line': {
          background: 'linear-gradient(to right, #F7931E, #ED6940)'
        }
      },
      '& .social-link-item-icon': {
        background: '#fff'
      }
    },
    '&.second-device': {
      background: 'linear-gradient(to bottom, #AA1E22, #AA1E22 70%, #973B97)',
      '& .user-avatar': {
        background: '#AA1E22'
      },
      '& .social-link-item': {
        background: 'rgba(255, 255, 255, 0.15)',
        '&.first-line': {
          background: 'linear-gradient(to right, #DA6268, #CD4598)'
        }
      },
      '& .social-link-item-icon': {
        background: 'rgba(255, 255, 255, 0.25)'
      }
    },
    '&.third-device': {
      background: 'linear-gradient(to bottom, #38285C, #38285C, #211729)',
      '& .user-avatar': {
        background: '#38285C'
      },
      '& .social-link-item': {
        background: 'linear-gradient(to right, #4F4870, #37355E 45%, #37355E)'
      },
      '& .social-link-item-icon': {
        background: '#425D81'
      },
      '& .social-links': {
        '& svg': {
          filter: 'drop-shadow(0 0 16px #148AFF)'
        }
      }
    },
    [theme.breakpoints.down('lg')]: {
      borderWidth: '6px',
      height: '364px',
      borderRadius: '16px',
      width: '190px',
      '& .hero-img': {
        height: '140px !important'
      },
      '& .mobile-contents': {
        padding: '0 16px !important'
      },
      '& .user-avatar': {
        width: '74px !important',
        height: '74px !important',
        padding: '6px !important',
        marginTop: '-40px !important',
        marginBottom: '14px !important'
      },
      '& .user-info-text': {
        marginBottom: '16px !important',
        '& h6': {
          fontSize: '14px !important',
          lineHeight: '18px !important',
          marginBottom: '2px !important'
        },
        '& p': {
          fontSize: '8px !important',
          lineHeight: '12px !important'
        }
      },
      '& .social-links': {
        columnGap: '14px !important',
        marginBottom: '26px !important',
        '& .instagram-icon': {
          width: '11px !important',
          height: '11px !important'
        },
        '& .snapchat-icon': {
          width: '13px !important',
          height: '12px !important'
        },
        '& .fansly-icon': {
          width: '14px !important',
          height: '12px !important'
        },
        '& .youtube-outlined-icon': {
          width: '15px !important',
          height: '11px !important'
        },
        '& .twitter-icon': {
          width: '13px !important',
          height: '10px !important'
        }
      },
      '& .social-link-item': {
        padding: '6px !important',
        '& .links-up-icon': {
          width: '12px'
        }
      },
      '& .social-link-item-icon': {
        width: '22px !important',
        height: '22px !important',
        marginRight: '10px',
        '& .tiktok-icon': {
          width: '12px',
          height: '14px'
        },
        '& .vimeo-icon': {
          width: '16px',
          height: '13px'
        },
        '& .twitch-icon': {
          width: '14px',
          height: '16px'
        },
        '& .soundcloud-icon': {
          width: '16px',
          height: '10px'
        },
        '& .only-fans-icon': {
          width: '14px !important',
          height: '14px !important'
        }
      },
      '& .social-link-item-text': {
        '& h6': {
          fontSize: '11px !important',
          lineHeight: '14px !important',
          marginBottom: '0 !important'
        }
      }
    }
  },
  firstHeaderWrapper: {
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    '& .mobile-device': {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%) rotate(5.21deg)',
      position: 'absolute',
      zIndex: '1'
    },
    '& .video-card': {
      zIndex: '2',
      top: '240px',
      right: '50%',
      transform: 'rotate(348deg)',
      width: '290px',
      padding: '16px',
      borderRadius: '28px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundImage: 'url(/img/main-card-img.webp)',
      height: '190px',
      '& .play-btn': {
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }
    },
    '& .subscribe-form': {
      left: '50%',
      bottom: '240px',
      boxShadow: '20px 20px 20px rgba(168, 168, 168, 0.25)',
      width: 'fit-content',
      borderRadius: '30px',
      transform: 'rotate(352deg)',
      zIndex: '2'
    },
    '& .airplane': {
      left: '50%',
      top: '46%'
    },
    '& .video': {
      top: '50%',
      transform: 'translateY(-50%)',
      left: '16.6%'
    },
    [theme.breakpoints.down('xl')]: {
      '& div.video-card': {
        top: '60px'
      },
      '& div.subscribe-form': {
        bottom: '50px'
      },
      '& div.video': {
        left: '60px'
      },
      '& div.airplane': {

      }
    },
    [theme.breakpoints.down('lg')]: {
      '& .video-card': {
        top: '110px !important',
        width: '140px !important',
        padding: '10px 8px !important',
        borderRadius: '16px !important',
        height: '90px !important',
        '& .play-btn': {
          width: '25px'
        },
        '& h6': {
          fontSize: '8px',
          lineHeight: '12px'
        },
        '& p': {
          fontSize: '6px',
          lineHeight: '8px'
        }
      },
      '& .video': {
        width: '42px',
        height: '42px',
        left: 'calc(50% - 116px - 42px) !important'
      },
      '& .airplane': {
        height: '130px',
        width: '188px',
        left: '53% !important'
      },
      '& .subscribe-form': {
        width: '148px !important',
        height: '65px !important',
        bottom: '110px !important'
      }
    },
    [theme.breakpoints.down('sm')]: {
      '& .airplane': {
        left: 'unset !important',
        right: '0'
      }
    }
  },
  secondHeaderWrapper: {
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    '& .mobile-device': {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%) rotate(354.8deg)',
      position: 'absolute',
      zIndex: '1'
    },
    '& .image-card': {
      background: '#fff',
      right: 'calc(50% + 120px)',
      bottom: '50%',
      zIndex: '2',
      transform: 'rotate(5.21deg)',
      width: '270px',
      borderRadius: '30px',
      boxShadow: '15px 15px 15px rgba(0, 0, 0, 0.15)',
      '& .img-box': {
        height: '230px',
        backgroundImage: 'url(/img/female-chef-seasoning-salad.webp)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        borderRadius: '30px 30px 0 0',
        '& p': {
          width: 'fit-content',
          padding: '4px 13px',
          borderRadius: '10px',
          background: 'linear-gradient(to right, #DA6268, #CD4598)',
          position: 'absolute',
          top: '25px',
          left: '16px'
        }
      },
      '& .card-content': {
        padding: '16px'
      }
    },
    '& .top-right-img': {
      top: '300px',
      zIndex: '2',
      left: 'calc(50% + 190px)'
    },
    '& .camera': {
      top: '50%',
      left: 'calc(50% + 140px)'
    },
    [theme.breakpoints.down('lg')]: {
      '& .image-card': {
        right: 'calc(50% + 60px)',
        bottom: '50%',
        width: '130px',
        borderRadius: '16px',
        boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.15) !important',
        '& .img-box': {
          height: '110px !important',
          borderRadius: '16px 16px 0 0 !important',
          '& p': {
            padding: '2px 6px !important',
            borderRadius: '6px !important',
            top: '12px !important',
            left: '10px !important',
            fontSize: '8px',
            lineHeight: '12px'
          }
        },
        '& .card-content': {
          padding: '8px !important',
          '& h6': {
            fontSize: '8px',
            lineHeight: '11px'
          },
          '& p': {
            fontSize: '6px',
            lineHeight: '8px'
          },
          '& .icon': {
            width: '14px'
          }
        }
      },
      '& .top-right-img': {
        top: '150px',
        left: 'calc(50% + 100px)',
        width: '40px'
      },
      '& .camera': {
        width: '130px',
        top: '50%',
        left: 'calc(50% + 70px)'
      }
    },
    '@media screen and (max-width: 400px)': {
      '& .camera': {
        left: 'unset !important',
        right: '-16px'
      },
      '& .image-card': {
        left: '-16px',
        right: 'unset'
      }
    }
  },
  thirdHeaderWrapper: {
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    '& .mobile-device': {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%) rotate(5.21deg)',
      position: 'absolute',
      zIndex: '1'
    },
    '& .top-left': {
      zIndex: '2',
      top: '240px',
      right: 'calc(50% - 50px)',
      transform: 'rotate(348deg)',
    },
    '& .left-middle': {
      top: '50%',
      transform: 'translateY(-50%)',
      right: 'calc(50% + 200px)'
    },
    '& .right-bottom': {
      left: 'calc(50% + 50px)',
      top: '50%'
    },
    [theme.breakpoints.down('xl')]: {
      '& .top-left': {
        top: '60px'
      },
    },
    [theme.breakpoints.down('lg')]: {
      '& .top-left': {
        width: '160px',
        top: '80px !important',
        right: 'calc(50% - 30px)'
      },
      '& .left-middle': {
        width: '42px',
        height: '42px',
        left: 'calc(50% - 116px - 42px) !important',
        right: 'unset'
      },
      '& .right-bottom': {
        width: '148px !important',
        bottom: '110px !important',
        left: 'calc(50% + 25px)'
      }
    },
    '@media screen and (max-width: 400px)': {
      '& .right-bottom': {
        left: 'unset',
        right: '-16px'
      }
    }
  },
  headerAnimation: { 
    perspective: '3500px',
    transformOrigin: 'center'
  },
  claimFormSection: {
    padding: '115.7px 0 141px',
    backgroundImage: `url(${claimSectionBg.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    '& .section-inner': {
      maxWidth: '906px'
    },
    '& h1': {
      textTransform: 'uppercase',
      marginBottom: '32px'
    },
    '& .sub-title': {
      maxWidth: '616px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '70px'
    },
    '& .claim-btn': {
      textTransform: 'none',
      fontSize: '25px',
      lineHeight: '35px',
      fontWeight: '600',
      width: '296px',
      height: '91px',
      background: '#FF77A1',
      borderRadius: '46px',
      boxShadow: '15px 15px 50px #EC356D',
      '&:hover': {
        opacity: '0.7',
        transition: 'all .3s'
      }
    },
    '& .MuiInputBase-root': {
      flex: '1',
      marginRight: '38px',
      background: 'rgba(255, 255, 255, 0.3)',
      borderRadius: '57px',
      padding: '0 53.6px',
      '& .MuiInputBase-input': {
        height: '91px',
        color: '#fff',
        fontSize: '25px',
        lineHeight: '35px',
        boxSizing: "border-box"
      },
      '& input::placeholder': {
        opacity: '1'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        display: 'none'
      }
    },
    '&::before': {
      width: '100%',
      height: '100%',
      position: 'absolute',
      content: `''`,
      background: 'linear-gradient(to right, rgba(243, 90, 137, 0.99), rgba(245, 112, 89, 0.99))',
      top: '0',
      left: '0'
    },
    [theme.breakpoints.up('lg')]: {
      '& .claim-btn': {
        '& > span:first-child': {
          display: 'none !important'
        }
      }
    },
    [theme.breakpoints.down('lg')]: {
      padding: '40px 26px 53px',
      '& h1': {
        marginBottom: '15px',
        fontSize: '27px',
        lineHeight: '32px',
        textTransform: 'none',
        fontWeight: '600'
      },
      '& .sub-title': {
        fontSize: '15px',
        lineHeight: '21px',
        marginBottom: '35px'
      },
      '& .claim-btn': {
        fontSize: '16px',
        lineHeight: '23px',
        fontWeight: '500',
        width: '100%',
        height: '53px',
        position: 'relative',
        marginTop: '20px',
        '& > span:first-child': {
          position: 'absolute !important',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '26px'
        },
        '&:hover': {
          '& > span:first-child': {
            right: '21px !important',
            transition: 'all .3s'
          }
        }
      },
      '& .MuiInputBase-root': {
        width: '100%',
        marginRight: '0',
        paddingLeft: 'calc(50% - 60px)',
        paddingRight: '20px',
        '& .MuiInputBase-input': {
          padding: '0',
          height: '53px !important',
          fontSize: '14px !important',
          lineHeight: '20px !important',
        },
        '& .MuiInputAdornment-root': {
          marginRight: '4px',
          marginTop: '-1px'
        },
        '& .prefix-text': {
          fontSize: '14px',
          lineHeight: '20px'
        }
      },
    },
    [theme.breakpoints.up('md')]: {
      '& .mobile-title': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .pc-title': {
        display: 'none'
      },
    }
  },
  dreamSection: {
    padding: '0 124px 0 30px',
    '& .img-section': {
      width: '54.92%'
    },
    '& .contents-section': {
      width: '39.25%',
      '& h6': {
        marginBottom: '12px'
      },
      '& p': {
        margin: '30px 0 42px'
      },
      '& .MuiButtonBase-root': {
        boxShadow: '15px 15px 50px rgba(112, 66, 220, 0.17)',
        fontSize: '23px',
        fontWeight: '500',
        padding: '24px 65px',
        lineHeight: '32px',
        maxHeight: 'unset'
      }
    },
    [theme.breakpoints.down('lg')]: {
      padding: '0 26px 0 0',
      '& .contents-section': {
        '& h6': {
          marginBottom: '6px !important',
          fontSize: '15px',
          lineHeight: '21px'
        },
        '& h1': {
          fontSize: '27px',
          lineHeight: '32px'
        },
        '& p': {
          margin: '12px 0 18px !important',
          fontSize: '14px',
          lineHeight: '20px'
        },
        '& .MuiButtonBase-root': {
          fontSize: '16px !important',
          padding: '13.5px 65px !important',
          lineHeight: '23px !important'
        }
      }
    },
    [theme.breakpoints.down('md')]: {
      padding: '0',
      '& .img-section': {
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto'
      },
      '& .contents-section': {
        width: '100%',
        padding: '0 26px',
        '& .MuiButtonBase-root': {
          width: '100%'
        }
      }
    }
  },
  trySection: {
    background: 'rgba(254, 220, 215, 0.12)',
    padding: '92px 113px 0 122px',
    '& .left-section': {
      width: '37.6%',
      '& h6': {
        marginBottom: '12px'
      },
      '& p': {
        margin: '26.3px 0 40px'
      },
      '& .MuiButtonBase-root': {
        fontSize: '23px',
        lineHeight: '32px',
        fontWeight: '500',
        padding: '24px 55px',
        maxHeight: 'unset',
        boxShadow: '15px 15px 50px rgba(112, 66, 220, 0.17)'
      }
    },
    '& .right-section': {
      width: '61.78%',
      marginRight: '-50px'
    },
    '& .animation-box': {
      height: '600px',
      marginTop: '-120px',
      width: '100%'
    },
    [theme.breakpoints.down('lg')]: {
      padding: '92px 26px 0',
      '& .left-section': {
        width: '60%',
        '& h6': {
          marginBottom: '6px !important',
          fontSize: '15px',
          lineHeight: '21px'
        },
        '& h1': {
          fontSize: '27px',
          lineHeight: '37px'
        },
        '& p': {
          margin: '19px 0 40px !important',
          fontSize: '15px',
          lineHeight: '21px'
        },
        '& .MuiButtonBase-root': {
          fontSize: '16px !important',
          lineHeight: '23px !important',
          padding: '14.5px 55px !important'
        }
      },
      '& .right-section': {
        width: '40%',
        marginRight: '0'
      }
    },
    [theme.breakpoints.up('md')]: {
      '& .animation-box': {
        display: 'none'
      }      
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: '70px',
      flexWrap: 'wrap' as const,
      marginTop: '57px',
      '& .left-section': {
        marginTop: '-34px',
        width: '100%'
      },
      '& .MuiButtonBase-root': {
        width: '100%'
      },
      '& .right-section': {
        display: 'none'
      }
    }
  },
  modelDataSection: {
    margin: '172px 0',
    padding: '0 124px',
    '& .desc': {
      marginTop: '100px',
      '& h3': {
        marginBottom: '26.4px'
      }
    },
    '& .model-section': {
      width: 'calc(50% - 29px)',
      padding: '0 75px 68px',
      '& .desc': {
        marginTop: '100px'
      },      
      '&::before': {
        content: `''`,
        width: '100%',
        height: 'calc(100% - 170px)',
        background: '#FDFDFD',
        borderRadius: '30px',
        position: 'absolute',
        left: '0',
        bottom: '0'
      }
    },
    '& .data-section': {
      width: 'calc(50% - 29px)',
      padding: '0 82.4px 68.1px 62.4px',
      '&::before': {
        content: `''`,
        width: '100%',
        height: 'calc(100% - 170px)',
        background: '#FDFDFD',
        borderRadius: '30px',
        position: 'absolute',
        left: '0',
        bottom: '0'
      }
    },
    [theme.breakpoints.down('xl')]: {
      '& .data-section': {
        width: '100%'
      },
      '& .model-section': {
        width: '100%'
      }
    },
    [theme.breakpoints.down('lg')]: {
      padding: '0 60px',
      margin: '43px 0 43px',
      '& .data-section': {
        width: 'calc(50% - 12px)',
        padding: '0',
        '& .desc': {
          marginTop: '25px'
        },
        '&::before': {
          display: 'none'
        }
      },
      '& .desc': {
        '& h3': {
          fontSize: '18px',
          lineHeight: '25px',
          marginBottom: '6px !important'
        },
        '& p': {
          fontSize: '13px',
          lineHeight: '22px'
        }
      },
      '& .data-item': {
        height: '112px'
      },
      '& .model-section': {
        width: 'calc(50% - 12px)',
        padding: '0',
        '& .desc': {
          marginTop: '25px !important'
        },
        '&::before': {
          display: 'none'
        }
      }
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '20px !important',
      padding: '0 26px',
      '& .data-section': {
        width: '100%'
      },
      '& .model-section': {
        width: '100%',
        marginBottom: '28.6px',
        '& .image-box': {
          maxWidth: '500px',
          margin: '0 auto'
        },
      }
    }
  },
  getPaidSection: {
    background: 'linear-gradient(to bottom, rgba(243, 218, 51, 0.06), rgba(255, 255, 255, 0.06))',
    padding: '41px 168px 79px 240px',
    '& .left-section': {
      maxWidth: '47.78%',
      flex: '1',
      '& h6': {
        marginBottom: '12px'
      },
      '& p': {
        margin: '28.3px 0 38.6px'
      },
      '& .MuiButtonBase-root': {
        boxShadow: '15px 15px 50px rgba(243, 218, 51, 0.19)',
        background: 'linear-gradient(to right, #F3DA33, #FFE42C)',
        padding: '24px 65px',
        fontSize: '23px',
        lineHeight: '32px',
        borderRadius: '58px',
        textTransform: 'none',
        fontWeight: '500',
        '&:hover': {
          opacity: '0.7',
          transition: 'opacity .3s'
        }
      }
    },
    '& .right-section': {
      // width: '40.6%',
      width: '600px',
      paddingTop: '66px',
      paddingBottom: '28px',
      paddingLeft: '116px',
      paddingRight: '100px',
      height: '500px'
    },
    [theme.breakpoints.down('xl')]: {
      padding: '41px 124px 79px 124px'
    },
    [theme.breakpoints.down('lg')]: {
      padding: '40.7px 60px 72px',
      '& .left-section': {
        width: '47.78%',
        flex: 'unset',
        '& h6': {
          marginBottom: '6px !important',
          fontSize: '15px',
          lineHeight: '21px'
        },
        '& h1': {
          fontSize: '27px',
          lineHeight: '37px'
        },
        '& p': {
          margin: '19.1px 0 26px !important',
          fontSize: '13px',
          lineHeight: '18px'
        },
        '& .MuiButtonBase-root': {
          padding: '14.6px 65px !important',
          fontSize: '16px !important',
          lineHeight: '23px !important'
        }
      },
      '& .right-section': {
        width: '334px',
        paddingTop: '40px',
        paddingBottom: '16px',
        paddingLeft: '54.5px',
        paddingRight: '54.5px',
        height: '281px'
      },
      '& .center-img': {
        width: '225px',
        height: '225px'
      },
      '& .dollar-group': {
        width: '42.75px',
        height: '42.75px'
      },
      '& .dollar': {
        width: '37.56px',
        height: '37.56px'
      },
      '& .money': {
        width: '46.31px',
        height: '46.31px'
      },
      '& .purse': {
        width: '35.69px',
        height: '35.69px'
      },
      '& .visa': {
        width: '41.35px',
        height: '41.35px'
      },
      '& .marstercard': {
        width: '52.1px',
        height: '31.26px'
      },
      '& .money-bag': {
        width: '35.56px',
        height: '35.56px'
      },
      '& .paypal': {
        width: '30.6px',
        height: '30.6px'
      }
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: '26px',
      paddingRight: '26px',
      flexDirection: 'column-reverse',
      '& .left-section': {
        width: '100%',
        marginTop: '60px',
        maxWidth: 'unset',
        '& .MuiButtonBase-root': {
          width: '100%'
        }
      },
      '& .right-section': {
        width: '100%',
        maxWidth: '334px'
      }
    }
  },
  subscriber: {
    background: '#6454F5',
    borderRadius: '20px',
    height: '224px',
    padding: '0 68px 0 60px',
    cursor: 'pointer' as const,
    '& p': {
      marginTop: '8px'
    },
    [theme.breakpoints.down('lg')]: {
      padding: '0 30px',
      '& .icon-box': {
        width: '44.7px'
      },
      '& h6': {
        fontSize: '13px',
        lineHeight: '18px'
      },
      '& p': {
        marginTop: '2px',
        fontSize: '18px',
        lineHeight: '25px'
      }
    }
  },
  timeBox: {
    height: '224px',
    background: '#F6E25A',
    borderRadius: '20px',
    padding: '12.8px 29.4px',
    cursor: 'pointer' as const,
    '& .contents': {
      paddingLeft: '12px',
      marginTop: '14px'
    },
    '& p': {
      marginTop: '6px'
    },
    [theme.breakpoints.down('lg')]: {
      padding: '9.4px 14.5px',
      '& .icon-box': {
        width: '34.17px'
      },
      '& .contents': {
        marginTop: '3px'
      },
      '& h6': {
        fontSize: '12px',
        lineHeight: '15px'
      },
      '& p': {
        marginTop: '2px',
        fontSize: '16px',
        lineHeight: '23px'
      }
    }
  },
  donations: {
    height: '224px',
    background: '#FFF29B',
    borderRadius: '20px',
    cursor: 'pointer' as const,
    padding: '0 14px 19px',
    '& .contents': {
      paddingLeft: '36px'
    },
    '& h6': {
      wordBreak: 'break-all'
    },
    '& p': {
      marginTop: '6px'
    },
    [theme.breakpoints.down('lg')]: {
      padding: '0 6px 9px',
      '& .icon-box': {
        width: '49.7px',
        height: '48.23px'
      },
      '& .contents': {
        paddingLeft: '11px'
      },
      '& h6': {
        fontSize: '12px',
        lineHeight: '15px'
      },
      '& p': {
        fontSize: '16px',
        lineHeight: '23px',
        marginTop: '2px'
      }
    }
  },
  totalViews: {
    height: '224px',
    background: '#757575',
    borderRadius: '20px',
    cursor: 'pointer' as const,
    padding: '0 60px',
    '& p': {
      marginTop: '8px'
    },
    [theme.breakpoints.down('lg')]: {
      padding: '0 30px',
      '& .icon-box': {
        width: '45.04px',
        height: '47.6px'
      },
      '& h6': {
        fontSize: '13px',
        lineHeight: '18px'
      },
      '& p': {
        fontSize: '18px',
        lineHeight: '25px',
        marginTop: '2px'
      }
    }
  },
  monthlyVisitors: {
    height: '224px',
    background: '#D3D2F9',
    borderRadius: '20px',
    cursor: 'pointer' as const,
    boxShadow: '15px 15px 15px rgba(168, 168, 168, 0.3)',
    '& h6': {
      marginTop: '6px'
    },
    [theme.breakpoints.down("lg")]: {
      '& p': {
        fontSize: '18px',
        lineHeight: '25px'
      },
      '& h6': {
        fontSize: '13px',
        lineHeight: '18px',
        marginTop: '2px'
      },
      '& .icon-box': {
        width: '35px'
      }
    }
  },
  netEarning: {
    height: '224px',
    background: 'linear-gradient(to right, #231EE3, #A716E2)',
    borderRadius: '20px',
    cursor: 'pointer' as const,
    padding: '0 68px 0 60px',
    [theme.breakpoints.down('lg')]: {
      padding: '0 30px',
      '& .icon-box': {
        width: '45px',
      },
      '& p': {
        fontSize: '18px',
        lineHeight: '25px'
      },
      '& h6': {
        fontSize: '13px',
        lineHeight: '18px',
        marginTop: '2px'
      }
    }
  },
  exclusiveContent: {
    height: '224px',
    background: 'linear-gradient(to right, #431CE3, #7C19E2)',
    borderRadius: '20px',
    cursor: 'pointer' as const,
    boxShadow: '15px 15px 15px rgba(168, 168, 168, 0.3)',
    padding: '0 68px 0 60px',
    [theme.breakpoints.down('lg')]: {
      padding: '0 30px',
      '& .icon-box': {
        width: '50px',
      },
      '& p': {
        fontSize: '18px',
        lineHeight: '25px'
      },
      '& h6': {
        fontSize: '13px',
        lineHeight: '18px',
        marginTop: '2px'
      }
    }
  },
  personalShoutouts: {
    background: '#fff',
    height: '224px',
    borderRadius: '20px',
    cursor: 'pointer' as const,
    boxShadow: '15px 15px 15px rgba(168, 168, 168, 0.3)',
    '& .contents': {
      marginTop: '6px'
    },
    [theme.breakpoints.down('lg')]: {
      '& .icon-box': {
        width: '35px',
      },
      '& p': {
        fontSize: '18px',
        lineHeight: '25px'
      },
      '& h6': {
        fontSize: '13px',
        lineHeight: '18px',
        marginTop: '2px'
      },
      '& .contents': {
        marginTop: '2px !important'
      }
    }
  },
  grossEarnings: {
    height: '224px',
    background: 'linear-gradient(-180deg, #231EE3, #651AE3)',
    borderRadius: '20px',
    cursor: 'pointer' as const,
    boxShadow: '15px 15px 15px rgba(168, 168, 168, 0.3)',
    '& h6': {
      marginTop: '6px'
    },
    '& .contents': {
      marginTop: '6px'
    },
    [theme.breakpoints.down('lg')]: {
      '& .icon-box': {
        width: '45px'
      },
      '& p': {
        fontSize: '18px',
        lineHeight: '25px'
      },
      '& h6': {
        fontSize: '13px',
        lineHeight: '18px',
        marginTop: '2px'
      },
      '& .contents': {
        marginTop: '2px'
      }
    }
  },
  ctrBox: {
    height: '224px',
    borderRadius: '20px',
    cursor: 'pointer' as const,
    background: 'linear-gradient(135deg, #4A1CE3, #8019E2)',
    boxShadow: '15px 15px 15px rgba(168, 168, 168, 0.3)',
    '& .contents': {
      marginTop: '6px'
    },
    [theme.breakpoints.down('lg')]: {
      '& .icon-box': {
        width: '20px'
      },
      '& p': {
        fontSize: '18px',
        lineHeight: '25px'
      },
      '& h6': {
        fontSize: '13px',
        lineHeight: '18px',
        marginTop: '2px'
      },
      '& .contents': {
        marginTop: '2px'
      }
    }
  },
  tipReceived: {
    background: '#fff',
    height: '224px',
    borderRadius: '20px',
    cursor: 'pointer' as const,
    boxShadow: '15px 15px 15px rgba(168, 168, 168, 0.3)',
    padding: '0 68px 0 60px',
    '& h6': {
      marginTop: '6px'
    },
    [theme.breakpoints.down('lg')]: {
      padding: '0 30px',
      '& .icon-box': {
        width: '50px'
      },
      '& p': {
        fontSize: '18px',
        lineHeight: '25px'
      },
      '& h6': {
        fontSize: '13px',
        lineHeight: '18px',
        marginTop: '2px'
      }
    }
  },
  totalPurchases: {
    background: '#D792FF',
    height: '224px',
    borderRadius: '20px',
    cursor: 'pointer' as const,
    boxShadow: '15px 15px 15px rgba(168, 168, 168, 0.3)',
    padding: '0 68px 0 60px',
    '& h6': {
      marginTop: '6px'
    },
    [theme.breakpoints.down('lg')]: {
      padding: "0 30px",
      '& .icon-box': {
        width: '40px'
      },
      '& p': {
        fontSize: '18px',
        lineHeight: '25px'
      },
      '& h6': {
        fontSize: '13px',
        lineHeight: '18px',
        marginTop: '2px'
      }
    }
  },
  dataDetailsAnimation: {
    perspective: '3500px',
    transformOrigin: 'center',
    '& .animation-wrapper': {
      height: '470px'
    },
    [theme.breakpoints.down('lg')]: {
      '& .animation-wrapper': {
        height: '236px'
      }
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '500px',
      margin: '0 auto'
    }
  },
  profitEarningSection: {
    marginTop: '173px',
    padding: '0 124px',
    '& .left-contents': {
      width: '63.2%'
    },
    '& .right-contents': {
      width: '36.8%',
      '& .sub-title': {
        marginBottom: '12px'
      },
      '& .title': {
        marginBottom: '22.3px'
      },
      '& .description': {
        marginBottom: '42px'
      },
    },
    '& .profit-item': {
      background: '#fff',
      boxShadow: '10px 30px 40px rgba(0,0,0,0.02)',
      borderRadius: '49px',
      cursor: 'pointer' as const,
      padding: '16.6px 22px',
      '&:hover': {
        boxShadow: '10px 30px 40px rgba(0,0,0,0.1)',
        transition: 'all .3s'
      },
      '&.active': {
        boxShadow: '10px 30px 40px rgba(0,0,0,0.1)',
      },
      '& .icon-box': {
        width: '51px',
        height: '51px',
        borderRadius: '50%',
        background: '#FBFBFE',
        marginRight: '35px'
      }
    },
    [theme.breakpoints.down('lg')]: {
      padding: '0 26px',
      marginTop: '43px',
      '& .right-contents': {
        '& .sub-title': {
          marginBottom: '6px !important',
          fontSize: '15px',
          lineHeight: '21px'
        },
        '& .title': {
          marginBottom: '13px !important',
          fontSize: '27px',
          lineHeight: '32px'
        },
        '& .description': {
          marginBottom: '36px !important',
          fontSize: '13px',
          lineHeight: '18px'
        }
      },
      '& .profit-item': {
        padding: '10.5px 16px !important',
        '& .icon-box': {
          width: '36px !important',
          height: '36px !important',
          marginRight: '12.5px !important'
        },
        '& h6': {
          fontSize: '14px',
          lineHeight: '20px'
        },
        '& p': {
          fontSize: '13px',
          lineHeight: '19px',
          color: '#000'
        },
        '& .exclusive, .video': {
          '& > span': {
            width: '16px !important',
            height: '16px !important'
          }
        },
        '& .tipping, .cameo': {
          '& > span': {
            width: '17px !important',
            height: '17px !important'
          }
        },
        '& .commuity': {
          '& > span': {
            width: '24px !important',
            height: '24px !important'
          }
        }
      }
    },
    [theme.breakpoints.up('md')]: {
      '& .slider-wrapper': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .left-contents': {
        width: '100%',
        order: '1'
      },
      '& .right-contents': {
        width: '100%',
        '& .profit-items': {
          display: 'none'
        }
      },
      '& .profit-item': {
        boxShadow: '10px 30px 40px rgba(0, 0, 0, 0.05)',
        display: 'flex !important'
      },
      '& .slider-wrapper': {
        width: 'calc(100% + 52px)',
        marginLeft: '-26px',
        '& .slick-slide': {
          padding: '0 26px',
          paddingBottom: '70px',
        },
        '& .next-arrow-btn': {
          position: 'absolute',
          right: '26px',
          fontSize: '14px',
          fontWeight: '600',
          color: 'rgba(0, 0, 0, 0.65)',
          textTransform: 'none',
          cursor: 'pointer',
          bottom: '23px',
          zIndex: '3'
        },
        '& .dot-list': {
          bottom: '27px',
          left: '26px',
          '& .MuiLink-root': {
            width: '12px',
            height: '12px',
            display: 'flex',
            background: '#F2F2F2',
            borderRadius: '50%',
            cursor: 'pointer',
            '&.active': {
              background: 'linear-gradient(to right, #6454F5, #A854F5)'
            }
          }
        }
      },
      '& .tab-content': {
        maxWidth: '500px',
        margin: '0 auto 32px'
      }
    },
    [theme.breakpoints.down('sm')]: {
      '& .left-contents': {
        width: 'calc(100% + 52px)',
        marginLeft: '-26px',
        marginRight: '-26px'
      }
    }
  },
  creatingPageSection: {
    padding: '173px 0 134px',
    '& .title-box': {
      maxWidth: '734px',
      marginBottom: '74px',
      '& h6': {
        marginBottom: '12px'
      },
      '& h1': {
        marginBottom: '28px'
      }
    },
    '& .section-footer': {
      marginTop: '103px',
      '& .MuiButtonBase-root': {
        fontSize: '23px',
        lineHeight: '32px',
        padding: '24px 100px 24px 100px',
        maxHeight: 'unset',
        fontWeight: '500',
        '& .MuiButton-endIcon': {
          // marginRight: '0',
          // marginLeft: '48.6px',
          position: 'absolute',
          right: '40px',
          top: '50%',
          transform: 'translateY(-50%)'
        },
        '&:hover': {
          '& .MuiButton-endIcon': {
            right: '30px',
            transition: 'all .3s'
          }
        }
      }
    },
    [theme.breakpoints.down('lg')]: {
      padding: '20px 0 48px',
      '& .title-box': {
        marginBottom: '42px !important',
        '& h6': {
          marginBottom: '6px !important',
          fontSize: '15px',
          lineHeight: '22px'
        },
        '& h1': {
          marginBottom: '15px !important',
          fontSize: '27px',
          lineHeight: '37px'
        },
        '& p': {
          fontSize: '13px',
          lineHeight: '18px'
        }
      },
      '& .section-footer': {
        marginTop: '70px',
        '& .MuiButtonBase-root': {
          fontSize: '16px !important',
          lineHeight: '23px !important',
          padding: '14.5px 0 14.5px 0 !important',
          width: '100%',
          maxWidth: '300px',
          '& .MuiButton-endIcon': {
            right: '26.8px !important',
            '& > span': {
              width: '16.3px !important',
              height: '12.23px !important'
            }
          },
          '&:hover': {
            '& .MuiButton-endIcon': {
              right: '20px !important'
            }
          }
        }
      },
    },
    [theme.breakpoints.down('md')]: {
      '& .title-box': {
        padding: '0 26px'
      },
      '& .section-footer': {
        padding: '0 26px',
        '& .MuiButtonBase-root': {
          width: '100%',
          maxWidth: 'unset',
          '& .MuiButton-endIcon': {
            position: 'absolute',
            right: '26.8px'
          }
        }
      }
    }
  },
  mobileDevice: {
    borderColor: '#000',
    borderStyle: 'solid',
    overflowY: 'hidden' as const,
    opacity: '0.3',
    // transition: 'all .5s',
    '& .nav-bar': {
      '& .MuiIconButton-root': {
        background: 'rgba(255, 255, 255, 0.35)',
        padding: '0'
      },
      '& .logo-link': {
        display: 'flex'
      }
    },
    '& .hero-img': {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      borderRadius: '0 0 13px 13px'
    },
    '& .user-avatar': {
      borderRadius: '50%'
    },
    '& .social-link-item': {
      borderRadius: '10px',
      marginBottom: '15px',
      '& .links-up-icon': {
        position: 'relative'
      }
    },
    '& .social-link-item-icon': {
      borderRadius: '7px'
    },
    '& .has-back-img': {
      background: `url(${socialLinkBg.src}) !important`,
      backgroundSize: "cover",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      '&::before': {
        position: 'absolute',
        content: `''`,
        width: '100%',
        height: '100%',
        left: '0',
        top: '0',
        borderRadius: '9px'
      }
    },

    '&.small-size': {
      borderWidth: '8px',
      height: '544px',
      borderRadius: '20px',
      '& .nav-bar': {
        padding: '14px 18px 13px',
        '& .logo-icon': {
          width: '35px',
          height: '29px'
        },
        '& .top-icon-btns': {
          columnGap: '7px'
        },
        '& .MuiIconButton-root': {
          width: '23px',
          height: '23px'
        },
        '& .add-user-icon': {
          width: '9.94px',
          height: '10.71px'
        },
        '& .share-icon': {
          width: '8.51px',
          height: '10.71px'
        }
      },
      '& .hero-img': {
        height: '241px'
      },
      '& .mobile-contents': {
        padding: '0 18px'
      },
      '& .user-avatar': {
        width: '95px',
        height: '95px',
        padding: '9px',
        marginTop: '-70px',
        marginBottom: '13.5px',
        '&.top-level': {
          marginTop: '4px',
        }
      },
      '& .user-info-text': {
        marginBottom: '21px',
        '& h6': {
          fontSize: '13px',
          lineHeight: '19px',
          marginBottom: '4px'
        },
        '& p': {
          fontSize: '8px',
          lineHeight: '10px'
        }
      },
      '& .social-links': {
        columnGap: '16px',
        marginBottom: '30px',
        '& .instagram-icon': {
          width: '12.5px',
          height: '12.5px'
        },
        '& .snapchat-icon': {
          width: '13.37px',
          height: '12.5px'
        },
        '& .fansly-icon': {
          width: '15.2px',
          height: '12.5px'
        },
        '& .youtube-outlined-icon': {
          width: '15.22px',
          height: '10.8px'
        },
        '& .twitter-icon': {
          width: '13.7px',
          height: '11.22px'
        }
      },
      '& .social-link-item-list': {
        rowGap: '11px'
      },
      '& .social-link-item': {
        padding: '6px',
        '& .links-up-icon': {
          width: '12.1px',
          height: '11px'
        }
      },
      '& .social-link-item-icon': {
        width: '27px',
        height: '27px',
        marginRight: '16px',
        '& .facebook-icon': {
          width: '7px',
          height: '15px'
        },
        '& .discord-icon': {
          width: '12.6px',
          height: '9.6px'
        },
        '& .cameo-icon': {
          width: '11.74px',
          height: '12.91px'
        },
        '& .tiktok-icon': {
          width: '11px',
          height: '13px'
        },
        '& .vimeo-icon': {
          width: '14px',
          height: '12px'
        },
        '& .twitch-icon': {
          width: '11px',
          height: '13px'
        },
        '& .soundcloud-icon': {
          width: '14px',
          height: '5px'
        },
        '& .pinterest-icon': {
          width: '11px',
          height: '15px'
        },
        '& .only-fans-icon': {
          width: '13.76px',
          height: '14px'
        },
        '& .go-fund-me-icon': {
          width: '14.77px',
          height: '11.24px'
        },
        '& .paypal-icon': {
          width: '9.91px',
          height: '11.87px'
        }
      },
      '& .social-link-item-text': {
        '& h6': {
          fontSize: '9px',
          lineHeight: '12px',
          marginBottom: '0px'
        },
        '& p': {
          fontSize: '7px',
          lineHeight: '9px'
        }
      }
    },

    '&.medium-size': {
      borderWidth: '10px',
      opacity: '1',
      height: '736px',
      borderRadius: '34px',
      '& .nav-bar': {
        padding: '19px 24px 16px',
        '& .logo-icon': {
          width: '52px',
          height: '44px'
        },
        '& .top-icon-btns': {
          columnGap: '10px'
        },
        '& .MuiIconButton-root': {
          width: '31px',
          height: '31px'
        },
        '& .add-user-icon': {
          width: '13.88px',
          height: '14.96px'
        },
        '& .share-icon': {
          width: '11.89px',
          height: '14.96px'
        }
      },
      '& .hero-img': {
        height: '336px'
      },
      '& .mobile-contents': {
        padding: '0 24px'
      },
      '& .user-avatar': {
        width: '130px',
        height: '130px',
        padding: '11.5px',
        marginTop: '-80px',
        marginBottom: '15px',
        '&.top-level': {
          marginTop: '4px',
        }
      },
      '& .user-info-text': {
        marginBottom: '27px',
        '& h6': {
          fontSize: '20px',
          lineHeight: '28px',
          marginBottom: '4px'
        },
        '& p': {
          fontSize: '12px',
          lineHeight: '15px'
        }
      },
      '& .social-links': {
        columnGap: '22px',
        marginBottom: '43px',
        '& .instagram-icon': {
          width: '17.45px',
          height: '17.45px'
        },
        '& .snapchat-icon': {
          width: '18.69px',
          height: '17.45px'
        },
        '& .fansly-icon': {
          width: '21.22px',
          height: '17.45px'
        },
        '& .youtube-outlined-icon': {
          width: '21.26px',
          height: '15px'
        },
        '& .twitter-icon': {
          width: '19.14px',
          height: '15.67px'
        }
      },
      '& .social-link-item-list': {
        rowGap: '14px'
      },
      '& .social-link-item': {
        padding: '8px',
        '& .links-up-icon': {
          width: '17px',
          height: '14px'
        }
      },
      '& .social-link-item-icon': {
        width: '38px',
        height: '35px',
        marginRight: '21px',
        '& .facebook-icon': {
          width: '9.03px',
          height: '17.88px'
        },
        '& .discord-icon': {
          width: '19px',
          height: '15px'
        },
        '& .cameo-icon': {
          width: '16px',
          height: '17px'
        },
        '& .tiktok-icon': {
          width: '15.85px',
          height: '18.25px'
        },
        '& .vimeo-icon': {
          width: '17.74px',
          height: '15.3px'
        },
        '& .twitch-icon': {
          width: '15.64px',
          height: '18.25px'
        },
        '& .soundcloud-icon': {
          width: '17.91px',
          height: '8.96px'
        },
        '& .pinterest-icon': {
          width: '14.2px',
          height: '18.25px'
        },
        '& .only-fans-icon': {
          width: '19.23px',
          height: '19.56px'
        },
        '& .go-fund-me-icon': {
          width: '20px',
          height: '17px'
        },
        '& .paypal-icon': {
          width: '14px',
          height: '16px'
        }
      },
      '& .social-link-item-text': {
        '& h6': {
          fontSize: '13px',
          lineHeight: '19px',
          marginBottom: '0px'
        },
        '& p': {
          fontSize: '8px',
          lineHeight: '11px'
        }
      }
    },

    '&.large-size': {
      borderWidth: '11px',
      height: '882px',
      borderRadius: '34px',
      opacity: '1',
      '& .nav-bar': {
        padding: '23px 28px 20px',
        '& .logo-icon': {
          width: '60px',
          height: '51px'
        },
        '& .top-icon-btns': {
          columnGap: '14px'
        },
        '& .MuiIconButton-root': {
          width: '36px',
          height: '36px'
        }
      },
      '& .hero-img': {
        height: '392px'
      },
      '& .mobile-contents': {
        padding: '0 28px'
      },
      '& .user-avatar': {
        width: '152px',
        height: '152px',
        padding: '13px',
        marginTop: '-100px',
        marginBottom: '23px',
        '&.top-level': {
          marginTop: '8px',
        }
      },
      '& .user-info-text': {
        marginBottom: '32px',
        '& h6': {
          fontSize: '22px',
          lineHeight: '31px',
          marginBottom: '7px'
        },
        '& p': {
          fontSize: '14px',
          lineHeight: '17px'
        }
      },
      '& .social-links': {
        columnGap: '26px',
        marginBottom: '50px',
        '& .instagram-icon': {
          width: '20.38px',
          height: '20.38px'
        },
        '& .snapchat-icon': {
          width: '21.82px',
          height: '20.38px'
        },
        '& .fansly-icon': {
          width: '24.78px',
          height: '20.38px'
        },
        '& .youtube-outlined-icon': {
          width: '24.83px',
          height: '17.63px'
        },
        '& .twitter-icon': {
          width: '22.35px',
          height: '18.3px'
        }
      },
      '& .social-link-item': {
        padding: '10px'
      },
      '& .social-link-item-icon': {
        width: '44px',
        height: '43px',
        marginRight: '25px',
        '& .facebook-icon': {
          width: '10.75px',
          height: '21.27px'
        },
        '& .discord-icon': {
          width: '21.89px',
          height: '16.69px'
        },
        '& .cameo-icon': {
          width: '18.95px',
          height: '20.83px'
        },
        '& .tiktok-icon': {
          width: '19px',
          height: '21px'
        },
        '& .vimeo-icon': {
          width: '22px',
          height: '19px'
        },
        '& .twitch-icon': {
          width: '19px',
          height: '22px'
        },
        '& .soundcloud-icon': {
          width: '22px',
          height: '13px'
        },
        '& .pinterest-icon': {
          width: '17px',
          height: '22px'
        },
        '& .only-fans-icon': {
          width: '24px',
          height: '24px'
        },
        '& .go-fund-me-icon': {
          width: '25px',
          height: '21px'
        },
        '& .paypal-icon': {
          width: '18px',
          height: '24px'
        }
      },
      '& .social-link-item-text': {
        '& h6': {
          fontSize: '15px',
          lineHeight: '21px',
          marginBottom: '4px'
        },
        '& p': {
          fontSize: '10px',
          lineHeight: '15px'
        }
      }
    },
    [theme.breakpoints.down('lg')]: {
      '& .hero-img': {
        borderRadius: '0 0 6px 6px !important'
      },
      '& .social-link-item': {
        borderRadius: '8px',
        marginBottom: '10px'
      },
      '&.large-size, &.medium-size, &.small-size': {
        borderWidth: '6px',
        height: '486px',
        borderRadius: '24px',
        '& .nav-bar': {
          padding: '14px 16px 12px !important',
          '& .logo-icon': {
            width: '34px !important',
            height: '22px !important'
          },
          '& .top-icon-btns': {
            columnGap: '8px !important'
          },
          '& .MuiIconButton-root': {
            width: '20px !important',
            height: '20px !important',
            '& .add-user-icon': {
              width: '10px',
              height: '12px'
            },
            '& .share-icon': {
              width: '9px'
            }
          }
        },
        '& .hero-img': {
          height: '215px !important'
        },
        '& .mobile-contents': {
          padding: '0 16px !important'
        },
        '& .user-avatar': {
          width: '84px !important',
          height: '84px !important',
          padding: '6px !important',
          marginTop: '-60px !important',
          marginBottom: '14px !important',
          '&.top-level': {
            marginTop: '8px !important',
          }
        },
        '& .user-info-text': {
          marginBottom: '16px !important',
          '& h6': {
            fontSize: '14px !important',
            lineHeight: '18px !important',
            marginBottom: '2px !important'
          },
          '& p': {
            fontSize: '8px !important',
            lineHeight: '12px !important'
          }
        },
        '& .social-links': {
          columnGap: '14px !important',
          marginBottom: '26px !important',
          '& .instagram-icon': {
            width: '11px !important',
            height: '11px !important'
          },
          '& .snapchat-icon': {
            width: '13px !important',
            height: '12px !important'
          },
          '& .fansly-icon': {
            width: '14px !important',
            height: '12px !important'
          },
          '& .youtube-outlined-icon': {
            width: '15px !important',
            height: '11px !important'
          },
          '& .twitter-icon': {
            width: '13px !important',
            height: '10px !important'
          }
        },
        '& .social-link-item': {
          padding: '6px !important',
          '& .links-up-icon': {
            width: '12px'
          }
        },
        '& .social-link-item-icon': {
          width: '24px !important',
          height: '24px !important',
          marginRight: '25px',
          '& .facebook-icon': {
            width: '8px !important',
            height: '14px !important'
          },
          '& .discord-icon': {
            width: '15px !important',
            height: '13px !important'
          },
          '& .cameo-icon': {
            width: '14px !important',
          },
          '& .tiktok-icon': {
            width: '12px !important',
            height: '14px !important'
          },
          '& .vimeo-icon': {
            width: '14px !important',
            height: '16px !important'
          },
          '& .twitch-icon': {
            width: '12px !important',
            height: '14px !important'
          },
          '& .soundcloud-icon': {
            width: '22px',
            height: '13px'
          },
          '& .pinterest-icon': {
            width: '17px',
            height: '22px'
          },
          '& .only-fans-icon': {
            width: '14px !important',
            height: '14px !important'
          },
          '& .go-fund-me-icon': {
            width: '14px !important'
          },
          '& .paypal-icon': {
            width: '12px !important'
          }
        },
        '& .social-link-item-text': {
          flex: '1',
          '& h6': {
            fontSize: '11px !important',
            lineHeight: '14px !important',
            marginBottom: '0 !important'
          },
          '& p': {
            fontSize: '8px !important',
            lineHeight: '12px !important',
            marginTop: '4px !important'
          }
        }
      },
      '&.medium-size': {
        height: '404px !important',
        '& div.hero-img': {
          height: '190px !important'
        }
      },
      '&.small-size': {
        height: '360px !important',
        '& div.hero-img': {
          height: '160px !important'
        },
      }
    },
    '@media screen and (max-width: 768px)': {
      '&.medium-size': {
        opacity: '0.3'
      }
    }
  },
  mobileCarousel: {
    '& .carousel-control': {
      width: '68px',
      height: '68px',
      background: '#fff',
      boxShadow: '10px 10px 50px rgba(0, 0, 0, 0.24)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    '& .arrow-next': {
      right: '70px'
    },
    '& .arrow-prev': {
      left: '70px'
    },
    '& .slick-track': {
      display: 'flex',
      alignItems: 'center'
    },
    '& .large-size': {
      marginLeft: 'calc((404px - 100%) / -2)',
      marginRight: 'calc((404px - 100%) / -2)'
    },
    '& .right-medium': {
      marginLeft: 'calc(202px - 50% + 24px)',
      marginRight: 'calc(100% - (202px - 50%) - 24px - 336px)'
    },
    '& .right-small': {
      marginLeft: 'calc(202px + 336px + 48px - 150%)',
      marginRight: 'calc(250% - 202px - 336px - 48px - 248px)'
    },
    '& .right-small-2': {
      marginLeft: 'calc(202px + 336px + 72px + 248px - 250%)',
      marginRight: 'calc(350% - 202px - 336px - 72px - 248px - 248px)'
    },
    '& .left-medium': {
      marginRight: 'calc(202px - 50% + 24px)',
      marginLeft: 'calc(100% - (202px - 50%) - 24px - 336px)'
    },
    '& .left-small': {
      marginRight: 'calc(202px + 336px + 48px - 150%)',
      marginLeft: 'calc(250% - 202px - 336px - 48px - 248px)'
    },
    '& .left-small-2': {
      marginRight: 'calc(202px + 336px + 72px + 248px - 250%)',
      marginLeft: 'calc(350% - 202px - 336px - 72px - 248px - 248px)'
    },
    [theme.breakpoints.down('lg')]: {
      '& .carousel-control': {
        width: '52px',
        height: '52px',
        '& > span': {
          width: '8px !important'
        }
      },
      '& .arrow-next': {
        right: '52px'
      },
      '& .arrow-prev': {
        left: '52px'
      },
      '& .large-size': {
        marginLeft: 'calc((260px - 100%) / -2)',
        marginRight: 'calc((260px - 100%) / -2)'
      },
      '& .right-medium': {
        marginLeft: 'calc(130px - 50% + 18px)',
        marginRight: 'calc(100% - (130px - 50%) - 18px - 220px)'
      },
      '& .right-small': {
        marginLeft: 'calc(130px + 220px + 36px - 150%)',
        marginRight: 'calc(250% - 130px - 220px - 36px - 220px)'
      },
      '& .right-small-2': {
        marginLeft: 'calc(130px + 220px + 54px + 220px - 250%)',
        marginRight: 'calc(350% - 130px - 220px - 54px - 220px - 220px)'
      },
      '& .left-medium': {
        marginRight: 'calc(130px - 50% + 18px)',
        marginLeft: 'calc(100% - (130px - 50%) - 18px - 220px)'
      },
      '& .left-small': {
        marginRight: 'calc(130px + 220px + 36px - 150%)',
        marginLeft: 'calc(250% - 130px - 220px - 36px - 220px)'
      },
      '& .left-small-2': {
        marginRight: 'calc(130px + 220px + 54px + 220px - 250%)',
        marginLeft: 'calc(350% - 130px - 220px - 54px - 220px - 220px)'
      },
    },
    '@media screen and (max-width: 320px)': {
      '& .large-size, .right-medium, .right-small, .right-small-2, .left-medium, .left-small, .left-small-2': {
        marginLeft: '8px !important',
        marginRight: '8px !important'
      }
    }
  },
  onlyFans: {
    background: 'linear-gradient(to bottom, #AB0B11, #AB0B11 50%, #9C37A3)',
    '& .user-avatar': {
      background: '#A91023'
    },
    '& .social-link-item': {
      background: 'linear-gradient(to right, rgba(217, 100, 100, 0.38), rgba(210, 63, 155, 0.38))'
    },
    '& .social-link-item-icon': {
      background: 'rgba(255, 255, 255, 0.3)'
    },
    '& .social-link-item-text': {
      color: '#fff'
    },
    '& .social-link-item-list': {
      '& .has-back-img': {
        '&::before': {
          background: 'linear-gradient(to right, rgba(217, 100, 100, 0.99), rgba(210, 63, 155, 0.99))'
        }
      }
    }
  },
  minimalTheme: {
    background: '#fff',
    '& .nav-bar': {
      '& .MuiButtonBase-root': {
        background: '#F5F5F5'
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
    '& .social-link-item': {
      border: '1px solid rgba(112, 112, 112, 0.38)',
    },
    '& .social-link-item-icon': {
      background: '#FAFAFA'
    },
    '& .social-link-item-text': {
      color: '#000'
    },
    '& .social-link-item-list': {
      '& .has-back-img': {
        border: '0',
        '& .links-up-icon path:first-child': {
          stroke: '#fff'
        },
        '& .social-link-item-text': {
          color: '#fff'
        },
        '& .social-link-item-icon': {
          background: 'rgba(255, 255, 255, 0.3)'
        },
        '&::before': {
          background: 'rgba(0, 0, 0, 0.84)'
        }
      }
    }
  },
  glass: {
    background: 'linear-gradient(to bottom, #F57059, #F57059 50%, #CE47C0)',
    '& .user-avatar': {
      background: '#ED676F'
    },
    '& .social-link-item': {
      background: 'rgba(255, 255, 255, 0.25)'
    },
    '& .social-link-item-icon': {
      background: '#fff'
    },
    '& .social-link-item-text': {
      color: '#fff'
    },
    '& .social-link-item-list': {
      '& .has-back-img': {
        background: 'linear-gradient(to right, #E81E55, #D03286) !important'
      }
    }
  },
  snow: {
    background: '#fff',
    '& .nav-bar': {
      '& .MuiButtonBase-root': {
        background: '#F5F5F5'
      }
    },
    '& .user-avatar': {
      background: '#fff'
    },
    '& .user-info-text': {
      '& h6': {
        color: '#000'
      },
      '& p': {
        color: 'rgba(0, 0, 0, 0.8)'
      }
    },
    '& .social-link-item': {
      background: 'rgba(0, 0, 0, 0.85)'
    },
    '& .social-link-item-icon': {
      background: 'rgba(255, 255, 255, 0.3)'
    },
    '& .social-link-item-text': {
      color: '#fff'
    },
    '& .social-link-item-list': {
      '& .links-up-icon path:first-child': {
        stroke: '#fff'
      },
      '& .has-back-img': {
        '& .social-link-item-text': {
          color: '#fff'
        },
        '&::before': {
          background: 'rgba(0, 0, 0, 0.84)'
        }
      }
    }
  },
  threeDimention: {
    background: '#fff',
    '& .nav-bar': {
      '& .MuiButtonBase-root': {
        background: '#F5F5F5'
      }
    },
    '& .user-avatar': {
      background: '#fff'
    },
    '& .user-info-text': {
      '& h6': {
        color: '#000'
      },
      '& p': {
        color: 'rgba(0, 0, 0, 0.8)'
      }
    },
    '& .social-link-item': {
      background: 'rgba(0, 0, 0, 0.85)'
    },
    '& .social-link-item-icon': {
      background: 'rgba(255, 255, 255, 0.3)'
    },
    '& .social-link-item-text': {
      color: '#fff'
    },
    '& .social-link-item-list': {
      '& .links-up-icon path:first-child': {
        stroke: '#fff'
      },
      '& .has-back-img': {
        background: '#F4729A !important',
        boxShadow: '4px 6px rgba(208, 50, 99, 0.85)'
      },
      '& .social-link-item:nth-child(2)': {
        background: '#5490EB',
        boxShadow: '4px 6px #6F86C1'
      },
      '& .social-link-item:last-child': {
        background: '#35BD81',
        boxShadow: '4px 6px #45A37A'
      },
    }
  },
  neon: {
    background: `url(${neonBg.src})`,
    backgroundColor: '#000',
    backgroundPosition: 'center center',
    backgroundSize: '100% 100%',
    '& .social-link-item': {
      background: 'linear-gradient(to bottom, rgba(56, 77, 106, 0.4), rgba(50, 70, 98, 0.4), rgba(43, 62, 88, 0.4))',
      boxShadow: 'inset 0 5px 20px rgba(255, 255, 255, 0.2)'
    },
    '& .social-link-item-icon': {
      background: '#445E81'
    },
    '& .social-link-item-text': {
      color: '#fff'
    },
    '& .social-link-item-list': {
      '& .links-up-icon path:first-child': {
        stroke: '#fff'
      },
      '& .has-back-img': {
        background: 'linear-gradient(to bottom, rgba(56, 77, 106, 0.4), rgba(50, 70, 98, 0.4), rgba(43, 62, 88, 0.4)) !important',
        '& .social-link-item-text': {
          color: '#fff'
        }
      }
    },
    '& .social-links': {
      '& svg': {
        filter: 'drop-shadow(0 0 16px #148AFF)'
      }
    }
  },
  userTheme: {
    backgroundColor: '#313744',
    backgroundImage: `url('/background/my-theme-bg.webp')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    '& .user-avatar': {
      background: '#313744'
    },
    '& .social-link-item-icon': {
      background: '#fff'
    },
    '& .social-link-item-text': {
      color: '#fff'
    },
    '& .social-link-item': {
      background: '#565F72'
    },
    '& .social-link-item-list': {
      '& .has-back-img': {
        background: 'linear-gradient(to right, #D96464, #D23F9B) !important'
      }
    }
  },
  bgImg_1: {
    backgroundImage: `url('/background/background-photo-1-mobile.webp')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    '& .user-avatar': {
      background: '#25596D'
    },
    '& .social-link-item-icon': {
      background: '#000'
    },
    '& .social-link-item-text': {
      color: '#000'
    },
    '& .social-link-item': {
      background: '#fff',
      '& .links-up-icon path:first-child': {
        stroke: '#000'
      }
    },
    '& .social-link-item-list': {
      '& .has-back-img': {
        background: '#fff !important'
      }
    }
  },
  bgImg_2: {
    backgroundImage: `url('/background/background-photo-2-mobile.webp')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    '& .nav-bar': {
      '& .MuiButtonBase-root': {
        background: '#F5F5F5'
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
    '& .user-avatar': {
      background: '#ed29a9'
    },
    '& .social-link-item-icon': {
      background: '#000'
    },
    '& .social-link-item-text': {
      color: '#000'
    },
    '& .social-link-item': {
      background: 'rgba(255, 255, 255, 0.5)',
      '& .links-up-icon path:first-child': {
        stroke: '#000'
      }
    },
    '& .social-link-item-list': {
      '& .has-back-img': {
        background: 'rgba(255, 255, 255, 0.5) !important'
      }
    }
  },
  bgImg_3: {
    backgroundImage: `url('/background/background-photo-3-mobile.webp')`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    '& .nav-bar': {
      '& .MuiButtonBase-root': {
        background: '#F5F5F5'
      },
      '& .logo-icon': {
        '& text': {
          fill: '#fff'
        },
        '& rect': {
          fill: '#fff'
        }
      },
      '& .logo-link': {
        padding: '5px 7px',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0))',
        backdropFilter: 'blue(15px)',
        borderRadius: '8px'
      }
    },
    '& .user-info-text': {
      '& h6': {
        color: '#fff'
      },
      '& p': {
        color: 'rgba(255, 255, 255, 0.8)'
      }
    },
    '& .user-avatar': {
      background: '#8b5ced'
    },
    '& .social-link-item-icon': {
      background: 'rgba(255, 255, 255, 0.3)'
    },
    '& .social-link-item-text': {
      color: '#fff'
    },
    '& .social-link-item': {
      background: '#231487',
      '& .links-up-icon path:first-child': {
        stroke: '#fff'
      }
    },
    '& .social-link-item-list': {
      '& .has-back-img': {
        background: '#231487 !important'
      }
    }
  },
}));

export default homePageStyles;
