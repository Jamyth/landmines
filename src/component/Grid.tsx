import { Flex } from '@chakra-ui/react';
import React from 'react';
import type { SafeReactChildren } from 'type/component';

interface Props<T> {
    source: T[][];
    size: number;
    children: (value: T, x: number, y: number) => SafeReactChildren;
    onClick: (x: number, y: number, e: React.MouseEvent<HTMLDivElement>) => void;
    scrollTop?: number;
}

export class Grid<T> extends React.PureComponent<Props<T>> {
    onGridClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const { size, onClick, scrollTop } = this.props;
        const x = Math.floor((e.clientX - e.currentTarget.offsetLeft - e.currentTarget.scrollLeft) / size);
        const y = Math.floor((e.clientY - e.currentTarget.offsetTop + (scrollTop ?? e.currentTarget.scrollTop)) / size);
        if (e.buttons === 0) {
            onClick(x, y, e);
        }
    };

    render() {
        const { source, children } = this.props;
        return (
            <Flex flexDirection="column" onClick={this.onGridClick}>
                {source.map((row, y) => (
                    // eslint-disable-next-line react/no-array-index-key -- only Array
                    <Flex key={`row-${y}`}>{row.map((value, x) => children(value, x, y))}</Flex>
                ))}
            </Flex>
        );
    }
}
