//Currency exchange calculator

const from = document.getElementById('from');
const to = document.getElementById('to');

const fromValue = document.getElementById('from').value;
const toValue = document.getElementById('to').value;

const swap = () => {
    if(fromValue == 'usd' && toValue == 'gbp') {
        from = fromValue;
        toValue = 'usd';
    }
}
