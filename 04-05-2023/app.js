// Primo esercizio************************************************
// const reversArray = () => {
//   let ascArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
//   let descArray = [];
//   console.log(ascArray);
//   for (let i = ascArray.length - 1; i >= 0; i--) {
//     descArray.push(ascArray[i]);
//   }
//   console.log(descArray);
// };

// reversArray();

// Secondo esercizio************************************************
// const minAndMax = () => {
//   const arrayOfNum = ['15465', '221', '3864', '4218', '5477895', '6216354', '681054', '14548', '87965', '3546485'];
//   const maxNum = Math.max(...arrayOfNum);
//   const minNum = Math.min(...arrayOfNum);
//   console.log(`Il numero più piccolo è ${minNum} e quello più grande è ${maxNum}`)
// };

// minAndMax();

// Secondo esercizio con Prompt & controlli***********************************************
const minAndMaxPrompt = () => {
  const arrayOfNum = [];
  for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt('digita un numero'));
    if (!arrayOfNum.includes(num)) {
      arrayOfNum.push(num);
    } else {
      alert('il numero è già stato inserito nella lista, ritenta!')
    }
  };
  const maxNum = Math.max(...arrayOfNum);
  const minNum = Math.min(...arrayOfNum);
  console.log(`Il numero più piccolo è ${minNum} e quello più grande è ${maxNum}`)
};

minAndMaxPrompt();