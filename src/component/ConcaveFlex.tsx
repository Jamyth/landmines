import React from 'react';
import type { FlexProps } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import type { SafeReactChildren } from 'type/component';

interface Props extends FlexProps {
    children: SafeReactChildren;
}

export const ConcaveFlex = React.memo(({ children, ...rest }: Props) => {
    const borderTopLeft = '5px solid #666';
    const borderBottomRight = '5px solid #ddd';
    return (
        <Flex
            {...rest}
            backgroundColor="#bababa"
            borderTop={borderTopLeft}
            borderLeft={borderTopLeft}
            borderRight={borderBottomRight}
            borderBottom={borderBottomRight}
        >
            {children}
        </Flex>
    );
});
