interface ICreateElementData {
    element: string;
    innerHtml?: string | number | HTMLElement;
    className?: string;
}

export const createElement = ({ element, innerHtml, className }: ICreateElementData): HTMLElement => {
    const currentElement = document.createElement(element);

    if (innerHtml) {
        if (typeof innerHtml === 'string') {
            currentElement.innerHTML = innerHtml;
        }

        if (typeof innerHtml === 'number') {
            currentElement.innerHTML = innerHtml.toString();
        }

        if (innerHtml instanceof HTMLElement) {
            currentElement.appendChild(innerHtml);
        }
    }

    if (className) {
        currentElement.classList.add(className);
    }

    return currentElement;
};
