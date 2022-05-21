// Core math functions
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

// Core general functions
function operate(a, b, c){
    if (c == "+")
        return roundTwo(add(a, b));
    else if (c == "-")
        return roundTwo(subtract(a, b));
    else if (c == "*")
        return roundTwo(multiply(a, b));
    else if (c == "/")
        return roundTwo(divide(a, b));
}

function roundTwo(num){
    return Math.round(num * 100) / 100;
}

// Display and value holder variables
let liveDisplay = document.getElementById("display");
let currentVal = null;
let lastOpp = null;
let newNum = true;

// Buttons
let numButtons = document.getElementsByClassName("num-button");
let oppButtons = document.getElementsByClassName("opp-button");

// Clear button
document.getElementById("clear").addEventListener("click", () => {
    currentVal = null;
    lastOpp = null;
    liveDisplay.innerHTML = "";
});

// Delete button
document.getElementById("delete").addEventListener("click", () => {
    liveDisplay.innerHTML = Array.from(liveDisplay.innerHTML).splice(-1,1);
});

// Get num button input
for (let i = 0; i < numButtons.length; i++){
    numButtons[i].addEventListener("click", () => {
        if (newNum == true) {
            liveDisplay.innerHTML = numButtons[i].innerHTML;
            newNum = false;
        }
        else
            liveDisplay.innerHTML += numButtons[i].innerHTML;
    });
}

// Get opp button input
for (let i = 0; i < oppButtons.length; i++){
    oppButtons[i].addEventListener("click", () => {
        if (currentVal != null && lastOpp != "=") {
            liveDisplay.innerHTML = operate(currentVal, parseFloat(liveDisplay.innerHTML), lastOpp);
        }
        currentVal = parseFloat(liveDisplay.innerHTML);
        lastOpp = oppButtons[i].innerHTML;
        newNum = true;
    });
}

