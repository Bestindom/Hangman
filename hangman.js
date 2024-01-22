let alphabetList =
[
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
];

let wordList =
[
    'waterfall',
    'spring',
    'hurricane'
];

let startBtn = document.getElementById("start");
let game = document.getElementById("game");
let draw = document.getElementById("draw");
let lettersWord = document.getElementById("lettersWord");
let wordContainer = document.getElementById("wordContainer");
let alphabet = document.getElementById("alphabet");

// Generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame ()
{
    startBtn.style.display = 'none';
    printAlphabet();
    splitWord();
};

function printAlphabet ()
{
    let row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < alphabetList.length; i++)
    {
        let letter = document.createElement("div");
        letter.classList.add("col-sm-2");
        letter.id = 'letter';
        letter.textContent = alphabetList[i];

        row.appendChild(letter);

        letter.addEventListener("click",
        function()
        {
            checkLetter(letter);
        });
    }
    alphabet.appendChild(row);
};

function splitWord ()
{
    let randomWord = getRandomInt(0, wordList.length - 1); // random integer between 0 and last word positon
    let lettersArray = wordList[randomWord].split('');

    for (let i = 0; i < lettersArray.length; i++)
    {
        let underscoreSpan = document.createElement("span");
        let lettersSpan = document.createElement("span");

        underscoreSpan.textContent = "_ ";
        lettersSpan.textContent = lettersArray[i];

        underscoreSpan.classList.add("underscore");
        lettersSpan.classList.add("lettersWord");

        wordContainer.appendChild(underscoreSpan);
        lettersWord.appendChild(lettersSpan);
    }
};

function checkLetter(letter)
{
    let underscoreSpans = document.querySelectorAll(".underscore");
    let lettersSpan = document.querySelectorAll(".lettersWord");

    for (let i = 0; i < lettersSpan.length; i++)
    {
        if (letter.textContent === lettersSpan[i].textContent)
        {
            underscoreSpans[i].textContent = lettersSpan[i].textContent + " ";
        }
    }
}