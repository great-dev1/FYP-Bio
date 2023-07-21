import { Theme } from "@mui/system";

const designPageStyles = ((theme: Theme) => ({
  wrapper: {
    [theme.breakpoints.down('lg')]: {
      flexWrap: 'wrap'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '-20px'
    }
  },
  mobileDivice: {
    width: '27.7%',
    [theme.breakpoints.down('xl')]: {
      width: '350px',
      flex: 'none'
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  contents: {
    backgroundColor: theme.palette.white.light,
    padding: '30px 30px 18px 40px',
    width: '70.35%',
    borderRadius: '16px',
    [theme.breakpoints.down('xl')]: {
      width: 'calc(100% - 350px - 30px)'
    },
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      flex: 'none'
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'transparent',
      borderRadius: '0',
      padding: '0',
      position: 'sticky',
      top: '0'
    }
  },
  templateBlock: {
    paddingTop: '35.5px',
    borderTop: '1px solid #E1E1E1',
    '& h3': {
      fontSize: '25px',
      lineHeight: '34px',
      color: theme.palette.common.black
    },
    '& .template-head': {
      height: 'auto',
      padding: '30px 20px 20px'
    },
    '& .template-avatar': {
      marginBottom: '15px',
      position: 'relative',
      zIndex: '2'
    },
    '& .template-head-line': {
      borderRadius: '6px !important'
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '16px',
      '& h3': {
        fontSize: '17px',
        lineHeight: '24px',
      },
      '& .template-avatar': {
        marginBottom: '12.5px'
      },
      '& .template-head': {
        padding: '25px 16px 16px'
      },
      '& .template-head-line': {
        height: "25px",
        marginBottom: '9.5px'
      },
      '& .template-title': {
        fontSize: "14px",
        fontWeight: '900',
        marginTop: '8.5px'
      },
      '& .template-head.active::before': {
        top: '-6px',
        left: '-6px',
        width: 'calc(100% + 12px)',
        height: 'calc(100% + 12px)'
      }
    }
  },
  templateSection: {
    paddingBottom: '40px',
    '& h6': {
      fontSize: '17px',
      color: theme.palette.common.black,
      marginTop: '30px',
      marginBottom: '20px',
      lineHeight: '24px'
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: '30px',
      '& h6': {
        fontSize: '14px',
        marginTop: '16px',
        marginBottom: '14px',
        lineHeight: '20px'
      }
    }
  },
  checkMark: {
    width: '33px',
    height: '33px',
    backgroundColor: theme.palette.primary.purple,
    borderRadius: '33px',
    top: '15px',
    right: '20px',
    [theme.breakpoints.down('md')]: {
      width: '27px',
      height: '27px',
      top: '-13.5px',
      '& > span': {
        width: '107px'
      }
    }
  },
  backgroundStyles: {
    '& h6': {
      fontSize: '17px',
      color: theme.palette.common.black,
      marginTop: '24px',
      marginBottom: '20px'
    },
    [theme.breakpoints.down('md')]: {
      '& h6': {
        fontSize: '14px',
        marginTop: '6px',
        marginBottom: '20px',
        lineHeight: '20px'
      }
    }
  },
  customTempAvatar: {
    width: '45px',
    height: '45px',
    backgroundColor: theme.palette.white.light,
    borderRadius: '50%',
    [theme.breakpoints.down('md')]: {
      width: '41px',
      height: '41px'
    }
  },
  themePannel: {
    padding: '20px 40px',
    border: '1px solid #F5F5F5',
    borderRadius: '7px',
    marginTop: '26px',
    '& h5': {
      fontSize: '17px',
      lineHeight: '24px',
      color: theme.palette.common.black,
      marginBottom: '22px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '18px 20px',
      marginTop: '30px',
      '& h5': {
        fontSize: '14px',
        lineHeight: '20px',
        marginBottom: '14px'
      }
    }
  },
  colorPickerItem: {
    '& > p': {
      fontSize: '17px',
      color: theme.palette.common.black,
      lineHeight: '24px',
      marginBottom: '20px',
      overflow: 'hidden',
      width: '100%',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    [theme.breakpoints.down('md')]: {
      '& > p': {
        fontSize: '13px',
        color: theme.palette.common.black,
        lineHeight: '19px',
        marginBottom: '10px',
      }
    }
  },
  colorPicker: {
    '& .color-picker-buttn': {
      width: '47px',
      minHeight: 'unset',
      borderRadius: '10px',
      cursor: 'pointer',
      height: '47px',
      marginRight: '9px',
      '& .MuiInputBase-input': {
        padding: '0',
        opacity: '0',
        cursor: 'pointer'
      },
      '& .MuiInputBase-root': {
        height: '100%'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        display: 'none'
      }
    },
    '& .color-input-field': {
      '& .MuiInputBase-input': {
        padding: '11.5px 18px',
        height: '47px',
        boxSizing: 'border-box',
        color: theme.palette.common.black,
        fontSize: '17px',
        textTransform: 'uppercase',
        textAlign: 'center',
        lineHeight: '24px'
      },
      '& .MuiInputBase-root': {
        borderRadius: '10px'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#EBEBEB'
      }
    },
    '& .color-mark': {
      color: theme.palette.common.black,
      fontSize: '17px',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '20px',
      lineHeight: '24px'
    },
    [theme.breakpoints.down('md')]: {
      '& .color-picker-buttn': {
        width: '39px',
        height: '39px',
        marginRight: '7.5px'
      },
      '& .color-input-field': {
        '& .MuiInputBase-input': {
          padding: '10px 18px 10px 30px !important',
          height: '39px !important',
          fontSize: '13px !important',
          lineHeight: '19px !important',
          textAlign: 'left !important'
        }
      },
      '& .color-mark': {
        fontSize: '13px',
        left: '10px',
        lineHeight: '20px'
      },
    }
  },
  buttonGroup: {
    backgroundColor: 'rgba(252, 252, 252, 0.5)',
    borderRadius: '15px',
    padding: '13px 16px 22px',
    '& h6': {
      fontSize: '15px',
      lineHeight: '20px',
      color: theme.palette.common.black,
      marginBottom: '34px'
    },
    '& .MuiButtonBase-root': {
      height: '46px'
    },
    '& .medium-btn': {
      borderRadius: '13px !important'
    },
    [theme.breakpoints.down('md')]: {
      padding: '13px 16px 16px',
      '& h6': {
        fontSize: '14px',
        lineHeight: '20px',
        marginBottom: '11px'
      },
      '& .MuiButtonBase-root': {
        height: '32px'
      },
    }
  },
  activeBtnStyle: {
    '&::before': {
      position: 'absolute',
      width: 'calc(100% + 6px)',
      height: 'calc(100% + 6px)',
      borderRadius: 'inherit',
      top: '-3px',
      left: '-3px',
      border: '1px solid rgba(0, 0, 0, 0.5)',
      content: `''`
    }
  },
  fontsPannel: {
    '& .MuiButton-root': {
      backgroundColor: theme.palette.grey[300],
      color: theme.palette.common.black,
      height: '83px',
      maxHeight: 'unset',
      borderRadius: '15px',
      padding: '0',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        color: theme.palette.white.light
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiButton-root': {
        borderRadius: '12px',
        height: '65px'
      }
    }
  },
  activeFont: {
    '&.MuiButton-root': {
      border: '1px solid #F2BCFF',
      backgroundColor: 'rgba(252, 238, 253, 0.37)'
    }
  },
  btnTransparencyPannel: {
    '& .MuiButton-root': {
      backgroundColor: theme.palette.grey[300],
      color: theme.palette.common.black,
      fontSize: '15px',
      lineHeight: '20px',
      fontWeight: '700',
      height: '50px',
      maxHeight: 'unset',
      borderRadius: '8px',
      padding: '0',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        color: theme.palette.white.light
      },
      [theme.breakpoints.down('md')]: {
        height: '40px',
        fontSize: '11px',
        lineHeight: '16px'
      }
    },
  },
  generalInfoHeader: {
    marginBottom: '11px',
    '& h3': {
      fontSize: '25px',
      lineHeight: '35px',
      color: theme.palette.common.black
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '14px',
      '& h3': {
        fontSize: '17px',
        lineHeight: '24px',
        order: '1'
      },
      '& .general-info-tab': {
        display: 'none'
      }
    }
  },
  sectionTabs: {
    border: '1px solid #F0F0F0',
    borderRadius: '14px',
    '& a': {
      fontSize: '16px',
      lineHeight: '23px',
      color: theme.palette.common.black,
      padding: '18px 30px',
      textAlign: 'center',
      cursor: 'pointer',
      textDecoration: 'none !important',
      '&:hover': {
        opacity: '0.7'
      }
    },
    '& .active': {
      color: theme.palette.white.light,
      fontWeight: '700',
      background: 'linear-gradient(right, #BB14E2, #161FE4)'
    },
    '& a:first-child': {
      borderRadius: '14px 0 0 14px'
    },
    '& a:last-child': {
      borderRadius: '0 14px 14px 0'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginBottom: '20px',
      '& a': {
        fontSize: '14px',
        lineHeight: '20px',
        padding: '10px 0',
        width: 'calc(100% / 3)',
      },
      '& a:first-child': {
        borderRadius: '6px 0 0 6px'
      },
      '& a:last-child': {
        borderRadius: '0 6px 6px 0'
      },
    }
  },
  generalInfoForm: {
    marginBottom: '40px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '17.5px'
    }
  },
  userAvatarBox: {
    width: '160px',
    '& .user-avatar-upload': {
      fontSize: '14px',
      lineHeight: '20px',
      padding: '12px 54px',
      '& .MuiButton-startIcon': {
        left: '18.5px'
      }
    },
    [theme.breakpoints.down('md')]: {
      width: '105px',
      '& .user-avatar-upload': {
        padding: '8px 15px',
        '& .MuiButton-startIcon': {
          left: '14.5px !important'
        }
      },
    }
  },
  userAvatar: {
    marginBottom: '30px',
    '& .close-btn': {
      position: 'absolute',
      minWidth: 'unset',
      minHeight: 'unset',
      border: '3px solid #fff',
      borderRadius: '50%',
      padding: '0',
      top: '-3px',
      right: '4px',
      background: '#6454F5',
      width: '27px',
      height: '27px',
      boxSizing: "content-box"
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '20px',
      '& .close-btn': {
        border: '2px solid #fff',
        top: '-2px',
        right: '2.7px',
        width: '17.37px',
        height: '17.37px',
        '& .close-icon': {
          width: '6.79px',
          height: '6.79px'
        }
      },
    }
  },
  userInfoForm: {
    marginLeft: '42px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent !important'
    },
    '& .MuiInputBase-root': {
      backgroundColor: theme.palette.grey[300]
    },
    '& .bio-desc-field': {
      '& .MuiInputBase-input': {
        height: '94px !important',
        boxSizing: 'border-box'
      }     
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '28px',
      '& .bio-desc-field': {
        '& .MuiInputBase-input': {
          height: '66px !important',
        }        
      },
    }
  },
  carouselImgsHeader: {
    paddingTop: '30px',
    borderTop: '1px solid rgba(0, 0, 0, 0.05)',
    marginBottom: '22px',
    '& > .MuiTypography-root': {
      fontSize: '17px',
      lineHeight: '24px',
      color: theme.palette.common.black
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '18px',
      paddingTop: '22px',
      '& > .MuiTypography-root': {
        fontSize: '14px',
        lineHeight: '20px',
      },
    }
  },
  coverActiveSwitch: {
    '& > .MuiTypography-root': {
      fontSize: '17px',
      lineHeight: '24px',
      color: '#474461',
      marginRight: '18.5px'
    },
    '& .MuiSwitch-root': {
      padding: '0',
      height: '46px',
      boxSizing: 'border-box',
      borderRadius: '27px',
      width: '73px'
    },
    '& .MuiSwitch-thumb': {
      width: '32px',
      height: '28.6px',
      background: 'linear-gradient(right, #161FE4, #BB14E2)',
      borderRadius: '46px'
    },
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: '8.7px 9.9px',
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(21.2px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: 'rgba(206, 206, 206, 0.13)',
          opacity: 1,
          border: 0,
        }
      }
    },
    '& .MuiSwitch-track': {
      backgroundColor: '#39393D'
    },
    [theme.breakpoints.down('md')]: {
      '& > .MuiTypography-root': {
        display: 'none'
      },
      '& .MuiSwitch-root': {
        height: '32px',
        width: '52px'
      },
      '& .MuiSwitch-thumb': {
        width: '22.5px',
        height: '20px',
      },
      '& .MuiSwitch-switchBase': {
        margin: '6px 7px',
        '&.Mui-checked': {
          transform: 'translateX(15.5px) !important'
        }
      },
    }
  },
  carouselImgs: {
    marginTop: '50px',
    [theme.breakpoints.down('md')]: {
      marginTop: '22px'
    }
  },
  carouselImgDndList: {
    display: 'flex' as const,
    flexWrap: 'wrap' as const,
    justifyContent: 'space-between' as const
  },
  carouselImgItem: {
    display: 'flex',
    alignItems: 'center',
    width: 'calc(50% - 32px)',
    marginBottom: '37px',
    '& .trigger-icon': {
      marginRight: '16px',
      fontSize: '17px',
      lineHeight: '24px',
      color: 'rgba(0, 0, 0, 0.5)',
      cursor: 'pointer',
      '& .MuiTypography-root': {
        marginBottom: '13px'
      }
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '12.6px',
      '& .trigger-icon': {
        marginRight: '11px',
        fontSize: '14px',
        lineHeight: '20px',
        '& .MuiTypography-root': {
          marginBottom: '14.6px'
        }
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  carouselImgItemInner: {
    '& .carousel-img-item-img': {
      borderRadius: '14px',
      width: '87px',
      height: '94px',
      marginRight: '30px'
    },
    [theme.breakpoints.down('md')]: {
      '& .carousel-img-item-img': {
        borderRadius: '8px',
        width: '62px',
        height: '68px',
        marginRight: '15px'
      }
    }
  },
  carouselImgItemInfo: {
    paddingRight: '25px',
    '& p': {
      fontSize: '17px',
      color: theme.palette.common.black,
      lineHeight: '24px',
    },
    '& .MuiLinearProgress-root': {
      backgroundColor: '#FBFBFB',
      height: '7px',
      borderRadius: '3.5px',
      marginTop: '20px',
      '& .MuiLinearProgress-bar': {
        backgroundColor: '#161FE4'
      }
    },
    '& .MuiIconButton-root': {
      padding: '0',
      position: 'absolute',
      top: '10px',
      right: '0'
    },
    [theme.breakpoints.down('md')]: {
      paddingRight: '20px',
      '& p': {
        fontSize: '14px',
        lineHeight: '20px'
      },
      '& .MuiLinearProgress-root': {
        height: '5px',
        marginTop: '14.5px'
      },
      '& .MuiIconButton-root': {
        top: '6px'
      }
    }
  },
  carouselImgCollapse: {
    paddingBottom: '30px',
    [theme.breakpoints.down('md')]: {
      paddingBottom: '15px'
    }
  },
  topTab: {
    position: 'sticky' as const,
    top: '0',
    padding: '20px 0',
    background: '#FCFCFC',
    zIndex: '9999999',
    '& .tabs': {
      marginBottom: '0'
    },
    [theme.breakpoints.up("md")]: {
      display: 'none'
    }
  }
}));

export default designPageStyles;
