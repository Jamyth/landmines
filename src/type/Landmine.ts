export interface Game {
    status: GameStatus;
    size: number;
    landmines: number;
    map: boolean[][];
    markers: Record<string, MarkerView>;
    revealed: string[];
}

export type GameStatus = 'victory' | 'game-over' | 'running';

export enum MarkerView {
    HAS_MARKER = 'HAS_MARKER',
    UNCERTAIN = 'UNCERTAIN',
}
