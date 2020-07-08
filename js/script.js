/* Il programma dovrà chiedere all'utente il numero
di chilometri che vuole percorrere e l'età
del passeggero. Sulla base di queste informazioni 
dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 */

// dichiaro le variabili

var nome,
  kilNumber,
  age,
  kilPrice = 0.21,
  condition1,
  condition2,
  totalPrice,
  roundPrice;

// assegnazioned delle variabili
nome = prompt("Inserisci il tuo nome:");
kilNumber = parseInt(
  prompt("Inserisci il numero di km che intendi percorrere:")
);
age = parseInt(prompt("Inserisci la tua età:"));
// definisco i due contenitore in HTML
document.getElementById("kil").innerHTML = kilNumber;
document.getElementById("age").innerHTML = age;
// condizioni per l IF
condition1 = age < 18;
condition2 = age >= 65;
// definisco il prezzo totale = (kilomentri * prezzoAlKilometro)
totalPrice = kilNumber * kilPrice;

// ciclo IF
if (condition1) {
  /* le variabili di sconto le metto nell'if, vengono create solo all'occorrenza */
  var underDiscount = 0.2;
  totalPrice -= totalPrice * underDiscount;
} else if (condition2) {
  var overDiscount = 0.4;
  totalPrice -= totalPrice * overDiscount;
} else {
}

roundPrice = totalPrice.toFixed(2);

// inserisco il prezzo arrotondato nel contenitore #price
document.getElementById("text").innerHTML = nome + " il tuo viaggio";
document.getElementById("price").innerHTML = roundPrice;
