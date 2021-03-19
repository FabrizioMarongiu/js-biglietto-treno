//Insert name of passenger

var yourName = prompt('Inserisci il tuo nome');
console.log(yourName);

//Insert age

var age = parseInt(prompt('Quanti anni hai?'));
console.log(age);
console.log(typeof (age));

//Insert km

var distance = parseInt(prompt('Quanti kilometri devi percorrere?'));
console.log(distance,' km');
console.log(typeof (distance));

//Ticket price
var price = 0.21 * distance;
console.log(price , '€');

if (age <= 17) {
    var finalPrice = ( price - ( (price * 20) / 100) );
    console.log('il prezzo finale è: ', finalPrice ); 
} else if (age >= 65){
    var finalPrice = ( price - ( ( price * 40) / 100 ));
    console.log( yourName, 'il prezzo finale è: ', finalPrice ); 
}