function addition() {
    let x = 23;
    let y = 12;
    let total = x + y;
    document.getElementById("addition").innerHTML +=  "Addition of x & y is = " + total + "<br>";
}
function subtraction() {
    let x = 23;
    let y = 12;
    let total = x - y;
    document.getElementById("subtraction").innerHTML = "Subtraction of x & y is =  " + total;
}
function multiplication() {
    let x = 23;
    let y = 12;
    let total = x * y;
    document.getElementById("multiplication").innerHTML = "Multiplication of x & y is = " + total;
}
function divion() {
    let x = 23;
    let y = 12;
    let total = x / y;
    document.getElementById("division").innerHTML = "Division of x & y is = " + total;
}
addition();
addition();
subtraction();
multiplication();
divion();
