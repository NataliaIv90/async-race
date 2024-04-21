import { ICarParams } from '../types/types';
import { createCar, updateCar } from '../api/garageApi';
import { toggleDisabledInput } from './toggleDisabledInput';
import { fetchAndUpdateUI } from '../../components/garage/garageMain/garageMain';
import { setToStorageAllCars } from './setToStorageAllCars';

export const createCarFormDataHandler = async (formData: FormData) => {
    const data = handleSubmit(formData);
    await createCar(data);
    fetchAndUpdateUI();
};

export const updateCarFormDataHandler = async (formData: FormData) => {
    const data = handleSubmit(formData);
    const id = Number(sessionStorage.getItem('id'));
    toggleDisabledInput();
    await updateCar(id, data);

    setTimeout(() => {
        setToStorageAllCars();
        fetchAndUpdateUI(parseInt(localStorage.getItem('currentPage') as string));
    });
};

export const handleSubmit = (formData: FormData) => {
    const data: ICarParams = {
        name: formData.get('car') as string,
        color: formData.get('color') as string,
    };

    return data;
};
