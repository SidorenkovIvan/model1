let number1 = null;
let number2 = null;
let operator = null;
let result = false;
let memoryArray = [];

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
    memoryArray = [];
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

function memoryCommand(command) {
    const screen = document.getElementById("result");
    switch (command) {
        case "M+":
            if (result) {
                memoryArray.push(screen.value);
                memoryArray.push("+");
                screen.value = "0";
                clearCalculations();
                console.log(memoryArray);
            }
            break;
        case "M-":
            if (result) {
                memoryArray.push(screen.value);
                memoryArray.push("-");
                screen.value = "0";
                clearCalculations();
                console.log(memoryArray);
            }
            break;
        case "MRC":
            if (memoryArray.length !== 0) {
                let resultOfMemorySum = 0;
                console.log(memoryArray);
                for (let i = 0; i < memoryArray.length; i += 2) {
                    if (memoryArray[i - 1] === "+") {
                        resultOfMemorySum += Number(memoryArray[i]);
                    } else if (memoryArray[i - 1] === "-") {
                        resultOfMemorySum -= Number(memoryArray[i]);
                    } else {
                        resultOfMemorySum = Number(memoryArray[i]);
                    }
                }

                screen.value = resultOfMemorySum;
                clearCalculations();
                memoryArray = [];
            }
            break;
    }
}

function clearCalculations() {
    number1 = null;
    number2 = null;
    operator = null;
    result = true;
}