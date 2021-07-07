import React from 'react';
import { useGameState } from '../hooks';
import { Grid } from 'component/Grid';
import { Mine } from 'component/Mine';
import { LandmineUtil } from 'util/LandmineUtil';
import { useGameAction } from '../index';
import { ConcaveFlex } from 'component/ConcaveFlex';

interface Props {
    scrollTop: number;
}

export const Board = React.memo(({ scrollTop }: Props) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- parent index.tsx checked
    const game = useGameState((state) => state.game!);
    const selectedMarker = useGameState((state) => state.selectedMarker);
    const { size, map, revealed, markers } = game;
    const gridSize = (window.innerWidth - 40) / (size === 8 ? 8 : 16);
    const { sweep, placeMarker } = useGameAction();

    const onClick = (x: number, y: number, e: React.MouseEvent<HTMLDivElement>) => {
        if (selectedMarker !== null) {
            placeMarker(x, y);
        } else {
            sweep(x, y);
        }
    };

    return (
        <ConcaveFlex mb={2}>
            <Grid source={map} onClick={onClick} size={gridSize} scrollTop={scrollTop}>
                {(isLandmine, x, y) => {
                    const key = `${x}.${y}`;
                    const isRevealed = revealed.includes(key);
                    const numberOfMine = LandmineUtil.getNumberOfNearbyMine(game, x, y);
                    const marker = markers[key];

                    if (isRevealed) {
                        if (isLandmine) {
                            return <Mine.Bomb key={key} size={gridSize} />;
                        }
                        return <Mine.Number key={key} size={gridSize} value={numberOfMine} />;
                    }

                    if (marker) {
                        return <Mine.Marker size={gridSize} key={key} type={marker} />;
                    }

                    return <Mine key={key} size={gridSize} />;
                }}
            </Grid>
        </ConcaveFlex>
    );
});
