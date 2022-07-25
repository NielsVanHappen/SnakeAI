import { getInputDirection } from './AI.js';

export let snakeSpeed = 1000;
let oldSnakeSpeed = 1000;

window.addEventListener('keydown', e => {
	switch (e.key) {
		case '1':
			snakeSpeed = 10;
			break;
		case '2': 
			snakeSpeed = 20;
			break;
		case '3': 
			snakeSpeed = 30;
			break;
		case '4': 
			snakeSpeed = 40;
			break;
		case '5': 
			snakeSpeed = 50;
			break;
		case '6': 
			snakeSpeed = 60;
			break;
		case '7': 
			snakeSpeed = 70;
			break;
		case '8': 
			snakeSpeed = 80;
			break;
		case '9': 
			snakeSpeed = 90;
			break;
		case '0': 
			snakeSpeed = 100;
			break;
		case ' ': 
			if (snakeSpeed == 0) {
				snakeSpeed = oldSnakeSpeed;
			} else {
				oldSnakeSpeed = snakeSpeed;
				snakeSpeed = 0;
			}
			break;
		default :
			snakeSpeed = snakeSpeed;
	}
});

let snakeBody = [
	{ x: 15, y: 14 },
	{ x: 14, y: 14 },
	{ x: 13, y: 14 }
];
let newSegments = 0;

export function update() {
	addSegments()
	const inputDirection = getInputDirection();
	let snakeHead = { x: getSnakeHeadX(), y: getSnakeHeadY() };
	snakeHead.x += inputDirection.x;
	snakeHead.y += inputDirection.y;
	snakeBody.unshift(snakeHead);
	snakeBody.splice(-1, 1);
}

// make more efficient
export function draw(gameBoard) {
	snakeBody.forEach(segment => {
		const snakeElement = document.createElement('div');
		snakeElement.style.gridRowStart = segment.y;
		snakeElement.style.gridColumnStart = segment.x;
		snakeElement.classList.add('snake');
		gameBoard.appendChild(snakeElement);
	});
}

export function expandSnake (amount) {
	newSegments += amount;
}

export function onSnake(position, { ignoreHead = false } = {}) {
	return snakeBody.some((segment, index) => {
	if (ignoreHead = true && index === 0) return false
		return equalPositions (segment, position);
	});
}

export function getSnakeHead() {
	return snakeBody[0];
}

export function getSnakeHeadX() {
	return snakeBody[0].x;
}

export function getSnakeHeadY() {
	return snakeBody[0].y;
}

export function snakeIntersection() {
	return onSnake(snakeBody[0], { ignoreHead: true });
}

function equalPositions(pos1, pos2) {
	return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
	for (let i = 0; i < newSegments; i++) {
		snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
	}

	newSegments = 0;
}