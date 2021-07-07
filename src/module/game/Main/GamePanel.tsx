import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Timer } from 'component/Timer';
import { useGameState } from '../hooks';
import { IoIosTimer } from 'react-icons/io';
import { FaBomb } from 'react-icons/fa';
import { Digital7Text } from 'component/Digital7Text';

export const GamePanel = React.memo(() => {
    const landmines = useGameState((state) => state.game?.landmines);
    const revealed = useGameState((state) => state.game?.revealed);

    return (
        <Flex alignItems="center" w="100%" justifyContent="space-between" mb={2}>
            <Flex alignItems="center" pl={2} backgroundColor="gray.800" color="red.600">
                <FaBomb fontSize="20px" />
                <Digital7Text fontWeight="bold" fontSize="2em" px={2}>
                    {landmines}
                </Digital7Text>
            </Flex>
            <Flex alignItems="center" pl={2} backgroundColor="gray.800" color="red.600">
                <IoIosTimer fontSize="20px" />
                <Timer startCount={revealed?.length !== 0} />
            </Flex>
        </Flex>
    );
});
