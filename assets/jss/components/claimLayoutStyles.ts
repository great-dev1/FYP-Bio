import { Theme } from "@mui/system";
import backdropFilter from 'assets/img/backdrop-filter.png';

const claimLayoutStyles = ((theme: Theme) => ({
  layout: {
    
  },
  leftSection: {
    width: '55.2%',
    padding: '30px 0 80px 0',
    boxSizing: 'border-box' as const,
    [theme.breakpoints.down("xl")]: {
      paddingLeft: '60px'
    },
    [theme.breakpoints.down("lg")]: {
      paddingLeft: '30px',
      paddingRight: '30px'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '40px 25px 45px',
      minHeight: '100vh'
    }
  },
  rightSection: {
    width: '44.8%',
    background: 'linear-gradient(top, #161FE4, #BB14E2)',
    paddingTop: '19.13vh',
    borderRadius: '46px 0 0 46px',
    minHeight: '100vh',
    height: '100vh',
    position: 'fixed' as const,
    top: '0',
    right: '0',
    [theme.breakpoints.down("xl")]: {
      paddingRight: "20px",
      paddingLeft: '20px'
    },   
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  reviewImg: {
    top: '-4vh',
    left: '246px',
    height: '17.14vh'
  },
  navbar: {
    marginLeft: '11.27%',
    '& .MuiLink-root': {
      marginBottom: '5.8vh',
      display: 'block',
      width: 'fit-content'
    },
    '& .nav-logo': {
      display: 'flex'
    },
    [theme.breakpoints.down('xl')]: {
      marginLeft: '0'
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
  stepper: {
    width: '130px',
    height: '2px',
    backgroundColor: '#FBFBFB',
    marginRight: '8px'
  },
  contents: {
    marginLeft: '11.27%',
    paddingTop: '2.5vh',
    [theme.breakpoints.down('xl')]: {
      marginLeft: '0'
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '45px',
      height: 'calc(100% - 67px)'
    }
  },
  activeStep: {
    backgroundColor: theme.palette.yellow.main,
  },
  rightContents: {
    width: '46.2%',
    color: theme.palette.white.light,
    zIndex: '3',
    marginRight: '13.8%',
    '& h3': {
      marginBottom: '2.5vh',
      fontSize: '35px',
      lineHeight: '50px'
    },
    '& p': {
      fontSize: "25px",
      lineHeight: '35px',
      marginBottom: '3.74vh'
    }, 
    [theme.breakpoints.down('xl')]: {
      width: '90%',
      marginRight: '5%'
    }
  },
  socialLinks: {
    width: 'fit-content',
    '& .MuiLink-root': {
      backgroundColor: theme.palette.white.light,
      display: 'flex',
      width: '5.57vh',
      height: '5.57vh',
      borderRadius: '67px',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: "2.16vh",
      padding: '16px',
      minWidth: '50px',
      minHeight: '50px'
    },
    [theme.breakpoints.down('xl')]: {
      flexDirection: 'row' as const,
      gap: '20px',
      marginLeft: '0'
    }
  },
  footerLogo: {
    padding: '10px 14px',
    backgroundColor: 'rgba(255, 255, 255, 0.21)',
    borderRadius: '8px',
    width: '90px',
    bottom: '3.6vh',
    right: '13.8%',
    cursor: 'pointer' as const  
  },
  claimImg: {
    [theme.breakpoints.down('xl')]: {
      display: 'none'
    }
  },
  firstClaim: {
    top: '19.13vh',
    width: '47.8%',
    height: '71.55vh',
    left: '-14.3%',
    borderRadius: '34px',
    boxShadow: '20px 20px 40px rgb(0 0 0 / 9%)',
    '&::before': {
      position: 'absolute',
      content: `''`,
      width: '754px',
      height: '754px',
      backgroundImage: `url(${backdropFilter.src})`,
      top: '24.2px',
      left: '-125px',
      borderRadius: '50%',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat'
    }    
  },
  secondClaim: {
    top: '55.77vh',
    zIndex: '2',
    width: '36.5%',
    transform: 'rotate(11deg)',
    height: '30.64vh',    
    left: '17.78%',
    boxShadow: '20px 20px 40px rgb(0 0 0 / 9%)',
    borderRadius: '34px'   
  },
  thirdClaim: {
    top: '73.83vh',
    transform: 'rotate(41deg)',
    width: '31.4%',
    height: '19.13vh',
    left: '42.26%',
    boxShadow: '20px 20px 40px rgb(0 0 0 / 9%)',
    '& > span': {     
      width: '100% !important',
      height: '100% !important'
    }
  },
  claimMobile: {
    backgroundColor: '#313744',
    backgroundImage: 'url(/background/my-theme-bg.webp)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: '15px solid #fff',
    '& .user-avatar': {
      borderColor: '#313744'
    },
    '& .user-info-text': {
      '& p': {
        color: 'rgba(255, 255, 255, 0.8)'
      }
    },
    '& .social-link-item': {
      background: '#565F72'
    },
    '& .social-link-item-list .social-link-item:first-child': {
      background: 'linear-gradient(to right, #D96464, #D23F9B)'
    }
  },
  socialBtn: {
    marginBottom: '14px',
    padding: '8px 14.7px 8px 8px',
    color: theme.palette.white.light,
    cursor: 'pointer',
    borderRadius: '10px',
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
  socialGroup: {
    padding: '22.4px 16px 20px',
    backgroundColor: '#313744',
    border: '14px solid #fff',
    borderRadius: '29px',
    overflow: 'hidden'
  },
  imageCard: {
    backgroundColor: theme.palette.white.light,
    padding: '10px 11.3px 0px 20.8px',
    borderRadius: '15px',
    overflow: 'hidden',
    '& .img-box': {
      height: '57.14%',
      marginBottom: '14px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      borderRadius: '14px'
    }
  },
  claimPage: {
    '& .sorcial-group': {
      '& .social-link-item': {
        background: '#565F72'
      },
      '& .social-link-item:first-child': {
        background: 'linear-gradient(to right, #D96464, #D23F9B)'
      }
    }
  }
}));

export default claimLayoutStyles;
