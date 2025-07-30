function nameOfUser() {
    const nameUser = document.getElementById("nameUser").value;
    if (nameUser === "") {
        document.getElementById("norm_1").innerHTML = '<span style="color: red">Enter you name, please</span>';    
    } else {
        const greetingText = "Hi, " + nameUser + "!";
        document.getElementById("norm_1").innerHTML = greetingText;
    } 
}

function ageOfPeople() {
    const yearBirth = document.getElementById("yearBirth").value;
    const CURRENT_YEAR = 2025;
    if (yearBirth === "") {
        document.getElementById("norm_2").innerHTML = '<span style="color: red">Enter your year of birth</span>';    
    } else {
        const yearNow = CURRENT_YEAR - yearBirth;
        const agePeople = "You are "+  yearNow + " years old now";
        document.getElementById("norm_2").innerHTML = agePeople;
    } 
}

function perimeterOfSquare() {
    const lengthSide = document.getElementById("lengthSide").value;
    if (lengthSide === "") {
        document.getElementById("norm_3").innerHTML = '<span style="color: red">Enter the length of the side of the square, please</span>';    
    } else {
        const perimeterSquare = lengthSide * 4;
        const perimeter = "The perimeter of the square is: " + perimeterSquare;
        document.getElementById("norm_3").innerHTML = perimeter;
    } 
}

function areaOfCircle() {
    const radiusCircle = document.getElementById("radiusCircle").value;
    document.getElementById("max_1").innerHTML = radiusCircle 
    ? "Area of a circle: " + (Math.PI * radiusCircle ** 2)
    : '<span style="color: red">Enter the radius of the circle, please</span>';
}

function quantityOfDollars() { 
    const quantityDollars = document.getElementById("quantityDollars").value;
    const EXCHANGE_RATE = 1.25;
    quantityEuros = quantityDollars / EXCHANGE_RATE;
    document.getElementById("max_2").innerHTML = quantityDollars 
    ? "That equals " + quantityEuros + " euros"
    : '<span style="color: red">Enter the amount (in dollars) you want to exchange, please</span>';
}

function calculationOfSpeed() {
    const distance = document.getElementById("distance").value;
    const time = document.getElementById("time").value;
    if (distance === "") {
        document.getElementById("max_3").innerHTML = '<span style="color: red">Enter the distance between cities (km), please</span>';
        return;
    }
    if (time === "") {
        document.getElementById("max_3").innerHTML = '<span style="color: red">Please enter the time</span>';
        return;
    }
    const speed = distance / time;
    const speedOfMovement = "Required speed: " + speed + " km/h";
    document.getElementById("max_3").innerHTML = speedOfMovement;
}