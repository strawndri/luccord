import { createGlobalStyle } from 'styled-components';
import background from '../../src/assets/background.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    list-style: none;
    }

    body {
    font-family: 'Roboto', sans-serif;
    background: url('${background}') center / cover no-repeat fixed;
    }

    html, body, #__next {
    min-height: 100vh;
    display: flex;
    flex: 1;
    }
    
    #__next {
    flex: 1;
    }

    #__next > * {
    flex: 1;
    }

    ::placeholder {
      color: #0009;
    }
`;
