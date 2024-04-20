import { getWinners } from '../../shared/api/winnersApi';
import { createElement } from '../../shared/functions/createElement';
import { pagination } from '../../shared/pagination/pagination';
import { IWinnersPageData } from '../../shared/types/types';
import './winners.css';
import { winnersTable } from './winnersTable/winnersTable';

const updateWinnersUI = ({ page = 1, winnersNumber, winnersData }: IWinnersPageData): HTMLElement => {
    const title = createElement({
        element: 'h1',
        innerHtml: `Winners ${winnersNumber}`,
    });

    const subTitle = createElement({
        element: 'h2',
        innerHtml: `Page #${page}`,
    });

    const winnersTableElement = winnersTable(winnersData);

    const div = createElement({ element: 'div', className: 'winners-container' });
    div.appendChild(title);
    div.appendChild(subTitle);
    div.appendChild(winnersTableElement);
    div.appendChild(pagination(10, ''));

    return div;
};

export const fetchAndUpdateWinnersUI = async (page?: number, limit?: number): Promise<void> => {
    const winnersData = await getWinners({
        page: page ? page : 1,
        limit: limit ? limit : 10,
    });

    const div = updateWinnersUI({
        page: page,
        winnersNumber: JSON.parse(localStorage.getItem('totalCount') as string),
        winnersData: winnersData,
    });

    document.querySelector('.winners-container')?.replaceWith(div);
};

export const winners = (): HTMLElement => {
    const div = createElement({ element: 'div', className: 'winners-container' });
    fetchAndUpdateWinnersUI();
    return div;
};
