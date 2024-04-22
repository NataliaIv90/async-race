import { createElement } from '../../../shared/functions/createElement';
import { car } from '../../garage/garageMain/car/car';
import './winnersTable.css';
import { ICreateCarResponse, IWinnerData } from '../../../shared/types/types';
import { fetchAndUpdateWinnersUI } from '../winners';

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

export const applySortFunction = () => {
    const headingCells = document.querySelector('.winners-table-heading')?.children;
    let currentOrder: 'ASC' | 'DESC' = 'ASC';
    if (!headingCells) return;

    const currentPage = parseInt(localStorage.getItem('currentPage') || '1');

    const toggleSortOrder = () => {
        const prevOrder = sessionStorage.getItem('prevOrder');
        if (!prevOrder || prevOrder === 'DESC') {
            sessionStorage.setItem('prevOrder', 'ASC');
            currentOrder = 'DESC';
        } else {
            sessionStorage.setItem('prevOrder', 'DESC');
        }
    };

    const createSortHandler = (index: number, sortField: 'id' | 'wins' | 'time') => {
        const sortBtn = headingCells[index] as HTMLElement;
        sortBtn.addEventListener('click', () => {
            toggleSortOrder();
            fetchAndUpdateWinnersUI(currentPage, 10, sortField, currentOrder);
        });
    };

    createSortHandler(0, 'id');
    createSortHandler(3, 'wins');
    createSortHandler(4, 'time');
};

export const winnersTable = (winnersData: IWinnerData[]): HTMLElement => {
    const carsList: ICreateCarResponse[] = JSON.parse(localStorage.getItem('carsList') as string);

    if (!Array.isArray(carsList)) {
        return createElement({ element: 'div', innerHtml: 'There are no winners' });
    }

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
    winnersData.map((winner, index) => {
        const currentWinnerData: ICreateCarResponse | undefined = carsList.find((car) => car.id === winner.id);
        if (currentWinnerData) {
            div.appendChild(
                createRow({
                    number: index + 1,
                    car: car({ color: currentWinnerData.color, size: '30px' }),
                    name: currentWinnerData.name,
                    wins: winner.wins,
                    bestTime: winner.time,
                })
            );
        }
    });

    return div;
};
