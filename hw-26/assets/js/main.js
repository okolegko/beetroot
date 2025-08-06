function ageOfPeople() {
    const age = document.getElementById("age").value;
    let agePeople;
    if (isNaN(age) || age <= 0) {
        document.getElementById("min_1").innerHTML = 
        '<span style="color: red">Please enter a valid age</span>';
        return;
    }
    if (age < 12) {
        agePeople = "You are a child";
    } else if (age >= 12 && age <18) {
        agePeople = "You are a teen";
    } else if (age >= 18 && age <60) {
        agePeople = "You are an adult";
    } else {
        agePeople = "You are a Senior:)))";
    }
    document.getElementById("min_1").innerHTML = agePeople;
}

function specialCharacter() {
    const specialChar = +document.getElementById("specialChar").value;
    if (isNaN(specialChar) || specialChar < 0 || specialChar > 9) {
        document.getElementById("min_2").innerHTML = 
        '<span style="color: red">Please enter a valid number</span>';
        return;
    }    
    let specChar;
    switch (specialChar) {
        case 1:
            specChar = "!";
            break;
        case 2:
            specChar = "@";
            break;
        case 3:
            specChar = "#";
            break;
        case 4:
            specChar = "$";
            break;
        case 5:
            specChar = "%";
            break;
        case 6:
            specChar = "^";
            break;
        case 7:
            specChar = "&";
            break;
        case 8:
            specChar = "*";
            break;
        case 9:
            specChar = "(";
            break;
        case 0:
            specChar = ")";
            break;                                               
    }
    document.getElementById("min_2").innerHTML = "The special character on this key is: " + specChar;
}

function rangeOfNumbers() {
    const firstNumber = +document.getElementById("firstNumber").value;
    const secondNumber = +document.getElementById("secondNumber").value;
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById("min_3").innerHTML = 
        '<span style="color: red">Please enter a valid number</span>';
        return;
    }    
    let sum = 0;
    if (firstNumber > secondNumber) {
        for (let i = firstNumber; i >= secondNumber; i--) {
            sum += i;
        }
    } else {
        for (let i = firstNumber; i <= secondNumber; i++) {
            sum += i;
        }
    }
    document.getElementById("min_3").innerHTML = "The sum of numbers in the given range is: " + sum;
}

function greatestCommonDivisor() {
    let firstNum = +document.getElementById("firstNum").value;
    let secondNum = +document.getElementById("secondNum").value;
    if (isNaN(firstNum) || isNaN(secondNum) || firstNum === 0 || secondNum === 0) {
        document.getElementById("min_4").innerHTML = 
        '<span style="color: red">Please enter a valid number</span>';
        return;
    }
    firstNum = Math.abs(firstNum);
    secondNum = Math.abs(secondNum);
    let thirdNum = (firstNum < secondNum) ? firstNum : secondNum;
    let maxDivisor = 1;
    for (let i = thirdNum; i >= 1; i--) {
        if (firstNum % i === 0 && secondNum % i === 0) {
            maxDivisor = i;
            break;
        }
    }
    document.getElementById("min_4").innerHTML = "Greatest common divisor is: " + maxDivisor;
}

function DivisorsOfNumber() {
    let divNum = +document.getElementById("divNum").value;
    if (isNaN(divNum) || divNum === 0) {
        document.getElementById("min_5").innerHTML = 
        '<span style="color: red">Please enter a valid number</span>';
        return;
    }    
    divNum = Math.abs(divNum);
    let divisorsStr = "Divisors of the number: ";
    for (let i = 1; i <= divNum; i++) {
        if (divNum % i === 0) {
            divisorsStr += i + " ";
        }
    }
    document.getElementById("min_5").innerHTML = divisorsStr;
}




function checkPalindrome() {
    let palindromeNum = +document.getElementById("palindromeNum").value;
    if (isNaN(palindromeNum) || palindromeNum < 10000 || palindromeNum > 99999) {
        document.getElementById("norm_1").innerHTML =
            '<span style="color: red">Please enter a valid 5-digit number</span>';
        return;
    }
    palindromeNum = Math.abs(palindromeNum);
    const pal1 = Math.floor(palindromeNum / 10000);
    const pal2 = Math.floor((palindromeNum % 10000) / 1000);
    const pal4 = Math.floor((palindromeNum % 100) / 10);
    const pal5 = palindromeNum % 10;
    if (pal1 === pal5 && pal2 === pal4) {
        document.getElementById("norm_1").innerHTML =
            "The number is a palindrome";
    } else {
        document.getElementById("norm_1").innerHTML =
            "The number is not a palindrome";
    }
}


