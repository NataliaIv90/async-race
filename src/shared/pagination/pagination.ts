import { fetchAndUpdateUI as fetchGarageAndUpdateUI } from '../../components/garage/garageMain/garageMain';
import { fetchAndUpdateWinnersUI } from '../../components/winners/winners';
import { button } from '../button/button';

const goToNextPage = async (page: number, limit: number, view: string): Promise<void> => {
    try {
        const fetchFunction = view === 'garage' ? fetchGarageAndUpdateUI : fetchAndUpdateWinnersUI;
        const currentPage = page || 2;
        const currentLimit = limit || (view === 'garage' ? 7 : 10);
        await fetchFunction(currentPage, currentLimit);
        localStorage.setItem('currentPage', currentPage.toString());
    } catch (error) {
        console.error('Error updating UI:', error);
    }
};

export const pagination = (limit: number, view: string) => {
    const currentPage = parseInt(localStorage.getItem('currentPage') as string) || 1;
    const totalCount = parseInt(localStorage.getItem('totalCount') as string) || 0;
    const totalPages = Math.ceil(totalCount / limit);
    const div = document.createElement('div');
    div.classList.add('pagination-wrapper');

    div.appendChild(
        button({
            text: 'PREV',
            color: 'green',
            onClick: () => goToNextPage(currentPage - 1, limit, view), // Pass view parameter
            disabled: currentPage === 1,
        })
    );
    div.appendChild(
        button({
            text: 'NEXT',
            color: 'green',
            onClick: () => goToNextPage(currentPage + 1, limit, view), // Pass view parameter
            disabled: currentPage === totalPages,
        })
    );

    return div;
};
