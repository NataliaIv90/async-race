import { cars } from './cars/cars';
import './garageMain.css';
import { getCars } from '../../../shared/api/garageApi';
import { createElement } from '../../../shared/functions/createElement';
import { ICreateCarResponse } from '../../../shared/types/types';
import { pagination } from '../../../shared/pagination/pagination';

const updateUIWithData = ({ data }: { data: ICreateCarResponse[]; totalPages: number }): HTMLElement => {
    const carsElement = cars(data);

    const title = createElement({
        element: 'h1',
        innerHtml: `Garage (${parseInt(localStorage.getItem('totalCount') as string)})`,
    });

    const subTitle = createElement({
        element: 'h2',
        innerHtml: `Page #${parseInt(localStorage.getItem('currentPage') as string)}`,
    });

    const wrapperDiv = createElement({ element: 'div', className: 'garage-container' });
    wrapperDiv.appendChild(title);
    wrapperDiv.appendChild(subTitle);
    wrapperDiv.appendChild(carsElement);
    wrapperDiv.appendChild(pagination(7, 'garage'));

    return wrapperDiv;
};

export const fetchAndUpdateUI = async (page?: number, limit?: number): Promise<void> => {
    const currentPage = page || 1;
    const currentLimit = limit || 7;
    try {
        const totalCount = parseInt(localStorage.getItem('totalCount') as string);
        const totalPages = Math.ceil(totalCount / currentLimit);

        const response = await getCars({ page: currentPage, limit: currentLimit });
        const allCarsList = await getCars({});
        localStorage.setItem('currentPage', currentPage.toString());
        localStorage.setItem('carsList', JSON.stringify(allCarsList));

        const div = updateUIWithData({ data: response, totalPages: totalPages });
        document.querySelector('.garage-container')?.replaceWith(div);
    } catch (error) {
        console.error('Error fetching and updating data:', error);
    }
};

export const renderGarageCarsWrapper = (page?: number): HTMLElement => {
    const div = createElement({ element: 'div', className: 'garage-container' });

    fetchAndUpdateUI(page);
    return div;
};
