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
        return add(a, b);
    else if (c == "-")
        return subtract(a, b);
    else if (c == "*")
        return multiply(a, b);
    else if (c == "/")
        return divide(a, b);
    return "error";
}

// Live code
let displayVal = parseFloat(document.getElementById("display").innerHTML);
