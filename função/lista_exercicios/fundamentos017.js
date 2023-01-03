function aumentoSalarial(plano, salario){
    switch(plano) {
        case "a":
            return console.log(salarioFinal = salario + (salario*0.1));
            break
        case "b":
            return console.log(salarioFinal = salario + (salario*0.15));
            break
        case "c":
            return console.log(salarioFinal = salario + (salario*0.2));
            break
        default:
            return console.log("Plano inválido");
    }
};

aumentoSalarial("a", 5000)
aumentoSalarial("b", 5000)
aumentoSalarial("c", 5000)
aumentoSalarial("d", 5000)