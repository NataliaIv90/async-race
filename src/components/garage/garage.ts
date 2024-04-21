import { setToStorageAllCars } from '../../shared/functions/setToStorageAllCars';
import './garage.css';
import { garageHeader } from './garageHeader/garageHeader';
import { renderGarageCarsWrapper } from './garageMain/garageMain';

export const garage = async (): Promise<HTMLElement> => {
    const div = document.createElement('div');
    div.classList.add('garage-container');

    div.appendChild(garageHeader());

    try {
        const carsWrapper = await renderGarageCarsWrapper();
        setToStorageAllCars();
        div.appendChild(carsWrapper);
    } catch (error) {
        console.error('Error rendering garage cars:', error);
    }

    return div;
};
