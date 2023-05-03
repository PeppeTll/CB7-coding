// Primo esercizio*********************************************************************
// let myNum = parseInt(prompt('digita un numero'));

// if (myNum % 2 === 0) {
//   alert(`il numero ${myNum} è Pari`)
//   console.log(`Il numero ${myNum} è Pari`);
// } else {
//   alert(`il numero ${myNum} è Dispari`)
//   console.log(`Il numero ${myNum} è Dispari`);
// };

// Secondo esercizio*******************************************************************
// let myNum = parseInt(prompt('digita un numero')) % 2 === 0 ?
//   console.log(`Il numero scelto è Pari`)
//   : console.log(`Il numero scelto è Dispari`)


// Esercizio avanzato (senza controlli di sicurezza)***********************************
// const myCalc = () => {
//   let firstNum = parseInt(prompt('scegli il primo numero'));
//   let secondNum = parseInt(prompt('scegli il secondo numero'));
//   let mathOperator = prompt("scegli l\'operatore matematico che desideri");
//   let result

//   switch (mathOperator) {
//     case '+':
//       // senza assegnare il risultato ad una variabile
//       console.log(firstNum + secondNum)
//       alert(`La somma tra ${firstNum} e ${secondNum} è ${firstNum + secondNum}`)
//       break
//     case '-':
//       // assegnando il risultato ad una variabile
//       result = firstNum - secondNum
//       console.log(result)
//       alert(`La differenza tra ${firstNum} e ${secondNum} è ${result}`)
//       break
//     case '*':
//       result = firstNum * secondNum
//       console.log(result)
//       alert(`Il prodotto tra ${firstNum} e ${secondNum} è ${result}`)
//       break
//     case '/':
//       result = firstNum / secondNum
//       console.log(result)
//       alert(`Il quoziente tra ${firstNum} e ${secondNum} è ${result}`)
//       break
//   }
// };

// myCalc();




// NUN FUNZIONANO I CONTROLLI DI SICUREZZA...
// Esercizio avanzato con controlli di sicurezza****************************************
// const mySecureCalc = () => {
  // Creo le variabili senza assegnare alcun valore
//   let firstNum
//   let secondNum
//   let mathOperator

//   let firstControll = function () {
//     let firstPrompt = parseInt(prompt('scegli il primo numero'));
//     if (typeof firstPrompt === 'number') {
//       firstNum = firstPrompt
//       console.log(firstNum)
//       return firstNum
//     } else {
//       alert('Il dato inserito non rappresenta un numero, inserisci un numero');
//       firstControll();
//     }
//   }

//   let secondControll = function () {
//     let secondPrompt = parseInt(prompt('scegli il secondo numero'));
//     if (typeof secondPrompt === 'number') {
//       secondNum = secondPrompt
//       console.log(secondNum)
//       return secondNum
//     } else {
//       alert('Il dato inserito non rappresenta un numero, inserisci un numero');
//       secondControll();
//     }
//   }

//   let thirdControll = function () {
//     let thirdPrompt = prompt("scegli l\'operatore matematico che desideri");
//     if (thirdPrompt === '+' || thirdPrompt === '-' || thirdPrompt === '*' || thirdPrompt === '/') {
//       mathOperator = thirdPrompt;
//       console.log(mathOperator)
//       return mathOperator
//     } else {
//       alert('il simbolo digitato non rappresenta una operazione matematica');
//       thirdControll();
//     }
//   }

//   firstControll();
//   secondControll();
//   thirdControll();

//   switch (mathOperator) {
//     case '+':
//       console.log(firstNum + secondNum)
//       break
//     case '-':
//       console.log(firstNum - secondNum)
//       break
//     case '*':
//       console.log(firstNum * secondNum)
//       break
//     case '/':
//       console.log(firstNum / secondNum)
//       break
//   }
// }

// mySecureCalc();
