import { header } from '../header/header';
import { garage } from '../garage/garage';
import { winners } from '../winners/winners';
import { createElement } from '../../shared/functions/createElement';

export const app = async (): Promise<HTMLElement> => {
    let mainPage = true;

    function changePage(newValue: boolean) {
        mainPage = newValue;
        render();
    }

    async function render() {
        div.innerHTML = '';
        div.appendChild(header(changePage));

        try {
            if (mainPage) {
                const garageElement = await garage();
                div.appendChild(garageElement);
            } else {
                const winnersElement = await winners();
                div.appendChild(winnersElement);
            }
            const modal = createElement({ element: 'div', className: 'modal' });
            modal.classList.add('hidden');
            div.appendChild(modal);
        } catch (error) {
            console.log(error);
        }
    }

    const div = document.createElement('div');
    render();

    return div;
};
