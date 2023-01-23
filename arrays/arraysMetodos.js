const pilotos = ['Vettel', 'Alonso', ' Raikkonen', 'Massa']
console.log(pilotos.pop()); // removes the last element from the array and returns it
console.log(pilotos);

pilotos.push('Verstappen') // appends new elements to the last position of the array
console.log(pilotos);

pilotos.shift() // removes the first element from the array and returns it
console.log(pilotos);

pilotos.unshift('Hamilton') // appendes new elements to the first position of the array
console.log(pilotos);

// splice can append and remove elements

// adding 
pilotos.splice(2, 0, 'Bottas', 'Massa') // this will add elements before the [2] without removing any present elements
console.log(pilotos);

// removing
pilotos.splice(3, 1) // this will remove 1 element starting by the [3] index
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2) // will create a new array with the elements starting at the [2] index until the end of the array provided
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4) // will create a new array taking the elements starting at the [1] index up until the [3] index, bc the [4] index is the stop point so it won't join the count.
console.log(algunsPilotos2);