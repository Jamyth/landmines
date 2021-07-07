import type { BoxProps } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import React from 'react';
import type { SafeReactChildren } from 'type/component';

interface Props extends Omit<BoxProps, 'alignItems' | 'w' | 'p' | 'px' | 'py' | 'pt' | 'pb' | 'pl' | 'pr'> {
    children: SafeReactChildren;
}

export const Footer = React.memo(({ children, ...rest }: Props) => {
    return (
        <Flex alignItems="center" w="100%" py="10px" px="15px" {...rest}>
            {children}
        </Flex>
    );
});
