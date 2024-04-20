import { button } from '../../../../shared/button/button';
import { generateCars } from '../../../../shared/functions/generateCars';

export const garageBtnConsole = (): HTMLElement => {
    const btnsData = [
        {
            text: 'RACE',
            onClick: () => {},
        },
        {
            text: 'RESET',
            onClick: () => {},
        },
        {
            text: 'GENERATE CARS',
            onClick: generateCars,
            color: 'green',
        },
    ];

    const btnsContainer = document.createElement('div');
    btnsContainer.classList.add('btns-container');

    btnsData.map((el) =>
        btnsContainer.appendChild(button({ text: el.text, onClick: el.onClick, color: el.color ? 'blue' : 'green' }))
    );

    return btnsContainer;
};
