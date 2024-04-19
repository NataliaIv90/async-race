import './garageForm.css';
import { button } from '../../../../shared/button/button';
import { IFormData, IInputData } from '../../../../shared/types/types';

const createInput = ({ type, name, disabled = false, value }: IInputData): HTMLInputElement => {
    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    if (value) input.setAttribute('value', value);
    input.disabled = disabled;

    return input;
};

export const handleFormSubmit = (form: HTMLFormElement, onSubmit: (formData: FormData) => void) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        onSubmit(formData);
        form.reset();
    });
};

export const garageForm = ({ id, submitBtnText, onSubmit, disabled = false }: IFormData): HTMLElement => {
    const form = document.createElement('form');
    form.id = id;

    const textInput = createInput({ type: 'text', name: 'car', disabled: disabled });

    const colorInput = createInput({ type: 'color', name: 'color', disabled: disabled, value: '#ffffff' });

    const submitBtn = button({
        text: submitBtnText,
        color: 'blue',
        onClick: () => {},
        type: 'submit',
        disabled: disabled,
    });

    handleFormSubmit(form, onSubmit);

    [textInput, colorInput, submitBtn].map((el) => form.appendChild(el));

    return form;
};
