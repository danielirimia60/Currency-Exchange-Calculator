//Currency exchange calculator

const amountInput = document.getElementById('amount').value;
const exchangeFrom = document.getElementById('from').value;
const exchangeTo = document.getElementById('to').value;
const inputField = document.getElementById('amount');
const inputFrom = document.getElementById('from');
const inputTo = document.getElementById('to');
const outputCurrency = document.getElementById('output-currency');
const inputCurrency = document.getElementById('inputCurrency');
const inputValue = document.getElementById('inputValue');
const finalResult = document.getElementById('finalResult');

let gbpToUsd = 1.2456;
let usdToGbp = 0.8567;
let gbpToEur = 1.5567;
let eurToGbp = 0.9345;
let usdToEur = 0.8734;
let eurToUsd = 1.1353;

const setCurrency = () => {
    if(exchangeFrom == 'usd') {
        inputField.placeholder = '$ 1.00';
    }else if(exchangeFrom == 'eur') {
        inputField.placeholder = '€ 1.00';
    }else if(exchangeFrom == 'gbp') {
        inputField.placeholder = '£ 1.00';
    }
}

inputFrom.onchange = setCurrency();

const setOutputCurrency = () => {
    if(exchangeTo == 'usd') {
        outputCurrency.innerHTML = 'Dollars';
    }else if(exchangeTo == 'eur') {
        outputCurrency.innerHTML = 'Euros';
    }else if(exchangeTo == 'gbp') {
        outputCurrency.innerHTML = 'Pounds';
    }
}

const setExchangeOutput = () => {
    if(amountInput <= 1) {
        inputValue.innerHTML = '1.00 ';
        if(exchangeFrom == 'usd') {
            inputCurrency.innerHTML = 'US Dollar =';
        }else if(exchangeFrom == 'eur') {
            inputCurrency.innerHTML = 'Euro =';
        }else if(exchangeFrom == 'gbp') {
            inputCurrency.innerHTML = 'British Pound =';
        }
    }else {
        inputValue.innerHTML = `${amountInput} `;
        if(exchangeFrom == 'usd') {
            inputCurrency.innerHTML = 'US Dollars =';
        }else if(exchangeFrom == 'eur') {
            inputCurrency.innerHTML = 'Euros =';
        }else if(exchangeFrom == 'gbp') {
            inputCurrency.innerHTML = 'British Pounds =';
        }
    }
}

const exchange = () => {
    let result;
    if(amountInput) {
        if(exchangeFrom == 'gbp' && exchangeTo == 'usd') {
            result = amountInput * gbpToUsd;
        }else if(exchangeFrom == 'usd' && exchangeTo == 'gbp') {
            result = amountInput * usdToGbp;
        }else if(exchangeFrom == 'gbp' && exchangeTo == 'eur') {
            result = amountInput * gbpToEur;
        }else if(exchangeFrom == 'eur' && exchangeTo == 'gbp') {
            result = amountInput * eurToGbp;
        }else if(exchangeFrom == 'usd' && exchangeTo == 'eur') {
            result = amountInput * usdToEur;
        }else if(exchangeFrom == 'eur' && exchangeTo == 'usd') {
            result = amountInput * eurToUsd;
        }
    }else {
        result = 'Please enter a number';
    }

    return result;
}

let exchangeResult = exchange();

const showResult = () => {
    inputTo.onchange = setOutputCurrency();
    inputFrom.onchange = setExchangeOutput();
    finalResult.innerHTML = `${exchangeResult} `;
}
