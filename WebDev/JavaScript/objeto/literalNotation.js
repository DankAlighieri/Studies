const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} // notacoa antiga
const obj2 = {a, b, c} // notacao nova, menos verbosa

console.log(obj1, obj2); // exatamente iguais

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3); // forma antiga

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4); // forma nova 

const obj5 = {
    funcao1: function() { // forma antiga
        // ...
    },
    funcao2() { // forma nova
        // ...
    }
}

console.log(obj5);