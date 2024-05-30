document.getElementById('inputTemperature').oninput = function() {
    const inputTemp = parseFloat(document.getElementById('inputTemperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const resultUnit = document.getElementById('resultUnit').value;
    let resultTemp = 0;

    if (isNaN(inputTemp)) {
        document.getElementById('resultTemperature').value = '';
        return;
    }

    if (inputUnit === resultUnit) {
        resultTemp = inputTemp;
    } else {
        switch (inputUnit) {
            case 'Celsius':
                if (resultUnit === 'Fahrenheit') {
                    resultTemp = (inputTemp * 9/5) + 32;
                } else if (resultUnit === 'Kelvin') {
                    resultTemp = inputTemp + 273.15;
                }
                break;
            case 'Fahrenheit':
                if (resultUnit === 'Celsius') {
                    resultTemp = (inputTemp - 32) * 5/9;
                } else if (resultUnit === 'Kelvin') {
                    resultTemp = (inputTemp - 32) * 5/9 + 273.15;
                }
                break;
            case 'Kelvin':
                if (resultUnit === 'Celsius') {
                    resultTemp = inputTemp - 273.15;
                } else if (resultUnit === 'Fahrenheit') {
                    resultTemp = (inputTemp - 273.15) * 9/5 + 32;
                }
                break;
        }
    }

    document.getElementById('resultTemperature').value = resultTemp.toFixed(2);
};
