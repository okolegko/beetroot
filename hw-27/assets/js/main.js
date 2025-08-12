function allVariantFunction() {
    const name = document.getElementById("inputValue").value || "Anonymous";
    let output = "";
    // 1. Function Declaration
    function greetDeclaration(name) {
        return `Hello (Declaration), ${name}!`;
    }
    output += greetDeclaration(name) + "<br>";
    // 2. Function Expression
    const greetExpression = function(name) {
        return `Hello (Expression), ${name}!`;
    };
    output += greetExpression(name) + "<br>";
    // 3. Arrow Function
    const greetArrow = (name) => `Hello (Arrow), ${name}!`;
    output += greetArrow(name) + "<br>";
    // 4. Immediately Invoked Function Expression (IIFE)
    output += (function(name) {
        return `Hello (IIFE), ${name}!`;
    })(name) + "<br>";
    // 5. Anonymous Function (in у setTimeout)
    setTimeout(() => {
        output += `Hello (setTimeout), ${name}!<br>`;
        document.getElementById("min_1").innerHTML = output;
    }, 2000);
    document.getElementById("min_1").innerHTML = output;
}


function countArguments() {
    const input = document.getElementById("argsInput").value;
    const argsArray = input.split(',').map(item => item.trim()).filter(item => item !== "");
    function countArgs() {
        return arguments.length;
    }
    const count = countArgs(...argsArray);
    document.getElementById("min_2").innerHTML = `Quantity of arguments: ${count}`;
}


function rangeOfNumbers() {
    const firstNumber = +document.getElementById("firstNumber").value;
    const secondNumber = +document.getElementById("secondNumber").value;
    if (isNaN(firstNumber) || isNaN(secondNumber) || firstNumber == "" || secondNumber == "") {
        document.getElementById("min_3").innerHTML =
            '<span style="color: red">Please enter valid numbers</span>';
        return;
    }
    function compareNumbers(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
    const result = compareNumbers(firstNumber, secondNumber);
    document.getElementById("min_3").textContent = `Result: ${result}`;
}

function calculateFactorial() {
    let num = +document.getElementById("num").value;
    if (isNaN(num) || num < 0) {
        document.getElementById("min_4").innerHTML = 
            '<span style="color: red">Please enter a non-negative number</span>';
        return;
    }
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    document.getElementById("min_4").innerHTML = 
        `Factorial of ${num} is: ${factorial}`;
}


function combineDigits() {
    const d1 = +document.getElementById("digit1").value;
    const d2 = +document.getElementById("digit2").value;
    const d3 = +document.getElementById("digit3").value;
    if (
        isNaN(d1) || isNaN(d2) || isNaN(d3) ||
        d1 < 0 || d1 > 9 || d2 < 0 || d2 > 9 || d3 < 0 || d3 > 9
    ) {
        document.getElementById("min_5").innerHTML =
            '<span style="color: red">Please enter valid digits (0-9)</span>';
        return;
    }
    let number = d1 * 100 + d2 * 10 + d3;
    document.getElementById("min_5").innerHTML =
        `The combined number is: ${number}`;
}


function calculateArea() {
    const lengthVal = document.getElementById("length").value.trim();
    const widthVal = document.getElementById("width").value.trim();
    if (lengthVal === "") {
        document.getElementById("min_6").innerHTML =
            '<span style="color: red">Please enter the length</span>';
        return;
    }
    const length = +lengthVal;
    const width = widthVal === "" ? undefined : +widthVal;
    if (isNaN(length) || length <= 0 || (width !== undefined && (isNaN(width) || width <= 0))) {
        document.getElementById("min_6").innerHTML =
            '<span style="color: red">Please enter valid positive numbers</span>';
        return;
    }
    function area(length, width = length) {
        return length * width;
    }
    const result = area(length, width);
    document.getElementById("min_6").innerHTML = `Area: ${result}`;
}


function checkPerfectNumber() {
    const num = +document.getElementById("perfectNum").value;
    if (isNaN(num) || num <= 0) {
        document.getElementById("norm_1").innerHTML = '<span style="color: red">Please enter a positive number</span>';
        return;
    }
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (sum === num) {
        document.getElementById("norm_1").textContent = `${num} — perfect number`;
    } else {
        document.getElementById("norm_1").textContent = `${num} — isn't a perfect numbe`;
    }
}


function showPerfectNumbers() {
    const min = +document.getElementById("minRange").value;
    const max = +document.getElementById("maxRange").value;
    if (isNaN(min) || isNaN(max) || min <= 0 || max <= 0 || min > max) {
        document.getElementById("norm_2").innerHTML = '<span style="color: red">Please enter valid positive integers with min ≤ max</span>';
        return;
    }
    function isPerfectNumber(num) {
        if (num <= 0) return false;
        let sum = 0;
        for (let i = 1; i <= num / 2; i++) {
            if (num % i === 0) sum += i;
        }
        return sum === num;
    }
    let perfectNumbers = [];
    for (let n = min; n <= max; n++) {
        if (isPerfectNumber(n)) {
            perfectNumbers.push(n);
        }
    }
    if (perfectNumbers.length > 0) {
        document.getElementById("norm_2").textContent = `Perfect numbers in the range: ${perfectNumbers.join(", ")}`;
    } else {
        document.getElementById("norm_2").textContent = "No perfect numbers found in the range";
    }
}