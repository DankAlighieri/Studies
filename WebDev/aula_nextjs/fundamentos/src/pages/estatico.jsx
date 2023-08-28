import Layout from "../components/Layout";

export async function getStaticProps () {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props) {
    return (
        <Layout titulo='Conteudo Estatico'>
            <div>{props.numero}</div>
        </Layout>
    )
}