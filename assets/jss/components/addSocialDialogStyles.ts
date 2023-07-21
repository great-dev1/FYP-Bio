import { Theme } from "@mui/system";

const addSocialDialogStyles = ((theme: Theme) => ({
  dialog: {
    '& .MuiDialog-paper': {
      maxWidth: 'unset',
      borderRadius: '29px',
      boxShadow: 'none'
    },   
    [theme.breakpoints.down("md")]: {
      '& .MuiDialog-container': {
        alignItems: 'end'
      },
      '& .MuiDialog-paper': {
        width: '100%',
        borderRadius: '21px 21px 0 0',
        margin: '32px 0 0 0'
      },
    }
  },
  contents: {
    padding: '36.4px 40px 40px',
    width: '872px',
    boxSizing: 'border-box' as const,
    '& .modal-title': {
      marginBottom: '40px'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '20px',
      '& .modal-title': {
        fontSize: '15px',
        lineHeight: '21px',
        marginBottom: '24px',
        textAlign: 'center'
      }
    }
  },
  closeBtn: {
    '&.MuiButtonBase-root': {
      width: '39px',
      height: '39px',
      backgroundColor: '#FAFAFA',
      position: 'absolute',
      top: '18px',
      right: '16px'
    },
    [theme.breakpoints.down('md')]: {
      '&.MuiButtonBase-root': {
        width: '24px',
        height: '24px',
        top: '19px',
        right: '16px',
        padding: '6px'
      },
    }
  },
  scrollWrapper: {
    height: '414px',
    overflowY: 'auto' as const,
    width: "calc(100% + 10px)",
    paddingRight: '10px',
    '&::-webkit-scrollbar': {
      width: '5px'
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#888'
    },
    [theme.breakpoints.down('md')]: {
      width: "calc(100% + 20px)",
      paddingLeft: '10px',
      marginLeft: '-10px'
    }
  },
  sectionBlock: {   
    '& .show-more-btn': {
      fontSize: '16px',
      lineHeight: '23px',
      color: '#000',
      background: '#F9F9F9',
      padding: '15px 54.5px',
      margin: '29px auto 0',
      display: 'flex',
      '&:hover': {
        opacity: '0.7',
        transition: 'all .3s'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .content-item-list': {
        '& .MuiGrid-item:first-child .content-item': {
          borderTop: '0'
        }
      },
      '& .show-more-btn': {
        width: '100%',
        fontSize: '15px',
        lineHeight: '21px',
        padding: '13px 0'
      }
    }
  },
}));

export default addSocialDialogStyles;
