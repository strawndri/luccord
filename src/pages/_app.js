import React from 'react';
import GlobalStyle from '../styles/global';

const App = ({ Component, pageProps }) => {
    return ( 
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }

export default App;