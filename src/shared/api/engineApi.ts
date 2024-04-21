import { makeApiCall } from './base';

export interface IEngineStatusResponse {
    velocity: number;
    distance: number;
}

export interface IToggleEngineData extends IEngineStatusResponse {
    duration: number;
}

export const toggleEngine = async (id: number, status: 'started' | 'stopped'): Promise<IToggleEngineData> => {
    try {
        const response: IEngineStatusResponse = await makeApiCall({
            url: `/engine/?id=${id}&status=${status}`,
            method: 'PATCH',
        });
        const time = Number((response.distance / 1000 / response.velocity).toFixed(2));
        return {
            distance: response.distance,
            velocity: response.velocity,
            duration: time,
        };
    } catch (error) {
        console.error(`Error ${status === 'started' ? 'starting' : 'stopping'} engine for car ${id}:`, error);
        throw error;
    }
};

export const switchEngineToDriveMode = async (id: number): Promise<{ success: boolean; brokenEngine?: boolean }> => {
    let brokenEngine = false;
    try {
        const response: { success: boolean } = await makeApiCall({
            url: `/engine/?id=${id}&status=drive`,
            method: 'PATCH',
        });
        return response;
    } catch (error) {
        if (typeof error === 'object' && error instanceof Error) {
            if (error.message === "Car has been stopped suddenly. It's engine was broken down.") {
                console.error('Engine breakdown error:', error.message);
                brokenEngine = true;
            } else {
                console.error(`Error switching engine to drive mode for car ${id}:`, error.message);
            }
        } else {
            console.error('Unknown error occurred:', error);
        }
        return { success: false, brokenEngine: brokenEngine };
    }
};
