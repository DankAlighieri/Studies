import Layout from "../components/Layout"

export default function Jsx() {
    const titulo = <h1>JSX eh um conceito central</h1>
    function subtitulo() {
        return <h1>{Math.random()}</h1>     
    }
    return (
        <Layout titulo='Entendendo o JSX'>
{/* Js so pode ser acessado utilizando par de chaves */}
            <div>
                {titulo}
                {subtitulo()}
                <p>
                    {JSON.stringify({nome: 'Joao', Idade: 30})}
                </p>
            </div>    
        </Layout>   
    )
}