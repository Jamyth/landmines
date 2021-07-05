import type { Game } from 'type/Landmine';

class LandmineException extends Error {
    constructor(msg: string) {
        super(`[LandmineUtil]: ${msg}`);
    }
}

function init(size: number, landmines?: number): Game {
    const colSize = size === 8 ? 8 : 16;
    const scale = 0.15;
    const maxLandmines = (colSize - 1) * (size - 1);
    const threshold = maxLandmines * scale;
    const numOfLandmines = landmines ?? maxLandmines - Math.floor(Math.random() * threshold);
    const map: boolean[][] = [];

    for (let y = 0; y < size; y++) {
        const row: boolean[] = [];
        for (let x = 0; x < colSize; x++) {
            row.push(false);
        }
        map.push(row);
    }

    for (let i = 0; i < numOfLandmines; i++) {
        let placedMine = false;
        while (!placedMine) {
            const y = Math.floor(Math.random() * size);
            const x = Math.floor(Math.random() * colSize);

            const hasLandmine = map[y][x];
            if (!hasLandmine) {
                map[y][x] = true;
                placedMine = true;
            }
        }
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
