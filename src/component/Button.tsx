import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import type { ButtonProps } from '@chakra-ui/react';
import type { SafeReactChildren } from 'type/component';

interface Props extends ButtonProps {
    children: SafeReactChildren;
}

export const Button = React.memo(({ children, ...rest }: Props) => {
    const borderLight = '3px solid #eee';
    const borderDark = '3px solid #666';

    return (
        <ChakraButton
            {...rest}
            borderRadius={0}
            backgroundColor="#bababa"
            isFullWidth
            h="50px"
            borderTop={borderLight}
            borderLeft={borderLight}
            borderRight={borderDark}
            borderBottom={borderDark}
            _active={{
                borderTop: borderDark,
                borderLeft: borderDark,
                borderRight: borderLight,
                borderBottom: borderLight,
            }}
        >
            {children}
        </ChakraButton>
    );
});
