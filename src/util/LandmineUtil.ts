import { Game, MarkerView } from 'type/Landmine';

class LandmineException extends Error {
    constructor(msg: string) {
        super(`[LandmineUtil]: ${msg}`);
    }
}

function deepClone<T extends object>(object: T): T {
    const innerDeepClone = (innerObject: any, isInnerLevel: boolean = true): any => {
        if (innerObject === object && isInnerLevel) {
            throw new Error(`[util] Object contains some field referencing itself: ${JSON.stringify(object)}`);
        }

        // Primitive types: null / undefined / number / string / boolean / bigint / symbol / function
        // Because typeof null === "object", we have to judge this case first
        if (null == innerObject || 'object' !== typeof innerObject) {
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
    const { revealed, map, size, markers } = cloned;
    const isMine = hasMine(cloned, x, y);
    const isInitialClick = revealed.length === 0;
    const hasMarker = markers[id] ?? MarkerView.NULL;

    if (hasMarker === MarkerView.HAS_MARKER) {
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
        return cloned;
    }

    if (isMine) {
        cloned.status = 'game-over';
    }

    return cloned;
}

function placeMarker(game: Game, x: number, y: number): Game {
    const id = `${x}.${y}`;
    const cloned = deepClone(game);
    const marker = cloned.markers[id] ?? MarkerView.NULL;
    switch (marker) {
        case MarkerView.HAS_MARKER:
            cloned.markers[id] = MarkerView.UNCERTAIN;
            break;
        case MarkerView.UNCERTAIN:
            cloned.markers[id] = MarkerView.NULL;
            break;
        case MarkerView.NULL:
            cloned.markers[id] = MarkerView.HAS_MARKER;
            break;
    }

    return cloned;
}

function getNumberOfNearbyMine(game: Game, locationX: number, locationY: number) {
    const result: Boolean[] = [];
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

export const LandmineUtil = Object.freeze({
    init,
    reveal,
    placeMarker,
    getNumberOfNearbyMine,
});
