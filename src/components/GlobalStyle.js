import { createGlobalStyle } from 'styled-components';
import RalewayRegular from '../assets/fonts/Inter-Regular.ttf';
import InterRegular from '../assets/fonts/Inter-Regular.ttf';
import NunitoSans from '../assets/fonts/NunitoSans-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'NunitoSans';
    src: url(${NunitoSans}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  
  body {
    font-family: 'Raleway', sans-serif;
  }
`;