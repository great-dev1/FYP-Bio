import { Theme } from "@mui/system";

const imageDialogStyles = ((theme: Theme) => ({
  dialog: {
    '& .MuiDialog-paper': {
      backgroundColor: 'transparent'
    }
  },
  actions: {
    top: '0',
    right: '0',
    zIndex: '9',
    '& .MuiLink-root': {
      boxShadow: 'none',
      padding: '0',
      minWidth: 'unset',
      width: '44px',
      height: '44px',
      backgroundColor: 'rgba(30, 30, 30, .6)',
      borderRadius: '0',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  },
  videoBox: {
    width: '800px',
    '& video': {
      width: '100%'
    },
    [theme.breakpoints.down('md')]: {
      width: 'calc(100vw - 64px)'
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100vw - 32px)'
    }
  },
  videoDialog: {
    [theme.breakpoints.up('sm')]: {
      '& .MuiDialog-paper': {
        maxWidth: 'unset'
      }
    },
    [theme.breakpoints.down('sm')]: {
      '& .MuiDialog-paper': {
        margin: '16px'
      }
    }
  }
}));

export default imageDialogStyles;
