const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;
const minIncomeForCondo = 4500;
const minCreditScoreForCondo = 600;
const minIncomeForCar = 3000;
const minCreditScoreForCar = 650;

function getLoanMessage ( annualIncome, creditScore ) {
  if (creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex ) {
    return "You qualify for a duplex, condo, and a car loan."
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and a car loan." 
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan."
  } else {
    return "You do not qualify for any loans."
  }

}

const duplexLoanMsg = getLoanMessage(85000, 850);
const condoLoanMsg = getLoanMessage(65000, 690);
const carLoanMsg = getLoanMessage(45000, 660);
const noLoanMsg = getLoanMessage(23000, 550);

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);