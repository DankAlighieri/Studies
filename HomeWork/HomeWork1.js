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

// 4 discover month 

function nomeDoMes(numero) {
  const mes = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  return mes[--numero]
}

console.log(nomeDoMes(12));
console.log(nomeDoMes(11));

// 5 return whos bigger 

function biggerOrEqual(x, y) {
  if (x > y) return `${x} is bigger than ${y}` 
  else if (x < y) return `${y} is bigger than ${x}` 
  else return `${x} is esqual to ${y}` 
}

console.log(biggerOrEqual(1,2));
console.log(biggerOrEqual(2,1));
console.log(biggerOrEqual(1,1));

// 6 accept a boolean or a number and return the inverse of the input.

function inverso(valor) {
  const tipo = typeof valor;
  if (tipo === 'boolean') return !valor
  else if (tipo === 'number') return -valor
  else 
    return`Booleano ou numero esperados. Tipo ${tipo} nao aceito.`

}
console.log(inverso(false));
console.log(inverso(1));
console.log(inverso('1'));

// 7 Get 4 params (number, min, max, includes) return if 1st param is in beteween the 2nd and 3rd params, the 4th param is optional and states if the operation will include <=/=> in the logical operation

function inBetween(number, min, max, inclusive) {   
  if (inclusive === undefined){
      if (number > min && number < max) return 'verdadeiro 1'
      else return 'falso 1'
  }
  else if (inclusive === true) {
      if (number >= min && number <= max) return 'verdadeiro 2'
      else return 'falso 2'
  }
}
/*    
  } */
console.log(inBetween(50, 10, 100));
console.log(inBetween(16, 100, 100));
console.log(inBetween(3, 3, 150));
console.log(inBetween(3, 3, 150, true));

// 8 multiply without using multiplier operator

function multiply(x, y) {
  let resultado = 0
  for (let i = 0; i < y; i++) {
    resultado += x
  }
  return resultado
}

console.log(multiply(5,100));

// 9 function that receive 2 params (element, n) the 1st will repeat n amount of time and return an array of n elements

function repeat(element, n) {
  let resultado = [] 
  for (i = 0; i < n; i++){
    resultado.push(element)
  }
  return resultado
}

console.log(repeat('aloha', 10));

// 10 function that receive 1 param (n) and returns n '+'

function plusRepeats(n) {
  let repeated = ''
  for (i = 0; i < n; i++) {
    repeated += '+'
  }
  return repeated
}

console.log(plusRepeats(2));
console.log(plusRepeats(3));

// 11 enters an array and returns a new array with the first and last elements from the original one

function returnsFirstAndLast(array) {
  resultado = []
  resultado.push(array[0])
  resultado.push(array[(array.length-1)])
  return resultado
}

array = ['first','middle', 'last']
console.log(returnsFirstAndLast(array));

// 12 receives an object and one object's property as params and return the object without the property entered 

function removeProperty(obj, prop) {
  const copia = Object.assign({}, obj)
  delete  copia[prop]

  return copia
}

console.log(removeProperty(
  obj1 = {
  nome: 'whatever', 
  idade: 13
}, 'nome'));

// 13 