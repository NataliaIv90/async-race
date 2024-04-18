import { cars } from './cars/cars';
import './garageMain.css';
import { pagination } from '../../../shared/pagination/pagination';

export const garageCarsWrapper = (): HTMLElement => {
    const div = document.createElement('div');

    const title = document.createElement('h1');
    title.innerText = `Garage (1)`;

    const subTitle = document.createElement('h2');
    subTitle.innerText = `Page #1`;

    [title, subTitle, cars()].map((el) => div.appendChild(el));

    div.appendChild(pagination(1, 1));

    return div;
};
