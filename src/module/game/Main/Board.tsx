import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useGameState } from '../hooks';
import { FaBomb } from 'react-icons/fa';

export const Board = React.memo(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- parent index.tsx checked
    const { size, map } = useGameState((state) => state.game!);
    const gridSize = (window.innerWidth - 30) / size - 2;

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const x = Math.floor((e.clientX - e.currentTarget.offsetLeft) / gridSize);
        const y = Math.floor((e.clientY - e.currentTarget.offsetTop) / gridSize);
        console.info(`${x}.${y}`);
    };

    return (
        <Flex flexDirection="column" onClick={onClick}>
            {map.map((row, y) => {
                return (
                    // eslint-disable-next-line react/no-array-index-key -- index
                    <Flex key={`row-${y}`}>
                        {row.map((mine, x) => {
                            return (
                                <Flex
                                    justifyContent="center"
                                    alignItems="center"
                                    // eslint-disable-next-line react/no-array-index-key -- index
                                    key={`${x}.${y}`}
                                    w={`${gridSize}px`}
                                    h={`${gridSize}px`}
                                    border="1px solid #333"
                                >
                                    {mine ? <FaBomb /> : null}
                                </Flex>
                            );
                        })}
                    </Flex>
                );
            })}
        </Flex>
    );
});
