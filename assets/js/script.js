/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log('********************** ESERCIZIO 1 ********************** ');
const pets = ['dog', 'cat', 'hamster', 'redfish'];

for(let i = 0; i < pets.length; i++){
  console.log('indice ' + i + ': ',pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log('********************** ESERCIZIO 2 ********************** ');

console.log('pets: ', pets.sort());


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log('********************** ESERCIZIO 3 ********************** ');
pets.reverse();

for(let i = 0; i < pets.length; i++){
  console.log('indice ' + i + ': ',pets[i])
}


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log('********************** ESERCIZIO 4 ********************** ');

// easy way
// let firstPet = pets.shift();
// console.log('firstPet: ', firstPet)
// pets.push(firstPet);

let firstPet = pets[0];
console.log('firstPet: ', firstPet)

let petsSlices = pets.slice(1);
console.log('petsSlices: ', petsSlices)

petsSlices.push(firstPet);
console.log('petsSlices after push: ', petsSlices)

for(let i = 0; i < petsSlices.length; i++)
  pets[i]= petsSlices[i];

console.log('pets finale: ', pets)


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log('********************** ESERCIZIO 5 ********************** ');

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
console.log('initial cars: ', cars)


for(let i = 0; i < cars.length; i++)
  cars[i].licensePlate = generateRandomLicensePlate();

console.log('cars with licensePlate: ', cars)


function generateRandomLicensePlate() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  
  let plate = '';

  for (let i = 0; i < 2; i++)
      plate += letters.charAt(Math.floor(Math.random() * letters.length));

  for (let i = 0; i < 3; i++) 
      plate += numbers.charAt(Math.floor(Math.random() * numbers.length));

  for (let i = 0; i < 2; i++) 
      plate += letters.charAt(Math.floor(Math.random() * letters.length));


  return plate;
}


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log('********************** ESERCIZIO 6 ********************** ');
let newCar = {
  brand: "Ferrari",
  color: "yellow",
  licensePlate: generateRandomLicensePlate(),
  model: '488',
  trims: ['pista']
}

cars.push(newCar);

console.log('cars with new car: ', cars)


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log('********************** ESERCIZIO 7 ********************** ');
const justTrims = []

for(let i = 0; i < cars.length; i++)
  justTrims.push(cars[i].trims[0])

console.log('justTrims: ', justTrims);


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log('********************** ESERCIZIO 8 ********************** ');

for(let i = 0; i < cars.length; i++)
  if(cars[i].color.charAt(0).toLowerCase() === 'b')
    console.log(cars[i].color, 'Fizz')
  else
    console.log(cars[i].color, 'Buzz')


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log('********************** ESERCIZIO 9 ********************** ');
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let index = 0;
while(numericArray[index] != 32){
  console.log('numericArray['+index+']', numericArray[index])
  index++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log('********************** ESERCIZIO 10 ********************** ');

const charactersArray = ['a', 'b', 'z', '11', 'n', 'u', 'z', 'd']
const convertedCharactersArray = [];
for(let i = 0; i < charactersArray.length; i++){
  switch(charactersArray[i]){
    case 'a':
      convertedCharactersArray.push(1);
      break;
    case 'b':
      convertedCharactersArray.push(2);
      break;
    case 'c':
      convertedCharactersArray.push(3);
      break;
    case 'd':
      convertedCharactersArray.push(4);
      break;
    case 'e':
      convertedCharactersArray.push(5);
      break;
    case 'f':
      convertedCharactersArray.push(6);
      break;
    case 'g':
      convertedCharactersArray.push(7);
      break;
    case 'h':
      convertedCharactersArray.push(8);
      break;
    case 'i':
      convertedCharactersArray.push(9);
      break;
    case 'j':
      convertedCharactersArray.push(10);
      break;
    case 'k':
      convertedCharactersArray.push(11);
      break;
    case 'l':
      convertedCharactersArray.push(12);
      break;
    case 'm':
      convertedCharactersArray.push(13);
      break;
    case 'n':
      convertedCharactersArray.push(14);
      break;
    case 'o':
      convertedCharactersArray.push(15);
      break;
    case 'p':
      convertedCharactersArray.push(16);
      break;
    case 'q':
      convertedCharactersArray.push(17);
      break;
    case 'r':
      convertedCharactersArray.push(18);
      break;
    case 's':
      convertedCharactersArray.push(19);
      break;
    case 't':
      convertedCharactersArray.push(20);
      break;
    case 'u':
      convertedCharactersArray.push(21);
      break;
    case 'v':
      convertedCharactersArray.push(22);
      break;
    case 'w':
      convertedCharactersArray.push(23);
      break;
    case 'x':
      convertedCharactersArray.push(24);
      break;
    case 'y':
      convertedCharactersArray.push(25);
      break;
    case 'z':
      convertedCharactersArray.push(26);
      break;
    default:
      console.log('Character not recognized');
  }
}

console.log('convertedCharactersArray: ', convertedCharactersArray)

