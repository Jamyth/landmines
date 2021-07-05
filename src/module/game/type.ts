import type { Game } from 'type/Landmine';

export interface State {
    game: Game | null;
    level: GameLevel | null;
    openedBox: Record<`${number}.${number}`, true> | null;
}

export interface RouteParam {
    level: GameLevel;
}

export type GameLevel = 'easy' | 'medium' | 'hard' | 'custom';
