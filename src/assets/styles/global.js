import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    }

    body {
    font-family: 'Roboto', sans-serif;
    background: url("https://i.pinimg.com/originals/5b/f5/6e/5bf56e6309c48ea454690462b1e86f8f.jpg") center / cover no-repeat fixed;
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
