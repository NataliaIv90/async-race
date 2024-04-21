import { fetchAndUpdateUI } from '../../components/garage/garageMain/garageMain';
import { createCar } from '../api/garageApi';
import { setToStorageAllCars } from './setToStorageAllCars';

const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const generateRandomCar = () => {
    const brands = [
        'Lexus',
        'Toyota',
        'Honda',
        'BMW',
        'Mercedes-Benz',
        'Audi',
        'Ford',
        'Chevrolet',
        'Volvo',
        'Volkswagen',
        'Hyundai',
        'Kia',
        'Nissan',
        'Mazda',
        'Subaru',
    ];

    const models = [
        'Camry',
        'Corolla',
        'RAV4',
        'Civic',
        'Accord',
        'CR-V',
        'Passat',
        'Jetta',
        'Tucson',
        'Santa Fe',
        'Accent',
        'Forester',
        'Outback',
        'Ascent',
        'Land Cruiser',
    ];

    return `${brands[Math.floor(Math.random() * brands.length)]} ${models[Math.round(Math.random() * models.length)]}`;
};

export const generateCars = () => {
    for (let i = 0; i < 100; i += 1) {
        createCar({ color: generateRandomColor(), name: generateRandomCar() });
    }

    setTimeout(() => {
        fetchAndUpdateUI();
        setToStorageAllCars();
    }, 2000);
};
