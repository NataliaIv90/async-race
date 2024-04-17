import { carItem } from '../carItem/carItem';

export const cars = (): HTMLElement => {
    const div = document.createElement('div');

    div.appendChild(carItem());

    return div;
};
