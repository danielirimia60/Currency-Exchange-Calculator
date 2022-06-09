//Currency exchange calculator

// HTML selectors
const inputField = document.getElementById('amount');
const inputFrom = document.getElementById('from');
const inputTo = document.getElementById('to');
const outputCurrency = document.getElementById('output-currency');
const inputCurrency = document.getElementById('inputCurrency');
const inputValue = document.getElementById('inputValue');

// Exchange variables
let gbpToUsd = 1.258;
let usdToGbp = 0.794;
let gbpToEur = 1.175;
let eurToGbp = 0.850;
let usdToEur = 0.934;
let eurToUsd = 1.070;

// Page reload when currency is changed
const currArr = [document.querySelector('.usdF'), document.querySelector('.usdI'), document.querySelector('.gbpF'), document.querySelector('.gbpI'), document.querySelector('.eurF'), document.querySelector('.eurI')];

currArr.forEach(entry => {
    entry.addEventListener('click', function() {
        window.location.reload();
    })
});

// Get user input value
const getVal = (val) => {
    val = inputField.value;
    const inputValue = parseFloat(val);
    return inputValue;
}
const amountInput = getVal();

// Set input field placeholder
const setCurrency = () => {
    if(inputFrom.value == 'usd') {
        inputField.placeholder = '$ 1.00';
    }else if(inputFrom.value == 'eur') {
        inputField.placeholder = '€ 1.00';
    }else if(inputFrom.value == 'gbp') {
        inputField.placeholder = '£ 1.00';
    }
}
inputFrom.onchange = setCurrency();

// Set input value and currency for output result. If there's no value then default to 1 + input currency
const setExchangeOutput = () => {
    if(inputField.value <= 1 || inputField.value == undefined) {
        inputValue.innerHTML = '1.00 ';
        if(inputFrom.value == 'usd') {
            inputCurrency.innerHTML = 'US Dollar =';
        }else if(inputFrom.value == 'eur') {
            inputCurrency.innerHTML = 'Euro =';
        }else if(inputFrom.value == 'gbp') {
            inputCurrency.innerHTML = 'British Pound =';
        }
    }else {
        inputValue.innerHTML = `${amountInput} `;
        if(inputFrom.value == 'usd') {
            inputCurrency.innerHTML = 'US Dollars =';
        }else if(inputFrom.value == 'eur') {
            inputCurrency.innerHTML = 'Euros =';
        }else if(inputFrom.value == 'gbp') {
            inputCurrency.innerHTML = 'British Pounds =';
        }
    }
}

// Set output result currency
const setOutputCurrency = () => {
    if(inputTo.value == 'usd') {
        outputCurrency.innerHTML = 'Dollars';
    }else if(inputTo.value == 'eur') {
        outputCurrency.innerHTML = 'Euros';
    }else if(inputTo.value == 'gbp') {
        outputCurrency.innerHTML = 'Pounds';
    }
}

// Calculate the final exchange result
const exchange = () => {
    let result;

    // If no value was introduced default to 1 for the exchange
    if(inputField.value == 0 || inputField.value == undefined) {
        if(inputFrom.value == 'gbp' && inputTo.value == 'usd') {
            result = 1 * gbpToUsd;
        }else if(inputFrom.value == 'usd' && inputTo.value == 'gbp') {
            result = 1 * usdToGbp;
        }else if(inputFrom.value == 'gbp' && inputTo.value == 'eur') {
            result = 1 * gbpToEur;
        }else if(inputFrom.value == 'eur' && inputTo.value == 'gbp') {
            result = 1 * eurToGbp;
        }else if(inputFrom.value == 'usd' && inputTo.value == 'eur') {
            result = 1 * usdToEur;
        }else if(inputFrom.value == 'eur' && inputTo.value == 'usd') {
            result = 1 * eurToUsd;
        }
     // If a value was introduced use it to calculate the result   
    }else{
        if(inputFrom.value == 'gbp' && inputTo.value == 'usd') {
            result = amountInput * gbpToUsd;
        }else if(inputFrom.value == 'usd' && inputTo.value == 'gbp') {
            result = amountInput * usdToGbp;
        }else if(inputFrom.value == 'gbp' && inputTo.value == 'eur') {
            result = amountInput * gbpToEur;
        }else if(inputFrom.value == 'eur' && inputTo.value == 'gbp') {
            result = amountInput * eurToGbp;
        }else if(inputFrom.value == 'usd' && inputTo.value == 'eur') {
            result = amountInput * usdToEur;
        }else if(inputFrom.value == 'eur' && inputTo.value == 'usd') {
            result = amountInput * eurToUsd;
        }
    }

    return result;
}

// Store result in exchangeResult with a fixed decimal places of 5 then split it into an array and reverse it
// Take the first 3 numbers and reverse them back as the last 3 decimals of the result
// Take the rest of the array and remove the first numbers (which are the last before reverse)
let exchangeResult = exchange();
exchangeResult = exchangeResult.toFixed(5);
let splitResult = exchangeResult.split('');
splitResult = splitResult.reverse();
let decimalResult = [splitResult[0], splitResult[1], splitResult[2]];
decimalResult = decimalResult.reverse();
let firstResult = splitResult;
let removedResult = firstResult.splice(0,3);
firstResult = firstResult.reverse();

// Join the resulted arrays into 2 different numbers
const twoDigitResult = firstResult.join('');
const threeDigitResult = decimalResult.join('');

// Show the results when the convert button is pressed
const showResult = () => {
    inputTo.onchange = setOutputCurrency();
    inputFrom.onchange = setExchangeOutput();
    document.getElementById('finalResult').innerHTML = `${twoDigitResult}`;
    document.querySelector('.decimal-rate').innerHTML = `${threeDigitResult }`;
}
