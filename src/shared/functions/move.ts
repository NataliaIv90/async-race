import { IToggleEngineData, switchEngineToDriveMode, toggleEngine } from '../api/engineApi';
import { createAnimationFunction } from './animation';

interface IMoveProps {
    id: number;
    duration: number;
}

export const toggleEngineOnAndMove = async (id: number): Promise<{ id: number; time: number } | null> => {
    let result: { id: number; time: number } | null = null;
    const data: IToggleEngineData = await toggleEngine(id, 'started');
    if (typeof data.duration === 'number') {
        createAnimationFunction(`#car-item-${id} .car-icon-container`, 5);
        const moveResult = await move({ id: id, duration: data.duration });
        if (moveResult) {
            result = { id: moveResult.id, time: moveResult.duration };
        }
    }
    return result;
};

export const move = async ({ id, duration }: IMoveProps): Promise<IMoveProps | null> => {
    // const carIcon = document.querySelector(`#car-item-${id}`)?.querySelector('.car-icon-container') as HTMLElement;
    const response = await switchEngineToDriveMode(id);

    if (response.brokenEngine) {
        // carIcon.style.animationPlayState = 'paused';
        console.log(`car with id ${id}: 'Engine is broken!!!'`);
        return null;
    }
    return { id: id, duration: duration };
};
