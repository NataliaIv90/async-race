import { header } from '../header/header';
import { garage } from '../garage/garage';
import { winners } from '../winners/winners';

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
            const garageElement = await garage();
            mainPage ? div.appendChild(garageElement) : div.appendChild(winners());
        } catch (error) {
            console.log(error);
        }
    }

    const div = document.createElement('div');
    render();

    return div;
};
