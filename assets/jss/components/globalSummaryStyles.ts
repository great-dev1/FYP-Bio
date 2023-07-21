import { Theme } from "@mui/system";

const globalSummaryStyles = ((theme: Theme) => ({
  globalSummary: {
    padding: '27.5px 35px 24px',
    background: 'linear-gradient(to right, #BB14E2, #161FE4)',
    borderRadius: '16px',
    [theme.breakpoints.down('xl')]: {
      padding: '27.5px 20px 24px'
    }
  },
  header: {
    fontSize: '20px',
    lineHeight: '1.4',
    color: theme.palette.white.light,
    marginBottom: '47.5px',
    [theme.breakpoints.down('xl')]: {
      marginBottom: '30px'
    }
  },
  durationOption: {
    '& .MuiButtonBase-root': {
      color: theme.palette.white.light,
      textTransform: 'none'
    }
  },
  summaryCard: {
    backgroundColor: theme.palette.white.light,
    borderRadius: '15px',
    padding: '50.5px 19px 55px 32px',
    '& h3': {
      fontSize: "55px",
      lineHeight: '77px',
      color: theme.palette.common.black,
      marginBottom: '3px'
    },
    '& p': {
      fontSize: '17px',
      lineHeight: '24px',
      color: '#C2C2C2'
    },
    '& .MuiIconButton-root': {
      width: '100px',
      height: "100px",
      backgroundColor: '#FBFBFE'
    },
    [theme.breakpoints.down('xl')]: {
      padding: '35px 16px 40px 20px',
      '& h3': {
        fontSize: '45px',
        lineHeight: '65px'
      },
      '& .MuiIconButton-root': {
        width: '90px',
        height: "90px"      
      },
    }
  }
}));

export default globalSummaryStyles;
