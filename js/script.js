


/*
**Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
**Pari e Dispari**
*/

//dichiaro una variabile globale
let reverseWord = '';

//dichiaro la funzione con un parametro
function isPalindromo(word){
  //for loop dove i prende la lunghezza del parametro fino a quando è maggiore di 0 allora decrementa
  // cosi da partire dalla fine verso l'inizio
  for (let i = word.length - 1; i >= 0; i--){
    //mette l'indice di word (char per char) dentro reverseWord
    reverseWord += word[i];
  }
  console.log(reverseWord);
  console.log(word);

  //la condizione che controlla se il parametro è un palindromo o no
  if (reverseWord === word) {
    console.log("palindromo");
  } else {
    console.log("Non palindromo");
  }
}
//chiamo la funziona con il parametro indicato
isPalindromo('anna');


/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
**Consigli del giorno**
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/

//prendo il bottone dall'HTML
const playButton = document.querySelector('.gioca');

//aggiunto un evento al bottone per applicare scelte calcoli e funzioni al click
playButton.addEventListener('click', function(){
  //faccio scegliere al giocatore pari o dispari come stringa
  let choice = prompt("Pari o Dispari");
  console.log("Il giocatore ha scelto : " + choice);
  //il giocatore sceglie un numero
  let inputNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
  console.log("Il giocatore ha inserito il numero: " + inputNumber);
  //il computer sceglie un numero
  let computerNumber =Math.ceil(Math.random() * (5 - 1 + 1));
  console.log("Il computer ha inserito il numero: " + computerNumber);
  //la somma dei due numeri
  let somma = inputNumber + computerNumber;
  console.log("La somma : " + somma);

  //chiamo la funzione
  pariDispari();

  //la funzione che valuta condizioni e opzioni delle variabili
  function pariDispari(){
    if(inputNumber < 1 || inputNumber > 5){
      console.log("Inserisci un numero valido");
    }
    if((choice.toLowerCase() === 'pari') && (somma % 2 == 0)){
      console.log("Il giocatore ha vinto scegliendo pari");
    } else if ((choice.toLowerCase() === 'dispari') && (somma % 2 == 1)){
      console.log("Il giocatore ha vinto scegliendo dispari");
    } else {
      console.log("Il computer vince");
    }
  }
})
