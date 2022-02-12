import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import rtlPlugin from 'stylis-plugin-rtl';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';


var rtl = true


let optCache = {
    key: 'muiltr',
    stylisPlugins: []
}
if (rtl) {
    // @ts-ignore
    optCache.stylisPlugins = [prefixer, rtlPlugin]
}


const cacheRtl = createCache(optCache);


const theme = createTheme({
    direction: rtl ? 'rtl' : 'ltr',
    palette: {
        mode: 'dark',
    },
});


ReactDOM.render(
    <React.StrictMode>
        <div dir={rtl ? 'rtl' : 'ltr'}>
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
            </CacheProvider>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
