import { Flex } from '@chakra-ui/react';
import React from 'react';
import type { SafeReactChild } from 'type/component';
import { Bomb } from './Bomb';
import { Marker } from './Marker';
import { Number } from './Number';

export interface BaseProps {
    size: number;
}

interface Props extends BaseProps {
    fontSize?: number;
    revealed?: boolean;
    children?: SafeReactChild;
    highlighted?: boolean;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
}

export class Mine extends React.PureComponent<Props> {
    static Bomb = Bomb;
    static Marker = Marker;
    static Number = Number;

    private readonly revealedBorder = '1px solid #666';
    private readonly unRevealedBorderLight = '3px solid #eee';
    private readonly unRevealedBorderDark = '3px solid #666';

    override render() {
        const { size, children, revealed = false, fontSize, highlighted, onMouseDown, onMouseUp } = this.props;
        const borderTopLeft = revealed || highlighted === true ? this.revealedBorder : this.unRevealedBorderLight;
        const borderBottomRight = revealed || highlighted === true ? this.revealedBorder : this.unRevealedBorderDark;

        return (
            <Flex
                justifyContent="center"
                alignItems="center"
                w={`${size}px`}
                h={`${size}px`}
                borderTop={borderTopLeft}
                borderLeft={borderTopLeft}
                borderRight={borderBottomRight}
                borderBottom={borderBottomRight}
                fontSize={`${fontSize ? fontSize : size / 1.8}px`}
                onMouseDown={(e) => {
                    e.stopPropagation();
                    onMouseDown?.();
                }}
                onMouseUp={onMouseUp}
                onTouchStart={(e) => {
                    e.stopPropagation();
                    onMouseDown?.();
                }}
                onTouchEnd={onMouseUp}
            >
                {children}
            </Flex>
        );
    }
}
