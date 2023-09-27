function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = 'Divisão por 0 não é permitida';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = 'Operação inválida';
    }

    const resultElement = document.getElementById('result');
    resultElement.innerText = `Resultado: ${result.toFixed(2)}`;

    // Exibe a explicação
    displayExplanation(operator, resultElement);
}
function displayExplanation(operator, resultElement) {
    let explanation = '';
    switch (operator) {
        case '+':
            explanation = '(Adição) Soma os números.';
            break;
        case '-':
            explanation = '(Subtração) Subtrai o segundo número do primeiro.';
            break;
        case '*':
            explanation = '(Multiplicação) Multiplica os números.';
            break;
        case '/':
            explanation = '(Divisão) Divide o primeiro número pelo segundo.';
            break;
        default:
            explanation = 'Operador não reconhecido.';
    }

    resultElement.insertAdjacentHTML('afterend', `<p>${explanation}</p>`);
}
