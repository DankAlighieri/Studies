// Prototype chain
Object.prototype.attr0 = '0' // DON'T DO THIS 

const avo = {attr1: "A"}
const pai = { __proto__: avo, attr2: 'B', attr3: '3'} // this attr3 will be shadowed by the son's attr3 since it came first.
const filho = {__proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3, filho.attr4);

const carro = {
    modelo: '',
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/H de ${this.velMax}Km/H`
    }
}

const ferrari = {
    modelo: "F40",
    velMax: 324 //shadowing
}

const volvo = {
    modelo: "V40",
    status() {
        return `${this.modelo}: ${super.status()}` // the super function will refer to the attribute declared inside the prototype.
    }
}

Object.setPrototypeOf(ferrari, carro) //stating that ferrari's prototype/ancestor is the object "carro"
Object.setPrototypeOf(volvo, carro)

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100)
console.log(volvo.status());

ferrari.acelerarMais(100)
console.log(ferrari.status());