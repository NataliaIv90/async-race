export interface IButtonData {
    text: string;
    color: 'blue' | 'green';
    onClick: ()=>void;
    type?: 'button' | 'submit';
    disabled?: boolean;
}

export type TOutlinedButtonsData = Omit<IButtonData, "color" | "type" | "disabled"> & {
    disabled: boolean;
};

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
}
