import { carItem } from '../carItem/carItem';
import { ICreateCarResponse } from '../../../../shared/types/types';

export const cars = (data: ICreateCarResponse[]): HTMLElement => {
    const div = document.createElement('div');

    data.map((el) => {
        div.appendChild(carItem({ color: el.color, name: el.name, id: el.id }));
    });

    return div;
};
