// Recupera gli elementi dal DOM
// Crea una funzione per generare un numero casuale
// Crea le variabili necessarie
// Al click genera un evento
    // Fai partire la funzione random
    // Leggi il valore inserito dall'utente
    // Crea un if con i tre casi: maggiore, minore, uguale
    // Modifica il contatore della classe attemps




// Recupera gli elementi dal DOM
const numberElement = document.getElementById('number');
const tipsElement = document.querySelector('.tips');
const buttonElement = document.querySelector('button');


// Crea una funzione per generare un numero casuale
const randomNumberFunction = () => Math.floor(Math.random() * 100) + 1;


// Crea le variabili necessarie
let result = 0;


// Al click genera un evento
buttonElement.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Fai partire la funzione random
    const randomNumber = randomNumberFunction();

    // Leggi il valore inserito dall'utente
    const number = numberElement.value;
    
    // Crea un if con i tre casi: maggiore, minore, uguale
    if (randomNumber > number) {

    } else if (randomNumber < number) {

    } else {
        
    }

})