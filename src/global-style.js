import {createGlobalStyle} from 'styled-components';
import RalewayRegular from './assets/fonts/Inter-Regular.ttf';
import InterRegular from './assets/fonts/Inter-Regular.ttf';
import NunitoSans from './assets/fonts/NunitoSans-Regular.ttf';

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
    margin: 0;
  }

  input {
    border: 1px solid #0D316D;
    border-radius: 10px;
    outline: 0;
    outline-offset: 0;
    padding: 12px 20px;
    height: 50px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
  }

  textarea {
    border: 1px solid #0D316D;
    border-radius: 10px;
    outline: 0;
    outline-offset: 0;
    padding: 12px 20px;
    height: 50px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
  }


  * {
    box-sizing: border-box;
    text-decoration: none;
  }

`;