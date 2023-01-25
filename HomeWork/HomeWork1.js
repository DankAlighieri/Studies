// 1 function to greet param
//

function greetings(name) {
  console.log(`Hello, ${name}!`);
}

greetings("Leonardo")
greetings("Santos")

// 2 Function to get age and return days equivalent

function getDays(years) {
  days = years * 365;
  return days
}

console.log(getDays(25));
console.log(getDays(70));

// 3 function to return monthly wage

function calcularSalario(hours, wage) {
  monthlyWage = hours * wage
  return `Your monthly wage is R$ ${monthlyWage.toFixed(2).replace('.', ',')}`
}

console.log(calcularSalario(150, 40.5));