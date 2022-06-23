var operator = prompt(
  "What do you want to calculate?: Addition, Subtraction, Multiplication, Division"
)
console.log("Arithematic Operator")

var num1 = parseInt(prompt("Enter Num1: ")) //convert string to Integer

var operator = prompt("Enter Operator to use: +, -, *, ")

var num2 = parseInt(prompt("Enter Num2: ")) //convert string to Integer

let myresult

if (operator == "+") {
  myresult = num1 + num2
} else if (operator == "-") {
  myresult = num1 - num2
} else if (operator == "*") {
  myresult = num1 * num2
} else if (operator == "/") {
  myresult = num1 / num2
}

alert(myresult)
