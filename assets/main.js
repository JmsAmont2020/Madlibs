// 1. Use the id-selector to get your inputs' and the output element from the DOM
// for each input i'll need to repeat the following
const inputOne = document.querySelector(`#one`); //this creates a var of the element
const inputTwo = document.querySelector(`#two`);
const inputThree = document.querySelector(`#three`);
const inputFour = document.querySelector(`#four`);
const inputFive = document.querySelector(`#five`);
const inputSix = document.querySelector(`#six`);
const inputSeven = document.querySelector(`#seven`);
const inputEight = document.querySelector(`#eight`);
const inputNine = document.querySelector(`#nine`);
const inputTen = document.querySelector(`#ten`);
const inputEleven = document.querySelector(`#eleven`);
const inputTwelve = document.querySelector(`#twelve`);
const output = document.querySelector(`.output`); //this is the dive for the output


// 2. For each of the inputs, get the value (word) from them



// 3. Generate your template using the values from above and set the output element's value equal to it!
//HINT: You'll need a ton of code before doing anything in this function that's called in your index.html 😜
function generateTemplate() {
  let madlib = `${inputOne.value} is the main character of this story.
   ${inputOne.value} is a very ${inputTwo.value} person,
    who makes ${inputThree.value} grades in school.
     ${inputOne.value} loves to ${inputFour.value} and ${inputFive.value} to ${inputSix.value} ${inputSeven.value}.
     So when ${inputOne.value} ${inputEight.value} ${inputNine.value} he will ${inputTen.value} ${inputEleven.value} and ${inputTwelve.value}`
    output.innerHTML = madlib;
}
  console.log(generateTemplate); // instead of logging, we need to add HTML to the output object

const title = document.querySelector(`h1`);
title.innerHTML = `James' Story Generator`;
