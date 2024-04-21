import './button.css';
import { IButtonData, TOutlinedButtonsData } from '../types/types';

export const button = ({
    text,
    color = 'blue',
    onClick,
    type = 'button',
    disabled = false,
    className,
}: IButtonData): HTMLElement => {
    const div = document.createElement('span');
    div.classList.add('button-container');

    const button = document.createElement('button');

    if (className) {
        button.classList.add(className);
    }

    button.type = type;
    button.classList.add(`accent-bg-${color === 'green' ? 'secondary' : 'main'}`);
    button.innerText = text;
    button.disabled = disabled;
    if (onClick) {
        button.addEventListener('click', onClick);
    }

    div.appendChild(button);

    return div;
};

export const outlinedButton = ({ text, color, disabled }: TOutlinedButtonsData): HTMLButtonElement => {
    const button = document.createElement('button');

    button.innerText = text;
    button.classList.add('outlined-button');
    button.classList.add(color);
    button.disabled = disabled;
    button.setAttribute('type', 'button');
    // button.addEventListener('click', () => {
    //     if (!button.disabled) {
    //         onClick();
    //     }
    // });

    return button;
};
