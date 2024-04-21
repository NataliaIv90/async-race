import { renderGarageCarsWrapper } from '../../components/garage/garageMain/garageMain';
import { toggleEngine } from '../api/engineApi';
import { deleteCar } from '../api/garageApi';
import { deleteWinner, getWinner } from '../api/winnersApi';
import { ICreateCarResponse } from '../types/types';
import { disableButtonByColor } from './disableButtonByColor';
import { toggleEngineOnAndMove } from './move';
import { setToStorageAllCars } from './setToStorageAllCars';
import { toggleDisabledInput } from './toggleDisabledInput';

const setDataToChange = (id: number): void => {
    const data: ICreateCarResponse[] = JSON.parse(localStorage.getItem('carsList') as string);
    let car: ICreateCarResponse | undefined;
    data.map((el) => {
        if (el.id == id) {
            car = el;
        }
    });

    sessionStorage.setItem('id', JSON.stringify(id));

    (document.querySelector('#updateCarForm-car') as HTMLInputElement).value = car?.name as string;
    (document.querySelector('#updateCarForm-color') as HTMLInputElement).value = car?.color as string;
};

export const carItemEventListener =
    (id: number) =>
    async (e: MouseEvent): Promise<void> => {
        if (e.target instanceof HTMLButtonElement) {
            const classNameList = (e.target as Element).className.split(' ');

            if (classNameList) {
                if (classNameList.includes('remove')) {
                    const dataFromWinnersBase = await getWinner(id);
                    if (dataFromWinnersBase) {
                        await deleteWinner(id);
                    }
                    await deleteCar(id);
                    setToStorageAllCars();
                    const currentPage = parseInt(localStorage.getItem('currentPage') as string);
                    renderGarageCarsWrapper(currentPage);
                }

                if (classNameList.includes('select')) {
                    setTimeout(() => {
                        setDataToChange(id);
                        toggleDisabledInput('active');
                    });
                }

                if (classNameList.includes('red')) {
                    toggleEngine(id, 'stopped');
                    disableButtonByColor(id, 'red');
                }

                if (classNameList.includes('green')) {
                    disableButtonByColor(id, 'green');
                    toggleEngineOnAndMove(id);
                }
            }
        }
    };
