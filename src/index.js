import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from "../../portfolio/src/styles/GlobalStyle";
import Typography from "../../portfolio/src/styles/Typography";


ReactDOM.render(
    <>
        <GlobalStyles/>
        <Typography/>
        <App/>
    </>,
    document.getElementById('root')
);