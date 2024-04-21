import { IToggleEngineData, switchEngineToDriveMode, toggleEngine } from '../api/engineApi';

interface IMoveProps {
    id: number;
    duration: number;
}

export const toggleEngineOnAndMove = async (id: number): Promise<{ id: number; time: number } | null> => {
    let result: { id: number; time: number } | null = null;
    const data: IToggleEngineData = await toggleEngine(id, 'started');
    if (typeof data.duration === 'number') {
        console.log(typeof data.duration);
        const moveResult = await move({ id: id, duration: data.duration });
        if (moveResult) {
            result = { id: moveResult.id, time: moveResult.duration };
        }
    }
    return result;
};

export const move = async ({ id, duration }: IMoveProps): Promise<IMoveProps | null> => {
    const response = await switchEngineToDriveMode(id);
    if (response.brokenEngine) {
        console.log(`car with id ${id}: 'Engine is broken!!!'`);

        console.log(id, 0);
        return null;
    }
    console.log(id, duration);
    return { id: id, duration: duration };
};
