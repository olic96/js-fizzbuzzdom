// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100.

// MILESTONE 1
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// 1. Creo lista da 1 a 100
// SE sono multipli di 3 E multippli di 5, stampo FizzBuzz
// ALTRIMENTI SE sono solo multipli di 3 stampo Fizz
// ALTRIMENTI SE sono solo multipli di 5 stampo Buzz
// ALTRIMENTI stampo il numero

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

// 1. Prendo un elemento nel container dal DOM
const list = document.querySelector(".list");
// 2. Dentro all'elemento inserisco dei item per ogni numero
// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
for (let i = 1; i <= 100; i++) {
    const item = document.createElement("li");
    item.classList.add("item");
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        item.innerHTML = "FizzBuzz";
        item.classList.add("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
        item.innerHTML = "Fizz";
        item.classList.add("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
        item.innerHTML = "Buzz";
        item.classList.add("Buzz");
    } else {
        console.log(i);
        item.innerHTML = i;
    }
}




