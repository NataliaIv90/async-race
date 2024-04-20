const baseUrl = 'http://127.0.0.1:3000';
import { ICarParams } from '../types/types';

interface IApiCallParameters {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    url: string;
    queryParams?: string;
    headers?: HeadersInit | undefined;
    data?: ICarParams;
    body?: BodyInit | null | undefined;
}

export interface IApiResponse<T> {
    success: boolean;
    data?: T;
    error?: {
        status: number;
        message: string;
    };
}

export const makeApiCall = async <T>({ method, url, queryParams, headers, body }: IApiCallParameters): Promise<T> => {
    let currentUrl = `${baseUrl}${url}`;
    if (queryParams) {
        currentUrl += `?${queryParams}`;
    }

    const requestOptions: RequestInit = {
        method: method,
        body: body,
    };

    if (headers) {
        requestOptions.headers = typeof headers === 'string' ? new Headers({ 'Content-Type': headers }) : headers;
    }

    try {
        const response = await fetch(currentUrl, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        const totalCount = response.headers.get('X-Total-Count');
        if (totalCount) {
            localStorage.setItem('totalCount', totalCount);
        }

        return result as T;
    } catch (error) {
        console.error('Error making API call:', error);
        throw error;
    }
};

// export const makeApiCall = async ({ method, url, queryParams, headers, body }: IApiCallParameters) => {
//     let currentUrl = `${baseUrl}${url}`;
//     if (queryParams) {
//         currentUrl += `?${queryParams}`;
//     }

//     const requestOptions: RequestInit = {
//         method: method,
//         body: body,
//     };

//     if (headers) {
//         requestOptions.headers = typeof headers === 'string' ? new Headers({ 'Content-Type': headers }) : headers;
//     }

//     try {
//         const response = await fetch(currentUrl, requestOptions);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const result = await response.json();
//         const totalCount = response?.headers?.get('X-Total-Count');

//         if (totalCount) {
//             localStorage.setItem('totalCount', totalCount);
//         }

//         return result;
//     } catch (error) {
//         console.error('Error making API call:', error);
//         throw error;
//     }
// };
