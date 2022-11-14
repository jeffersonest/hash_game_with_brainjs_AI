import {trainBtn} from "./index.js";

export const gameButtons = document.getElementById("game-buttons");
export const gameResults = document.getElementById("game-results");
export const gameLoader = document.getElementById("game-loader");

export function hideControls() {
    gameLoader.classList.remove('hide');
    gameButtons.classList.remove('show');


    gameLoader.classList.add('show');
    gameButtons.classList.add('hide');

    console.log('show', gameLoader);
}

export function showControls() {
    gameLoader.classList.remove('show');
    gameLoader.classList.add('hide');

    gameButtons.classList.remove('hide');
    gameButtons.classList.add('show');

    console.log('hide', gameLoader);
}

export function showGameResults() {

    gameResults.classList.remove('hide');
    gameResults.classList.add('show');

    trainBtn.classList.remove('hide');
    trainBtn.classList.add('show');

}

export function hideGameResults() {
    gameResults.classList.remove('show');
    gameResults.classList.add('hide');

    trainBtn.classList.remove('show');
    trainBtn.classList.add('hide');
}