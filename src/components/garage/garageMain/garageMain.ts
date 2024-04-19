import { cars } from './cars/cars';
import './garageMain.css';
import { pagination } from '../../../shared/pagination/pagination';
import { getCars } from '../../../shared/api/garageApi';
import { createElement } from '../../../shared/functions/createElement';

const getCarsList = async (): Promise<HTMLElement> => {
    const response = await getCars();
    localStorage.setItem('carsNumber', response.length.toString());
    localStorage.setItem('carsList', JSON.stringify(response));
    const carsElement = await cars(response);

    return carsElement;
};

export const garageCarsWrapper = async (): Promise<HTMLElement> => {
    const div = document.createElement('div');
    const carsWrapper = createElement({ element: 'div', className: 'cars-wrapper' });

    div.appendChild(carsWrapper);

    const list = await getCarsList();

    const title = createElement({ element: 'h1', innerHtml: `Garage (${localStorage.getItem('carsNumber')})` });
    const subTitle = createElement({ element: 'h2', innerHtml: 'Page #1' });

    div.insertAdjacentElement('afterbegin', subTitle);
    div.insertAdjacentElement('afterbegin', title);

    div.appendChild(list);
    div.appendChild(pagination(1, 1));

    return div;
};
