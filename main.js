let initValue;
let currentValue;
let initMortgage;
let remMortgage;
let initDeposit;

function getValues() {
    initValue = document.getElementById("initValue").value;
    currentValue = document.getElementById('currentValue').value;
    initMortgage = document.getElementById("initMort").value;
    remMortgage = document.getElementById('currentMort').value;
    initDeposit = initValue-initMortgage;
}


console.log(initDeposit);

//const initValue = prompt('Enter intial property price');//50000;
/*const currentValue =70000;
const initMortgage = 142500;
const remMortgage = 136323;
;
//console.log('link successful');
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
    alert(`In total you have £${deposit} in equity in your property`);
    return deposit;
}
/*
let propGain = propertyGain(initValue, currentValue);
let mortGain = mortgageGain(initMortgage,remMortgage);
let depo = totalGain(propGain,mortGain);*/