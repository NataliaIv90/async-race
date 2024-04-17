interface IButtonData{
  text:string;
}

export const button = ({text}:IButtonData): HTMLElement => {
  const button = document.createElement('button');

  button.innerText = text;

  return button;
};
