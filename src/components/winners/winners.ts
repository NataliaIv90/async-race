import { getWinners } from '../../shared/api/winnersApi';
import { createElement } from '../../shared/functions/createElement';
import { pagination } from '../../shared/pagination/pagination';
import { IWinnersPageData } from '../../shared/types/types';
import './winners.css';
import { winnersTable } from './winnersTable/winnersTable';

const updateWinnersUI = ({ page = 1, winnersNumber, winnersData }: IWinnersPageData): HTMLElement[] => {
    const title = createElement({
        element: 'h1',
        innerHtml: `Winners ${winnersNumber}`,
    });

    const subTitle = createElement({
        element: 'h2',
        innerHtml: `Page #${page}`,
    });

    const winnersTableElement = winnersTable(winnersData);

    const paginationElement = pagination(10);

    return [title, subTitle, winnersTableElement, paginationElement];
};

const fetchAndUpdateWinnersUI = async (page?: number, limit?: number): Promise<HTMLElement[]> => {
    const winnersData = await getWinners({
        page: page ? page : 1,
        limit: limit ? limit : 10,
    });

    const data = updateWinnersUI({
        page: page,
        winnersNumber: JSON.parse(localStorage.getItem('totalCount') as string),
        winnersData: winnersData,
    });

    return data;
};

export const winners = async (): Promise<HTMLElement> => {
    const div = document.createElement('div');
    div.classList.add('winners-container');

    const data = await fetchAndUpdateWinnersUI();
    if (Array.isArray(data)) {
        data.forEach((el) => {
            div.appendChild(el);
        });
    }
    return div;
};
