/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

export default function themePalette(theme) {
    return {
        common: {
            black: theme.colors?.darkPaper,
        },
        white: {
            light: theme.colors?.whiteLight,
            800: theme.colors?.white80
        },
        grey: {            
            dark: theme.colors?.darkGrey,
            50: theme.colors?.grey50,
            100: theme.colors?.grey100,
            200: theme.colors?.grey200,
            300: theme.colors?.grey300,
            400: theme.colors?.grey400,
            500: theme.darkTextSecondary,
            600: theme.heading,
            700: theme.darkTextPrimary,
            800: theme.colors?.grey800,
            900: theme.textDark
        },
        primary: {
            purple: theme.colors?.purple,
            light: theme.colors?.primaryLight,
            main: theme.colors?.primaryMain,
            dark: theme.colors?.primaryDark,
            200: theme.colors?.primary200,
            800: theme.colors?.primary800
        },
        secondary: {
            light: theme.colors?.secondaryLight,
            main: theme.colors?.secondaryMain,
            dark: theme.colors?.secondaryDark,
            200: theme.colors?.secondary200,
            800: theme.colors?.secondary800
        },
        error: {
            light: theme.colors?.errorLight,
            main: theme.colors?.errorMain,
            dark: theme.colors?.errorDark
        },
        orange: {
            light: theme.colors?.orangeLight,
            main: theme.colors?.orangeMain,
            dark: theme.colors?.orangeDark
        },
        yellow: {
            main: theme.colors?.yellowMain
        },
        warning: {
            light: theme.colors?.warningLight,
            main: theme.colors?.warningMain,
            dark: theme.colors?.warningDark
        },
        success: {
            light: theme.colors?.successLight,
            200: theme.colors?.success200,
            main: theme.colors?.successMain,
            dark: theme.colors?.successDark
        },        
        dark: {
            light: theme.colors?.darkTextPrimary,
            main: theme.colors?.darkLevel1,
            dark: theme.colors?.darkLevel2,
            800: theme.colors?.darkBackground,
            900: theme.colors?.darkPaper
        },
        blue: {
            main: theme.colors?.blueMain,
            600: theme.colors?.blue600
        },
        black: {
            main: theme.colors?.blackMain,
            800: theme.colors.black800
        },
        text: {
            primary: theme.darkTextPrimary,
            secondary: theme.darkTextSecondary,
            dark: theme.textDark,
            hint: theme.colors?.grey100
        },
        background: {
            paper: theme.paper,
            default: theme.backgroundDefault            
        },
        border: {
            grey008: theme.colors?.grey008,
            grey038: theme.colors?.grey038
        }
    };
}
