import { makeApiCall } from './base';

interface IEngineStatusResponse {
    velocity: number;
    distance: number;
}

export const toggleEngine = async (id: number, status: 'started' | 'stopped'): Promise<IEngineStatusResponse> => {
    try {
        const response: IEngineStatusResponse = await makeApiCall({
            url: `/engine/?id=${id}&status=${status}`,
            method: 'PATCH',
        });

        return response;
    } catch (error) {
        console.error(`Error ${status === 'started' ? 'starting' : 'stopping'} engine for car ${id}:`, error);
        throw error;
    }
};

export const switchEngineToDriveMode = async (id: number): Promise<{ success: boolean }> => {
    try {
        const response: { success: boolean } = await makeApiCall({
            url: `/engine/?id=${id}&status=drive`,
            method: 'PATCH',
        });

        return response;
    } catch (error) {
        console.error(`Error switching engine to drive mode for car ${id}:`, error);
        throw error;
    }
};
