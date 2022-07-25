import { onSnake, expandSnake } from './snake.js';
import { randomGridPosition } from './grid.js';

let food = getRandomFoodPosition();
let expansionRate = 10;

window.addEventListener('keypress', e => {
	switch (e.key) {
		case 's':
			expansionRate = 1;
			break;
		case 'f':
			expansionRate = 10;
			break;
		default :
			expansionRate = expansionRate;
	}
});

export function update() {
	if (onSnake(food)) {
		expandSnake(expansionRate)
		food = getRandomFoodPosition();
	}
}

export function draw(gameBoard) {
	const foodElement = document.createElement('div');
	foodElement.style.gridRowStart = food.y;
	foodElement.style.gridColumnStart = food.x;
	foodElement.classList.add('food');
	gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
	let newFoodPosition;
	while (newFoodPosition == null || onSnake(newFoodPosition)) {
		newFoodPosition = randomGridPosition();
	}
	return newFoodPosition;
}