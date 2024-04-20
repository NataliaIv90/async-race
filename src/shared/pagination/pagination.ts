import { fetchAndUpdateUI as fetchGarageAndUpdateUI } from '../../components/garage/garageMain/garageMain';
import { fetchAndUpdateWinnersUI } from '../../components/winners/winners';
import { button } from '../button/button';

const goToNextPage = async (
    fetchAndUpdateUI: (page?: number, limit?: number) => Promise<void>,
    page: number
): Promise<void> => {
    try {
        await fetchAndUpdateUI(page);
        localStorage.setItem('currentPage', page.toString());
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
            onClick: () =>
                goToNextPage(view === 'garage' ? fetchGarageAndUpdateUI : fetchAndUpdateWinnersUI, currentPage - 1),
            disabled: currentPage === 1,
        })
    );
    div.appendChild(
        button({
            text: 'NEXT',
            color: 'green',
            onClick: () =>
                goToNextPage(view === 'garage' ? fetchGarageAndUpdateUI : fetchAndUpdateWinnersUI, currentPage + 1),
            disabled: currentPage === totalPages,
        })
    );

    return div;
};
