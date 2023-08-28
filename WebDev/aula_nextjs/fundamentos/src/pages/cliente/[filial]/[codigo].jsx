import Layout from "@/src/components/Layout";
import {useRouter} from 'next/router'

export default function ClienteProCodgio() {
    const router = useRouter()

    return (
        <Layout titulo="Navegacao Dinamica">
            <div>Codigo = {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}