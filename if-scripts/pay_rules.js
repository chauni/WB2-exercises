/* incorrect, doesn't apply a base logic; too specific

// gather input
var payRateA = 12.50
var payrateB = 25.00
var payrateC = 17.30

var hrsWorkedA = 20
var hrsWorkedB = 40
var hrsWorkedC = 45

var grossPayA = 250
var grossPayB = 1000
var grossPayC = 821.75


// perform the operation

if (hrsWorkedA < 40) {
    var overtimeA = 0
}

if (hrsWorkedB == 40) {
    var overtimeB = 0
}

if (hrsWorkedC > 40) {
    var overtimeC = (grossPayC * 1.5)
}

// write output

console.log('the overtime for working under 40 hours is', overtimeA)
console.log('the overtime for working exactly 40 hours is', overtimeB)
console.log('the overtime for working 45 hours is', overtimeC)
*/

// correct version, sets a base logic to be able to change inputs; acts more like a calculator

// inputs
var payRate = 25;
var hoursWorked = 45;

//
var overtimeHours = hoursWorked - 40;
var overtimeRate = payRate * 1.5;

// conditional
if (hoursWorked <= 40) {
    console.log('gross pay is', payRate * hoursWorked);
} else {
    var overtimePay = overtimeHours * overtimeRate;
    var basePay = payRate * 40;
    console.log('gross pay is', basePay + overtimePay);
}

console.log('hours worked', hoursWorked);
console.log('overtime hours', overtimeHours);
console.log('base rate', payRate);