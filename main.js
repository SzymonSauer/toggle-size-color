const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const color = document.querySelector('.color');
const p = document.querySelector('p');
let fontValue = 36;

const zoom = () => {
	if (fontValue >= 60) return;
	fontValue += 5;
	p.style.fontSize = fontValue + 'px';
};

const unZoom = () => {
	if (fontValue <= 21) return;
	fontValue -= 5;
	p.style.fontSize = fontValue + 'px';
};

const randomColor = () => {
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);

	p.style.color = `rgb(${r}, ${g}, ${b})`;
};

sizeUp.addEventListener('click', zoom);
sizeDown.addEventListener('click', unZoom);
color.addEventListener('click', randomColor);


