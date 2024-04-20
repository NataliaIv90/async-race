import { fetchAndUpdateUI } from '../../components/garage/garageMain/garageMain';
import { button } from '../button/button';

const goToNextPage = (page: number): void => {
    fetchAndUpdateUI(page);
};

export const pagination = (limit: number) => {
    const currentPage = parseInt(localStorage.getItem('currentPage') as string);
    const totalCount = parseInt(localStorage.getItem('totalCount') as string);
    const totalPages = Math.ceil(totalCount / limit);
    const div = document.createElement('div');
    div.classList.add('pagination-wrapper');

    div.appendChild(
        button({
            text: 'PREV',
            color: 'green',
            onClick: () => goToNextPage(currentPage - 1),
            disabled: currentPage === 1,
        })
    );
    div.appendChild(
        button({
            text: 'NEXT',
            color: 'green',
            onClick: () => goToNextPage(currentPage + 1),
            disabled: currentPage === totalPages,
        })
    );

    return div;
};
