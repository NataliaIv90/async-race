import { createWinner, getWinner, updateWinner } from '../api/winnersApi';
import { TBestCarData, ICreateCarResponse, IWinnerData } from '../types/types';
import { resetAllEngineBtns } from './disableButtonByColor';
import { toggleEngineOnAndMove } from './move';

export interface IMoveProps {
    id: number;
    duration: number;
}

export const startRace = async (): Promise<{ id: number; time: number } | null> => {
    const cars: ICreateCarResponse[] = JSON.parse(localStorage.getItem('currentRaceList') as string);
    const promises: Promise<{ id: number; time: number } | null>[] = [];
    resetAllEngineBtns('start');

    cars.forEach((car: ICreateCarResponse) => {
        promises.push(toggleEngineOnAndMove(car.id));
    });
    displayModal('Race started! Wait for results 🏁');
    const results: Array<{ id: number; time: number } | null> = await Promise.all(promises);
    let bestCar: TBestCarData | null = null;
    results.forEach((result) => {
        if (result !== null && (!bestCar || result.time < bestCar.time)) {
            bestCar = result;
        }
    });

    if (bestCar && bestCar !== null) {
        await postWinnerDataToServer(bestCar);
        displayModal(`Winner: id: ${bestCar['id']}, time: ${bestCar['time']}`);
    }

    return bestCar;
};

export const postWinnerDataToServer = async (data: IWinnerData) => {
    const winnerData: IWinnerData = {
        id: data['id'],
        wins: 1,
        time: data['time'],
    };
    const dataFromServerById: IWinnerData | undefined = await getWinner(data.id);
    if (dataFromServerById === undefined) {
        await createWinner(winnerData);
    } else {
        winnerData.wins = dataFromServerById.wins + 1;
        winnerData.time = winnerData.time < dataFromServerById.time ? winnerData.time : dataFromServerById.time;
        await updateWinner(winnerData);
    }
};

export const displayModal = async (text: string) => {
    const modal = document.querySelector('.modal') as HTMLElement;
    modal.innerText = text;
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.innerText = '';
    }, 3000);
};
