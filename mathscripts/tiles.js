//gather inputs
var length = 10;
var width = 15;
var tilesPerBox = 12;

//perform operations
var areaOfRoom = length * width
var numberOfTiles = areaOfRoom * 1.1
var numberOfBoxes = Math.ceil(numberOfTiles / tilesPerBox) 

//write output
console.log('Room Length:', length);
console.log('Room Width:', width);
console.log('Room Area:', areaOfRoom);
console.log('Tiles Needed:', numberOfTiles);
console.log('Boxes to order:', numberOfBoxes);