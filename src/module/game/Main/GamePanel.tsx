import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Timer } from 'component/Timer';
import { useGameState } from '../hooks';
import { IoIosTimer } from 'react-icons/io';
import { FaBomb } from 'react-icons/fa';
import { Digital7Text } from 'component/Digital7Text';
import { ConcaveFlex } from 'component/ConcaveFlex';
import Recoil from 'recoil';
import { TimerState } from 'module/game';

export const GamePanel = React.memo(() => {
    const landmines = useGameState((state) => state.game?.landmines);
    const revealed = useGameState((state) => state.game?.revealed);
    const isRunning = useGameState((state) => state.game?.status === 'running');
    const [time, setTime] = Recoil.useRecoilState(TimerState);
    const numOfMarkers = useGameState((state) => Object.keys(state.game?.markers ?? {}).length);
    const startCount = (revealed?.length !== 0 || numOfMarkers !== 0) && isRunning;

    return (
        <ConcaveFlex p={2} alignItems="center" w="100%" justifyContent="space-between" mb={2}>
            <Flex alignItems="center" pl={2} backgroundColor="gray.800" color="red.600">
                <FaBomb fontSize="20px" />
                <Digital7Text fontWeight="bold" fontSize="2em" px={2}>
                    {landmines}
                </Digital7Text>
            </Flex>
            <Flex alignItems="center" pl={2} backgroundColor="gray.800" color="red.600">
                <IoIosTimer fontSize="20px" />
                <Timer value={time} setValue={setTime} startCount={startCount} />
            </Flex>
        </ConcaveFlex>
    );
});
