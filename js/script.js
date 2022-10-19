


/*
**Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
**Pari e Dispari**
*/
//componenti html primo esercizio
const userInput = document.querySelector('.user_input').value;
const isPalindromoResult = document.querySelector('.isPalindromoResult');
let reverseWord = '';

function isPalindromo(word){
  for (i = word.length - 1; i >= 0; i--){
    reverseWord += word[i];
  }
  console.log(reverseWord);
  console.log(word);
  if (reverseWord === word) {
    console.log("palindromo");
  } else {
    console.log("Non palindromo");
  }
}

isPalindromo('ozozor');


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

//componenti secondo esercizio