import { app } from './components/app/app';
import './style.css';

const initializeApp = async () => {
    const appElement = await app();
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
        bodyElement.appendChild(appElement);
    } else {
        console.error('Body element not found');
    }
};

initializeApp();
