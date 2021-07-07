import React from 'react';
import { Footer as LayoutFooter } from 'component/Footer';

export const Footer = React.memo(() => {
    const borderTopLeft = '5px solid #666';
    const borderBottomRight = '5px solid #ddd';
    return (
        <LayoutFooter
            h="60px"
            backgroundColor="#bababa"
            borderTop={borderTopLeft}
            borderLeft={borderTopLeft}
            borderRight={borderBottomRight}
            borderBottom={borderBottomRight}
        >
            hi
        </LayoutFooter>
    );
});
