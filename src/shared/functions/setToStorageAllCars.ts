import { getCars } from '../api/garageApi';

export const setToStorageAllCars = async () => {
    const allCarsList = await getCars({});
    localStorage.setItem('carsList', JSON.stringify(allCarsList));
};
