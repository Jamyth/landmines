import Recoil from 'recoil';
import { injectLifeCycle, useCoilState } from 'coil-react';
import { Main } from './Main';
import type { RouteParam, State } from './type';
import { LandmineUtil } from 'util/LandmineUtil';
import type { Game } from 'type/Landmine';

const initialState: State = {
    game: null,
    level: null,
    openedBox: null,
};

export const GameState = Recoil.atom({
    key: 'GameState',
    default: initialState,
});

export const useGameAction = () => {
    const { getState, setState } = useCoilState(GameState);

    const onRouteMatched = (routeParam: RouteParam) => {
        const level = routeParam.level;
        if (getState().game || level === 'custom') {
            setState((state) => (state.level = level));
            return;
        }
        let game: Game;
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
            state.openedBox = {};
            state.game = game;
        });
    };

    const startGame = (size: number) => {
        if (getState().game) {
            return;
        }
        setState((state) => (state.game = LandmineUtil.init(size)));
    };

    const sweep = (x: number, y: number) => {
        const game = getState().game;
        if (game) {
            const newGame = LandmineUtil.reveal(game, x, y);
            setState((state) => (state.game = newGame));
        }
    };

    return {
        startGame,
        onRouteMatched,
        sweep,
    };
};

export const MainComponent = injectLifeCycle<any, any>(Main, useGameAction);
