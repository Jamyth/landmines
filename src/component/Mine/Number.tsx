import React from 'react';
import { Digital7Text } from 'component/Digital7Text';
import type { BaseProps } from '../Mine';
import { Mine } from '../Mine';

interface Props extends BaseProps {
    value: number;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
}

export const Number = React.memo(({ size, value, onMouseDown, onMouseUp }: Props) => {
    const getSeverityColor = () => {
        switch (value) {
            case 1:
                return 'green.700';
            case 2:
                return 'yellow.600';
            case 3:
                return 'orange.500';
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                return 'red.600';
            default:
                return 'black';
        }
    };

    if (value === 0) {
        return <Mine size={size} revealed />;
    }
    return (
        <Mine size={size} fontSize={size / 1.5} revealed onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
            <Digital7Text color={getSeverityColor()}>{value}</Digital7Text>
        </Mine>
    );
});
