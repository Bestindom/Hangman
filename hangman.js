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
    'WATERFALL',
    'SPRING',
    'HURRICANE'
];

let startBtn = document.getElementById("start");
let game = document.getElementById("game");
let draw = document.getElementById("draw");
let lettersWord = document.getElementById("lettersWord");
let wordContainer = document.getElementById("wordContainer");
let alphabet = document.getElementById("alphabet");
let img = document.getElementById('image');
let yourLive = 1;

// Generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame ()
{
    startBtn.style.display = 'none';
    let wordToPlay = splitWord();
    printAlphabet(wordToPlay);
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
        underscoreSpan.id = ("underscore" + i);
        lettersSpan.classList.add("lettersWord");

        wordContainer.appendChild(underscoreSpan);
        lettersWord.appendChild(lettersSpan);
    }
    
    return lettersArray;
};

function printAlphabet (wordToPlay)
{
    let row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < alphabetList.length; i++)
    {
        let letter = document.createElement("button");
        letter.classList.add("col-sm-2");
        letter.id = 'letter' + i;  //mirar el tema id, PARA QUE CADA UNA TENGA UNO DIFETENTE Y HACER....
        letter.textContent = alphabetList[i];

        row.appendChild(letter);

        letter.addEventListener("click",
        function clickHandler()
        {
            checkLetter(letter, wordToPlay);

            // elimino el event listener de esa letra, NOTA PARA LA PROXIMA, NOMBRAR LA FUNCION :)
            letter.removeEventListener("click", clickHandler);
        });
    }
    alphabet.appendChild(row);
};

function checkLetter(letter, wordToPlay)
{
    console.log(letter.textContent);
    console.log(wordToPlay);
    let concide = false;

    for (let i = 0; i < wordToPlay.length; i++)
    {
        console.log("esta es la wordToPlay = " + wordToPlay[i]);
        if (letter.textContent == wordToPlay[i])
        {
            console.log("LA LETRA COINCIDE");
            let letterSwap = document.getElementById("underscore" + i)
            letterSwap.textContent = wordToPlay[i];
            concide = true;
        }
    }

    if (!concide)
    {
        letter.style.background = 'crimson';
        liveControl();
    }
    else
    {
        letter.style.background = 'seagreen';
    }
};

function liveControl()
{
    for (let i = 0; i < 9; i++)
    {
        if(i == yourLive)
        {
            img.src = '../images/step' + i + '.png';
        }
    }

    if(yourLive == 8)
    {
        alert('Dead');
    }

    yourLive++;
};