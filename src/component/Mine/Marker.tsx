import React from 'react';
import type { BaseProps } from '../Mine';
import { Mine } from '../Mine';
import { MarkerView } from 'type/Landmine';
import { IoIosFlag } from 'react-icons/io';
import { FaQuestion } from 'react-icons/fa';
import { Box } from '@chakra-ui/react';

interface Props extends BaseProps {
    type: MarkerView;
}

export const Marker = React.memo(({ size, type }: Props) => {
    const color = type === MarkerView.HAS_MARKER ? 'red.600' : type === MarkerView.UNCERTAIN ? 'blue.600' : undefined;
    return (
        <Mine size={size}>
            <Box color={color}>
                {type === MarkerView.HAS_MARKER ? <IoIosFlag /> : type === MarkerView.UNCERTAIN ? <FaQuestion /> : null}
            </Box>
        </Mine>
    );
});
