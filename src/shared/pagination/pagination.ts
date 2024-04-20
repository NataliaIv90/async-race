import { fetchAndUpdateUI as fetchGarageAndUpdateUI } from '../../components/garage/garageMain/garageMain';
import { fetchAndUpdateWinnersUI } from '../../components/winners/winners';
import { button } from '../button/button';

const goToNextPage = async (
    fetchAndUpdateUI: (page?: number, limit?: number) => Promise<void>,
    page: number
): Promise<void> => {
    try {
        await fetchAndUpdateUI(page);
        localStorage.setItem('currentPage', page.toString()); // Store the current page in local storage
    } catch (error) {
        console.error('Error updating UI:', error);
    }
};

export const pagination = (limit: number, view: string) => {
    const currentPage = parseInt(localStorage.getItem('currentPage') as string) || 1; // Retrieve the current page from local storage, default to 1 if not set
    const totalCount = parseInt(localStorage.getItem('totalCount') as string) || 0; // Retrieve the total count from local storage, default to 0 if not set
    const totalPages = Math.ceil(totalCount / limit);
    const div = document.createElement('div');
    div.classList.add('pagination-wrapper');

    div.appendChild(
        button({
            text: 'PREV',
            color: 'green',
            onClick: () =>
                goToNextPage(view === 'garage' ? fetchGarageAndUpdateUI : fetchAndUpdateWinnersUI, currentPage - 1), // Use the appropriate fetchAndUpdateUI function based on the view
            disabled: currentPage === 1,
        })
    );
    div.appendChild(
        button({
            text: 'NEXT',
            color: 'green',
            onClick: () =>
                goToNextPage(view === 'garage' ? fetchGarageAndUpdateUI : fetchAndUpdateWinnersUI, currentPage + 1), // Use the appropriate fetchAndUpdateUI function based on the view
            disabled: currentPage === totalPages,
        })
    );

    return div;
};
