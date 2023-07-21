import { Theme } from "@mui/system";
import chevronLeft from 'assets/img/product/chevron-left.svg';
import chevronRight from 'assets/img/product/chevron-right.svg';

const meetingPageStyles = ((theme: Theme) => ({
  wrapper: {
    padding: '28px 45px 57px',
    backgroundColor: '#FCFCFC',
    [theme.breakpoints.down('lg')]: {
      padding: '28px 26px 57px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '16px 26px 42px',
      backgroundColor: '#fff'
    }
  },
  leftSection: {
    width: '58.5%',
    boxSizing: 'border-box' as const,
    backgroundColor: '#fff',
    padding: '25px 40px 36px',
    borderRadius: '16px',
    '& .page-title': {
      fontSize: '25px',
      lineHeight: '34px',
      marginBottom: '25px'
    },
    '& .banner-img': {
      marginBottom: '30px',
      height: '520px',
      '& > span': {
        borderRadius: '15px !important',
        width: '100% !important'
      }
    },
    '& .user-box': {
      marginBottom: '25px',
      '& p': {
        fontSize: '18px',
        lineHeight: '25px',
        marginLeft: '14px'
      }
    },
    '& .call-title': {
      fontSize: '19px',
      lineHeight: '27px',
      marginBottom: '10px'
    },
    '& .call-text': {
      fontSize: '16px',
      lineHeight: '25px'
    },
    '& .properties': {
      marginTop: '24px',
      columnGap: '80px',
      rowGap: '24px',
      maxWidth: '750px'
    },
    '& .property-item': {
      '& p': {
        fontSize: '19px',
        lineHeight: '27px',
        marginLeft: '16px'
      }
    },
    [theme.breakpoints.down('lg')]: {
      padding: '25px 26px 36px',
      width: '100%',
    },
    [theme.breakpoints.down('md')]: {
      padding: '0',
      '& .page-title': {
        fontSize: '17px',
        lineHeight: '24px',
        marginBottom: '14px'
      },
      '& .banner-img': {
        marginBottom: '23px',
        height: '310px'
      },
      '& .user-box': {
        '& p': {
          fontSize: '15px !important',
          lineHeight: '21px !important',
          marginLeft: '10px !important'
        }
      },
      '& .call-title': {
        fontSize: '15px',
        lineHeight: '21px'
      },
      '& .call-text': {
        fontSize: '14px',
        lineHeight: '20px'
      },
      '& .properties': {
        marginTop: '20px',
        columnGap: '14px',
        rowGap: '16px'
      },
      '& .property-item': {
        '& p': {
          fontSize: '14px !important',
          lineHeight: '20px !important',
          marginLeft: '9px !important'
        },
        '& .bank-cash-icon': {
          width: '19px',
          height: '13.1px'
        },
        '& .clock-icon': {
          width: '15.58px',
          height: '15.58px'
        },
        '& .location-icon': {
          width: '14.3px',
          height: '17.66px'
        },
        '& .world-icon': {
          width: '16.2px',
          height: '16.2px'
        },
        '& .time-icon': {
          width: '17px',
          height: '17px'
        }
      }
    }
  },
  rightSection: {
    width: '40.2%',
    boxSizing: 'border-box' as const,
    padding: '43px 42px 30px',
    background: '#fff',
    borderRadius: '16px',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      padding: '43px 26px 30px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '0',
      paddingTop: '36px'
    }
  },
  proceedBtn: {
    marginTop: '34px',
    '&.MuiButtonBase-root': {
      fontSize: '19px',
      lineHeight: '27px',
      padding: '0',
      height: '58px',
      fontWeight: '600'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '28px',
      '&.MuiButtonBase-root': {
        fontSize: '14px',
        lineHeight: '20px',
        height: '40px'
      }
    }
  },
  timeSlot: {
    marginTop: '32px',
    '& h5': {
      fontSize: '20px',
      lineHeight: '28px',
      marginBottom: '26px'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '30px',
      '& h5': {
        fontSize: '16px',
        lineHeight: '23px',
        marginBottom: '20px'
      }
    }
  },
  timeSlotCell: {
    '&.MuiButtonBase-root': {
      fontSize: '18px',
      fontWeight: '600',
      lineHeight: '25px',
      color: '#000',
      padding: '22px 27px',
      justifyContent: 'space-between',
      borderColor: '#E7E7E7',
      borderRadius: '8px',
      '& .sub-text': {
        fontSize: '19px',
        lineHeight: '27px',
        color: '#B7B7B7'
      }
    },
    [theme.breakpoints.down('md')]: {
      '&.MuiButtonBase-root': {
        fontSize: '15px',
        lineHeight: '21px',
        padding: '16px 20px',
        minHeight: 'unset',
        '& .sub-text': {
          fontSize: '15px !important',
          lineHeight: '21px !important'
        }
      }
    },
    '@media screen and (max-width: 360px)': {
      '&.MuiButtonBase-root': {
        padding: '16px 10px'
      }
    }
  },
  activeTimeSlot: {
    '&.MuiButtonBase-root': {
      backgroundColor: '#FBFBFE',
      borderColor: 'rgba(159, 131, 235, 0.13)',
      color: '#5A1AE3',
      '& .sub-text': {
        color: '#5A1AE3'
      }
    }
  },
  timezone: {
    '& .MuiInputBase-root': {
      borderRadius: '5px'
    },
    '& .MuiSelect-select': {
      fontSize: '16px',
      padding: '18px 30px'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E3E3E3'
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiSelect-select': {
        fontSize: '14px',
        padding: '16px 26px'
      },
    }
  },
  calendar: {
    marginTop: '25px',
    '& .calendar-root': {
      width: '100%',
      boxShadow: 'none',
      paddingTop: '0',
      minHeight: 'unset'
    },
    '& .Calendar__header': {
      paddingTop: '0',
      paddingBottom: '0',
      marginBottom: '100px',
      height: "40px",
      padding: '0',
      position: 'relative',
      '& .Calendar__monthYear.-shown': {
        willChange: 'unset',
        backfaceVisibility: 'unset'
      },
      '& .Calendar__monthArrowWrapper': {
        width: '7.72px',
        height: '14.29px',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        '& span': {
          display: 'none'
        }
      },
      '& .Calendar__monthArrowWrapper.-right': {
        backgroundImage: `url(${chevronLeft.src})`,
        left: 'calc(50% - 26px - 110px - 7.72px)'
      },
      '& .Calendar__monthArrowWrapper.-left': {
        backgroundImage: `url(${chevronRight.src})`,
        right: 'calc(50% - 26px - 110px - 7.72px)'
      },
    },
    '& .Calendar__monthText, .Calendar__yearText': {
      fontSize: '29px',
      lineHeight: '40px',
      fontWeight: '700',
      padding: '0',
      fontFamily: "Poppins !important",
      transform: 'none',
      transition: 'none',
      willChange: 'unset',
      background: 'none !important',
      color: "#000"
    },
    '& .Calendar__section': {
      padding: '0',
      '& .Calendar__day': {
        fontSize: '20px',
        lineHeight: '27px',
        borderRadius: '10px !important',
        color: '#2E2E2E',
        border: '0',
        '&:hover': {
          background: 'linear-gradient(to right, #BB14E2, #161FE4) !important',
          color: '#fff !important',
          transition: 'none'
        }
      },
      '& .Calendar__day.-selected': {
        background: 'linear-gradient(to right, #BB14E2, #161FE4) !important',
        color: '#fff',
        fontWeight: '700'
      }
    },
    '& .Calendar__weekDays': {
      padding: '0',
      '& .Calendar__weekDay': {
        fontSize: '18px',
        lineHeight: '24px'
      }
    },
    '& .Calendar__section.-hiddenNext': {
      transform: 'translateX(100%)'
    },
    '& .Calendar__section.-hiddenPrevious': {
      transform: 'translateX(-100%)'
    },
    '& .Calendar__sectionWrapper': {
      height: '290px'
    },
    '& .calendar-today': {
      fontWeight: '400 !important',
      '&::after': {
        opacity: '0 !important'
      }
    },
    '& .Calendar__monthSelectorAnimationWrapper': {
      '& .Calendar__monthSelectorItem.-active': {
        '& button': {
          background: 'linear-gradient(to right, #BB14E2, #161FE4) !important',
        }
      }
    },
    '& .Calendar__yearSelectorItem.-active': {
      '& button': {
        background: 'linear-gradient(to right, #BB14E2, #161FE4) !important',
      }
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '22px',
      '& .Calendar__monthText, .Calendar__yearText': {
        fontSize: '20px',
        lineHeight: '28px'
      },
      '& .Calendar__header': {
        marginBottom: '85px !important',
        height: '28.5px',
        '& .Calendar__monthArrowWrapper.-right': {
          left: 'calc(50% - 26px - 76px - 7.72px) !important'
        },
        '& .Calendar__monthArrowWrapper.-left': {
          right: 'calc(50% - 25px - 76px - 7.72px) !important'
        },
      },
      '& .Calendar__section': {
        '& .Calendar__day': {
          fontSize: '15px !important',
          lineHeight: '20px !important'         
        }
      },
      '& .Calendar__weekDays': {
        '& .Calendar__weekDay': {
          fontSize: '14px !important',
          lineHeight: '20px !important'
        }
      },
      '& .Calendar__sectionWrapper': {
        height: '220px'
      },
    }
  },
  daysControl: {
    columnGap: '12px',
    zIndex: '99',
    top: '65px',
    '& .MuiButtonBase-root': {
      boxShadow: 'none',
      fontSize: '17px',
      lineHeight: '24px',
      color: '#000',
      textTransform: 'none',
      background: '#FAFAFA',
      borderRadius: '8px',
      padding: '14px 26px',
      '&:hover': {
        background: 'linear-gradient(to right, #BB14E2, #161FE4)',
        color: '#fff',
        transition: 'none'
      }
    },
    [theme.breakpoints.down('md')]: {
      top: '43px',
      '& .MuiButtonBase-root': {
        fontSize: '14px !important',
        lineHeight: '20px',
        padding: '10px 20px'
      },
    }
  }
}));

export default meetingPageStyles;
