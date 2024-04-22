import './header.css';
import { button } from '../../shared/button/button';

export const header = (changePage: (newValue: boolean) => void): HTMLElement => {
    const header = document.createElement('header');

    header.appendChild(button({ text: 'TO GARAGE', color: 'green', onClick: () => changePage(true) }));
    header.appendChild(button({ text: 'TO WINNERS', color: 'green', onClick: () => changePage(false) }));
    localStorage.setItem('currentPage', '1');
    return header;
};
