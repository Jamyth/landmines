import { Flex } from '@chakra-ui/react';
import React from 'react';
import type { SafeReactChild, SafeReactChildren } from 'type/component';

interface Props {
    children: SafeReactChildren;
    header?: SafeReactChild;
    footer?: SafeReactChild;
    onScroll?: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
}

export const Page = React.memo(({ header, children, onScroll, footer }: Props) => {
    return (
        <Flex flex={1} flexDirection="column" maxH="100vh" h="100vh" overflow="hidden">
            {header}
            <Flex flex={1} onScroll={onScroll} overflowX="hidden" overflowY="scroll" w="100%" flexFlow="column nowrap">
                {children}
            </Flex>
            {footer}
        </Flex>
    );
});
