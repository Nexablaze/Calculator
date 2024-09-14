function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendNumber(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    const display = document.getElementById('display').value;
    try {
        // Remplacer les symboles × et ÷ par * et / pour le calcul
        const result = display.replace(/×/g, '*').replace(/÷/g, '/');
        document.getElementById('display').value = eval(result);
    } catch (error) {
        document.getElementById('display').value = 'Erreur';
    }
}

function squareRoot() {
    const display = document.getElementById('display').value;
    try {
        const number = parseFloat(display);
        if (isNaN(number)) {
            throw new Error('Invalid input');
        }
        document.getElementById('display').value = Math.sqrt(number);
    } catch (error) {
        document.getElementById('display').value = 'Erreur';
    }
}
