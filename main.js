const initValue = 150000;
const currentValue = 149999;
//const mortgageEquityGain;


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
}

propertyGain(initValue, currentValue);