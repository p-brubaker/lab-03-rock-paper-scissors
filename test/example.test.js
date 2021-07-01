// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow } from '../get-random-throw.js';
import { didUserWin } from '../did-user-win.js';

const test = QUnit.test;


test('check randomness of randomthrow function (for fun)', (expect) => {
    const expectedScissors = 1;
    const expectedPaper = 1;
    const expectedRock = 1;

    const paperArray = [];
    const scissorsArray = [];
    const rockArray = [];
    
    for (let i = 0; i < 33; i++) {
        let current = getRandomThrow();
        if (current === 'rock') {
            rockArray.push(current);
        } else if (current === 'paper') {
            paperArray.push(current);
        } else if (current === 'scissors') {
            scissorsArray.push(current);
        }
    }

    const actualRock = Math.round(rockArray.length / 11);
    const actualPaper = Math.round(paperArray.length / 11);
    const actualScissors = Math.round(scissorsArray.length / 11);

    expect.equal(expectedScissors, actualScissors);
    expect.equal(expectedPaper, actualPaper);
    expect.equal(expectedRock, actualRock);

});

test('didUserWin returns correct outcome', (expect) => {
    const rpExpect = 'loss';
    const rsExpect = 'win';
    const rrExpect = 'draw';
    const prExpect = 'win';
    const psExpect = 'loss';
    const ppExpect = 'draw';
    const spExpect = 'win';
    const srExpect = 'loss';
    const ssExpect = 'draw';

    const rpActual = didUserWin('rock', 'paper');
    const rsActual = didUserWin('rock', 'scissors');
    const rrActual = didUserWin('rock', 'rock');
    const prActual = didUserWin('paper', 'rock');
    const psActual = didUserWin('paper', 'scissors');
    const ppActual = didUserWin('paper', 'paper');
    const spActual = didUserWin('scissors', 'paper');
    const srActual = didUserWin('scissors', 'rock');
    const ssActual = didUserWin('scissors', 'scissors');

    expect.equals(rpExpect, rpActual);
    expect.equals(rsExpect, rsActual);
    expect.equals(rrExpect, rrActual);
    expect.equals(spExpect, spActual);
    expect.equals(ppExpect, ppActual);
    expect.equals(psExpect, psActual);
    expect.equals(srExpect, srActual);
    expect.equals(prExpect, prActual);
    expect.equals(ssExpect, ssActual);

});