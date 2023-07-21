import { Theme } from "@mui/system";

const sidebarStyles = ((theme: Theme) => ({
  sidebarContents: {
    backgroundColor: theme.palette.common.black,
    width: '150px',
    padding: '20px 0 52px',
    minHeight: "100vh",
    height: 'auto',    
    '& .logo': {
      color: theme.palette.white.light,
      '& .line-bar': {
        marginRight: '18px',
        borderWidth: '3px',
        height: '52px',
        backgroundColor: "#fff"
      },
      '& p': {
        fontSize: '29px'
      }
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  menuItem: {
    marginBottom: '26.4px',
    '& .MuiButtonBase-root': {
      width: '68px',
      height: '68px',
      backgroundColor: theme.palette.grey.dark,
      '&:hover': {
        backgroundColor: 'rgba(112, 112, 112, 0.6)'
      }
    },
    '& .MuiLink-root': {
      textTransform: 'none',
      color: theme.palette.white[800],
      marginTop: '10.6px',
      cursor: 'pointer'
    }
  },
  activedMenu: {
    '& .MuiButtonBase-root': {
      backgroundColor: `${theme.palette.primary.purple} !important`,
      boxShadow: '0 0 20px #A854F5'
    },
    '& .MuiLink-root': {
      color: theme.palette.white.light,
    }
  },
  bottomLink: {
    marginBottom: '24px'
  },
  avatarItem: {
    '& .MuiButtonBase-root': {
      width: '60px',
      height: '60px',
      padding: '0'
    },
  },
  bottomBox: {
    paddingTop: '164px'
  }
}))

export default sidebarStyles;
