import { garageForm } from './garageForm/garageForm';
import { garageBtnConsole } from './garageBtnsConsole/garageBtnsConsole';
import { createCarFormDataHandler, updateCarFormDataHandler } from '../../../shared/functions/handleSubmit';

export const garageHeader = (): HTMLElement => {
    const div = document.createElement('div');
    div.classList.add('garage-header');

    div.appendChild(
        garageForm({
            id: 'createCarForm',
            submitBtnText: 'CREATE',
            onSubmit: createCarFormDataHandler,
        })
    );

    div.appendChild(
        garageForm({
            id: 'updateCarForm',
            submitBtnText: 'UPDATE',
            onSubmit: updateCarFormDataHandler,
            disabled: true,
        })
    );
    div.appendChild(garageBtnConsole());

    return div;
};
