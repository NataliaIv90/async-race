export const toggleDisabledInput = (active?: string) => {
    document.querySelectorAll('.form-fields-to-disable').forEach((el) => {
        if (el instanceof HTMLInputElement || el instanceof HTMLButtonElement) {
            if (active === 'active') {
                el.disabled = false;
            } else {
                el.disabled = true;
            }
        }
    });
};
