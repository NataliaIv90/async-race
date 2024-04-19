import { makeApiCall } from './base';
import { ICarParams, ICreateCarResponse } from '../types/types';

// TODO: implement getCars function

// export const getCars = () => {};

// TODO: implement getCar function

// export const getCar = () => {
//     makeApiCall({ url: '/garage', method: 'GET' });
// };

export const createCar = async (data: ICarParams): Promise<ICreateCarResponse> => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    try {
        const response = await makeApiCall({
            url: '/garage',
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        });

        if (response?.id) {
            console.log(response);
            return response as ICreateCarResponse;
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
