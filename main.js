let initValue;
let currentValue;
let initMortgage;
let remMortgage;
let initDeposit;
let propGain;
let mortGain;

function getValues() {
    initValue = document.getElementById("initValue").value;
    currentValue = document.getElementById('currentValue').value;
    initMortgage = document.getElementById("initMort").value;
    remMortgage = document.getElementById('currentMort').value;
    initDeposit = initValue-initMortgage;
    
    propGain=propertyGain(initValue, currentValue);
    mortGain=mortgageGain(initMortgage, remMortgage);
    
    totalGain(propGain, mortGain);

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
    alert(`In total you have £${deposit} in equity in your property`);
    return deposit;
}
