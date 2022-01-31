let number1 = null;
let number2 = null;
let operator = null;

function addToScreen(value) {
    let screen = document.getElementById("result");
    if (screen.value === "0" && value !== '.') {
        screen.value = "";
    }
    screen.value += value;
}

function clearScreen() {
    let screen = document.getElementById("result");
    number1 = null;
    number2 = null;
    operator = null;
    screen.value = "0";
}

function setOperator(value) {
    let screen = document.getElementById("result");
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
            break;
        case "=":
            if (number1 !== null) {
                number2 = screen.value;
                screen.value = getResult(number1, number2, operator);
                number1 = null;
                number2 = null;
                operator = null;
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
    }
}