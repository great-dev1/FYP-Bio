import { Theme } from "@mui/system";

const selectStyles = ((theme: Theme) => ({
  select: {
    backgroundColor: 'rgba(241, 241, 241, 0.24)',
    borderRadius: '30px',
    width: '100%',
    maxWidth: '100%',
    '& .MuiOutlinedInput-notchedOutline': {
      display: 'none'
    },
    '& .MuiSelect-select': {
      fontSize: '14px',
      color: theme.palette.common.black,
      paddingRight: '0 !important',
      paddingLeft: '28px'
    },
    [theme.breakpoints.down('sm')]: {
      height: '36.4px',
      '& .MuiSelect-select': {
        paddingLeft: '12.3px'
      }
    },    
  },
  arrowIcon: {
    width: '12.1px',
    height: '7px',
    flex: 'none' as const,
    display: 'flex',
    right: '20px',
    [theme.breakpoints.down('sm')]: {
      width: '10.42px !important'
    }
  },
  outlinedSelect: {
    '& .MuiInputBase-root': {
      backgroundColor: theme.palette.white.light
    },
    '& .MuiOutlinedInput-notchedOutline': {
      display: 'block'   
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiInputBase-root': {
        height: '50px'
      },
      '& .MuiSelect-select': {
        padding: '14.2px 20px 14.2px 25px'
      },
      '& .form-label': {
        fontSize: '13px',
        lineHeight: '20px',
        marginBottom: '10px'
      }
    }
  },
  label: {
    fontSize: '16px',
    lineHeight: '24px',
    marginBottom: '20px',
    color: '#474461',
    display: 'block'
  },
  roundedNone: {
    '& .MuiInputBase-root': {
      borderRadius: '5px'
    }
  }
}));

export default selectStyles;
