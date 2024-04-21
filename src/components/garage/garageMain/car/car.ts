import { createElement } from '../../../../shared/functions/createElement';

interface ICarData {
    color: string;
    size?: '60px' | '30px';
}

export const car = ({ color, size = '60px' }: ICarData): HTMLElement => {
    const span = createElement({ element: 'span', className: 'car-icon' });

    span.innerHTML = `
        <svg fill="${color}" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width=${size} height=${size} viewBox="0 0 99.382 99.382" xml:space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M17.001,49.693c-4.12,0-7.46,3.338-7.46,7.459c0,0.319,0.026,0.631,0.066,0.938c0.462,3.677,3.593,6.521,7.394,6.521 c3.906,0,7.105-3.002,7.429-6.823c0.019-0.211,0.032-0.422,0.032-0.638C24.463,53.031,21.123,49.693,17.001,49.693z M13.264,54.342l1.522,1.521c-0.119,0.203-0.211,0.423-0.271,0.656H12.37C12.483,55.706,12.794,54.967,13.264,54.342z M12.364,57.812h2.16c0.062,0.229,0.15,0.447,0.27,0.646l-1.524,1.524C12.798,59.361,12.479,58.62,12.364,57.812z M16.356,61.787 c-0.809-0.111-1.543-0.429-2.164-0.896l1.517-1.518c0.199,0.116,0.418,0.201,0.647,0.262V61.787z M16.356,54.672 c-0.235,0.062-0.455,0.153-0.66,0.274l-1.521-1.521c0.625-0.475,1.366-0.788,2.181-0.901V54.672z M17.647,52.524 c0.813,0.113,1.555,0.428,2.18,0.902l-1.52,1.52c-0.205-0.121-0.426-0.214-0.66-0.274V52.524z M17.647,61.786v-2.151 c0.229-0.061,0.447-0.146,0.646-0.264l1.519,1.52C19.191,61.357,18.456,61.675,17.647,61.786z M20.738,59.988l-1.53-1.531 c0.118-0.199,0.217-0.414,0.278-0.646h2.144C21.516,58.62,21.21,59.367,20.738,59.988z M19.487,56.52 c-0.061-0.233-0.152-0.453-0.271-0.656l1.522-1.521c0.471,0.625,0.782,1.364,0.894,2.179L19.487,56.52L19.487,56.52z"/> <path d="M78.611,49.758c-4.103,0-7.428,3.324-7.428,7.428c0,0.317,0.025,0.627,0.064,0.934c0.46,3.66,3.578,6.494,7.363,6.494 c3.889,0,7.074-2.989,7.396-6.794c0.019-0.21,0.032-0.42,0.032-0.634C86.04,53.082,82.715,49.758,78.611,49.758z M74.891,54.387 l1.516,1.516c-0.118,0.202-0.21,0.421-0.27,0.653h-2.136C74.112,55.744,74.422,55.009,74.891,54.387z M73.994,57.842h2.15 c0.062,0.229,0.15,0.444,0.269,0.644l-1.519,1.52C74.427,59.386,74.108,58.646,73.994,57.842z M77.969,61.801 c-0.805-0.112-1.535-0.429-2.154-0.896l1.51-1.51c0.198,0.115,0.417,0.201,0.645,0.26V61.801z M77.969,54.715 c-0.233,0.061-0.453,0.152-0.656,0.272l-1.514-1.514c0.622-0.471,1.36-0.784,2.17-0.897V54.715z M79.255,52.576 c0.812,0.113,1.549,0.428,2.17,0.898l-1.513,1.513c-0.204-0.12-0.423-0.213-0.657-0.272V52.576z M79.255,61.8v-2.145 c0.229-0.059,0.446-0.146,0.645-0.262l1.511,1.512C80.792,61.371,80.061,61.687,79.255,61.8z M82.332,60.009l-1.523-1.524 c0.117-0.199,0.216-0.412,0.276-0.643h2.134C83.106,58.646,82.802,59.389,82.332,60.009z M81.087,56.555 c-0.06-0.232-0.15-0.451-0.27-0.653l1.516-1.516c0.469,0.622,0.778,1.357,0.889,2.169H81.087z"/> <path d="M99.352,52.001c-0.026-0.983-0.331-1.941-0.882-2.759l-0.402-0.6l-1.757-4.635c-0.331-0.875-1.139-1.484-2.07-1.562 c-1.728-0.146-4.663-0.368-7.465-0.471c-9.794-5.201-27.904-10.43-43.262-4.731c-3.151,1.169-12.154,5.744-12.154,5.744 s-14.62-0.37-25.047,3.349c-4.108,1.465-6.699,5.543-6.266,9.884c0.087,0.869,0.215,1.642,0.341,2.266 c0.199,0.987,1.014,1.731,2.015,1.842l6.487,0.711c-0.408-0.852-0.695-1.773-0.818-2.755c-0.052-0.401-0.078-0.772-0.078-1.132 c0-4.967,4.041-9.008,9.008-9.008c4.968,0,9.01,4.042,9.01,9.008c0,0.26-0.017,0.514-0.038,0.768 c-0.095,1.115-0.399,2.172-0.868,3.135h45.045l0.365-0.021c-0.4-0.842-0.683-1.753-0.804-2.72 c-0.052-0.403-0.077-0.773-0.077-1.127c0-4.95,4.026-8.978,8.977-8.978s8.978,4.026,8.978,8.978c0,0.259-0.017,0.511-0.038,0.764 c-0.062,0.734-0.223,1.438-0.453,2.11L88.112,60l6.979-0.923c1.214-0.161,2.285-0.876,2.898-1.936l0.695-1.199 c0.479-0.83,0.721-1.777,0.695-2.735L99.352,52.001z M74.63,43.068H40.469c0,0,0.203-0.809-0.69-1.786 c0,0,8.733-5.633,22.22-4.226c3.711,0.388,8.246,0.651,14.42,3.86L74.63,43.068z"/> </g> </g> </g>
        </svg>
    `;

    return span;
};
