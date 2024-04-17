import { garage } from '../garage/garage';
import { winners } from '../winners/winners';

export const app = (): HTMLElement => {
    const div = document.createElement('div');
    div.appendChild(garage());
    div.appendChild(winners());

    return div;
};
