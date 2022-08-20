function getRandInt(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let option;

do {
    option = getRandInt (-1, 10);
    console.log(`Number was ${option}`);
}   while (option != -1) 

console.log('End.');