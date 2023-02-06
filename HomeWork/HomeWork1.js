// 1 function to greet param

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

console.log(biggerOrEqual(1, 2));
console.log(biggerOrEqual(2, 1));
console.log(biggerOrEqual(1, 1));

// 6 accept a boolean or a number and return the inverse of the input.

function inverso(valor) {
  const tipo = typeof valor;
  if (tipo === 'boolean') return !valor
  else if (tipo === 'number') return -valor
  else
    return `Booleano ou numero esperados. Tipo ${tipo} nao aceito.`

}
console.log(inverso(false));
console.log(inverso(1));
console.log(inverso('1'));

// 7 Get 4 params (number, min, max, includes) return if 1st param is in beteween the 2nd and 3rd params, the 4th param is optional and states if the operation will include <=/=> in the logical operation

function inBetween(number, min, max, inclusive) {
  if (inclusive === undefined) {
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

console.log(multiply(5, 100));

// 9 function that receive 2 params (element, n) the 1st will repeat n amount of time and return an array of n elements

function repeat(element, n) {
  let resultado = []
  for (i = 0; i < n; i++) {
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
  resultado.push(array[(array.length - 1)])
  return resultado
}

array = ['first', 'middle', 'last']
console.log(returnsFirstAndLast(array));

// 12 receives an object and one object's property as params and return the object without the property entered 

function removeProperty(obj, prop) {
  const copia = Object.assign({}, obj)
  delete copia[prop]

  return copia
}

console.log(removeProperty(
  obj1 = {
    nome: 'whatever',
    idade: 13
  }, 'nome'));

// 13 receives an object and returns an array of arrays in which the arrays consists of the keys:values pairs of the Object

let obj = {
  nome: "Maria",
  profissao: "Desenvolvedora de Software"
}; // must return [["nome", "maria"], ["profissao", "Desenvolvedora de Software"]];

function objetoParaArray(x) {
    return Object.entries(x);
}

console.log(objetoParaArray(obj));

// 14 Function that receives an array of numbers and returns those which are even AND have even indexes ([0], [2], [4]...)

let array1 = [1, 2, 3, 4] // returns []
let array2 = [10, 70, 22, 43] // returns [10,22]

function somenteOsParesDeIndicesPares(array) {
    array_final = []
    for (let i = 0; i < array.length; i++){
        if (array[i]%2 == 0) {
            if (i%2 == 0) {
                array_final.push(array[i])
            }
        }
    }
    return array_final
}

console.log(somenteOsParesDeIndicesPares(array1));
console.log(somenteOsParesDeIndicesPares(array2));

// 15 Function to return if received year is a leap year

function leapYear(year) {
  if (year%4 == 0) {
      if (year%100 == 0) {
          if (year%400 == 0) {
              return true
          } else {
              return false
          }
      } else return true
  } else return false
}

/* 
function leapYear(year) {
    if (year%4 != 0) {
        return false
    } 

    if (year%100 != 0) {
         return true
    } 

    if (year%400 != 0) {
        return false
    } 

    return true} 
    */

console.log(leapYear(2020));
console.log(leapYear(2100));

// 16 function that receives an array and returns the total sum of all the numbers in it

let array3 = [10, 10, 10]
let array4 = [15, 15, 15, 15]

function somarNumero(array) {
    resultado = 0
    for (let i = 0; i< array.length; i++){
        resultado += array[i]
    }
    return resultado
}
console.log(somarNumero(array1));
console.log(somarNumero(array2));

// 17 function that receives an array of objects and returns the sum of the price key.

let prod1 = [
  {nome: 'Online Journal', category: "Information", price: 89.99},
  {nome: 'Cinema', category: 'Entertainment', price: 150}
] // must return 239.99

let prod2 = [
  {nome: 'Galaxy S20', category: "Electronics", price: 3599.99},
  {nome: 'Macbook Pro', category: 'Electronics', price: 30999.90}
] // must return 34599.89


function returnsPrice(array) {
  let price = array.map(a => a.price)
  let resultado = 0
  for (let i = 0; i < price.length; i++) {
      resultado += price[i]
  }
  return resultado
}

console.log(returnsPrice(prod1));
console.log(returnsPrice(prod2));

// 18 returns the medium of the total sum of the array's numbers

let conjunto1 = [0,10]// returns 5
let conjunto2 = [1, 2, 3, 4, 5] // returns 3

function returnsMedium(array) {
    let resultado = 0
    for (let i = 0; i < array.length; i++) {
        resultado+=array[i]
    }
    return (resultado/array.length)
}

console.log(returnsMedium(conjunto1));
console.log(returnsMedium(conjunto2));

// 19 function to return the area of a triangle

function areaTriangulo(base, height) {
    area = (base * height)/2
    return (`The area of this tirangle is ${area.toFixed(2)}`)
}

console.log(areaTriangulo(10, 15));
console.log(areaTriangulo(7, 9));
console.log(areaTriangulo(9.25, 13.1));

// 20 function that gets an array and returns the lowest number of it.

let conjunto3 = [10, 5, 35, 65]
let conjunto4 = [5, -15, 50, 3]

function menorNumero(array) {
    let lowest = array[0]
    for (i in array)
      if(array[i] < lowest) {
        lowest = array[i]
      }
    return lowest
}

console.log(menorNumero(conjunto3));
console.log(menorNumero(conjunto4));

// 21 guess the random number

function getRandomNumber(input) {
  const generateRandomNumber = Math.floor(Math.random() * 10)
  if (input == generateRandomNumber) {
      return `Congratz, the correct number was ${generateRandomNumber}`
  } else {
      return `I'm sorry, but the correct number was ${generateRandomNumber}`
  }

}

console.log(getRandomNumber(3));
console.log(getRandomNumber(4));

// 22 function to count the ammount of words in a string

let frase = 'Eu sou uma frase'
let frase2 = 'Frase aqui'
function contarPalavras(stri) {
    let resultado = stri.split(' ')
    return resultado.length
}

console.log(contarPalavras(frase));
console.log(contarPalavras(frase2));

// 23 Function to return the ammuont of repetition in a string (MMUST BE CASE SENSITIVE)



let frase1 = "A sorte favorece os audazes" // 2
let frase3 = "Conhece-te a ti mesmo" // 1

function contaCaractere(caractere, frase) {
    let obj1 = frase.split('');
    let resultado = []
    for (let i in obj1){
        if (caractere == obj1[i])
        resultado.push(obj1[i])
    }
    return resultado.length
}

console.log(contaCaractere('r', frase1));
console.log(contaCaractere('c', frase3));

// 24 Search for words 

function buscarPalavrasSemelhantes(inicio, palavras) {
  const resultado = [];

  for (let palavra of palavras) 
      if (palavra.includes(inicio))
          resultado.push(palavra)
          
  return resultado
}

// 25 remove vowels

function removerVogais(palavra) {
  const vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

  vogais.forEach(vogal => palavra = palavra.replace(vogal, ''));
  
  return palavra
}

console.log(removerVogais('Cod3r'));
console.log(removerVogais('Fundamentos'));

// 26 invert keys and values

function inverter(objeto) {
  const paresDeChaveValorInvertidos = 
  Object.entries(objeto).map( parChaveValor => parChaveValor.reverse() )
  return Object.fromEntries(paresDeChaveValorInvertidos)
}

const aleatorio = {a: 1, b: 2, c: 3}

console.log(inverter(aleatorio));

// 27 filter by digit quantity

const primeiro = [38, 2, 365, 10, 125, 11]
const segundo = [5, 9 ,1, 125, 11]

function contarDigitos(array, quantidade) {
  numeros = array.map(numero => numero.toString())
  quantidadeDeDigitos = numeros[i].length  
  resultado = []
    for ( i in numeros) {
      if (quantidadeDeDigitos == quantidade)
        resultado.push(numeros[i])
    }
    return resultado
}

console.log(contarDigitos(primeiro, 2));
console.log(contarDigitos(segundo, 1));

// 28 return the second largest number of the array

const terceiro = [12, 16, 1, 5]
const quarto = [8, 4, 6]

function segundoMaior(array) {
    const maiorNumero = Math.max(...array)
    array = array.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(...array)

    return segundoMaior
}
console.log(segundoMaior(terceiro));
console.log(segundoMaior(quarto));

// 29 get an object with grades and name, return an object with name and average of best student

const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length

function recerberMelhorEstudante(estudantes) {
    const estudantesComMedias = Object.entries(estudantes).map( estudante => {
        const chave = 0,
            valor = 1
    return { nome: estudante[chave], media: media(estudante[valor]) }
    })

    const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
    const melhorEstudante = estudantesOrdenados[0]

    return melhorEstudante
}