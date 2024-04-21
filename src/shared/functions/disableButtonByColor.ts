import { ICreateCarResponse } from '../types/types';

export const disableButtonByColor = (key: number, classlistToDisable: string) => {
    const buttons = document.querySelector(`div.car-item[key="${key}"]`)?.querySelectorAll('.outlined-button');
    buttons?.forEach((button) => {
        if (button instanceof HTMLButtonElement) {
            button.disabled = button.classList.contains(classlistToDisable) ? true : false;
        }
    });
};

export const resetAllEngineBtns = (start: 'start' | 'reset') => {
    const activeCars: ICreateCarResponse[] = JSON.parse(localStorage.getItem('currentRaceList') as string);
    const color = start === 'start' ? 'green' : 'red';
    activeCars.map((car) => {
        disableButtonByColor(car.id, color);
    });
};
