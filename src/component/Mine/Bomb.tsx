import React from 'react';
import type { BaseProps } from '../Mine';
import { Mine } from '../Mine';
import { FaBomb } from 'react-icons/fa';

export const Bomb = React.memo(({ size }: BaseProps) => {
    return (
        <Mine size={size} revealed>
            <FaBomb />
        </Mine>
    );
});
