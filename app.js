import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './did-user-win.js';

const playButton = document.getElementById('play');
const throwResult = document.getElementById('throw-result');
const winsDiv = document.getElementById('wins');
const lossesDiv = document.getElementById('losses');
const drawsDiv = document.getElementById('draws');
const resetButton = document.getElementById('reset');

let wins = 0;
let losses = 0;
let draws = 0;

playButton.addEventListener('click', () => {

    const playerChoice = document.querySelector('input:checked');
    let randomMove = getRandomThrow();
    let result = didUserWin(playerChoice.value, randomMove);

    if (result === 'win') {
        wins++;
        winsDiv.textContent = wins;
        throwResult.textContent = `Your ${playerChoice.value} beats my ${randomMove}! Wanna play again?`;
    } 
    else if (result === 'loss') {
        losses++;
        lossesDiv.textContent = losses;
        throwResult.textContent = `My ${randomMove} beats your ${playerChoice.value}! Wanna try again?`; 
    }
    else if (result === 'draw') {
        draws++;
        drawsDiv.textContent = draws;
        throwResult.textContent = `${playerChoice.value} ties with ${randomMove}!`;
    }
});

resetButton.addEventListener('click', () => {
    
    const playerChoice = document.querySelector('input:checked');
    playerChoice.checked = false;
    wins = 0;
    losses = 0;
    draws = 0;
    throwResult.textContent = '';
    lossesDiv.textContent = '';
    winsDiv.textContent = '';
    drawsDiv.textContent = '';
});