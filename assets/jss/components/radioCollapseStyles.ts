import { Theme } from "@mui/system";

const radioCollapseStyles = ((theme: Theme) => ({
  header: {
    alignItems: 'center',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'unset'
    }
  },
  title: {
    marginLeft: '15.7px',
    '& h6': {
      fontSize: '15px',
      lineHeight: '21px',
      color: theme.palette.common.black,
      marginBottom: '3px'
    },
    '& p': {
      fontSize: '14px',
      color: theme.palette.common.black,
      opacity: '0.4',
      lineHeight: '20px'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '13.6px'
    }
  },
  radio: {
    '&.MuiIconButton-root': {
      border: '1px solid #EAEAEA',
      width: '22px',
      height: '22px',
      boxSizing: 'border-box',
      padding: '4px'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '4px',
      '&.MuiIconButton-root': {
        width: '16px',
        height: '16px',
        padding: '3px'
      }
    }
  },
  collapseContent: {
    paddingTop: '12.3px',
    paddingBottom: '8px'
  }
}));

export default radioCollapseStyles;
