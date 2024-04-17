import './button.css';
import { IButtonData } from '../types/types';

export const button = ({
    text,
    color = 'blue',
    onClick,
    type = 'button',
    disabled = false,
}: IButtonData): HTMLElement => {
    const div = document.createElement('span');
    div.classList.add('button-container');

    const button = document.createElement('button');
    button.type = type;
    button.classList.add(`accent-bg-${color === 'green' ? 'secondary' : 'main'}`);
    button.innerText = text;
    button.disabled = disabled;
    button.addEventListener('click', onClick);

    div.appendChild(button);

    return div;
};
