import { ICarParams } from '../types/types';
import { createCar, updateCar } from '../api/garageApi';
import { toggleDisabledInput } from './toggleDisabledInput';
import { app } from '../../components/app/app';

export const createCarFormDataHandler = async (formData: FormData) => {
    const data = handleSubmit(formData);
    await createCar(data);
};

export const updateCarFormDataHandler = async (formData: FormData) => {
    const data = handleSubmit(formData);
    const id = Number(sessionStorage.getItem('id'));

    toggleDisabledInput();
    await updateCar(id, data);
};

export const handleSubmit = (formData: FormData) => {
    const data: ICarParams = {
        name: formData.get('car') as string,
        color: formData.get('color') as string,
    };

    return data;
};
