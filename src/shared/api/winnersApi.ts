import { IPaginationDataRequest, IWinnerData } from '../types/types';
import { makeApiCall } from './base';

export const getWinner = async (id: number): Promise<IWinnerData | Error> => {
    try {
        const data: IWinnerData | undefined = await makeApiCall({ url: `/garage/${id}`, method: 'GET' });
        if (!data) {
            throw new Error('Winner data not found');
        }
        return data;
    } catch (error) {
        console.error('Error fetching winner:', error);
        return error instanceof Error ? error : new Error('Failed to fetch winner');
    }
};

export const getWinners = async ({ page, limit }: IPaginationDataRequest): Promise<IWinnerData[]> => {
    let url = '/winners';

    if (page && limit) {
        url += `?_page=${page}&_limit=${limit}`;
    }

    try {
        const response: IWinnerData[] = await makeApiCall({
            url: url,
            method: 'GET',
        });

        if (Array.isArray(response)) {
            return response;
        } else {
            throw new Error('Failed to load winners');
        }
    } catch (error) {
        console.error('Error loading the winners list:', error);
        throw error;
    }
};

export const createWinner = async (data: IWinnerData): Promise<IWinnerData | Error> => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    try {
        const response: IWinnerData = await makeApiCall({
            url: '/winners',
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        });

        if (response?.id) {
            return response;
        } else {
            throw new Error('Failed to post winner data');
        }
    } catch (error) {
        console.error('Error creating winner:', error);
        throw error;
    }
};

export const deleteWinner = async (id: number): Promise<void> => {
    try {
        await makeApiCall({
            url: `/winners/${id}`,
            method: 'DELETE',
        });
    } catch (error) {
        console.error('Error deleting winner:', error);
        throw error; // Re-throw the error to propagate it to the caller
    }
};

export const updateWinner = async ({ id, wins, time }: IWinnerData): Promise<IWinnerData> => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return await makeApiCall({
        url: `/winners/${id}`,
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({ wins, time }),
    });
};
