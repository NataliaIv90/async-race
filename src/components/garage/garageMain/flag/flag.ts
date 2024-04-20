export const flag = (): HTMLElement => {
    const span = document.createElement('span');

    span.innerHTML = `
    <svg fill="#e01f11" height="40px" width="40px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 464.329 464.329" xml:space="preserve">
        <path d="M391.809,171.256l-159.095-51.566V62.423c0-0.04-0.011-0.077-0.012-0.116c-0.005-0.19-0.031-0.375-0.057-0.562
	    c-0.02-0.145-0.033-0.29-0.065-0.431c-0.037-0.162-0.094-0.315-0.146-0.472c-0.051-0.153-0.096-0.307-0.161-0.453
	    c-0.064-0.143-0.147-0.276-0.224-0.413c-0.08-0.141-0.153-0.285-0.246-0.418c-0.094-0.135-0.207-0.256-0.314-0.381
	    c-0.1-0.117-0.194-0.237-0.305-0.344c-0.117-0.114-0.25-0.211-0.379-0.313c-0.127-0.1-0.249-0.204-0.385-0.292
	    c-0.124-0.08-0.26-0.144-0.392-0.213c-0.163-0.086-0.325-0.172-0.498-0.24c-0.038-0.015-0.07-0.038-0.108-0.052L102.2,11.503V5
	    c0-2.761-2.239-5-5-5H74.062c-2.761,0-5,2.239-5,5v454.329c0,2.761,2.239,5,5,5H97.2c2.761,0,5-2.239,5-5V239.4l90.01-32.701v33.084
	    c0,0.045,0.012,0.087,0.013,0.132c0.007,0.245,0.031,0.488,0.074,0.729c0.011,0.062,0.014,0.125,0.027,0.186
	    c0.061,0.284,0.148,0.561,0.258,0.833c0.033,0.082,0.076,0.158,0.113,0.237c0.088,0.188,0.186,0.371,0.298,0.549
	    c0.056,0.088,0.114,0.172,0.175,0.257c0.049,0.068,0.089,0.142,0.142,0.208c0.109,0.135,0.225,0.261,0.346,0.383
	    c0.008,0.009,0.015,0.018,0.024,0.026c0.206,0.205,0.431,0.385,0.665,0.548c0.042,0.029,0.082,0.059,0.124,0.087
	    c0.232,0.152,0.475,0.284,0.727,0.395c0.052,0.023,0.105,0.043,0.159,0.065c0.263,0.105,0.533,0.192,0.81,0.252
	    c0.037,0.008,0.076,0.012,0.113,0.019c0.306,0.058,0.617,0.094,0.932,0.094c0.302,0,0.605-0.036,0.907-0.092
	    c0.107-0.02,0.208-0.05,0.312-0.076c0.116-0.029,0.233-0.047,0.348-0.085l193.058-63.769c2.053-0.678,3.438-2.599,3.432-4.762
	    C395.262,173.836,393.866,171.923,391.809,171.256z M79.062,454.329V240.896H92.2v213.433H79.062z M216.259,197.961l-14.049,23.629
	    v-18.524L216.259,197.961z M208.344,230.838l23.667-39.804c0.041-0.069,0.062-0.144,0.1-0.214c0.055-0.102,0.114-0.201,0.162-0.307
	    c0.037-0.082,0.066-0.167,0.099-0.252c0.046-0.12,0.083-0.24,0.12-0.362c0.031-0.104,0.065-0.205,0.089-0.31
	    c0.02-0.086,0.033-0.173,0.048-0.26c0.022-0.128,0.037-0.254,0.049-0.382c0.011-0.116,0.022-0.232,0.025-0.349
	    c0.001-0.04,0.012-0.078,0.012-0.118v-28.324c0-2.761-2.239-5-5-5s-5,2.239-5,5v24.82L102.2,228.76V64.445c0-2.761-2.239-5-5-5
	    s-5,2.239-5,5v166.451H79.062V10H92.2v24.426c0,2.761,2.239,5,5,5s5-2.239,5-5V22.143l120.514,43.784v66.211c0,2.761,2.239,5,5,5
	    s5-2.239,5-5v-1.935l141.476,45.855L208.344,230.838z"/>
    </svg>
    `;

    return span;
};
