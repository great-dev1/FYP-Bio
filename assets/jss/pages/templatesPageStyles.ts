import { Theme } from "@mui/system";

const templatesPageStyles = ((theme: Theme) => ({
  layout: {
    overflowX: 'hidden' as const,
    '&.minimal-preview, &.snow-preview, &.three-dimension-buttons-preview': {
      '& .preview-mobile': {
        '& .nav-bar .logo': {
          '& text, rect': {
            fill: '#000'
          }
        }
      }
    },
    '&.bg-img-preview': {
      '& .preview-mobile': {
        '& .nav-bar .logo': {
          position: 'relative'
        },
        '& .user-avatar': {
          marginTop: '26px'
        },
        '& .link-up': {
          '& path:first-child': {
            stroke: '#000'
          }
        }
      }, 
      '& .link-up-icon': {
        '& path:first-child': {
          stroke: '#000'
        }
      }
    },
    '&.minimal-preview': {
      '& .sorcial-group': {
        '& .link-up-icon': {
          '& path:first-child': {
            stroke: '#000'
          }
        },
        '& .social-link-item:first-child': {
          '& .link-up-icon': {
            position: 'relative',
            zIndex: '3',
            '& path:first-child': {
              stroke: '#fff !important'
            }
          },
        }
      }
    }   
  },
  leftSection: {
    width: '55.2%',
    padding: '30px 0 80px 120px',
    boxSizing: 'border-box' as const,
    minHeight: '100vh',
    [theme.breakpoints.down("xl")]: {
      paddingLeft: '60px'
    },
    [theme.breakpoints.down("lg")]: {
      paddingLeft: '30px',
      paddingRight: '30px'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '40px 25px 45px'
    }
  },
  rightSection: {
    width: '44.8%',
    background: 'linear-gradient(top, #F57059, #CE47C0)',
    paddingTop: '6.4vh',
    paddingRight: '20px',
    paddingLeft: '20px',
    paddingBottom: '3.57vh',
    minHeight: '100vh',
    height: '100vh',
    position: 'fixed' as const,
    top: '0',
    right: '0',
    display: 'flex' as const,
    flexDirection: 'column' as const,
    [theme.breakpoints.down("xl")]: {
      paddingRight: '50px'
    },
    [theme.breakpoints.down('lg')]: {
      paddingRight: "20px",
      paddingLeft: '20px'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  navbar: {
    '& .MuiLink-root': {
      marginBottom: '70px',
      display: 'block',
      width: 'fit-content'
    },
    '& .nav-logo': {
      display: 'flex'
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiLink-root': {
        marginBottom: '0',
        '& > span': {
          width: '70px !important'
        }
      },
      '& > .MuiBox-root': {
        display: 'none !important'
      },
      '& .nav-logo': {
        '& svg': {
          width: '71px',
          height: '60px'
        }
      },
    }
  },
  skipBtn: {    
    position: 'absolute' as const,
    top: '50%',
    transform: 'translateY(-50%)',
    right: '0',
    '&.MuiLink-root': {
      fontSize: '16px',
      color: '#9F83EB',
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      '&.MuiLink-root': {
        display: 'flex',
        alignItems: "center"
      }
    }
  },
  stepper: {
    width: '130px',
    height: '2px',
    backgroundColor: '#FBFBFB',
    marginRight: '8px'
  },
  contents: {
    paddingTop: '30px',
    [theme.breakpoints.down('md')]: {
      paddingTop: '45px',
      height: 'calc(100% - 67px)'
    }
  },
  activeStep: {
    backgroundColor: theme.palette.yellow.main,
  },
  contentsInner: {
    maxWidth: '626px',
    [theme.breakpoints.down("md")]: {
      maxWidth: '100%',
      height: '100%',
      display: 'flex' as const,
      flexDirection: 'column' as const,

    }
  },
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
  rightContents: {
    color: theme.palette.white.light,
    '& h3': {
      marginBottom: '10px',
      fontSize: '35px',
      lineHeight: '50px'
    },
    '& p': {
      fontSize: "20px",
      lineHeight: '28px',
    },    
  },
  footerLogo: {
    padding: '10px 14px',
    marginRight: '11.5%',
    backgroundColor: 'rgba(255, 255, 255, 0.21)',
    borderRadius: '8px',
    width: 'fit-content',
    marginTop: 'auto',
    cursor: 'pointer' as const
  },
  claimImg: {
    '& > span': {     
      width: '100% !important',
      height: '100% !important'
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  firstClaim: {
    top: '19.13vh',
    width: '47.8%',
    height: '71.55vh',
    maxWidth: '414px',
    left: '27%',
    borderRadius: '34px',
    boxShadow: '20px 20px 40px rgb(0 0 0 / 9%)',
    zIndex: '2',
    '& > span': {
      borderRadius: '34px',
    }
  },
  secondClaim: {
    top: '55.15vh',
    width: '36.5%',
    transform: 'rotate(-40deg)',
    maxWidth: '316px',
    left: '-5.78%',
    boxShadow: '20px 20px 40px rgb(0 0 0 / 9%)',
    borderRadius: '34px',
    height: '30.64vh',
  },
  thirdClaim: {
    top: '46.33vh',
    transform: 'rotate(41deg)',
    width: '31.4%',
    maxWidth: '272',
    right: '-2.5%',
    height: '19.13vh',
    boxShadow: '20px 20px 40px rgb(0 0 0 / 9%)'
  },
  continueBtn: {
    marginTop: '30px',
    '& .MuiButtonBase-root': {
      fontSize: '22px',
      fontWeight: '700',
      lineHeight: '31px',
      paddingTop: '20px',
      paddingBottom: '21px',
      maxHeight: 'unset'
    },
    [theme.breakpoints.down("md")]: {
      marginTop: 'auto',
      '& .MuiButtonBase-root': {
        fontSize: '17px',
        lineHeight: '24px',
        height: '58px'
      },
      '& .hide-mobile': {
        display: 'none'
      }
    }
  },
  templates: {
    marginTop: '66px',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  createItem: {
    padding: '27.4px 40px 18px',
    border : '1px dashed #D7D7D7',
    borderRadius: '15px',
    height: '157px',
    boxSizing: 'border-box' as const,
    cursor: 'pointer' as const,    
    '& p': {
      fontSize: '18px',
      lineHeight: '23px',
      color: 'rgba(0, 0, 0, 0.5)',
      marginTop: '15px'
    },
    [theme.breakpoints.down('md')]: {
      height: '116px',
      padding: '20px 16px',
      '& > span': {
        width: '30px !important'
      },
      '& p': {
        fontSize: '15px',
        lineHeight: '21px',
        marginTop: '8px'
      }
    }
  },
  checkMark: {
    width: '33px',
    height: '33px',
    backgroundColor: theme.palette.primary.purple,
    borderRadius: '33px',
    top: '-16.5px',
    left: '50%',
    transform: 'translateX(-50%)',
    [theme.breakpoints.down('md')]: {
      width: '27px',
      height: '27px',
      top: '-14.8px',
      '& > span': {
        width: '107px'
      }
    }
  },
  templateCarousel: {
    display: 'none',
    '& .carousel-container': {
      marginLeft: '-7px',
      marginRight: '-7px'
    },
    [theme.breakpoints.down('md')]: {
      display: 'block',
      marginTop: '40px',
      paddingBottom: '20px',
      '& .react-multi-carousel-item': {
        paddingTop: '16px'
      },
      '& .react-multiple-carousel__arrow': {
        minWidth: '30px',
        minHeight: '30px',
        top: '59px',
        '&::before': {
          fontSize: '16px'
        }
      }
    }
  },
  tempCarouselItem: {
    paddingLeft: '7px',
    paddingRight: '7px',
    '& .template-head-line:nth-of-type(2)': {
      marginBottom: '0'
    },
    '& .template-head-line:nth-of-type(3)': {
      display: 'none'
    }    
  },
  templatePreview: {
    display: 'none',
    '& .template-head': {
      height: 'fit-content'
    },
    [theme.breakpoints.down('md')]: {
      display: 'block',
      marginTop: '22px'
    }
  },
  mobile: {
    borderColor: "#fff",
    '& .user-avatar': {
      backgroundColor: '#ED676F'
    }
  },
  socialGroup: {
    padding: '22.4px 16px 20px',
    background: 'linear-gradient(to bottom, #F57059, #CE47C0)',
    border: '14px solid #fff',
    borderRadius: '29px',
    overflow: 'hidden',
    '& .social-link-item:first-child': {
      background: 'linear-gradient(to right, #D03286, #E81E55)',
      '& .link-up-icon': {
        position: 'relative',
        zIndex: '3'
      },
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
  socialBtn: {
    marginBottom: '14px',
    padding: '8px',
    color: theme.palette.white.light,
    cursor: 'pointer',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.25)',
    '& p': {
      marginTop: '2px'
    }   
  },
  socialBtnIcon: {
    backgroundColor: theme.palette.white.light,
    borderRadius: '7px',
    width: '35.8px',
    height: '33.5px',
    marginRight: '19.5px'
  },
  imageCard: {
    backgroundColor: theme.palette.white.light,
    padding: '10px 12px',
    borderRadius: '15px',
    overflow: 'hidden',
    '& .img-box': {
      marginBottom: '14px',
      '& > span': {
        width: '100% !important',
        borderRadius: '14px'
      }
    }
  }
}));

export default templatesPageStyles;
