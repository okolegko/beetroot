let quantityDollars = prompt("Enter the amount (in dollars) you want to exchange:");
const EXCHANGE_RATE = 1.25;
let quantityEuros = quantityDollars / EXCHANGE_RATE;
alert("That equals " + quantityEuros + " euros");