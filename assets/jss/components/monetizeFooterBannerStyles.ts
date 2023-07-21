import { Theme } from "@mui/system";

const monetizeFooterBannerStyles = ((theme: Theme) => ({
  monetizeFooterCard: {
    padding: '22.5px 43px 24.5px',
    borderRadius: '16px',
    minHeight: '184px',
    boxSizing: 'border-box' as const,
    background: 'linear-gradient(to right, #BB14E2, #161FE4)',
    '& h3': {
      fontSize: '30px',
      lineHeight: '43px',
      color: theme.palette.white.light
    },
    '& p': {
      fontSize: '16px',
      lineHeight: '23px',
      color: theme.palette.white.light,
      marginBottom: '24px'
    },
    '& .MuiButtonBase-root': {
      boxShadow: 'none',
      borderRadius: '46px',
      color: '#9E19E3',
      backgroundColor: theme.palette.white.light,
      fontSize: '16px',
      textTransform: 'none',
      fontWeight: '700',
      lineHeight: '25px',
      padding: '12px 30px',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.7)'
      }
    },
    [theme.breakpoints.down('md')]: {
      minHeight: 'unset',
      padding: '13.6px 24px 20px',
      '& h3': {
        fontSize: '15px',
        lineHeight: '21px',
        marginBottom: '4px'
      },
      '& p': {
        fontSize: '15px',
        lineHeight: '20px',
        marginBottom: '10.7px'
      },
      '& .MuiButtonBase-root': {
        fontSize: '15px',
        lineHeight: '20px',
        padding: '7.3px 19px 7.3px 16px'
      }
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '0'
    }
  },
  bannerImg: {
    top: '0',
    right: '48px',
    height: '100%',
    [theme.breakpoints.down('xl')]: {
      width: '45%',
      right: '20px',
      '& > span': {
        width: '100% !important'
      }
    },
    [theme.breakpoints.down('md')]: {
      // width: '400px'
    },
    [theme.breakpoints.down('sm')]: {
      position: 'unset !important',
      marginTop: '20px',
      width: '100%',
      '& > span': {
        width: '100% !important'
      }
    }
  },
  contents: {
    [theme.breakpoints.down('xl')]: {
      width: '52%'
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '500px',
      width: '52%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
}));

export default monetizeFooterBannerStyles;
