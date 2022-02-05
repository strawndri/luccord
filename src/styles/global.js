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

  *::-webkit-scrollbar {
    width: .8em;
    background-color: rgba(1, 1, 1, .3);
    border-radius: 30px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(1, 1, 1, .5);
    border-radius: 30px;
  }
  
  html, body, #__next {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
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
