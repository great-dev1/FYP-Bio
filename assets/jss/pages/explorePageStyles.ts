import { Theme } from "@mui/system";
import headerBackgroundImage from 'assets/img/explore/header-img.webp';

const explorePageStyles = ((theme: Theme) => ({
  header: {
    padding: '100px 0 73px',
    backgroundImage: `url(${headerBackgroundImage.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    '&::before': {
      width: '100%',
      height: '100%',
      content: `''`,
      position: 'absolute',
      background: 'linear-gradient(to right, rgba(187, 20, 226, 0.92), rgba(22, 31, 228, 0.92))',
      top: '0',
      left: '0'
    },
    '& .header-contents': {
      maxWidth: '938px',
      '& h1': {
        textTransform: 'uppercase',
        marginBottom: '37px'
      },
      '& p': {
        marginBottom: '42px',
        maxWidth: '870px',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      '& .create-btn': {
        maxWidth: '528px',
        color: '#621BD3',
        backgroundColor: theme.palette.white.light,
        boxShadow: 'none',
        borderRadius: '46px',
        fontSize: '25px',
        fontWeight: '600',
        lineHeight: '35px',
        padding: '28px 0',
        textTransform: 'none',
        maxHeight: 'unset',
        '&:hover': {
          opacity: '0.7',
          transition: 'opacity .3s'
        }
      },
      '& .lean-more': {
        color: '#fff',
        fontSize: "21px",
        lineHeight: '29px',
        textTransform: 'none',
        margin: '37px auto 0',
        display: 'flex',
        cursor: 'pointer',
        width: 'fit-content',
        alignItems: 'center',
        '& > span': {
          marginLeft: '17px !important'
        },
        '&:hover': {
          opacity: '0.7',
          transition: 'opacity .3s',
          '& > span': {
            right: '-10px',
            transition: 'all .3s'
          }
        }
      }
    },
    [theme.breakpoints.down('lg')]: {
      padding: '62px 26px 32.5px',
      '& .header-contents': {
        maxWidth: 'unset',
        '& h1': {
          fontSize: '28px',
          lineHeight: '34px',
          marginBottom: '18.8px !important'
        },
        '& p': {
          marginBottom: '27px !important',
          fontSize: '14px',
          lineHeight: '20px'
        },
        '& .create-btn': {         
          fontSize: '15px !important',
          lineHeight: '21px !important',
          padding: '18px 0 !important'
        },
        '& .lean-more': {
          fontSize: "14px !important",
          lineHeight: '20px !important',
          margin: '23px auto 0 !important',
          '& > span:first-child': {
            marginLeft: '14.7px !important',
            width: '12.16px !important',
            height: '9.12px !important'
          }
        }
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .header-contents': {
        '& .create-btn': {         
          maxWidth: 'unset !important'
        }
      }
    },
    [theme.breakpoints.down('sm')]: {
      backgroundPositionX: '35%'
    }
  }
}));

export default explorePageStyles;
