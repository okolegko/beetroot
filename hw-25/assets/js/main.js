function sumFloats() {
    const float1 = document.getElementById("float1").value;
    const float2 = document.getElementById("float2").value;
    document.getElementById("min_1").innerHTML =
        (float1 === "" || float2 === "")
            ? '<span style="color: red">Enter both floats</span>'
            : "Sum: " + (+(+float1 + +float2).toFixed(1));
}

function sumStringAndNumber() {
    const valueString = document.getElementById("valueString").value;
    const valueNumber = document.getElementById("valueNumber").value;
    document.getElementById("min_2").innerHTML =
        (valueString === "" || valueNumber === "")
            ? '<span style="color: red">Enter both values</span>'
            : "Sum: " + (+valueString + +valueNumber);
}

function calculateFileFit() {
    const flashSize = document.getElementById("flashSize").value;
    document.getElementById("min_3").innerHTML =
        flashSize === ""
            ? '<span style="color: red">Enter flash size in GB</span>'
            : "Quantity of files: " + Math.floor((+flashSize * 1024) / 820);
}

function quantityChocolates() {
    const wallet = document.getElementById("wallet").value;
    const price = document.getElementById("price").value;
    document.getElementById("norm_1").innerHTML =
        (wallet === "" || price === "")
            ? '<span style="color: red">Enter both values</span>'
            : "Quantity of chocolates: " + Math.floor(+wallet / +price) + ", Change: " + (+wallet % +price).toFixed(2);
}

function reverseThreeDigit() {
    const number = document.getElementById("threeDigit").value;
    if (number === "" || isNaN(number) || number.length !== 3) {
        document.getElementById("norm_2").innerHTML = '<span style="color: red">Enter a valid 3-digit number</span>';
        return;
    }
    const n = +number;
    const digit1 = n % 10;
    const digit2 = Math.floor(n / 10) % 10;
    const digit3 = Math.floor(n / 100);
    document.getElementById("norm_2").innerHTML = "Reversed: " + ("" + digit1 + digit2 + digit3);
}

function calculatePercent() {
    const deposit = document.getElementById("deposit").value;
    const months = document.getElementById("months").value;
    if (isNaN(deposit) || deposit <= 0 || isNaN(months) || months <= 0) {
        document.getElementById("max_1").innerHTML =
            '<span style="color: red">Please enter valid values</span>';
        return;
    }
    const annualRate = 0.05;
    const percent = deposit * annualRate * (months / 12);
    document.getElementById("max_1").innerHTML =
        "Sum of percent: " + percent.toFixed(2);
}

function evaluateExpressions() {
    const result1 = 2 && 0 && 3;
    const result2 = 2 || 0 || 3;
    const result3 = 2 && 0 || 3;
    const output = `
        2 && 0 && 3 → ${result1}<br>
        2 || 0 || 3 → ${result2}<br>
        2 && 0 || 3 → ${result3}
    `;
    document.getElementById("max_2").innerHTML = output;
}
