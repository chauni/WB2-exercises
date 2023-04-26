// gather input
var numberOfPeople = 38
var passengersPerVan = 15
var vanCost = 250;



// perform calculation

var vansNeeded =  Math.ceil(numberOfPeople / passengersPerVan);
var totalCost = vanCost * vansNeeded;
var costPerPerson = totalCost / numberOfPeople;

//write output

console.log('vans needed', vansNeeded);
console.log('cost', totalCost);
console.log('per person cost', costPerPerson.toFixed(2));
