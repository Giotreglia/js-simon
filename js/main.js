// MEMORY NUMBER

/*

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

// DOM elements

const containerDom = document.querySelector('.container');
const scoreDom = document.getElementById('score');
const numeriIndovinatiDom = document.getElementById('numeri-indovinati');
console.log(containerDom);

// Genero 5 numeri casuali

let cellaNumero; 
let listaNumeri = [];
let numeriUtente = [];
let risultato = [];

for (let i = 0; i < 5; i++) {
    numeroRandom = generaNumeroRandomUnico(listaNumeri, 1, 100);
    cellaNumero = numberContainerGenerator(numeroRandom); 
    containerDom.append(cellaNumero); 
    listaNumeri.push(numeroRandom);
}

// Rendo invisibili i numeri dop 30 secondi
setTimeout(function() {
    containerDom.classList.add('hide');
}, 30000);

// Chiedo i numeri all'utente 5 volte 

setTimeout(function() {
        
    for (let i = 0; i < 5; i++) {

        let numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 100'));
        numeriUtente.push(numeroUtente);
        if (listaNumeri.includes(numeroUtente)) {
            risultato.push(numeroUtente);            
        }
        containerDom.classList.remove('hide');

    }

    scoreDom.innerHTML = 
    `Il tuo risultato è ${risultato.length}`;
    numeriIndovinatiDom.innerHTML = 
    `Hai indovinato i seguenti numeri: ${risultato}`;

    console.log(listaNumeri);
    console.log(numeriUtente);
    console.log(`I numeri uguali sono ${risultato}`);
}, 31000);








// FUNZIONI

// Funzione per generare numero random
function generaNumeroRandom(min, max) {
    let numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}

// Funzione genera numero rundom univoco
function generaNumeroRandomUnico(blacklist, min, max) {
    let isValid = false;
    let numeroRandomUnico;

    while (!isValid) {
        numeroRandomUnico = generaNumeroRandom(min, max);
        if (!blacklist.includes(numeroRandomUnico)) {
            isValid = true;
        }
    }
    return numeroRandomUnico;
}

// Funzione per creare contenitore numero
function numberContainerGenerator(number) {
    const numberContainer = document.createElement('div');
    numberContainer.innerHTML = number;
    numberContainer.classList.add('number-container');

    // Assegno posizione random
    let misuraX = randomPosition(50, 600);
    let misuraY = randomPosition(50, 800);
    numberContainer.style.position = `absolute`;
    numberContainer.style.top = misuraY;
    numberContainer.style.left = misuraX;

    // Assegno fontsize e colore random 
    let fontSize = generaNumeroRandom(50, 150);
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    numberContainer.style.fontSize = `${fontSize}px`;
    numberContainer.style.color = `#${randomColor}`;
    return numberContainer;
}

// Funzione per generare posizione random 
function randomPosition(misuraMin, misuraMax) {
    let x = generaNumeroRandom(misuraMin, misuraMax);
    return x + 'px';
}

// Funzione prompt per richieder numeri
function promptNumeri() {
    let numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 100'));
    return numeroUtente;
} 



