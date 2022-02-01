let number1 = null;
let number2 = null;
let operator = null;
let result = false;

function addToScreen(value) {
    const screen = document.getElementById("result");
    if (screen.value === "0" && value !== '.') {
        screen.value = "";
    } else if (result) {
        screen.value = "";
        result = false;
    }
    screen.value += value;
}

function clearScreen() {
    const screen = document.getElementById("result");
    number1 = null;
    number2 = null;
    operator = null;
    result = false;
    screen.value = "0";
}

function setOperator(value) {
    const screen = document.getElementById("result");
    switch (value) {
        case "%":
            if (number1 === null) {
                number1 = screen.value;
                operator = "%";
                screen.value = "0";
            }
            break;
        case "-":
            if (number1 === null) {
                number1 = screen.value;
                operator = "-";
                screen.value = "0";
            }
            break;
        case "*":
            if (number1 === null) {
                number1 = screen.value;
                operator = "*";
                screen.value = "0";
            }
            break;
        case "^":
            if (number1 === null) {
                number1 = screen.value;
                operator = "^";
                screen.value = "0";
            }
            break;
        case "+":
            if (number1 === null) {
                number1 = screen.value;
                operator = "+";
                screen.value = "0";
            }
            break;
        case "√":
            if (number1 === null) {
                number1 = screen.value;
                operator = "√";
                screen.value = getResult(number1, number2, operator);
                clearCalculations();
            }
            break;
        case "=":
            if (number1 !== null) {
                number2 = screen.value;
                screen.value = getResult(number1, number2, operator);
                clearCalculations();
            }
            break;
    }
}

function getResult(num1, num2, operator) {
    switch (operator) {
        case "+":
            return Number(num1) + Number(num2);
        case "-":
            return Number(num1) - Number(num2);
        case "%":
            return Number(num1) / Number(num2);
        case "*":
            return Number(num1) * Number(num2);
        case "^":
            return Number(num1) ** Number(num2);
        case "√":
            return Math.sqrt(Number(num1));
    }
}

function clearCalculations() {
    number1 = null;
    number2 = null;
    operator = null;
    result = true;
}