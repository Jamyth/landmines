export interface Game {
    size: number;
    landmines: number;
    map: boolean[][];
    markers: Record<`${number}.${number}`, MarkerView>;
}

export enum MarkerView {
    HAS_MARKER = 'HAS_MARKER',
    UNCERTAIN = 'UNCERTAIN',
    NULL = 'NULL',
}
