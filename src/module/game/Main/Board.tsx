import React from 'react';
import { useGameState } from '../hooks';
import { Grid } from 'component/Grid';
import { Box } from '@chakra-ui/react';
import { Mine } from 'component/Mine';
import { LandmineUtil } from 'util/LandmineUtil';
import { useGameAction } from '../index';

interface Props {
    scrollTop: number;
}

export const Board = React.memo(({ scrollTop }: Props) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- parent index.tsx checked
    const game = useGameState((state) => state.game!);
    const { size, map, revealed, markers } = game;
    const gridSize = (window.innerWidth - 30) / (size === 8 ? 8 : 16);
    const borderTopLeft = '5px solid #666';
    const borderBottomRight = '5px solid #ddd';
    const { sweep } = useGameAction();

    const onClick = (x: number, y: number, e: React.MouseEvent<HTMLDivElement>) => {
        sweep(x, y);
    };

    return (
        <Box
            backgroundColor="#bababa"
            borderTop={borderTopLeft}
            borderLeft={borderTopLeft}
            borderRight={borderBottomRight}
            borderBottom={borderBottomRight}
        >
            <Grid source={map} onClick={onClick} size={gridSize} scrollTop={scrollTop}>
                {(isLandmine, x, y) => {
                    const key = `${x}.${y}`;
                    const isRevealed = revealed.includes(key);
                    const numberOfMine = LandmineUtil.getNumberOfNearbyMine(game, x, y);
                    const marker = markers[key];

                    if (isLandmine) {
                        return <Mine.Bomb key={key} size={gridSize} />;
                    }

                    if (isRevealed) {
                        return <Mine.Number key={key} size={gridSize} value={numberOfMine} />;
                    }

                    if (marker) {
                        return <Mine.Marker size={gridSize} key={key} type={marker} />;
                    }

                    return <Mine key={key} size={gridSize} />;
                }}
            </Grid>
        </Box>
    );
});
