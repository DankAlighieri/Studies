import Link from "next/link"
import Navegador from "../components/Navegador"

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center",
            flexWrap: "wrap",
            height: "100vh"
        }}>
            <Navegador texto="Estiloso" destino='/estiloso'/>
            <Navegador texto="Exemplo" destino='/exemplo' cor="#9400d3"/>
            <Navegador texto=".jsx" destino='/jsx' cor="crimson"/>
            <Navegador texto="Navegacao #01" destino="/navegacao/" cor="green"/>
            <Navegador texto="Navegacao #02" destino="/cliente/sp-2/321" cor="blue"/>
            <Navegador texto="Componente com estado" destino="/estado" cor="#a45b71"/>
            <Navegador texto="Integracao com API #01" destino="/integracao" cor="#42a9a9"/>
            <Navegador texto="Conteudo Estatico" destino="/estatico" cor="#fa054a"/>
        </div>
    )
}