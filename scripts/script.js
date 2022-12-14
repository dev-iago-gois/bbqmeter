//Adults:
//  Meat --         400g /p +6h - 650g
//  Beer --         1.2L /p +6h - 2L
//  Bottle (Soda/Water) --   1L p/   +6h - 1.5L
//  OBS: Kids consume = all . 0.5

// Variables for each input
let inputAdults = document.getElementById("adults");
let inputKids = document.getElementById("kids");
let inputDuration = document.getElementById("duration");
let result = document.getElementById("result");

// Calculating quantities function
function calc() {
  console.log("Calculating...");

  let adults = inputAdults.value;
  let kids = inputKids.value;
  let duration = inputDuration.value;

  let qtTotalMeat = adults * meatPP(duration) + kids * 0.5 * meatPP(duration);
  //   Beer function does not have Kids because they are -18
  let qtTotalBeer = adults * beerPP(duration);
  let qtTotalBottle = adults * bottlePP(duration) + kids * 0.5 * bottlePP(duration);

  // Display calculations
  //   The "+" symbol before the "=" means that the text wont be erased by the next line of text, without it, it would be showing only the last line
  result.innerHTML = `<h3 class="result-info">You will need:</h3>`
  result.innerHTML += `
  <div class="result-box">
  <p>
  <img src="./assets/meat.svg"/>
  ${qtTotalMeat / 1000} Kg of meat.
  </p>
  <div>
  `

  result.innerHTML += `
  <div class="result-box">  
  <p>
  <img src="./assets/can.svg"/>
  ${Math.ceil(qtTotalBeer / 0.355)} beer cans (355ml).
  </p>
  <div>
  `

  result.innerHTML += `
  <div class="result-box">  
  <p>
  <img src="./assets/bottle.svg"/>
  ${qtTotalBottle} L of soda/water.
  </p>
  <div>
  
  `

  console.log(qtTotalMeat, " grams of meat.");
  console.log(qtTotalBeer, " L of beer.");
  console.log(qtTotalBottle, " L of soda/water.");
}

// Meat per person function
function meatPP(duration) {
  if (duration >= 6) {
    return 650;
  } else {
    return 400;
  }
}

// Beer per person function
function beerPP(duration) {
  if (duration >= 6) {
    return 2;
  } else {
    return 1.2;
  }
}

// Bottle (Soda/Water) per person function
function bottlePP(duration) {
  if (duration >= 6) {
    return 1.5;
  } else {
    return 1;
  }
}
