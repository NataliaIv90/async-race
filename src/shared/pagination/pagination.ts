import { button } from '../button/button';

const goToPreviousPage = () => {
    alert('Prev');
};

const goToNextPage = () => {
    alert('Next');
};

export const pagination = (currentPage: number, totalPages: number) => {
    const div = document.createElement('div');
    div.classList.add('pagination-wrapper');

    div.appendChild(button({ text: 'PREV', color: 'green', onClick: goToPreviousPage, disabled: currentPage === 1 }));
    div.appendChild(
        button({ text: 'NEXT', color: 'green', onClick: goToNextPage, disabled: currentPage === totalPages })
    );

    return div;
};
