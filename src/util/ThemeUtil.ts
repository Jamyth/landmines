import type { Theme } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

function getTheme(): Theme {
    return extendTheme({
        styles: {
            global: (props) => ({
                body: {
                    height: '100vh',
                    maxH: '100vh',
                    overflowY: 'hidden',
                    background: mode('gray.50', 'gray.800'),
                },
            }),
        },
    });
}

export const ThemeUtil = Object.freeze({
    getTheme,
});
