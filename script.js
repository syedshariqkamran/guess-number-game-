const random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessfield');
const guessslot = document.querySelector('.guess');
const remaining = document.querySelector('.last.result'); // Correct the class name
const loworhi = document.querySelector('.loworhi');
const startover = document.querySelector('.resultparas');

const p = document.createElement('p');

let prevguess = [];
let numguess = 1;
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userinput.value);
        validateguess(guess);
    });
}

function validateguess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100");
    } else {
        prevguess.push(guess);
        if (numguess === 11) {
            displayguess(guess);
            displaymessage(`Game over. The random number was ${random}`);
            endgame();
        } else {
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess) {
    if (guess === random) {
        displaymessage("You won the game!");
        endgame();
    } else if (guess < random) {
        displaymessage('Number is too low');
    } else {
        displaymessage('Number is too high');
    }
}

function displayguess(guess) {
    userinput.value = '';
    guessslot.innerHTML += `${guess} `;
    numguess++;
    remaining.innerHTML = `${11 - numguess} `;
}

function displaymessage(message) {
    loworhi.innerHTML = message; // Removed the <h2> tags
}

function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerText = "Start a new game";
    startover.appendChild(p);
    playgame = false;
    newgame();
}
