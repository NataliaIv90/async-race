import { cars } from './cars/cars';
import './garageMain.css';
import { pagination } from '../../../shared/pagination/pagination';
import { getCars } from '../../../shared/api/garageApi';
import { createElement } from '../../../shared/functions/createElement';
// import { ICreateCarResponse } from '../../../shared/types/types';

const getCarsList = async (): Promise<HTMLElement> => {
    const response = await getCars();
    const carsElement = await cars(response);
    return carsElement;
};

export const garageCarsWrapper = async (): Promise<HTMLElement> => {
    const div = document.createElement('div');

    const title = createElement({ element: 'h1', innerHtml: 'Garage (1)' });
    const subTitle = createElement({ element: 'h2', innerHtml: 'Page #1' });
    const carsWrapper = createElement({ element: 'div', className: 'cars-wrapper' });

    div.appendChild(title);
    div.appendChild(subTitle);
    div.appendChild(carsWrapper);

    const list = await getCarsList();

    div.appendChild(list);
    div.appendChild(pagination(1, 1));

    return div;
};
