import type { Game } from 'type/Landmine';
import { MarkerView } from 'type/Landmine';

function deepClone<T extends object>(object: T): T {
    const innerDeepClone = (innerObject: any, isInnerLevel: boolean = true): any => {
        if (innerObject === object && isInnerLevel) {
            throw new Error(`[util] Object contains some field referencing itself: ${JSON.stringify(object)}`);
        }

        // Primitive types: null / undefined / number / string / boolean / bigint / symbol / function
        // Because typeof null === "object", we have to judge this case first
        if (innerObject === null || typeof innerObject !== 'object') {
            return innerObject;
        }

        // The following order is important, because array/date are also instance-of Object
        if (innerObject instanceof Date) {
            return new Date(innerObject.getTime());
        }

        if (innerObject instanceof Array) {
            return innerObject.map((_) => innerDeepClone(_));
        }

        if (innerObject instanceof Object) {
            const newObject: any = {};
            // eslint-disable-next-line no-restricted-syntax --  that's what I want
            for (const attr in innerObject) {
                // eslint-disable-next-line no-prototype-builtins -- using for-in loop requires checking object.hasOwnProperty to exclude properties up from the prototype chain
                if (innerObject.hasOwnProperty(attr)) {
                    newObject[attr] = innerDeepClone(innerObject[attr]);
                }
            }
            return newObject;
        }

        return innerObject;
    };

    return innerDeepClone(object, false);
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
        revealed: [],
        status: 'running',
    };
}

function getRandomCoordinate(size: number): [number, number] {
    const colSize = size === 8 ? 8 : 16;
    return [Math.floor(Math.random() * colSize), Math.floor(Math.random() * size)];
}

function hasMine(game: Game, x: number, y: number) {
    return game.map[y][x] === true;
}

function reveal(game: Game, x: number, y: number): Game {
    const id = `${x}.${y}`;
    const cloned = deepClone(game);
    const { revealed, map, size, markers, landmines } = cloned;
    const isMine = hasMine(cloned, x, y);
    const isInitialClick = revealed.length === 0;
    const hasMarker = markers[id];

    if (hasMarker === MarkerView.HAS_MARKER) {
        return cloned;
    }

    if (revealed.includes(id)) {
        return cloned;
    }

    revealed.push(id);

    if (isMine && isInitialClick) {
        let replaced = false;
        map[y][x] = false;
        while (!replaced) {
            const [newX, newY] = getRandomCoordinate(size);
            if (!hasMine(cloned, newX, newY)) {
                map[newY][newX] = true;
                replaced = true;
            }
        }
        // return cloned;
    }

    if (isMine && !isInitialClick) {
        cloned.status = 'game-over';
        const allMineLocations = getAllMinesCoordinate(cloned);
        return allMineLocations.reduce((game, [_x, _y]) => reveal(game, _x, _y), cloned);
    }

    if (revealed.length + landmines === map.reduce((acc, curr) => acc + curr.length, 0)) {
        cloned.status = 'victory';
        return cloned;
    }

    const numberOfNearbyMines = getNumberOfNearbyMine(cloned, x, y);

    if (numberOfNearbyMines === 0) {
        const revealable = getSurroundingCoordinate(cloned, x, y);
        return revealable.reduce((game, [x, y]) => reveal(game, x, y), cloned);
    }

    return cloned;
}

function placeMarker(game: Game, x: number, y: number, marker: MarkerView | null): Game {
    const id = `${x}.${y}`;
    const cloned = deepClone(game);
    if (!marker) {
        delete cloned.markers[id];
    } else {
        cloned.markers[id] = marker;
    }

    return cloned;
}

function getNumberOfNearbyMine(game: Game, locationX: number, locationY: number) {
    const result: boolean[] = [];
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if (y === 1 && x === 1) {
                continue;
            }
            try {
                const isMine = hasMine(game, locationX + x - 1, locationY + y - 1);
                if (isMine) {
                    result.push(true);
                } else {
                    result.push(false);
                }
            } catch (error) {
                result.push(false);
            }
        }
    }
    return result.filter(Boolean).length;
}

function getSurroundingCoordinate(game: Game, locationX: number, locationY: number) {
    const result: [number, number][] = [];

    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if (x === 1 && y === 1) {
                continue;
            }
            const _x = locationX + x - 1;
            const _y = locationY + y - 1;
            const isValid = game.map[_y]?.[_x];
            if (typeof isValid === 'boolean') {
                result.push([_x, _y]);
            }
        }
    }

    return result;
}

function getAllMinesCoordinate(game: Game) {
    const result: [number, number][] = [];
    game.map.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell === true) {
                result.push([x, y]);
            }
        });
    });
    return result;
}

export const LandmineUtil = Object.freeze({
    init,
    reveal,
    placeMarker,
    getNumberOfNearbyMine,
});