function calculateDiscount() {
    let amount = +document.getElementById("amount").value;
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("norm_2").innerHTML =
            '<span style="color: red">Please enter a valid purchase amount</span>';
        return;
    }
    let discount = 0;
    if (amount >= 500) {
        discount = 0.07;
    } else if (amount >= 300) {
        discount = 0.05;
    } else if (amount >= 200) {
        discount = 0.03;
    }
    let finalAmount = amount - (amount * discount);
    let message = `Total to pay: ${finalAmount.toFixed(2)}`;
    if (discount > 0) {
        message += ` (discount ${(discount * 100).toFixed(0)}%)`;
    } else {
        message += ` You do not have a discount)`;
    }
    document.getElementById("norm_2").innerHTML = message;
}


function analyzeNumbers() {
    const quantityNum = document.getElementById("quantityNum");
    let positives = 0;
    let negatives = 0;
    let zeros = 0;
    let evens = 0;
    let odds = 0;
    for (let i = 1; i <= 10; i++) {
        let input = prompt(`Enter number ${i} of 10:`);
        let number = +input;
        if (isNaN(number)) {
            alert("Invalid input. Please enter a number.");
            i--; 
            continue;
        }
        if (number > 0) {
            positives++;
        } else if (number < 0) {
            negatives++;
        } else {
            zeros++;
        }
        if (number % 2 === 0) {
            evens++;
        } else {
            odds++;
        }
    }
    let result = `
        Positive numbers: ${positives} <br>
        Negative numbers: ${negatives} <br>
        Zeros: ${zeros} <br>
        Even numbers: ${evens} <br>
        Odd numbers: ${odds}
    `;
    document.getElementById("norm_3").innerHTML = result;
}


function analyzeDays() {
    let dayIndex = 0;
    const dayWeek = document.getElementById("dayWeek");
    let proceed;
    do {
        let day = "";
        if (dayIndex === 0) day = "Sunday";
        else if (dayIndex === 1) day = "Monday";
        else if (dayIndex === 2) day = "Tuesday";
        else if (dayIndex === 3) day = "Wednesday";
        else if (dayIndex === 4) day = "Thursday";
        else if (dayIndex === 5) day = "Friday";
        else if (dayIndex === 6) day = "Saturday";
        proceed = confirm(`Day of the week: ${day}\nDo you want to see the next day?`);
        dayIndex = (dayIndex + 1) % 7;
    } while (proceed);
}


function guessNumber() {
    let output = document.getElementById("max_1");
    let min = 0;
    let max = 100;
    do {
        let guess = Math.floor((min + max) / 2);
        let response = prompt(`Ваше число > ${guess}, < ${guess} або == ${guess}? Введіть >, < або =`);
        if (response === '>') {
            min = guess + 1;
        } else if (response === '<') {
            max = guess - 1;
        } else if (response === '=') {
            output.innerHTML = `Ви загадали число ${guess}!`;
            break;
        } else {
            alert("Введіть тільки один із символів: >, < або =");
        }
    } while (min <= max);
    if (min > max) {
        output.innerHTML = "Спробуйте ще раз.";
    }
}


function multiplicationTable() {
    const output = document.getElementById("max_2");
    let html = "";
    for (let i = 2; i <= 9; i++) {
        html += `<div class="p-2 col-2 mx-4">`;
        for (let j = 1; j <= 10; j++) {
            html += `<div>${i} x ${j} = ${i * j}</div>`;
        }
        html += `</div>`;
    }
    output.innerHTML = html;
}


function nextDate() {
    let day = +(document.getElementById("day").value);
    let month = +(document.getElementById("month").value);
    let year = +(document.getElementById("year").value);
    let daysInMonth;
    switch (month) {
        case 1: case 3: case 5: case 7:
        case 8: case 10: case 12:
            daysInMonth = 31;
            break;
        case 4: case 6: case 9: case 11:
            daysInMonth = 30;
            break;
        case 2:
            let leap = (year % 4 === 0);
            daysInMonth = leap ? 29 : 28;
            break;
        default:
            document.getElementById("max_3").innerHTML = '<span style="color:red">Invalid Month</span>';
            return;
    }
    if (day < 1 || day > daysInMonth) {
        document.getElementById("max_3").innerHTML = '<span style="color:red">Invalid day</span>';
        return;
    }
    day++;
    if (day > daysInMonth) {
        day = 1;
        month++;
        if (month > 12) {
            month = 1;
            year++;
        }
    }
    document.getElementById("max_3").innerHTML = 
        `Next Date: ${day}.${month}.${year}`;
}
