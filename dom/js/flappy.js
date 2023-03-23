function novoElemento (tagName, className) {
    // criando um elemento e atribuindo uma tag 
    const elem = document.createElement(tagName)
    // atribuindo uma classe para o elemento
    elem.className = className
    return elem
}

function Barreira (reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    // definindo a ordem de rendereizacao de elementos
    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')

    // definindo se a barreira sera para cima ou para baixo
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

function ParDeBarreira(altura, abertura, x) {
    //criando a div com classe 'par-de-barreiras'
    this.elemento = novoElemento('div', 'par-de-barreiras')

    // definindo a orientacao da barra
    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    // inserindo o par de barras dentro da div criada
    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

const b = new ParDeBarreira(700, 200, 400)
document.querySelector('[wm-flappy]').appendChild(b.elemento)