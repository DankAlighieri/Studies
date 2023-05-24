const obj = {a:1, b:2, c:3, soma(){return a+c+c}}
console.log(JSON.stringify(obj));

// console.log(JSON.parse("{a:1, b:2, c:3}"));
//console.log(JSON.parse("{'a':1,'b':2,'c':3}"));

//JSON ACEITA APENAS ASPAS DUPLAS NA SUA DECLARACAO
console.log(JSON.parse('{"a" : 1, "b" : 2, "c" : 3}'));
console.log(JSON.parse('{"a" : 1.7, "b" : "string", "c": true, "d": {},"e": []}'));