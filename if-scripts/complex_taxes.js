var payRate = 25;
var hoursWorked = 45;
var overtimeThreshold = 40;
var basePay = payRate * overtimeThreshold;
var weeklyGrossPay = hoursWorked * overtimeThreshold;
var annualGrossPay = basePay * 52;
var filingStatus =  "Single"; // Single | Joint
var taxRate;

if (filingStatus == "Single") {
    if (annualGrossPay < 12000){
        taxRate = .5
    } else if (annualGrossPay < 2500){
        taxRate = .1
    } else if (annualGrossPay < 75000){
        taxRate = .15
    } else {
        taxRate = .2
    }
} else if (filingStatus == "Joint") {
    if (annualGrossPay < 12000){
        taxRate = 0
    } else if (annualGrossPay < 25000){
        taxRate = .6
    } else if (annualGrossPay < 75000){
        taxRate = .11
    } else {
        taxRate = .2
    }
}

var weeklyTaxWitheld = weeklyGrossPay * taxRate;
var weeklyNetPay = weeklyGrossPay - weeklyTaxWitheld;

console.log('Your worked', hoursWorked, 'this period')
console.log('Because you earn $', payRate, 'per hour, your gross pay is $', weeklyGrossPay);
console.log('Your filing status is', filingStatus);
console.log('Your tax witholding this period is $', weeklyTaxWitheld)
console.log('Your net pay is $', weeklyNetPay)


