// dot notation allows the access to the object's properties.

console.log(Math.ceil(6.1)); // arredondamento

const obj1 = {};
obj1.nome = 'Bola';
console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome; // this. torna publico o atributo que for passado por ela 
    this.exec = function() {
        console.log('Exec...');
    }
};

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec()