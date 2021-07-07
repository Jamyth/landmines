import React from 'react';
import { Page } from 'component/Page';
import { Board } from './Board';
import { Flex } from '@chakra-ui/react';
import { useGameState } from '../hooks';
import { GamePanel } from './GamePanel';

export const Main = React.memo(() => {
    const game = useGameState((state) => state.game);
    const [scrollTop, setScrollTop] = React.useState(0);

    const onScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        setScrollTop(e.currentTarget.scrollTop);
    };

    return (
        <Page onScroll={onScroll}>
            {game ? (
                <Flex
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p="15px"
                    background="linear-gradient(-45deg, #eee, #70706f, #eee 60%, #70706f)"
                >
                    <GamePanel />
                    <Board scrollTop={scrollTop} />
                </Flex>
            ) : null}
        </Page>
    );
});
