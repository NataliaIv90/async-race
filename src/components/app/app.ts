import { header } from '../header/header';
import { garage } from '../garage/garage';
import { winners } from '../winners/winners';

export const app = (): HTMLElement => {
    let mainPage = true;

    function changePage(newValue: boolean) {
        mainPage = newValue;
        render();
    }

    function render() {
        div.innerHTML = '';
        div.appendChild(header(changePage));
        mainPage ? div.appendChild(garage()) : div.appendChild(winners());
    }

    const div = document.createElement('div');
    render();

    return div;
};
