import { getCars } from '../api/garageApi';

export const setToStorageAllCars = async () => {
    const allCarsList = await getCars({});
    console.log('carslistupd');
    localStorage.setItem('carsList', JSON.stringify(allCarsList));
};
