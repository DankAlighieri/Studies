import Layout from "../components/Layout";
import { useState } from "react";

// componente com estado interno

export default function Estado() {
    const [numero, setNumero] = useState(0); //React Hooks

    function Incrementar() {
        setNumero(numero + 1);
    };

    return(
        <Layout titulo="Componente com estado">
            <div>{numero}</div>
            <button onClick={Incrementar}>Incrementar</button>
        </Layout>
    )
}