import { ICarParams } from '../types/types';
import { createCar } from '../api/garageApi';

export const createCarFormDataHandler = (formData: FormData) => {
    const data = handleSubmit(formData);
    createCar(data);
};

export const handleSubmit = (formData: FormData) => {
    const data: ICarParams = {
        name: formData.get('car') as string,
        color: formData.get('color') as string,
    };

    console.log(data);
    return data;
};
