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

    const results: Array<{ id: number; time: number } | null> = await Promise.all(promises);
    let bestCar: TBestCarData | null = null;
    results.forEach((result) => {
        if (result !== null && (!bestCar || result.time < bestCar.time)) {
            bestCar = result;
        }
    });

    if (bestCar && bestCar !== null) {
        await postWinnerDataToServer(bestCar);
    }

    return bestCar;
};

export const postWinnerDataToServer = async (data: IWinnerData) => {
    const winnerData: IWinnerData = {
        id: data['id'],
        wins: 1,
        time: data['time'],
    };
    console.log('bestcar:', winnerData);
    const dataFromServerById: IWinnerData | undefined = await getWinner(data.id);
    console.log(dataFromServerById);
    if (dataFromServerById === undefined) {
        await createWinner(winnerData);
        console.log('data posted');
    } else {
        winnerData.wins = dataFromServerById.wins + 1;
        winnerData.time = winnerData.time < dataFromServerById.time ? winnerData.time : dataFromServerById.time;
        await updateWinner(winnerData);
        console.log('data updated');
    }
};
