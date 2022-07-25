import { getSnakeHeadX, getSnakeHeadY } from './snake.js';

let inputDirection = { x: 0, y: 1 };
let lastInputDirection = { x: 0, y: 1 };

export function getMove() {
    let snakeHeadX = getSnakeHeadX();
    let snakeHeadY = getSnakeHeadY();
    if (snakeHeadX == 48 && lastInputDirection.y == 0 && snakeHeadY !== 1) {
        inputDirection = { x: 0, y: -1 };
    } else if (snakeHeadX == 1 && lastInputDirection.y == 0) {
        inputDirection = { x: 0, y: 1 };
    } else if (snakeHeadY == 1 && lastInputDirection.x == 0) {
        inputDirection = { x: -1, y: 0 };
    } else if (snakeHeadY == 2 && lastInputDirection.x == 0 && snakeHeadX !== 48 && snakeHeadX !== 1) {
        inputDirection = { x: 1, y: 0 };
    } else if (snakeHeadY == 27 && lastInputDirection.x == 0 && snakeHeadX !== 48) {
        inputDirection = { x: 1, y: 0 };
    } else if (snakeHeadX % 2 == 0 && lastInputDirection.y == 0 && snakeHeadY !== 1) {
        inputDirection = { x: 0, y: -1 };
    } else if (snakeHeadX % 2 == 1 && lastInputDirection.y == 0 && snakeHeadY !== 1) {
        inputDirection = { x: 0, y: 1 };
    }
}

export function getInputDirection() {
    getMove()
	lastInputDirection = inputDirection;
	return inputDirection;
}