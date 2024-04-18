import { button } from '../../../../shared/button/button';
import { car } from '../car/car';
import { TOutlinedButtonsData } from '../../../../shared/types/types';
import './carItem.css';
import { flag } from '../flag/flag';

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
    carName.innerText = name;

    btnsData.map((el) => div.appendChild(button({ text: el.text, onClick: el.onClick, color: 'blue' })));
    div.appendChild(carName);

    return div;
};

const outlinedButton = ({ text, onClick, disabled }: TOutlinedButtonsData): HTMLButtonElement => {
    const button = document.createElement('button');

    button.innerText = text;
    button.classList.add('outlined-button');
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
    const buttonsData = [
        {
            text: 'A',
            onClick: () => {},
            disabled: false,
        },
        {
            text: 'B',
            onClick: () => {},
            disabled: true,
        },
    ];

    const div = document.createElement('div');
    div.classList.add('car-item-main');
    const carItem = car({ color: color });

    const flagIcon = flag();
    flagIcon.classList.add('finish-flag');

    buttonsData.map((el) => {
        div.appendChild(outlinedButton({ text: el.text, onClick: el.onClick, disabled: el.disabled }));
    });
    div.appendChild(flagIcon);
    div.appendChild(carItem);
    return div;
};

export const carItem = (): HTMLElement => {
    const div = document.createElement('div');
    div.classList.add('car-item');

    div.appendChild(carItemHeader('Daewoo Lanos'));
    div.appendChild(carItemMain('#555555'));

    return div;
};
