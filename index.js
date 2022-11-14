import {
    getInput,
    getOutput,
    clearInput,
    WinnerX,
    WinnerO
} from './game.js';

import {
    showControls,
    hideControls,
    showGameResults,
    hideGameResults, gameLoader
} from "./animations.js";

//0 = NULL
//10 = X
//20 = O

import trainData from './train-data.js';

let startDatabase = trainData;

function checkLocalData() {
    const hash_database = localStorage.getItem('hash_database');
    if (hash_database === null) {
        localStorage.setItem('hash_database', JSON.stringify({data: startDatabase}))
    }
}

checkLocalData();

const ia = new brain.NeuralNetwork({
    activation: "sigmoid",
    bias: 2000,
    hiddenLayers: [100],
    iterations: 4000,
});

(async function () {
    await startTrain();
})();

async function startTrain() {
    hideControls();
    await TrainIA();
    showControls();
}

async function checkGame() {
    return new Promise((resolve, reject) => {
        try {
            let {winnerX, winnerO} = ia.run(getInput());
            WinnerX.innerText = winnerX.toString();
            WinnerO.innerText = winnerO.toString();
            resolve({winnerX, winnerO});
        } catch (e) {
            console.log(e);
            reject(e);
        }
    })
}



function TrainIA() {
    return new Promise((resolve, reject) => {
        try {
            const {data} = JSON.parse(localStorage.getItem('hash_database'));
            const output = ia.train(data);
            resolve(output);
        } catch (e) {
            console.log(e);
            reject(e);
        }
    });
}


export const checkBtn = document.getElementById("check-btn");
checkBtn.addEventListener('click', async (ev) => {
    hideControls();
    await checkGame();
    showGameResults();
    showControls();
});

export const trainBtn = document.getElementById("train-btn");
trainBtn.addEventListener('click', async (ev) => {
    hideControls();
    gameLoader.classList.remove('hide');
    gameLoader.classList.add('show');

    const {data} = JSON.parse(localStorage.getItem('hash_database'));

    data.push({
        input: getInput(),
        output: getOutput()
    });

    localStorage.setItem('hash_database', JSON.stringify({data}));

    const output = await TrainIA();

    console.log(output);

    hideGameResults();
    clearInput();
    showControls();
});

export const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', ev => {
    hideControls();
    clearInput();
    showControls();
    hideGameResults();
})

