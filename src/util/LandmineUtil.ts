import type { Game } from 'type/Landmine';

class LandmineException extends Error {
    constructor(msg: string) {
        super(`[LandmineUtil]: ${msg}`);
    }
}

function init(size: number, landmines?: number): Game {
    if (size < 8 || size > 20) {
        throw new LandmineException('size should not be less than 8 or greater than 20');
    }
    const colSize = size === 8 ? 8 : 16;
    const scale = 0.15;
    const maxLandmines = (colSize - 1) * (size - 1);
    const threshold = maxLandmines * scale;
    const numOfLandmines = landmines ?? maxLandmines - Math.floor(Math.random() * threshold);
    const arrOfLandmines: true[] = [...new Array(numOfLandmines).fill(true)];
    const map: boolean[][] = [];
    for (let x = 0; x < colSize; x++) {
        const row: boolean[] = [];
        for (let y = 0; y < size; y++) {
            if (!arrOfLandmines.length) {
                row.push(false);
            } else {
                const hasMine = Math.random() <= 1 / arrOfLandmines.length;
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- arrOfLandmines is not empty
                row.push(hasMine ? arrOfLandmines.pop()! : false);
            }
        }
        map.push(row);
    }

    return {
        size,
        landmines: numOfLandmines,
        map,
        markers: {},
    };
}

export const LandmineUtil = Object.freeze({
    init,
});
