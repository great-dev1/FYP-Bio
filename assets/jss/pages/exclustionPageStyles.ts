import { Theme } from "@mui/system";
import nextIcon from 'assets/img/product/purple-next.svg';
import prevIcon from 'assets/img/product/purple-prev.svg';

const exclustionPageStyles = ((theme: Theme) => ({
  contents: {
    background: '#FCFCFC',
    padding: '28px 45px 57px',
    [theme.breakpoints.down('md')]: {
      padding: '6px 25px 36px 25px',
      background: '#fff'
    }
  },
  leftSection: {
    width: '64.8%',
    [theme.breakpoints.down('xl')]: {
      width: 'calc(100% - 420px)'
    },
    [theme.breakpoints.down('lg')]: {
      width: '100%'
    }
  },
  rightSection: {
    width: '33.55%',
    [theme.breakpoints.down('xl')]: {
      width: '400px'
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  detailCard: {
    padding: '30px 35px',
    borderRadius: '16px',
    backgroundColor: '#fff',
    '& .sub-title': {
      fontSize: '18px',
      lineHeight: '25px',
      marginBottom: '25px'
    },
    '& h2': {
      fontSize: '55px',
      lineHeight: '77px'
    },
    '& .user-box': {
      marginBottom: '26px',
      '& p': {
        fontSize: '16px',
        lineHeight: '23px',
        marginLeft: '12px'
      }
    },
    '& .submit-btn': {
      fontSize: '20px',
      fontWeight: '700',
      padding: '12.5px 0 13.5px'
    },
    '& .exclusive-content': {
      marginTop: '26px',
      '& .card-image': {
        backgroundColor: '#FBFBFE',
        borderRadius: '8px',
        width: '53px',
        height: '53px',
        marginRight: '27px',
        '& > span': {
          marginLeft: '16px !important'
        }
      },
      '& h3': {
        fontSize: '17px',
        lineHeight: '24px',
        marginBottom: '4px'
      },
      '& p': {
        fontSize: '16px',
        lineHeight: '23px'
      }
    },
    '& .description': {
      '& h4': {
        fontSize: '19px',
        lineHeight: '27px',
        marginBottom: '10px'
      },
      '& p': {
        fontSize: '16.4px',
        lineHeight: '25px'
      }
    },
    [theme.breakpoints.up('lg')]: {
      '& .description': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('lg')]: {
      padding: '0',
      borderRadius: '0',
      marginBottom: '24px'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '40px',
      '& .sub-title': {
        fontSize: '15px',
        lineHeight: '21px',
        marginBottom: '0'
      },
      '& h2': {
        fontSize: '46px',
        lineHeight: '64px'
      },
      '& .user-box': {
        marginBottom: '14px',
        '& p': {
          fontSize: '14px !important',
          lineHeight: '20px !important',
          marginLeft: '10px !important'
        }
      },
      '& .submit-btn': {
        fontSize: '16px',
        padding: '11px 0',
        '& .MuiButton-startIcon': {
          position: 'absolute',
          transform: 'translateY(-50%)',
          left: '25.5px'
        }
      },
      '& .exclusive-content': {
        marginTop: '18px',
        '& .card-image': {
          width: '44px !important',
          marginBottom: '0',
          height: '44px !important',
          marginRight: '23px !important',
          '& > span:first-child': {
            marginLeft: '13px !important',
            width: '22px !important',
            borderRadius: '0 !important'
          }
        },
        '& h3': {
          fontSize: '14px !important',
          lineHeight: '20px !important'
        },
        '& p': {
          fontSize: '13px !important',
          lineHeight: '19px !important'
        }
      },
      '& .description': {
        '& h4': {
          fontSize: '15px !important',
          lineHeight: '21px !important',
          marginBottom: '7px !important'
        },
        '& p': {
          fontSize: '14px !important',
          lineHeight: '20px !important'
        }
      }
    }
  },
  descriptionBox: {
    padding: '25.5px 40px 32.2px',
    backgroundColor: "#fff",
    borderRadius: '16px',
    '& h1': {
      fontSize: '25px',
      lineHeight: '35px',
      marginBottom: '24.5px'
    },
    '& .card-image': {
      marginBottom: '24.5px',
      '& > span': {
        width: '100% !important',
        borderRadius: '15px'
      }
    },
    '& .desc-text': {
      marginBottom: '40px'
    },
    [theme.breakpoints.down('lg')]: {
      '& .desc-text, h1': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('md')]: {
      padding: '0',
      '& .card-image': {
        marginBottom: '24px'
      },
    }
  },
  lockCard: {
    '& > span': {
      borderRadius: '12px !important',
      width: '100% !important'
    },
    '&.locked': {
      '&::before': {
        position: 'absolute',
        content: `''`,
        width: '100%',
        height: '100%',
        left: '0',
        top: '0',
        background: 'rgba(0, 0, 0, 0.59)',
        zIndex: "1",
        borderRadius: '12px'
      }
    },
    '& .lock-icon': {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '2'
    },
    '& .MuiLink-root': {
      position: 'absolute',
      background: 'rgba(0, 0, 0, 0.59)',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      opacity: '0',
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    '&.unlocked:hover': {
      '& .MuiLink-root': {
        opacity: '1',
        transition: 'opacity .3s'
      }
    }  
  },
  lockTooltip: {
    '& .MuiTooltip-tooltip': {
      fontSize: '14px',
      background: '#000'
    },
    '& .MuiTooltip-arrow': {
      color: '#000'
    }
  },
  likeSection: {
    padding: '20px 40px 25px',
    background: '#fff',
    borderRadius: '16px',
    marginTop: '21px',
    '& h4': {
      fontSize: '19px',
      lineHeight: '27px',
      marginBottom: '23.5px'
    },
    '& .react-multi-carousel-item': {
      paddingRight: '24px'
    },
    '& .react-multiple-carousel__arrow': {
      width: '47px',
      height: '47px',
      '&::before': {
        display: 'none'
      }
    },
    '& .react-multiple-carousel__arrow--right': {
      background: `url(${nextIcon.src})`,
      backgroundSize: '100% 100%',
    },
    '& .react-multiple-carousel__arrow--left': {
      background: `url(${prevIcon.src})`,
      backgroundSize: '100% 100%'
    },
    [theme.breakpoints.up('md')]: {
      '& .card-list': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('md')]: {
      padding: '0',
      marginTop: '16px',
      '& h4': {
        fontSize: '17px',
        lineHeight: '24px',
        marginBottom: '17px'
      },
      '& .carousel-box': {
        display: 'none'
      }
    }
  },
  cardItem: {
    padding: '15.5px 16px 16px',
    borderRadius: '17px',
    border :'1px solid rgba(112, 112, 112, 0.3)',
    cursor: 'pointer' as const,
    '& .card-img': {
      height: '146px',
      borderRadius: '14px',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      marginBottom: '17px'
    },
    '& .card-title': {
      fontSize: '18px',
      lineHeight: '25px',
      marginBottom: '5px',
      color: '#000',
      fontWeight: '700',
      display: 'block'
    },
    '& .card-description': {
      fontSize: '15px',
      lineHeight: '20px',
      marginBottom: '14px'
    },
    '& .card-price': {
      fontSize: '15px',
      lineHeight: '20px',
      marginLeft: '12px',
      color: '#000'
    },
    [theme.breakpoints.down('md')]: {
      padding: '16px 17px 17px',
      '& .card-img': {
        height: '150px',
        borderRadius: '14px',
        marginBottom: '18px'
      },
      '& .card-title': {
        fontSize: '18px',
        marginBottom: '6px'
      },
      '& .card-description': {
        fontSize: '15px',
        lineHeight: '20px',
        marginBottom: '14px'
      },
      '& .card-price': {
        fontSize: '14px',
        lineHeight: '15px',
        marginLeft: '12.3px'
      }
    }
  },
  leftDetailCard: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  scrollBox: {
    '& .react-horizontal-scrolling-menu--separator': {
      minWidth: '24px',
      width: '24px'
    },
    '& .scroll-item': {
      width: '326px',
      minWidth: '326px'
    },
    '& .react-horizontal-scrolling-menu--inner-wrapper': {
      position: 'relative'
    },
    '& .react-horizontal-scrolling-menu--arrow-left': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: '9',
      left: '0'
    },
    '& .react-horizontal-scrolling-menu--arrow-right': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: '9',
      right: '0'
    },
    '& .react-horizontal-scrolling-menu--scroll-container': {
      paddingBottom: '22px',
      '&::-webkit-scrollbar': {
        height: '6px',
        width: '167px'
      },
      '&::-webkit-scrollbar-track': {
        background: '#F9F9F9',
        borderRadius: '5px'
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#9F83EB',
        borderRadius: '5px'
      }
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  scrollBtn: {
    padding: '0',
    minWidth: 'unset',
    height: 'fit-content',
    borderRadius: '50%'
  }
}));

export default exclustionPageStyles;
