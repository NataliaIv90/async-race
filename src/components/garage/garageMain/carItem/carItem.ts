import { button } from '../../../../shared/button/button';
import { car } from '../car/car';
import { TOutlinedButtonsData } from '../../../../shared/types/types';
import './carItem.css';
import { flag } from '../flag/flag';
import { ICreateCarResponse } from '../../../../shared/types/types';

const carItemHeader = (name: string): HTMLElement => {
    const btnsData = [
        {
            text: 'Select',
            onClick: () => {},
        },
        {
            text: 'Remove',
            onClick: () => {},
        },
    ];

    const div = document.createElement('div');
    const carName = document.createElement('span');
    if (name) {
        carName.innerText = name;
    }

    btnsData.map((el) => div.appendChild(button({ text: el.text, onClick: el.onClick, color: 'blue' })));
    div.appendChild(carName);

    return div;
};

const outlinedButton = ({ text, onClick, disabled, color }: TOutlinedButtonsData): HTMLButtonElement => {
    const button = document.createElement('button');

    button.innerText = text;
    button.classList.add('outlined-button');
    button.classList.add(color);
    button.disabled = disabled;
    button.setAttribute('type', 'button');
    button.addEventListener('click', () => {
        if (!button.disabled) {
            onClick();
        }
    });

    return button;
};

const carItemMain = (color: string): HTMLElement => {
    const buttonsData: {
        text: string;
        onClick: () => void;
        disabled: boolean;
        color: 'green' | 'red';
    }[] = [
        {
            text: 'A',
            onClick: () => {},
            disabled: false,
            color: 'green',
        },
        {
            text: 'B',
            onClick: () => {},
            disabled: true,
            color: 'red',
        },
    ];

    const div = document.createElement('div');
    div.classList.add('car-item-main');
    const carItem = car({ color: color });

    const flagIcon = flag();
    flagIcon.classList.add('finish-flag');

    buttonsData.map((el) => {
        div.appendChild(outlinedButton({ text: el.text, onClick: el.onClick, disabled: el.disabled, color: el.color }));
    });
    div.appendChild(flagIcon);
    div.appendChild(carItem);
    return div;
};

export const carItem = ({ color, name, id }: ICreateCarResponse): HTMLElement => {
    const div = document.createElement('div');
    div.classList.add('car-item');
    div.setAttribute('key', id.toString());

    div.appendChild(carItemHeader(name));
    div.appendChild(carItemMain(color));

    return div;
};
