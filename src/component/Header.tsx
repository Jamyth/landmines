import { Flex } from '@chakra-ui/react';
import React from 'react';
import type { SafeReactChildren } from 'type/component';

interface Props {
    children: SafeReactChildren;
}

export const Header = React.memo(({ children }: Props) => {
    return (
        <Flex alignItems="center" fontSize="18px" p="15px" w="100%">
            {children}
        </Flex>
    );
});
