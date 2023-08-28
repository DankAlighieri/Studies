export default function Cabecalho(props) {
    return (
        <header>
            <h1>{props.capitulo} de {props.modulo}</h1>
        </header>
    )
}