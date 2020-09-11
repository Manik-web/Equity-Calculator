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
let mortgageAmount = 244450;
let interestRate = 1.8;
let intCalc = interestRate/1200;
let loanTerm = 33;

let intRate = 1+intCalc;
let calc1 = Math.pow(intRate,(loanTerm*12));
let calc2 = Math.pow(intRate,(loanTerm*12))-1;
console.log(calc1,calc2);

let monthlyRepayment = ((mortgageAmount*interestRate)/1200)*(calc1/calc2);
console.log(monthlyRepayment);

let debt = mortgageAmount;
let monthEquity = 0;
let monthInterest;

for (i=1;i<(loanTerm*12)+1;i++){
    debt *=intRate;
    // debt += monthInterest;
   // console.log('debt after interest ' + debt);
    debt-=monthlyRepayment;
   // console.log('debt after payment ' + debt);
   
    monthEquity = mortgageAmount-debt;
    //console.log(debt);
    console.log(`after ${i} months you have ${Math.floor(monthEquity*100)/100} in equity`);
}