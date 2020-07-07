/* Il programma dovrà chiedere all'utente il numero
di chilometri che vuole percorrere e l'età
del passeggero. Sulla base di queste informazioni 
dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 */

// dichiaro le variabili
var kilNumber,
  age,
  kilPrice = 0.21,
  underDiscount = 0.2,
  overDiscount = 0.4,
  condition1,
  condition2,
  totalPrice,
  roundPrice;

// assegnazioned delle variabili
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
// defiinsco il prezzo totale = (kilomentri * prezzoAlKilometro)
totalPrice = kilNumber * kilPrice;

// ciclo IF
if (condition1) {
  totalPrice -= totalPrice * underDiscount;
  roundPrice = totalPrice.toFixed(2);
  alert(
    `Il prezzo del tuo biglietto è ridotto del ${
      underDiscount * 100
    }%, quindi è: ${roundPrice}€`
  );
} else if (condition2) {
  totalPrice -= totalPrice * overDiscount;
  roundPrice = totalPrice.toFixed(2);
  alert(
    `Il prezzo del tuo biglietto è ridotto del ${
      overDiscount * 100
    }%, quindi è: ${roundPrice}€`
  );
} else {
  roundPrice = totalPrice.toFixed(2);
  alert(`Il prezzo del tuo biglietto è: ${roundPrice}€`);
  // alert("Il prezzo è: " + prezzo);
}

// inserisco il prezzo arrotondato nel contenitore #price
document.getElementById("price").innerHTML = roundPrice;
