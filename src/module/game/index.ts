import Recoil from 'recoil';
import { injectLifeCycle, useCoilState } from 'coil-react';
import { Main } from './Main';
import type { RouteParam, State } from './type';
import { LandmineUtil } from 'util/LandmineUtil';
import type { Game } from 'type/Landmine';

const initialState: State = {
    game: null,
    level: null,
    selectedMarker: null,
};

export const TimerState = Recoil.atom({
    key: 'TimerState',
    default: 0,
});

export const GameState = Recoil.atom({
    key: 'GameState',
    default: initialState,
});

export const useGameAction = () => {
    const { getState, setState } = useCoilState(GameState);
    const setTime = Recoil.useSetRecoilState(TimerState);

    const restartGame = (level: string) => {
        let game: Game | null = null;
        switch (level) {
            case 'easy':
                game = LandmineUtil.init(8, 10);
                break;
            case 'medium':
                game = LandmineUtil.init(16, 40);
                break;
            case 'hard':
                game = LandmineUtil.init(30, 99);
                break;
        }
        setState((state) => {
            state.game = game;
        });
        setTime(0);
    };

    const onRouteMatched = (routeParam: RouteParam) => {
        const level = routeParam.level;
        if (level === getState().level || level === 'custom') {
            return;
        }
        setState((state) => (state.level = level));
        restartGame(level);
    };

    const sweep = (x: number, y: number) => {
        const game = getState().game;
        if (game) {
            const newGame = LandmineUtil.reveal(game, x, y);
            setState((state) => (state.game = newGame));
        }
    };

    const placeMarker = (x: number, y: number) => {
        const game = getState().game;
        const marker = getState().selectedMarker;
        if (game) {
            const newGame = LandmineUtil.placeMarker(game, x, y, marker === 'REMOVE' ? null : marker);
            setState((state) => {
                state.selectedMarker = null;
                state.game = newGame;
            });
        }
    };

    const selectMarker = (marker: Exclude<State['selectedMarker'], null>) => {
        const currentMarker = getState().selectedMarker;
        if (currentMarker === marker) {
            setState((state) => (state.selectedMarker = null));
        } else {
            setState((state) => (state.selectedMarker = marker));
        }
    };

    return {
        restartGame,
        onRouteMatched,
        sweep,
        selectMarker,
        placeMarker,
    };
};

export const MainComponent = injectLifeCycle<any, any>(Main, useGameAction);
