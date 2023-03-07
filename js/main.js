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
console.log(containerDom);

// Genero 5 numeri casuali

let cellaNumero; 
let listaNumeri = [];

for (let i = 0; i < 5; i++) {
    numeroRandom = generaNumeroRandom(1, 100);
    console.log(numeroRandom);
    cellaNumero = numberContainerGenerator(numeroRandom); 
    console.log(cellaNumero);
    containerDom.append(cellaNumero); 
    listaNumeri.push(numeroRandom);
}
console.log(listaNumeri);







// FUNZIONI

// Funzione per generare numero random
function generaNumeroRandom(min, max) {
    let numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}

// Funzione per creare contenitore numero
function numberContainerGenerator(number) {
    const numberContainer = document.createElement('div');
    numberContainer.innerHTML = number;
    numberContainer.classList.add('number-container');

    // Assegno posizione random
    let misuraX = randomPosition(50, 1000);
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
/* function promptNumeri() {
    let 
} */

