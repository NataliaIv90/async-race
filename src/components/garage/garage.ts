import './garage.css';
import { garageHeader } from './garageHeader/garageHeader';
import { garageCarsWrapper } from './garageMain/garageMain';

export const garage = (): HTMLElement => {
    const div = document.createElement('div');
    div.classList.add('garage-container');

    div.appendChild(garageHeader());
    div.appendChild(garageCarsWrapper());

    return div;
};
