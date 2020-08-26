const initValue = 150000;
const currentValue = 170000;
const initMortgage = 142500;
const remMortgage = 136323;
const initDeposit = initValue-initMortgage;

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
    console.log(`In total you have £${deposit} in equity in your property`);
}

totalGain((propertyGain(initValue, currentValue)),(mortgageGain(initMortgage, remMortgage)));