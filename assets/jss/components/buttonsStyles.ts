import { Theme } from "@mui/system";

const buttonsStyles = ((theme: Theme) => ({
  btn: {
    '&.MuiButtonBase-root': {
      textTransform: 'none',
      fontSize: '18px',
      lineHeight: '27px',
      fontWeight: '400',
      borderRadius: '46px',
      color: theme.palette.white.light,
      padding: '14.8px 26.5px 18.2px',
      maxHeight: '58px',
      position: 'relative',
      '& .MuiButton-startIcon': {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: '30.2px'
      },
      [theme.breakpoints.down('md')]: {
        maxHeight: '48px',
        fontSize: '16px',
        lineHeight: '21px',
        padding: '13.4px',
        '& .MuiButton-startIcon': {
          left: '18.2px'
        }
      },
      [theme.breakpoints.down('sm')]: {
        '& .MuiButton-startIcon': {
          position: 'unset',
          transform: 'unset',
          marginLeft: '0',
          marginRight: '0'
        },
        '& .MuiButton-startIcon+span': {
          marginLeft: 'auto',
          marginRight: 'auto'
        }
      }
    }
  },
  orangeGradient: {
    '&.MuiButtonBase-root': {
      background: 'linear-gradient(to left, #E41616, #E2C514)',
      '&:hover': {
        opacity: '0.7',
        transition: 'opacity 0.3s'
      }
    }
  },
  blueGradient: {
    '&.MuiButtonBase-root': {
      background: 'linear-gradient(to left, #161FE4, #BB14E2)',
      '&:hover': {
        opacity: '0.7',
        transition: 'opacity 0.3s'
      }
    }
  },
  outlined: {
    '&.MuiButtonBase-root': {
      borderColor: '#D5D5D5',
      color: theme.palette.common.black
    }
  },
  greyFill: {
    '&.MuiButtonBase-root': {
      backgroundColor: '#F8F8F8',
      color: theme.palette.common.black
    }
  },
  noneShadow: {
    '&.MuiButtonBase-root': {
      boxShadow: 'none'
    }
  },
  yellowFill: {
    '&.MuiButtonBase-root': {
      backgroundColor: '#F69D00'
    }
  },
  roundNone: {
    '&.MuiButtonBase-root': {
      borderRadius: '0 !important'
    }
  },
  softShadow: {
    '&.MuiButtonBase-root': {
      boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.16)'
    }
  },
  hardShadow: {
    '&.MuiButtonBase-root': {
      boxShadow: '5px 5px 0px rgba(0, 0, 0, 0.71)'
    }
  },
  blackBackground: {
    '&.MuiButtonBase-root': {
      backgroundColor: theme.palette.common.black
    }
  }
}));

export default buttonsStyles;
