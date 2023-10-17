import { createTheme } from '@mui/material';
import { BackgroudIconGradient } from './themeTypes';
import '../../index.css';
import { typography } from './themeOptions/typography';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    bg: PaletteColor;
    bgSecond: PaletteColor;
    bgTitle: PaletteColor;
    bgGradient: PaletteColor;
    bgGradientSecond: PaletteColor;
    bgTextGradient: PaletteColor;
    bgIconGradient: BackgroudIconGradient;
    bgProfiles: PaletteColor;
    subtle: PaletteColor;
    borders: PaletteColor;
    occupiedIcon: PaletteColor;
    freeIcon: PaletteColor;
    sharedIcon: PaletteColor;
    conferenceIcon: PaletteColor;
    occupiedPlace: PaletteColor;
    freePlace: PaletteColor;
    reservedPlace: PaletteColor;
    sharedPlace: PaletteColor;
    conferencePlace: PaletteColor;

    [index: string]: PaletteColor;
  }

  interface PaletteOptions {
    bg?: PaletteColorOptions;
    bgSecond?: PaletteColorOptions;
    bgTitle?: PaletteColorOptions;
    bgGradient?: PaletteColorOptions;
    bgGradientSecond?: PaletteColorOptions;
    bgTextGradient?: PaletteColorOptions;
    bgIconGradient?: BackgroudIconGradient;
    bgProfiles?: PaletteColorOptions;
    subtle?: PaletteColorOptions;
    borders?: PaletteColorOptions;
    occupiedIcon?: PaletteColorOptions;
    freeIcon?: PaletteColorOptions;
    sharedIcon?: PaletteColorOptions;
    conferenceIcon?: PaletteColorOptions;
    occupiedPlace?: PaletteColorOptions;
    freePlace?: PaletteColorOptions;
    reservedPlace?: PaletteColorOptions;
    sharedPlace?: PaletteColorOptions;
    conferencePlace?: PaletteColorOptions;
  }
}

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    sidebarWidth: number;
    sidebarMobileHeight: number;
    brand: string;
    footerHeight: number;
    mobileTopBarHeight: number;
    mobileFooterHeight: number;
    sidebarMobilePadding: number;
    participantBorderWidth: number;
    rightDrawerWidth: number;
    galleryViewBackgroundColor: string;
  }
}

const PRIMARY = {
  main: '#000000',
  light: '#ffffff',
  contrastText: '#707893',
};
const SECONDARY = {
  main: '#E5427D',
  contrastText: 'white',
  light: '#465586',
  dark: '#1C274C',
};
const BACKGROUND = {
  main: '#F6F8FC',
  dark: '#25325D',
  light: '#3D496F',
};
const SECOND_BACKGROUND = {
  main: 'white',
  dark: '#1C274C',
  light: '#2C3C71',
};
const BACKGROUND_FOR_TITLE = {
  main: '#F6F6F6',
  dark: '#343434',
};
const BACKGROUND_PROFILE_PHOTO = {
  main: '#EFEFEF',
};
const SUBTLE = {
  main: '#E5427D',
  dark: '#767676',
};
const BORDERS_LINES = {
  main: '#3D496F',
  outline: '#F59E93',
  disabledOutline: '#FACFC9',
};
const ERROR = {
  main: '#d32f2f',
  light: '#ef5350',
  dark: '#c62828',
  contrastText: '#fff',
};

const BACKGROUND_GRADIENT = {
  main: 'linear-gradient(90deg, rgb(229, 66, 125), rgb(159, 74, 225))',
  dark: '#7642E5',
  light: 'linear-gradient(90deg, #30D664 0%, #2EC4CE 100%)',
};

const SECOND_BACKGROUND_GRADIENT = {
  main: 'linear-gradient(90deg, rgba(229, 66, 125, 0.20) 0%, rgba(159, 74, 225, 0.20) 103.91%)',
};

const BORDER_GRADIENT = {
  border:
    'linear-gradient(#25325D, #25325D) padding-box, linear-gradient(90deg, #E5427D, #9F4AE1) border-box',
  main: 'linear-gradient(90deg, #E5427D, #9F4AE1) padding-box, linear-gradient(90deg, #E5427D, #9F4AE1) border-box',
};

const BACKGROUND_TEXT_GRADIENT = {
  main: 'linear-gradient(90deg, #30D664 0%, #2EC4CE 100%)',
  dark: 'linear-gradient(90deg, #E5427D 0%, #9F4AE1 100%)',
};

const GRADIENT_FOR_ICONS = {
  main: ['#30D664', '#2EC4CE'] as [string, string],
  dark: ['#E5427D', '#E5427D'] as [string, string],
};

export const theme = createTheme({
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          borderRadius: '40px',
          background: '#25325D',
          padding: '11px 18px',
          textTransform: 'none',
          ':hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          boxShadow: 'none',
          background:
            'linear-gradient(90deg, var(--ButtonGradientColor1) 0%, var(--ButtonGradientColor2) 100%) border-box',
          transition: '--ButtonGradientColor1 0.3s ease, --ButtonGradientColor2 0.3s ease',
          ':hover': {
            '--ButtonGradientColor1': 'rgb(197, 57, 108)',
            '--ButtonGradientColor2': 'rgb(128, 59, 181)',
          },
          ':disabled': {
            color: '#A4A4A4',
            background: '#F3F3F3',
            border: '1px solid #E0E0E0',
          },
        },
        outlined: {
          boxShadow: 'none',
          border: '2px solid transparent',
          boxSizing: 'border-box',
          background: BORDER_GRADIENT.border,
          ':hover': {
            border: '2px solid transparent',
            background: 'rgb(28 39 76 / 71%)',
          },
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: '#25325D',
          transform: 'scale(1, 1)',
        },
        rounded: {
          borderRadius: '1.5rem',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: '40px',
          background: '#2C3C71',
          borderColor: 'transparent',
          color: '#707893',
          padding: '10px',
          textTransform: 'capitalize',
          '&.Mui-selected': {
            color: '#ffffff !important',
            background:
              'linear-gradient(90deg, var(--ButtonGradientColor1) 0%, var(--ButtonGradientColor2) 100%) border-box',
          },
        },
      },
    },
  },
});
