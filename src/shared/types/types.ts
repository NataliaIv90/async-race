export interface IButtonData {
    text: string;
    color: 'blue' | 'green';
    onClick?: ()=>void;
    type?: 'button' | 'submit';
    disabled?: boolean;
    className?: string;
    id?: string;
}

export type TOutlinedButtonsData = Omit<IButtonData, "color" | "type" | "disabled"> & {
    disabled: boolean;
    color: 'green' | 'red';
};

export interface ICarParams  {
    name: string,
    color: string
}

export interface ICreateCarResponse extends ICarParams {
    id: number;
}

export interface IErrorResponce {
    status: number;
    message: string;
    data?: undefined;
}

export interface IFormData {
    id: string;
    submitBtnText: string;
    onSubmit: (data: FormData) => void;
    disabled?: boolean;
}

export interface IInputData {
    type: 'text' | 'color';
    name: string;
    disabled?: boolean;
    value?: string;
    id?: string;
}

export interface IPaginationDataRequest {
    page?: number;
    limit?: number;
}

export interface IWinnerData{
    id: number,
    wins: number,
    time: number,
}

export interface IWinnersPageData {
    page?: number,
    winnersNumber: number,
    winnersData: IWinnerData[],
}

export type TBestCarData = Omit<IWinnerData, 'wins'>