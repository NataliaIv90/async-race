import { handleSubmit } from '../../../shared/functions/handleSubmit';
import { garageForm } from './garageForm/garageForm';
import { garageBtnConsole } from './garageBtnsConsole/garageBtnsConsole';

export const garageHeader = (): HTMLElement => {
    const div = document.createElement('div');
    div.classList.add('garage-header');

    div.appendChild(garageForm({ id: 'createCarForm', submitBtnText: 'CREATE', onSubmit: handleSubmit }));
    div.appendChild(
        garageForm({
            id: 'updateCarForm',
            submitBtnText: 'UPDATE',
            onSubmit: handleSubmit,
            disabled: true,
        })
    );
    div.appendChild(garageBtnConsole());

    return div;
};
