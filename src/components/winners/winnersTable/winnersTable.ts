import { createElement } from '../../../shared/functions/createElement';
import { car } from '../../garage/garageMain/car/car';
import './winnersTable.css';

interface IWinnerTableRow {
    number: number | string;
    car: string | HTMLElement;
    name: string;
    wins: number | string;
    bestTime: number | string;
    tableHeading?: boolean;
}

const createRow = ({ number, car, name, wins, bestTime, tableHeading }: IWinnerTableRow): HTMLElement => {
    const div = createElement({ element: 'div', className: 'winners-row' });
    if (tableHeading) {
        div.classList.add('winners-table-heading');
    }

    [number, car, name, wins, bestTime].map((el) => {
        div.appendChild(createElement({ element: 'div', innerHtml: el, className: 'table-col' }));
    });
    return div;
};

export const winnersTable = (): HTMLElement => {
    const div = createElement({ element: 'div', className: 'winners-table' });
    const heading = createRow({
        number: '№',
        car: 'Car',
        name: 'Name',
        wins: 'Wins',
        bestTime: 'Best time (seconds)',
        tableHeading: true,
    });

    div.appendChild(heading);

    div.appendChild(
        createRow({
            number: 1,
            car: car({ color: '#456321', size: '30px' }),
            name: 'Lanos',
            wins: 3,
            bestTime: 3.5,
        })
    );

    return div;
};
