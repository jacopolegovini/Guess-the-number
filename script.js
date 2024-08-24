// Recupera gli elementi dal DOM
// Crea le funzioni necessarie
// Crea le variabili necessarie
// Fai partire la funzione random
// Al click genera un evento
    // Leggi il valore inserito dall'utente
    // Crea un if con i tre casi: maggiore, minore, uguale
        // Aggiungi un elemento a tips (puoi usare una funzione)
        // Modifica il contatore della classe attemps




// Recupera gli elementi dal DOM
const numberElement = document.getElementById('number');
const tipsElement = document.querySelector('.tips-none');
const buttonElement = document.querySelector('button');
const attempsElement = document.querySelector('.attemps');


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
    tipsElement.innerHTML = `<div>Prova con un numero ${higherOrLower}</div>`;
    tipsElement.classList.remove('tips-none');
    tipsElement.classList.add('tips');
}

/**
 * Create a sentence for the remaining attemps
 * @param {number} attemps 
 * @returns Complete sentence
 */
function toggleAttempsElement(attemps) {
    if (attemps < 10) {
        const attempsChildElement = document.createElement("div");
        const attempsChildTextElement = document.createTextNode('Ti rimangono ancora ' + attemps + ' tentativi.');
        attempsChildElement.appendChild(attempsChildTextElement);
        return attempsElement.appendChild(attempsChildElement);
    } else {
        const attempsChildElement = document.createElement("div");
        attempsChildElement.classList.add('test')
        const attempsChildTextElement = document.createTextNode('Ti rimangono ancora ' + attemps + ' tentativi.');
        attempsChildElement.appendChild(attempsChildTextElement);
        return attempsElement.appendChild(attempsChildElement);
    }
}

// Crea le variabili necessarie
let result = 0;
let max = 100;
let attemps = 10;

// Fai partire la funzione random
const randomNumber = randomNumberFunction(max);


// Al click genera un evento
buttonElement.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Leggi il valore inserito dall'utente
    const number = numberElement.value;

    console.log('randomNumber: ' + randomNumber + ' input-number: ' + number)
    
    if (attemps !== 10) {
        attempsElement.removeChild(attempsElement.firstElementChild);
    }

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

    } else {
        tipsElement.innerHTML = `<div>Congratulazioni!</div>`;
        location.reload();
    }
})