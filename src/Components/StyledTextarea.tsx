import styled from '@emotion/styled';
import { TextareaAutosize } from '@mui/material';
import { theme } from '../core/theme/theme';

export const StyledTextarea = styled(TextareaAutosize)(
  () => `
    width: 95%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
  
    ::-webkit-scrollbar {
      width: 0px;
      height: 0px;
      }
  `,
);
