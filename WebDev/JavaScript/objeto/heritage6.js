function Aula(nome,videoID) {
    this.nome = nome
    this.videoID = videoID
} 

const aula1 = new Aula('Welcome', 123)
const aula2 = new Aula('Cya', 456)
console.log(aula1, aula2);

//simulating the 'new' function
function novo(f, ...params){
    const obj = {} // creating a new object
    obj.__proto__ = f.prototype // associating it's ancestor to the function's prototype
    f.apply(obj, params) // apply will execute the function 'f' utilizing as arg the object as context and the array with all the other args that were passed
    return obj // return the object 
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Ate Breve', 456)
console.log(aula3, aula4);