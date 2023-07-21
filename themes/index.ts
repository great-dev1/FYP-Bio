import colors from 'assets/scss/_themes-vars.module.scss';

import themePalette from './palette';

const color = colors;

const themeOption = {
  colors: color,
  heading: color.grey900,
  paper: color.paper,
  backgroundDefault: color.paper,
  background: color.primaryLight,
  darkTextPrimary: color.grey700,
  darkTextSecondary: color.grey500,
  textDark: color.grey900,
  menuSelected: color.secondaryDark,
  menuSelectedBack: color.secondaryLight,
  divider: color.grey200
};

const themeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 660,
      md: 992,
      lg: 1300,
      xl: 1536,
    },
  },
  palette: themePalette(themeOption),
  typography: {
    fontFamily: 'Poppins'
  }
};

export default themeOptions;
