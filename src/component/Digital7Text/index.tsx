import React from 'react';
import type { BoxProps } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Digital7Font } from './Font';

interface Props extends Omit<BoxProps, 'fontFamily'> {}

export const Digital7Text = React.memo(({ children, ...rest }: Props) => {
    return (
        <React.Fragment>
            <Digital7Font />
            <Box fontFamily="digital-7" userSelect="none" {...rest}>
                {children}
            </Box>
        </React.Fragment>
    );
});
