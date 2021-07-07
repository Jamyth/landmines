import React from 'react';
import type { BaseProps } from '../Mine';
import { Mine } from '../Mine';
import { MarkerView } from 'type/Landmine';
import { IoIosFlag } from 'react-icons/io';
import { FaQuestion } from 'react-icons/fa';

interface Props extends BaseProps {
    type: MarkerView;
}

export const Marker = React.memo(({ size, type }: Props) => {
    return (
        <Mine size={size}>
            {type === MarkerView.HAS_MARKER ? <IoIosFlag /> : type === MarkerView.UNCERTAIN ? <FaQuestion /> : null}
        </Mine>
    );
});
