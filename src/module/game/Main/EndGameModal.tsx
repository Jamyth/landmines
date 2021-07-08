import React from 'react';
import { Modal } from 'component/Modal';
import type { GameStatus } from 'type/Landmine';
import { useGameAction } from 'module/game';
import { useGameState } from '../hooks';
import { TimeUtil } from 'util/TimeUtil';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Recoil from 'recoil';
import { TimerState } from 'module/game';
import { useHistory } from 'coil-react';

interface Props {
    status: Exclude<GameStatus, 'running'>;
}

function vibrate(status: Props['status']) {
    try {
        if (status === 'game-over') {
            window.navigator.vibrate(500);
        }
    } catch (error) {
        console.info('Vibration is not supported.');
    }
}

export const EndGameModal = React.memo(({ status }: Props) => {
    const time = Recoil.useRecoilValue(TimerState);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- game has begun
    const level = useGameState((state) => state.level!);
    const { restartGame } = useGameAction();
    const [hours, minutes, seconds] = TimeUtil.format(time);
    const isVictory = status === 'victory';
    const history = useHistory();
    const canToNextLevel = ['easy', 'medium'].includes(level);
    const [showModal, setShowModal] = React.useState(false);

    const goToNextLevel = () => {
        if (!canToNextLevel) {
            return;
        }
        let url = '/game';
        switch (level) {
            case 'easy':
                url = '/game/medium';
                break;
            case 'medium':
                url = '/game/hard';
        }
        history.push(url);
    };

    React.useEffect(() => {
        vibrate(status);
    }, [status]);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setShowModal(true);
        }, 500);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return showModal ? (
        <Modal
            title={isVictory ? 'Level Complete' : 'Game Over'}
            onAnimationEnd={() => setShowModal(false)}
            onClose={() => setShowModal(false)}
        >
            <Heading textAlign="center" mb={2} size="lg">
                {isVictory ? 'Congratulations' : 'Oops'}
            </Heading>
            <Text>{isVictory ? "You've found all the landmines !" : 'You just blown yourself into dust'}</Text>
            <Text mt={2}>
                Time:
                <Box ml={2} as="span" color="red.600">
                    {hours}:{minutes}:{seconds}
                </Box>
            </Text>
            <Flex mt={4} justifyContent="center">
                <Button backgroundColor="gray.500" color="white" onClick={() => restartGame(level)}>
                    Restart Game
                </Button>
                {isVictory && canToNextLevel && (
                    <Button ml={3} onClick={goToNextLevel} backgroundColor="gray.500" color="white">
                        Next Level
                    </Button>
                )}
            </Flex>
        </Modal>
    ) : (
        <Box position="fixed" top={0} left={0} h="100%" w="100%" onClick={() => setShowModal(true)} />
    );
});
