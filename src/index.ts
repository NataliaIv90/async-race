import { app } from './components/app/app';
import './style.css';

const bodyElement: HTMLElement = document.querySelector('body') as HTMLElement;

bodyElement.appendChild(app());
