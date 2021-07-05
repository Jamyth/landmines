import React from 'react';
import { Page } from 'component/Page';
import { Board } from './Board';
import { Flex } from '@chakra-ui/react';
import { useGameState } from '../hooks';

export const Main = React.memo(() => {
    const game = useGameState((state) => state.game);
    return (
        <Page>
            {game ? (
                <Flex flex={1} justifyContent="center" alignItems="center" px="15px">
                    <Board />
                </Flex>
            ) : null}
        </Page>
    );
});
