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

  console.log(qtTotalMeat, " grams of meat.");
  console.log(qtTotalBeer, " L of beer.");
  console.log(qtTotalBottle, " L of soda/water.");

  //   if - 6h
  //   totalMeat = (Adults*400)+(Kids*0.5*400)
  //   totalBeer = (Adults*1.2)+(Kids*0.5*1.2)
  //   totalSodaWater = (Adults*1)+(Kids*0.5*1)

  //   if + 6h
  //   totalMeat = (Adults*650)+(Kids*0.5*650)
  //   totalBeer = (Adults*2)+(Kids*0.5*2)
  //   totalSodaWater = (Adults*1.5)+(Kids*0.5*1.5)
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
