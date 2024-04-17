import './button.css';
import { IButtonData } from '../types/types';

export const button = ({ text, color, onClick }: IButtonData): HTMLElement => {
    const div = document.createElement('span');
    div.classList.add('button-container');

    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add(`accent-bg-${color === 'green' ? 'main' : 'secondary'}`);
    button.innerText = text;
    button.addEventListener('click', onClick);

    div.appendChild(button);

    return div;
};
