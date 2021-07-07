import type { Game, MarkerView } from 'type/Landmine';

export interface State {
    game: Game | null;
    level: GameLevel | null;
    selectedMarker: MarkerView | 'REMOVE' | null;
}

export interface RouteParam {
    level: GameLevel;
}

export type GameLevel = 'easy' | 'medium' | 'hard' | 'custom';
