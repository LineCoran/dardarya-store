import { TypographyOptions } from '@mui/material/styles/createTypography';
import { defaultTheme } from './defaultTheme';

const { xs, sm, md, lg, xl } = defaultTheme.breakpoints.values;
const { down } = defaultTheme.breakpoints;

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

export const typography: TypographyOptions = {
  fontFamily: "'Manrope', sans-serif;",
  htmlFontSize: 10,
  h1: {
    fontSize: '90px',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: '48px',
    fontWeight: 600,
    lineHeight: 1.2,
    [down(lg)]: {
      fontSize: '32px',
    },
    [down(sm)]: {
      fontSize: '24px',
    },
  },
  h3: {
    fontSize: '32px',
    lineHeight: 1.2,
    [down(lg)]: {
      fontSize: '24px',
    },
    [down(sm)]: {
      fontSize: '18px',
    },
  },
  subtitle1: {
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: 1.2,
    [down(lg)]: {
      fontSize: '20px',
    },
    [down(sm)]: {
      fontSize: '16px',
    },
  },
  subtitle2: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: 1.2,
    [down(lg)]: {
      fontSize: '18px',
    },
    [down(sm)]: {
      fontSize: '16px',
    },
  },
  body1: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.2,
    [down(sm)]: {
      fontSize: '12px',
    },
  },
  body2: {
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1.2,
    [down(sm)]: {
      fontSize: '14px',
    },
  },
  caption: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.2,
    [down(sm)]: {
      fontSize: '10px',
    },
  },
  button: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.2,
  },
};
