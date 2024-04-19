import { makeApiCall } from './base';
import { ICarParams, ICreateCarResponse } from '../types/types';

export const getCars = async (): Promise<ICreateCarResponse[]> => {
    try {
        const response: ICreateCarResponse[] = await makeApiCall({
            url: '/garage',
            method: 'GET',
        });

        if (Array.isArray(response)) {
            return response;
        } else {
            throw new Error('Failed to load the car list');
        }
    } catch (error) {
        console.error('Error loading the car list:', error);
        throw error;
    }
};

// TODO: implement getCar function

// export const getCar = () => {
//     makeApiCall({ url: '/garage', method: 'GET' });
// };

export const createCar = async (data: ICarParams): Promise<ICreateCarResponse> => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    try {
        const response: ICreateCarResponse = await makeApiCall({
            url: '/garage',
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        });

        if (response?.id) {
            return response;
        } else {
            throw new Error('Failed to create car');
        }
    } catch (error) {
        console.error('Error creating car:', error);
        throw error;
    }
};

//  TODO: Implment updateCar function

// export const updateCar = (id: number, data: ICarParams) => {
//     const headers = new Headers();
//     headers.append('Content-Type', 'application/json');

//     makeApiCall({
//         url: `/garage:${id}`,
//         method: 'PUT',
//         headers: headers,
//         data: data,
//     });
// };

//  TODO: Implment deleteCar function

// export const deleteCar = (id: number) => {
//     makeApiCall({
//         url: `/garage:${id}`,
//         method: 'DELETE',
//     });
// };
