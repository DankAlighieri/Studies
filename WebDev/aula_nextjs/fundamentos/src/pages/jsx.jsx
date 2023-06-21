export default function Jsx() {
    const titulo = <h1>JSX eh um conceito central</h1>
    function subtitulo() {
        return <h1>{Math.random()}</h1>     
    }
    return (
        <div>
    {/* Js so pode ser acessado utilizando par de chaves */}           
            {titulo}
            {subtitulo()}
            <p>
                {JSON.stringify({nome: 'Joao', Idade: 30})}
            </p>
        </div>
    )
}