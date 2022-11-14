//Buttons
export const m00 = document.getElementById("m00");
export const m01 = document.getElementById("m01");
export const m02 = document.getElementById("m02");
export const m10 = document.getElementById("m10");
export const m11 = document.getElementById("m11");
export const m12 = document.getElementById("m12");
export const m20 = document.getElementById("m20");
export const m21 = document.getElementById("m21");
export const m22 = document.getElementById("m22");
export const optX = document.getElementById("opt-x");
export const optO = document.getElementById("opt-o");
export const WinnerX = document.getElementById('winnerX');
export const WinnerO = document.getElementById('winnerO');


let turn = 10;

const input = {
    m00: 0, m01: 0, m02: 0,
    m10: 0, m11: 0, m12: 0,
    m20: 0, m21: 0, m22: 0,
}

let output= {
    winnerX: optX.checked ? 1 : 0,
    winnerO: optO.checked ? 1 : 0,
}

export function getInput() {
    return input;
}

export function clearInput() {
    WinnerO.innerText = '';
    WinnerX.innerText = '';

    optX.checked = false;
    optO.checked = false;

    Object.keys(input).forEach(key => {
        input[key] = 0;
    });

    m00.textContent = "-";
    m00.removeAttribute("disabled");
    m01.textContent = "-";
    m01.removeAttribute("disabled");
    m02.textContent = "-";
    m02.removeAttribute("disabled");
    m10.textContent = "-";
    m10.removeAttribute("disabled");
    m11.textContent = "-";
    m11.removeAttribute("disabled");
    m12.textContent = "-";
    m12.removeAttribute("disabled");
    m20.textContent = "-";
    m20.removeAttribute("disabled");
    m21.textContent = "-";
    m21.removeAttribute("disabled");
    m22.textContent = "-";
    m22.removeAttribute("disabled");
}

export function getOutput() {
    output = {
        winnerX: optX.checked ? 1 : 0,
        winnerO: optO.checked ? 1 : 0,
    }
    return output;
}

function checkTurn(_turn) {
    if(_turn === 10) {
        turn = 20;
        return "X";
    } else {
        turn = 10;
        return "O";
    }
}

m00.addEventListener('click',
    ev => {
        input.m00 = turn;
        m00.textContent = checkTurn(turn);
        m00.setAttribute("disabled", "true");
    }
);
m01.addEventListener('click',
    ev => {
        input.m01 = turn;
        m01.textContent = checkTurn(turn);
        m01.setAttribute("disabled", "true");
    }
);
m02.addEventListener('click',
    ev => {
        input.m02 = turn;
        m02.textContent = checkTurn(turn);
        m02.setAttribute("disabled", "true");
    }
);
m10.addEventListener('click',
    ev => {
        input.m10 = turn;
        m10.textContent = checkTurn(turn);
        m10.setAttribute("disabled", "true");
    }
);
m11.addEventListener('click',
    ev => {
        input.m11 = turn;
        m11.textContent = checkTurn(turn);
        m11.setAttribute("disabled", "true");
    }
);
m12.addEventListener('click',
    ev => {
        input.m12 = turn;
        m12.textContent = checkTurn(turn);
        m12.setAttribute("disabled", "true");
    }
);
m20.addEventListener('click',
    ev => {
        input.m20 = turn;
        m20.textContent = checkTurn(turn);
        m20.setAttribute("disabled", "true");
    }
);
m21.addEventListener('click',
    ev => {
        input.m21 = turn;
        m21.textContent = checkTurn(turn);
        m21.setAttribute("disabled", "true");
    }
);
m22.addEventListener('click',
    ev => {
        input.m22 = turn;
        m22.textContent = checkTurn(turn);
        m22.setAttribute("disabled", "true");
    }
);










