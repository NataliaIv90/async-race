import { cars } from './cars/cars';
import './garageMain.css';
import { pagination } from '../../../shared/pagination/pagination';
import { getCars } from '../../../shared/api/garageApi';
import { createElement } from '../../../shared/functions/createElement';
import { ICreateCarResponse } from '../../../shared/types/types';

const updateUIWithData = (data: ICreateCarResponse[]) => {
    const carsWrapper = document.querySelector('.cars-wrapper') as HTMLElement;
    carsWrapper.innerHTML = '';

    const carsElement = cars(data);
    carsWrapper.appendChild(carsElement);

    const title = createElement({
        element: 'h1',
        innerHtml: `Garage (${parseInt(localStorage.getItem('totalCount') as string)})`,
    });
    const subTitle = createElement({
        element: 'h2',
        innerHtml: `Page #${parseInt(localStorage.getItem('currentPage') as string)}`,
    });

    carsWrapper.insertAdjacentElement('afterbegin', subTitle);
    carsWrapper.insertAdjacentElement('afterbegin', title);
    carsWrapper.appendChild(pagination(7));
};

export const fetchAndUpdateUI = async ({ page = 1, limit = 7 }: { page?: number; limit?: number } = {}) => {
    try {
        const totalCount = parseInt(localStorage.getItem('totalCount') as string);
        const totalPages = Math.ceil(totalCount / limit);
        if (page > totalPages) {
            page = 1;
        }
        const response = await getCars({ page: page, limit: 7 });
        localStorage.setItem('currentPage', page.toString());
        localStorage.setItem('carsList', JSON.stringify(response));

        updateUIWithData(response);
    } catch (error) {
        console.error('Error fetching and updating data:', error);
    }
};

export const garageCarsWrapper = () => {
    const div = document.createElement('div');
    div.classList.add('garage-container');
    div.classList.add('cars-wrapper');

    fetchAndUpdateUI();

    return div;
};
