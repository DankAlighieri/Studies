function voltarValor(valorSaque) {
    let contador100 = 0;
    let contador50 = 0;
    let contador10 = 0;
    let contador5 = 0;
    let contador1 = 0;
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota){
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
        }
    }
}