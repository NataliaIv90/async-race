import { button } from '../../../../shared/button/button';
import { resetAllEngineBtns } from '../../../../shared/functions/disableButtonByColor';
import { generateCars } from '../../../../shared/functions/generateCars';
import { startRace } from '../../../../shared/functions/startRace';

export const garageBtnConsole = (): HTMLElement => {
    const btnsData = [
        {
            text: 'RACE',
            onClick: startRace,
        },
        {
            text: 'RESET',
            onClick: () => resetAllEngineBtns('reset'),
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
