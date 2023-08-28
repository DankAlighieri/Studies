import Cabecalho from "../components/Cabecalho";
import { Fragment } from "react";
import Layout from "../components/Layout";

export default function Exemplo() {
    return (
        <Layout titulo ="Usando componentes">
            <Cabecalho capitulo = "Fundamentos" modulo = "Next.js & React"/>
            <Cabecalho capitulo = "Functions" modulo = "Next.js" />
        </Layout>
    )
}