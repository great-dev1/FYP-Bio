import { Theme } from "@mui/system";
import triggerIcon from 'assets/img/dndTrigger.png';

const myLinkItemStyles = ((theme: Theme) => ({
  myLinkItemWrapper: {
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: '16px',
    padding: '24px 20px',
    [theme.breakpoints.down('sm')]: {
      padding: '9px 13px 15.6px 17px'
    }
  },
  titleBox: {
    marginBottom: '10.1px',
    paddingLeft: '34.2px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '20px'
    }
  },
  titleLabel: {
    '& > .MuiBox-root': {
      maxWidth: 'calc(100% - 100px)'
    },
    '& h6': {
      fontSize: '20px',
      lineHeight: '34px',
      color: theme.palette.common.black,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    [theme.breakpoints.down('sm')]: {
      '& h6': {
        fontSize: '16px',
        lineHeight: '19px'
      }
    }
  },
  editBtn: {
    marginLeft: '3px',
    '& img': {
      width: '14.37px'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '1px',
      width: '25px',
      height: '25px',
      '& > span': {
        width: '8.63px !important',
        height: '8.63px !important'
      }
    }
  },
  notificationBox: {
    '& > span:first-child': {    
      display: 'none !important'
    },
    '& > span:nth-child(2)': {
      marginRight: '17.2px !important'
    },
    [theme.breakpoints.down('sm')]: {
      '& > span:first-child': {
        marginRight: '10.3px !important',
        display: 'inline-block !important'
      },
      '& > span:nth-child(2)': {
        width: '15px !important',
        height: '15px !important',
        marginRight: '10.3px !important',
      }
    }
  },
  titleForm: {
    flex: '1',
    marginRight: '16px',
    '& .MuiIconButton-root': {
      marginTop: '3px',
      '& .MuiSvgIcon-root': {
        fontSize: '15px'
      } 
    },
    [theme.breakpoints.down('sm')]: {
      '& .MuiInputBase-input': {
        padding: '0'
      },
      '& .check-btn': {
        marginTop: '0',
        width: '25px',
        height: '25px',
        padding: '0'
      }
    }
  },
  urlField: {
    '& > .MuiBox-root': {
      maxWidth: '100%'
    },
    '& h6': {
      fontSize: "18px",
      lineHeight: '34px',
      color: theme.palette.common.black,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    [theme.breakpoints.down('sm')]: {
      '& h6': {
        fontSize: '15px',
        lineHeight: '17px'
      }
    }
  },
  dndTriggerIcon: {
    width: '10px',
    height: '17px',
    marginRight: '24.2px',
    display: 'flex',
    cursor: 'pointer',
    backgroundImage: `url(${triggerIcon.src})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      width: '7.06px',
      height: '12px',
      marginRight: '13.5px'
    }
  },
  tabs: {
    backgroundColor: theme.palette.grey[300],
    padding: '0 8px 0 0',
    height: '43px',
    borderRadius: '7px',
    marginTop: '11.5px',
    marginBottom: '12.8px',
    marginLeft: '34px',
    '& .image-icon': {
      '& path': {
        strokeWidth: '0.2'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .design-pencil-icon': {
        width: '14.64px',
        height: '14.64px'
      },
      '& .image-icon': {
        width: '16.72px',
        height: '13.27px'
      },
      '& .jquery-icon': {
        width: '13.78px',
        height: '13.27px'
      },
      '& .outlined-lock-icon': {
        width: '9.73px',
        height: '13.27px'
      }
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0',
      marginLeft: '20px',
      // height: '35.2px',
      height: '35.2px',
      marginTop: '14px',
      overflowX: 'auto',
      marginBottom: '10.7px',
      paddingBottom: '0'
    }
  },
  tabBtn: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45px',
    minWidth: 'unset',
    padding: '0',
    '&.MuiButtonBase-root span:first-of-type': {
      opacity: '0.4 !important'
    },
    [theme.breakpoints.down('sm')]: {
      width: '36.8px'
    }
  },
  tabRemoveBtn: {
    '&.MuiIconButton-root': {
      width: '43px',
      marginLeft: 'auto',
      opacity: '0.4'      
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  activeTab: {
    '&.MuiButtonBase-root': {
      backgroundImage: 'linear-gradient(45deg, rgba(245, 236, 248, 0.7), rgba(219, 219, 255, 0.7))'
    }
  },
  tabContentsHeader: {
    marginBottom: '11.4px',
    '& p': {
      fontSize: '15px',
      lineHeight: '34px',
      color: theme.palette.common.black,
      marginLeft: '19.1px'
    },
    '&::before': {
      position: 'absolute',
      content: `''`,
      width: 'calc(100% - 50.53px)',
      height: '1px',
      backgroundColor: theme.palette.common.black,
      opacity: '0.05',
      left: '0',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    [theme.breakpoints.down('md')]: {
      '& p': {
        marginLeft: '9.4px'
      },
      '&::before': {
        width: 'calc(100% - 27px)'
      }
    }
  },
  tabContentsHeaderInner: {
    paddingLeft: '27.6px',
    paddingRight: '27.6px',
    backgroundColor: theme.palette.grey[50]
  },
  removeBtn: {
    '&.MuiIconButton-root': {
      position: 'absolute',
      right: '-8px'
    }
  },
  animationItem: {
    cursor: 'pointer',
    backgroundColor: theme.palette.grey[100],
    padding: '10px 10px 11.6px',
    borderRadius: '12px',
    width: 'calc((100% - 87.5px) / 8)',
    '& p': {
      fontSize: '11px',
      lineHeight: '16px',
      color: theme.palette.common.black
    },
    [theme.breakpoints.down('md')]: {
      width: 'calc((100% - 39px) / 4)',
      marginBottom: '13px'
    },
    [theme.breakpoints.down("sm")]: {
      width: 'calc(50% - 6.5px)',
      padding: '6.4px 6.4px 8.4px',
      '& p': {
        fontSize: '15px',
        lineHeight: '16px'
      }
    }
  },
  animationContent: {
    backgroundColor: theme.palette.white.light,
    borderRadius: '10px',
    padding: '15.8px 16.9px',
    marginBottom: '7.2px',
    '& .MuiBox-root': {
      width: '100%',
      height: '21.9px',
      backgroundColor: '#BFBFBF',
      borderRadius: '3px'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '10.2px 36.5px',
      marginBottom: '6.6px',
      '& .MuiBox-root': {
        height: '14px'
      }
    }
  },
  selectedAnimation: {
    border: '1px solid rgba(153, 71, 246, 0.15)',
    backgroundImage: 'linear-gradient(45deg, rgba(245, 236, 248, 0.7), rgba(219, 219, 255, 0.7))',
    '& .MuiBox-root .MuiBox-root': {
      backgroundColor: '#F6E8F9'
    }
  },
  animationsList: {
    overflowX: 'auto' as const,
    paddingBottom: '10px',
    '& > .MuiBox-root': {
      minWidth: '1000px'
    },
    [theme.breakpoints.down('md')]: {
      '& > .MuiBox-root': {
        minWidth: 'unset',
        flexWrap: 'wrap'
      },
    }
  },
  collapseItem: {
    marginBottom: '14.3px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20px'
    }
  },
  scheduleText: {
    marginBottom: '17.8px',
    '& h6': {
      fontSize: '15px',
      lineHeight: '21px',
      color: theme.palette.common.black
    },
    '& p': {
      fontSize: '15px',
      lineHeight: '21px',
      color: theme.palette.common.black
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '13.7px'
    }
  },
  scheduleTime: {
    width: 'calc((100% - 36px) / 2)',
    minWidth: '500px',
    [theme.breakpoints.down('xl')]: {
      width: '100%',
      minWidth: 'unset',
      marginBottom: '13px'
    },    
  },
  scheduleHeader: {
    marginBottom: '24px',
    '& p': {
      lineHeight: '21px',
      fontSize: '15px',
      color: theme.palette.common.black
    },
    '& .MuiButtonBase-root': {
      padding: '0',
      textTransform: 'none',
      color: '#BFBFBF'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '8px'
    }
  },
  scheduleDate: {
    width: '47%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: '9px'
    }
  },
  scheduleTimeField: {
    width: '26%',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(50% - 4px)'
    }
  },
  scheduleTimezone: {
    width: '23.6%',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(50% - 4px)'
    }
  },
  setScheduleBtn: {
    marginTop: '26px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
    }
  },
  lockCodeTextField: {
    '& .MuiInputBase-root': {
      height: '60px',
      color: theme.palette.common.black,
      borderRadius: '30px',
      paddingRight: '22px'
    },
    '& .MuiInputBase-input': {
      paddingLeft: '32.9px',
      color: theme.palette.common.black,
      fontSize: '15px'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#EFEFEF'
    },
    '& .MuiButtonBase-root': {
      textTransform: 'none',
      fontSize: '15px',
      color: '#BB14E2'
    },
    '& input::placeholder': {
      color: theme.palette.common.black,
      opacity: '1'
    },
    [theme.breakpoints.down('sm')]: {
      '& .hide-mobile': {
        display: 'none'
      },
      '& .MuiInputBase-root': {
        height: '40.27px',
        paddingRight: '16px'
      },
      '& .MuiButtonBase-root': {
        fontSize: '15px'
      },
      '& .MuiInputBase-input': {
        paddingLeft: '20px'
      }
    }
  },
  ageSelect: {
    width: '31.15%',
    '& .MuiOutlinedInput-notchedOutline': {
      display: 'block !important',
      borderColor: '#EFEFEF'
    },
    '& .MuiInputBase-root': {
      backgroundColor: theme.palette.white.light
    },
    [theme.breakpoints.down("sm")]: {
      width: '100%',
      marginBottom: '10.7px'
    }
  },
  lockDescription: {
    width: '67%',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#EFEFEF'
    },
    '& .MuiInputBase-root': {
      borderRadius: '28px',
      paddingLeft: '28.7px'
    },
    '& .MuiInputBase-input': {
      paddingLeft: '8px',
      fontSize: '15px',
      color: theme.palette.common.black
    },
    '& input::placeholder': {
      color: theme.palette.common.black,
      opacity: '1'
    },
    [theme.breakpoints.down("sm")]: {
      width: '100%',
      '& .MuiInputBase-root': {
        height: '40px',
        paddingLeft: '19.4px'
      },
      '& .MuiInputAdornment-root .notranslate+span': {
        width: '11.1px !important',
        height: '12.55px !important'
      },
      '& .MuiInputBase-input': {
        paddingLeft: '0'
      }
    }
  },
  lockActiveBtn: {
    '&.MuiButtonBase-root': {
      color: theme.palette.success.dark,
      fontSize: '15px',
      fontWeight: '400',
      textTransform: 'none',
      marginLeft: 'auto'
    },
    [theme.breakpoints.down('sm')]: {
      '&.MuiButtonBase-root': {
        fontSize: '15px',
        height: '37px'
      }
    }
  },
  pcLockActive: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  mobileLockActive: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      width: '100%'
    }
  },
  lockSetScheduleBtn: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      marginTop: '22px'
    }
  },
  markLockCollapse: {
    [theme.breakpoints.up('lg')]: {
      '& .collapse-content': {
        display: 'none'
      }
    }
  },
  countDownDate: {
    width: 'calc(100% - 204px - 121px - 48px)',
    '@media screen and (max-width: 1500px)': {
      width: '100%',
      marginBottom: '10px'
    }
  },
  countdownTime: {
    width: '204px',
    '@media screen and (max-width: 1500px)': {
      width: 'calc(50% - 4px)'     
    }
  },
  countdownTimezone: {
    width: '121px',
    '@media screen and (max-width: 1500px)': {
      width: 'calc(50% - 4px)'     
    }
  },
  redirectText: {
    marginBottom: '23px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '18px'
    }
  },
  redirectBtn: {
    marginTop: '24px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '18px'
    }
  },
  redirectCountdown: {
    '& h3.MuiTypography-root': {
      fontSize: '28px',
      lineHeight: '1',
      marginBottom: '0'
    },
    '& p.MuiTypography-root': {
      fontSize: '9px',
      lineHeight: '12px',
      color: theme.palette.common.black
    },
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      '& h3.MuiTypography-root': {
        fontSize: '34.5px'
      },
      '& p.MuiTypography-root': {
        fontSize: '14px'
      }
    }
  },
  activeUntilDateLabel: {
    marginBottom: '8px',
    '& p': {
      fontSize: '14px',
      color: theme.palette.common.black
    },
    '& .MuiButtonBase-root': {
      padding: '0',
      textTransform: 'none',
      fontSize: '14px',
      fontWeight: '300',
      color: '#BFBFBF'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none !important'
    }
  },
  countCountDown: {
    marginBottom: '24.6px',
    '& h3.MuiTypography-root': {
      fontSize: '40px',
      lineHeight: '1',
      marginBottom: '0'
    },
    '& p.MuiTypography-root': {
      fontSize: '15px',
      lineHeight: '21px',
      color: theme.palette.common.black
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '16.2px',
      '& h3.MuiTypography-root': {
        fontSize: '34.5px'
      },
      '& p.MuiTypography-root': {
        fontSize: '14px'
      }
    }
  },
  linkStyleItem: {
    backgroundColor: theme.palette.grey[100],
    padding:'10px',
    borderRadius: '12px',
    width: '150px',
    height: '100px',
    cursor: 'pointer' as const,
    transition: 'background-color 1000ms',
    marginRight: '15px',   
    '& p': {
      fontSize: '12px',
      lineHeight :'17px',
      color: theme.palette.common.black,
      marginTop: '7px'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '13px',      
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(50% - 7.5px)',
      marginRight: '0',
      padding: '6.4px 6px 8px',
      '& p': {
        fontSize: '15px'
      }
    }
  },
  linkStyleImg: {
    height: '54px',
    width: '100%',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    transition: 'background 1s'
  },
  activeLinkStyle: {
    border: '1px solid rgba(153, 71, 246, 0.15)',
    backgroundImage: 'linear-gradient(45deg, rgba(245, 236, 248, 0.7), rgba(219, 219, 255, 0.7))',
    transition: 'background 1s',
  },
  linkStylesList: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between'
    }
  },
  addImgContents: {
    '& p': {
      fontSize: '15px',
      lineHeight: '21px',
      color: theme.palette.common.black,
      marginBottom: '15px'
    },
  },
  setThumbnailBtn: {
    marginTop: '50px',
    '&.MuiButtonBase-root': {
      lineHeight: '17px',
      padding: '16px 0 16px',
      fontSize: '17px',
      '& > span': {
        display: 'flex',
        alignItems: 'center',
        '& > span': {
          marginRight: '16px !important'
        }
      }
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '24px',
      '&.MuiButtonBase-root': {
        fontSize: '15px',
        lineHeight: '18px',
        fontWeight: "bold",
        '& > span:first-child': {
          position: 'relative',
          width: '100%',
          justifyContent: 'center',          
          '& > span': {
            position: 'absolute !important',
            width: '17.26px !important',
            height: '13.7px !important',
            top: '50%',
            transform: 'translateY(-50%)',
            left: '22.7px'
          }
        }
      },
    }
  },
  uploadImgTab: {
    marginBottom: '40px',
    '& .MuiButtonBase-root': {
      fontSize: '16px',
      fontWeight: '300',
      textTransform: 'none',
      borderRadius: '14px',
      height: '60px',
      color: theme.palette.common.black,
      border: '1px solid #F0F0F0',
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: '24px',
      '& .MuiButtonBase-root': {
        fontSize: '15px',
        borderRadius: '6px',
        height: '38px'
      },
    }
  },
  activeImgTab: {
    '&.MuiButtonBase-root': {
      background: 'linear-gradient(right, #161FE4, #BB14E2)',
      color: theme.palette.white.light,
      fontWeight: '600'
    }
  }
}));

export default myLinkItemStyles;
