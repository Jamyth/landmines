import React from 'react';
import { Global } from '@emotion/react';

export const Digital7Font = React.memo(() => {
    return (
        <Global
            styles={`
            /* latin */
            @font-face {
                font-family: 'digital-7';
                font-weight: 400;
                src: url(${require('./asset/digital-7.ttf')});
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            `}
        />
    );
});
