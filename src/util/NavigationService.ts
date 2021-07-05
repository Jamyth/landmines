import type React from 'react';
import { async } from 'coil-react';

export type Path = '/lobby' | '/game/:level';

export const NavigationService: Record<Path, React.ComponentType> = {
    '/lobby': async(() => import('module/lobby'), 'MainComponent'),
    '/game/:level': async(() => import('module/game'), 'MainComponent'),
};
