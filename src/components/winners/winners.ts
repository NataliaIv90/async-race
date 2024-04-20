import { pagination } from '../../shared/pagination/pagination';
import './winners.css';
import { winnersTable } from './winnersTable/winnersTable';

export const winners = (): HTMLElement => {
    const div = document.createElement('div');
    div.classList.add('winners-container');

    const title = document.createElement('h1');
    title.innerText = `Winners (1)`;

    const subTitle = document.createElement('h2');
    subTitle.innerText = `Page #1`;

    const winnersTableElement = winnersTable();

    const paginationElement = pagination(10);

    [title, subTitle, winnersTableElement, paginationElement].map((el) => {
        div.appendChild(el);
    });

    return div;
};
