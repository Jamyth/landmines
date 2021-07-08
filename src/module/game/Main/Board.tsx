import React from 'react';
import { useGameState } from '../hooks';
import { Grid } from 'component/Grid';
import { Mine } from 'component/Mine';
import { LandmineUtil } from 'util/LandmineUtil';
import { useGameAction } from '../index';
import { ConcaveFlex } from 'component/ConcaveFlex';
import { keyframes, usePrefersReducedMotion } from '@chakra-ui/react';

interface Props {
    scrollTop: number;
}

const shake = keyframes`
2% {
    transform: translate(7px, -4px) rotate(
-.5deg
);
}

4% {
    transform: translate(3px, 7px) rotate(
2.5deg
);
}
6% {
    transform: translate(3px, 8px) rotate(
.5deg
);
}
8% {
    transform: translate(-7px, 4px) rotate(
1.5deg
);
}
10% {
    transform: translate(6px, 10px) rotate(
-.5deg
);
}
12% {
    transform: translate(4px, 2px) rotate(
-.5deg
);
}
14% {
    transform: translate(-4px, 6px) rotate(
3.5deg
);
}
16% {
    transform: translate(1px, 5px) rotate(
-1.5deg
);
}
18% {
    transform: translate(3px, -7px) rotate(
-2.5deg
);
}
20% {
    transform: translate(-8px, -7px) rotate(
.5deg
);
}
22% {
    transform: translate(3px, -2px) rotate(
-2.5deg
);
}
24% {
    transform: translate(5px, -4px) rotate(
1.5deg
);
}
26% {
    transform: translate(-6px, -4px) rotate(
-.5deg
);
}
28% {
    transform: translate(1px, 0px) rotate(
.5deg
);
}
30% {
    transform: translate(-9px, -3px) rotate(
3.5deg
);
}
32% {
    transform: translate(3px, 6px) rotate(
-1.5deg
);
}
34% {
    transform: translate(-2px, -3px) rotate(
-1.5deg
);
}
36% {
    transform: translate(9px, -3px) rotate(
-.5deg
);
}
38% {
    transform: translate(9px, -9px) rotate(
-1.5deg
);
}
40% {
    transform: translate(8px, -7px) rotate(
-2.5deg
);
}
42% {
    transform: translate(-8px, -2px) rotate(
2.5deg
);
}
44% {
    transform: translate(-7px, 2px) rotate(
-.5deg
);
}
46% {
    transform: translate(-1px, 4px) rotate(
3.5deg
);
}
48% {
    transform: translate(3px, 1px) rotate(
1.5deg
);
}
50% {
    transform: translate(9px, -1px) rotate(
2.5deg
);
}
52% {
    transform: translate(-1px, 5px) rotate(
-2.5deg
);
}
54% {
    transform: translate(9px, -2px) rotate(
.5deg
);
}
56% {
    transform: translate(5px, -4px) rotate(
-2.5deg
);
}
58% {
    transform: translate(5px, -8px) rotate(
-1.5deg
);
}
60% {
    transform: translate(10px, 4px) rotate(
1.5deg
);
}
62% {
    transform: translate(-8px, 1px) rotate(
-2.5deg
);
}
64% {
    transform: translate(-9px, 6px) rotate(
-1.5deg
);
}
66% {
    transform: translate(-3px, 2px) rotate(
.5deg
);
}
68% {
    transform: translate(10px, 4px) rotate(
.5deg
);
}
70% {
    transform: translate(3px, -4px) rotate(
-2.5deg
);
}
72% {
    transform: translate(-5px, 10px) rotate(
.5deg
);
}
74% {
    transform: translate(1px, -7px) rotate(
3.5deg
);
}
76% {
    transform: translate(8px, -3px) rotate(
-2.5deg
);
}
78% {
    transform: translate(-8px, 2px) rotate(
-.5deg
);
}
80% {
    transform: translate(2px, 7px) rotate(
-2.5deg
);
}
82% {
    transform: translate(6px, -4px) rotate(
1.5deg
);
}
84% {
    transform: translate(3px, 2px) rotate(
3.5deg
);
}
86% {
    transform: translate(0px, -5px) rotate(
-2.5deg
);
}
88% {
    transform: translate(1px, -3px) rotate(
2.5deg
);
}
90% {
    transform: translate(-8px, -9px) rotate(
2.5deg
);
}
92% {
    transform: translate(-2px, 3px) rotate(
2.5deg
);
}
94% {
    transform: translate(-6px, 0px) rotate(
-.5deg
);
}
96% {
    transform: translate(-9px, 8px) rotate(
1.5deg
);
}
98% {
    transform: translate(9px, 4px) rotate(
-1.5deg
);
}
0%, 100% {
    transform: translate(0, 0) rotate(0);
}
  `;

export const Board = React.memo(({ scrollTop }: Props) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- parent index.tsx checked
    const game = useGameState((state) => state.game!);
    const selectedMarker = useGameState((state) => state.selectedMarker);
    const { size, map, revealed, markers, status } = game;
    const gridSize = (window.innerWidth - 40) / (size === 8 ? 8 : 16);
    const { sweep, placeMarker } = useGameAction();
    const prefersReducedMotion = usePrefersReducedMotion();
    const shakeAnimation = status !== 'game-over' || prefersReducedMotion ? undefined : `${shake} 0.5s ease-in-out`;

    const onClick = (x: number, y: number, e: React.MouseEvent<HTMLDivElement>) => {
        if (selectedMarker !== null) {
            placeMarker(x, y);
        } else {
            sweep(x, y);
        }
    };

    return (
        <ConcaveFlex mb={2} animation={shakeAnimation}>
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
