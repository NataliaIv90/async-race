import { getWinners } from '../../shared/api/winnersApi';
import { createElement } from '../../shared/functions/createElement';
import { pagination } from '../../shared/pagination/pagination';
import { IWinnersPageData } from '../../shared/types/types';
import './winners.css';
import { applySortFunction, winnersTable } from './winnersTable/winnersTable';

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

export const fetchAndUpdateWinnersUI = async (
    page?: number,
    limit?: number,
    sort?: 'id' | 'wins' | 'time',
    order?: 'ASC' | 'DESC'
): Promise<void> => {
    const winnersData = await getWinners({
        page: page ? page : 1,
        limit: limit ? limit : 10,
        sort: sort,
        order: order,
    });
    const totalCount = JSON.parse(localStorage.getItem('totalCount') as string);
    let div: HTMLElement;
    if (winnersData) {
        div = updateWinnersUI({
            page: page,
            winnersNumber: totalCount,
            winnersData: winnersData,
        });
    } else {
        div = createElement({
            element: 'div',
            className: 'winners-container',
            innerHtml: 'There are no winners to display',
        });
    }
    document.querySelector('.winners-container')?.replaceWith(div);
    applySortFunction();
};

export const winners = (): HTMLElement => {
    const div = createElement({ element: 'div', className: 'winners-container' });
    fetchAndUpdateWinnersUI();
    return div;
};
