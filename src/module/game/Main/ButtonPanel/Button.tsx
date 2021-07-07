import { Flex } from '@chakra-ui/layout';
import type { ColorProps } from '@chakra-ui/react';
import React from 'react';
import type { SafeReactChild } from 'type/component';

interface Props {
    children: SafeReactChild;
    active?: boolean;
    onClick?: () => void;
    color?: ColorProps['color'];
}

export const Button = React.memo(({ active = false, children, onClick, color }: Props) => {
    const borderLight = '3px solid #eee';
    const borderDark = '3px solid #666';

    const borderTopLeft = active ? borderDark : borderLight;
    const borderBottomRight = active ? borderLight : borderDark;

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            borderTop={borderTopLeft}
            borderLeft={borderTopLeft}
            borderRight={borderBottomRight}
            borderBottom={borderBottomRight}
            p={2}
            fontSize="lg"
            onClick={onClick}
            color={color}
        >
            {children}
        </Flex>
    );
});
