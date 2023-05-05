/**
 * Esercizio 1
 * Sulla base della lezione del giorno, cominciare a prendere confidenza con la varia
 * documentazione online e cercare l'argomento scope,
 * al fine di fortificare la competenze apprese a lezione.
 */

//*******************************************************************************************************************************/

/**
 * Esercizio 2
 * Utilizzando le funzioni, riscrivere la calcolatrice creata durante l'esercitazione di giorno 03-05-2023.
 */
/**
 *
 * @param {int} num1
 * @param {int} num2
 * @param {string} option
 * @returns {int}
 * La funzione prevede tre parametri:
 * num1 e num2 dovranno essere numeri interi.
 * il param symbol dovrà contenere un operatore matematico tra +, -, *, /.
 */
// const myCalc = (num1, num2, option) => {
//   if (option === '+') {
//     return num1 + num2;
//   } else if (option === '-') {
//     return num1 - num2;
//   } else if (option === '*') {
//     return num1 * num2;
//   } else if (option === '/') {
//     return num1 / num2;
//   } else {
//     return alert('Invalid option');
//   };
// }

// console.log(myCalc(2, 2, '+'))

//****************************************************************************************************** */

/**
 * Esercizio 3
 * Scrivere un oggetto che vi descriva, e stampare in console alcune di queste informazioni.
 * Giusto per cominciare a prendere pratica con la sintassi e come richiamare valori di oggetti.
 */
// const mySelfInfo = {
//   name: 'Giuseppe',
//   surname: 'Talluto',
//   age: '30',
//   height: '1.75'
// };

// /**
//  *
//  * @param {object} obj
//  * @returns {console.log}
//  * La funzione accetta un oggetto e ne restituisce le proprietà name, surname, age, height.
//  */
// const explainMySelf = (obj) => {
//   return console.log(`  il tuo nome è ${obj.name},
//   il tuo cognome è ${obj['surname']},
//   la tua età è ${obj.age} e la tua altezza è ${obj['height']}cm.`)
// };

// console.log(explainMySelf(mySelfInfo));

//*********************************************************************************************** */

/**
 * Avanzato
 * Riscrivere l'esercizio 2, utilizzando più funzioni combinate tra loro.
 */
/**
 *
 * @param {int} num1
 * @param {int} num2
 * @param {string} option
 * @returns {int}
 * La funzione prevede tre parametri:
 * num1 e num2 dovranno essere numeri interi.
 * il param symbol dovrà contenere un operatore matematico tra +, -, *, /.
 */
// const myCalc = (num1, num2, option) => {
//   function somma(num1, num2) {
//     return console.log(num1 + num2);
//   };

//   function sottrazione(num1, num2) {
//     return console.log(num1 - num2);
//   };

//   function moltiplicazione(num1, num2) {
//     return console.log(num1 * num2);
//   };

//   function divisione(num1, num2) {
//     return console.log(num1 / num2);
//   };

//   if (option === '+') {
//     return somma(num1, num2);
//   } else if (option === '-') {
//     return sottrazione(num1, num2);
//   } else if (option === '*') {
//     return moltiplicazione(num1, num2);
//   } else if (option === '/') {
//     return divisione(num1, num2);
//   } else {
//     return alert('Invalid option');
//   };
// }

// myCalc(2, 2, '/');

