//Insert name of passenger

var yourName = prompt('Inserisci il tuo nome');
console.log(yourName);

document.getElementById('nome').innerHTML = yourName;

//Insert age

var age = parseInt(prompt('Quanti anni hai?'));
console.log(age);
console.log(typeof (age));

document.getElementById('anni').innerHTML = age;

//Insert km

var distance = parseInt(prompt('Quanti kilometri devi percorrere?'));
console.log(distance,' km');
console.log(typeof (distance));

document.getElementById('distanza').innerHTML = distance;

//Ticket price
var price = 0.21 * distance;
console.log(price , '€');

if (age <= 17) {
    var finalPrice = ( price - ( (price * 20) / 100) );
    var discount = '20%';
    console.log( yourName ,'il prezzo finale è: ', finalPrice , '. Hai usufruito del 20% di sconto.'); 
    document.getElementById('sconto').innerHTML = discount;
    document.getElementById('prezzo').innerHTML = finalPrice + " €";
} else if (age >= 65){
    var finalPrice = ( price - ( ( price * 40) / 100 ));
    console.log( yourName , 'il prezzo finale è: ', finalPrice , '. Hai usufruito del 40% di sconto.' ); 
    var discount = '40%';
    document.getElementById('sconto').innerHTML = discount;
    document.getElementById('prezzo').innerHTML = finalPrice + " €";
} else{
    console.log( yourName , 'il prezzo finale è: ', price , '. Non abbiamo potuto applicare nessuno sconto.' ); 
    var discount = 'Nessuno sconto applicabile';
    document.getElementById('sconto').innerHTML = discount;
    document.getElementById('prezzo').innerHTML = price + " €";
}