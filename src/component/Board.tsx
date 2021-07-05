import { Flex } from '@chakra-ui/react';
import React from 'react';
import type { SafeReactChildren } from 'type/component';

interface Props<T> {
    source: T[][];
    size: number;
    children: (value: T, x: number, y: number) => SafeReactChildren;
    onClick: (x: number, y: number, e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Board = React.memo(<T extends any>({ source, children, onClick, size }: Props<T>) => {
    const onGridClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const x = Math.floor((e.clientX - e.currentTarget.offsetLeft - e.currentTarget.scrollLeft) / size);
        const y = Math.floor((e.clientY - e.currentTarget.offsetTop - e.currentTarget.scrollTop) / size);
        onClick(x, y, e);
    };

    return (
        <Flex flexDirection="column" onClick={onGridClick}>
            {source.map((row, y) => (
                // eslint-disable-next-line react/no-array-index-key -- only Array
                <Flex key={`row-${y}`}>
                    {row.map((value, x) => (
                        <Flex
                            // eslint-disable-next-line react/no-array-index-key -- only array
                            key={`${x}.${y}`}
                            justifyContent="center"
                            alignItems="center"
                            w={`${size}px`}
                            h={`${size}px`}
                        >
                            {children(value, x, y)}
                        </Flex>
                    ))}
                </Flex>
            ))}
        </Flex>
    );
});
