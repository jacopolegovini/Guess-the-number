// Recupera gli elementi dal DOM
// Crea le funzioni necessarie
// Crea le variabili necessarie
// Fai partire la funzione random
// Al click genera un evento
    // Leggi il valore inserito dall'utente
    // Crea un if con i tre casi: maggiore, minore, uguale
        // Aggiungi un elemento a tips (puoi usare una funzione)
        // Modifica il contatore della classe attemps
    // Controlla se il numero di attemps è pari a 0, in caso game over
    




// Recupera gli elementi dal DOM
const numberElement = document.getElementById('number');
const tipsElement = document.querySelector('.tips-none');
const buttonElement = document.querySelector('button');
const attempsElement = document.querySelector('.attemps');
const pugElement = document.querySelector('.pug-image-none');
const cardElement = document.getElementById('card');
const placeholderElement = document.querySelector('placeholder');
const mainDisplayElement = document.querySelector('.main-display');
const postGameCard = document.getElementById('post-game-card');
const playAgainMessageElement = document.querySelector('.play-again-message');
const playAgainButtonElement = document.querySelector('.btn-play-again');
const notPlayAgainButtonElement = document.querySelector('.btn-play-again');




// Crea le funzioni necessarie
/**
 * Create a random number with the max value that you prefer
 * @returns Random number
 */
const randomNumberFunction = max => Math.floor(Math.random() * max) + 1;

/**
 * Create some classes for the tips section
 * @param {string} higherOrLower 
 */
function toggleTipsElement(higherOrLower) {
    tipsElement.innerHTML = `<div>Tips: <i>prova con un numero ${higherOrLower}</i></div>`;
    tipsElement.classList.remove('tips-none');
    tipsElement.classList.add('tips');
}

/**
 * Create a sentence for the remaining attemps
 * @param {number} attemps 
 * @returns Complete sentence
 */
function toggleAttempsElement(attemps) {
    const attempsChildElement = document.createElement("div");
    const attempsChildTextElement = document.createTextNode('Ti rimangono ancora ' + attemps + ' tentativi.');
    attempsChildElement.appendChild(attempsChildTextElement);
    return attempsElement.appendChild(attempsChildElement);
}


// Crea le variabili necessarie
let result = 0;
let max = 100;
let attemps = 10;
let message = '';
let playAgain = 'Vuoi giocare di nuovo?';


// Fai partire la funzione random
const randomNumber = randomNumberFunction(max);


// Al click genera un evento
buttonElement.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Leggi il valore inserito dall'utente
    const number = parseInt(numberElement.value);
    if (isNaN(number)) return;

    // Modifica le dimensioni della carta a seconda del testo interno 
    cardElement.classList.add('card-dimension-higher')
    cardElement.classList.remove('card-dimension')

    console.log('randomNumber: ' + randomNumber + ' input-number: ' + number)
    
    // Controlla se sono presenti altri elementi e cancellali
    if (attemps !== 10) attempsElement.removeChild(attempsElement.firstElementChild)
        
    // Crea un if con i tre casi: maggiore, minore, uguale
    if (randomNumber > number) {
        const higher = 'maggiore';
        toggleTipsElement(higher)
        attemps -= 1;
        toggleAttempsElement(attemps);        
    } else if (randomNumber < number) {
        const lower = 'minore';
        toggleTipsElement(lower)
        attemps -= 1;
        toggleAttempsElement(attemps);
    } else if (randomNumber === number) {
        message = 'Congratulazioni!';
        postGameCard.classList.add('post-game-card');
        postGameCard.classList.remove('post-game-card-none');
        cardElement.remove('card');
        playAgainMessageElement.innerHTML = (`<div>${message}<br>${playAgain}</div>`)
        playAgainButtonElement.addEventListener('click', function(){
            
        })
        

        // tipsElement.innerHTML = `<div>Congratulazioni!</div>`;
        // let playAgain = prompt('Vuoi giocare di nuovo?');
        // if (playAgain) location.reload();
    }

    // Controlla se il numero di attemps è pari a 0, in caso game over
    if (attemps < 1) {
        attempsElement.removeChild(attempsElement.firstElementChild)
        attempsElement.innerHTML = `Hai perso!`
        let playAgain = prompt('Vuoi giocare di nuovo?');
        if (playAgain) location.reload();
    }
})