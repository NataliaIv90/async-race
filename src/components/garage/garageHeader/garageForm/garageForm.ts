import './garageForm.css';
import { button } from '../../../../shared/button/button';
import { IFormData, IInputData } from '../../../../shared/types/types';

const createInput = ({ type, name, disabled = false, value, id }: IInputData): HTMLInputElement => {
    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    if (value) input.setAttribute('value', value);
    input.disabled = disabled;
    if (id) {
        input.id = id;
    }

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

    const textInput = createInput({ type: 'text', name: 'car', disabled: disabled, id: `${id}-car` });

    const colorInput = createInput({
        type: 'color',
        name: 'color',
        disabled: disabled,
        value: '#ffffff',
        id: `${id}-color`,
    });

    const submitBtn = button({
        id: submitBtnText === 'UPDATE' ? 'update-car-btn' : 'create-car-btn',
        text: submitBtnText,
        color: 'blue',
        type: 'submit',
        disabled: disabled,
        className: disabled ? 'form-fields-to-disable' : '',
    });

    if (disabled) {
        [textInput, colorInput, submitBtn].map((el) => {
            el.classList.add('form-fields-to-disable');
        });
    }

    handleFormSubmit(form, onSubmit);

    [textInput, colorInput, submitBtn].map((el) => form.appendChild(el));

    return form;
};
