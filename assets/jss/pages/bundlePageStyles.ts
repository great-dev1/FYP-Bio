import { Theme } from "@mui/system";

const bundlePageStyles = ((theme: Theme) => ({
  wrapper: {
    backgroundColor: '#FCFCFC',
    padding: '22px 44px 44px 50px',
    minHeight: 'calc(100vh - 106px)',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '26px',
      paddingRight: '26px'
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: '#fff !important'
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '16px',
      paddingBottom: '40px'
    }
  },
  leftSection: {
    width: '69.15%',
    height: 'fit-content',
    boxSizing: 'border-box' as const,
    backgroundColor: theme.palette.white.light,
    padding: '25.5px 42px 44px 40px',
    borderRadius: '16px',
    '& h1': {
      fontSize: '25px',
      lineHeight: '34px',
      marginBottom: '26px'
    },
    [theme.breakpoints.down('lg')]: {
      width: 'calc(100% - 400px - 16px)'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      order: '1',
      padding: '0',
      '& h1': {
        fontSize: '17px',
        lineHeight: '24px',
        marginBottom: '14px'
      }
    }
  },
  rightSection: {
    height: 'fit-content',
    width: '29.17%',
    boxSizing: 'border-box' as const,
    padding: '20px 23px 30px',
    borderRadius: '16px',
    backgroundColor: '#fff',
    '& .card-image': {
      marginBottom: '24.5px',
      '& > span': {
        width: '100% !important',
        borderRadius: '15px'
      }
    },
    '& .title': {
      '& p': {
        fontSize: '20px',
        lineHeight: '28px',
        marginBottom: '8px'
      },
      '& h1': {
        fontSize: '25px',
        lineHeight: '35px',
        marginBottom: '17.5px'
      }
    },
    '& .user-info': {
      '& p': {
        marginLeft: '12px',
        fontSize: '16px'
      },
      '&:hover': {
        '& p': {
          color: '#000',
          textDecoration: 'underline'
        }
      }
    },
    [theme.breakpoints.down('lg')]: {
      width: '400px'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '0',
      paddingBottom: '20px',
      marginBottom: '15px',
      borderRadius: '0',
      borderBottom: '1px solid rgba(112, 112, 112, 0.13)',
      '& .card-contents': {
        display: 'flex',
        justifyContent: 'space-between'
      },
      '& .title': {
        '& p': {
          fontSize: '14px !important',
          lineHeight: '20px !important',
          marginBottom: '0px !important'
        },
        '& h1': {
          fontSize: '15px !important',
          lineHeight: '21px !important',
          marginBottom: '0px !important'
        }
      },
      '& .user-info': {
        marginTop: 'auto',
        '& p': {
          marginLeft: '10px !important',
          fontSize: '14px !important'
        }
      }
    },
    [theme.breakpoints.down('sm')]: {
      '& .card-image': {
        marginBottom: '12px',
        '& > span': {
          height: '120px !important'
        }
      }
    }
  },
  cardItem: {    
    '& .card-image': {
      marginBottom: '24px',
      '& > span': {
        borderRadius: '12px !important',
        width: '100% !important'
      },
      '& .open-img': {
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '12px',
        transition: 'opacity 0.25s ease',
        opacity: '0',
        '& .MuiButtonBase-root': {
          fontSize: '16px',
          height: '45px',
          padding: '0',
          width: '60%',
          color: '#fff',
          fontWeight: 'bold'
        }
      },
      '&:hover .open-img': {
        opacity: '1'
      }
    },    
    '& > .MuiButtonBase-root': {
      backgroundColor: '#565F72',
      fontSize: '17px',
      lineHeight: '24px',
      padding: '12.4px 0 14px',
      '&:hover': {
        transform: 'scale(1.02)'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .card-image': {
        marginBottom: '12px',
        '& .open-img': {
          '& .MuiButtonBase-root': {
            fontSize: '14px !important',
            height: '35px !important',
            width: '80% !important',
            maxWidth: '150px'
          }
        }
      },    
      '& > .MuiButtonBase-root': {
        fontSize: '14px',
        lineHeight: '20px',
        padding: '10.5px 0 12px'
      },
    }
  }
}));

export default bundlePageStyles;
