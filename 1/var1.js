{
    {
        {
            {
                var sera = 'Sera?';
                console.log(sera);
            }
        }
    }
}

console.log(sera); // a variavel definida com var esta inferida no escopo global. 

function teste() {
    var local = 123; // var definida dentro de funcao nao esta visivel no escopo global.
    console.log(local);
}

teste()
console.log(local());