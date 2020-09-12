let initValue;
let currentValue;
let initMortgage;
let remMortgage;
let initDeposit;
let propGain;
let mortGain;
let depoisit;

function getValues() {
    initValue = document.getElementById("initValue").value;
    currentValue = document.getElementById('currentValue').value;
    initMortgage = document.getElementById("initMort").value;
    remMortgage = document.getElementById('currentMort').value;
    initDeposit = initValue-initMortgage;
    
    propGain=propertyGain(initValue, currentValue);
    mortGain=mortgageGain(initMortgage, remMortgage);
    
    deposit = totalGain(propGain, mortGain);
    displayResult(deposit);

}

//calculate the gain in property from prop prices
let propertyGain = (initValue, currentValue) =>{
    let gain = currentValue - initValue;

    if (gain>0){
        console.log(`You have gained £${gain} in equity alone!`);
    }else if (gain === 0){
        console.log('You have neither gained or lost money yet!')
    } else {
       // gain = abs(gain);
        console.log(`Unfortunately, you have lost £${Math.abs(gain)} in equity`);
    }
    return gain;
}
//calc the total capital repayment
let mortgageGain = (initMortgage, remMortgage) =>{
    let morGain = initMortgage - remMortgage;
    console.log(`You have paid off £${morGain} of your mortgage so far`);
    return morGain;
}

//calculate the total gain including the initial mortgage
let totalGain = (equity, mortgage) =>{
    deposit = equity+mortgage+initDeposit
    
    return deposit;
}

function displayResult (deposit){
    console.log('results incoming');
    const details = document.querySelector('#details');
    const result = document.createElement('div');
    result.classList.add('result');

    const resultHeadline = document.createElement('h2');
    resultHeadline.style.cssText = 'color:white; text-align:center';
    resultHeadline.innerText = 'Here are your results!';

    const resultMessage = document.createElement('p');
    resultMessage.style.cssText = 'color:white; text-size:1rem; margin-left:20px;'
    resultMessage.innerText = `You currently have £${deposit} available in equity.
     Combine it with savings to work out a potential deposit on a new property`;

    result.style.cssText = "background:rgba(27, 27, 50,0.8); font-size:2rem;"
    details.appendChild(result);
    result.appendChild(resultHeadline);
    result.appendChild(resultMessage);

;}

//testing the monthly payments section
let mortgageAmount = 100000;
let loanTerm = 25;

/*fixed rate section*/
let fixedLength = 2;
let fixedIntRate = 1.34;
let fixedCalc = 1+(fixedIntRate/1200);
let fixCalc1 = Math.pow(fixedCalc,(loanTerm*12));
let fixCalc2 = Math.pow(fixedCalc,(loanTerm*12))-1;
let fixedMonthly = ((mortgageAmount*fixedIntRate)/1200)*(fixCalc1/fixCalc2);
console.log('monthly rate for offer '+fixedMonthly);

loanTerm-=fixedLength;
/*rest of term*/

let interestRate = 4.35;
let intRate = 1+(interestRate/1200);
let calc1 = Math.pow(intRate,(loanTerm*12));
let calc2 = Math.pow(intRate,(loanTerm*12))-1;

let monthEquity = 0;

let fixedCalculation=(rate, length, loan)=>{
    for(j=1;j<(length*12)+1;j++){
        loan *= rate;
        loan -= fixedMonthly;
        monthEquity =mortgageAmount-loan;
        console.log(`after ${j} months you have ${Math.floor(monthEquity*100)/100} in equity`);
    }
    return loan;
}
let debt = fixedCalculation(fixedCalc,fixedLength,mortgageAmount);
console.log(loanTerm);


mortgageEquityCalculation = (intRate, loanTerm,debt)=>{
    for (i=1;i<(loanTerm*12)+1;i++){
        debt *=intRate;
        debt-=monthlyRepayment;
        monthEquity = mortgageAmount-debt;
        console.log(`after ${(fixedLength*12)+i} months you have ${Math.floor(monthEquity*100)/100} in equity`);
}
}
let monthlyRepayment = ((debt*interestRate)/1200)*(calc1/calc2);
console.log('monthly rate for regular mortgage ' +monthlyRepayment);
mortgageEquityCalculation(intRate,loanTerm, debt);