import { renderGarageCarsWrapper } from '../../components/garage/garageMain/garageMain';
import { deleteCar } from '../api/garageApi';
import { ICreateCarResponse } from '../types/types';
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
                    await deleteCar(id);
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
                    console.log('Stop!', id);
                }

                if (classNameList.includes('green')) {
                    console.log('Move!', id);
                }
            }
        }
    };
