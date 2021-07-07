import { ConcaveFlex } from 'component/ConcaveFlex';
import React from 'react';
import { IoIosFlag } from 'react-icons/io';
import { FaQuestion, FaTrash } from 'react-icons/fa';
import { Button } from './Button';
import { Box } from '@chakra-ui/react';
import { useGameAction } from 'module/game';
import { useGameState } from '../../hooks';
import { MarkerView } from 'type/Landmine';

export const ButtonPanel = React.memo(() => {
    const marker = useGameState((state) => state.selectedMarker);
    const { selectMarker } = useGameAction();
    return (
        <ConcaveFlex w="100%" alignItems="center" justifyContent="center" p={2}>
            <Button
                color="red.600"
                active={marker === MarkerView.HAS_MARKER}
                onClick={() => selectMarker(MarkerView.HAS_MARKER)}
            >
                <IoIosFlag />
            </Button>
            <Box ml={2} />
            <Button
                color="blue.600"
                active={marker === MarkerView.UNCERTAIN}
                onClick={() => selectMarker(MarkerView.UNCERTAIN)}
            >
                <FaQuestion />
            </Button>
            <Box ml={2} />
            <Button color="gray.600" active={marker === 'REMOVE'} onClick={() => selectMarker('REMOVE')}>
                <FaTrash />
            </Button>
        </ConcaveFlex>
    );
});
