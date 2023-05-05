import React from 'react';
import { createRoot } from 'react-dom/client';
// import Primeiro from './componentes/Primeiro';
// import BomDia from './componentes/BomDia';
// import Multiplos from './componentes/Multiplos';
// import Saudacao from './componentes/Saudacao';
import Pai from './componentes/Pai';
import Filho from './componentes/Filho';


// criando o container para adicionar os elementos.
const container = document.getElementById('root');
const root = createRoot(container);

// let elemento = <h1>React 2</h1>;

// root.render(
//     <div>
//         <Multiplos.BoaTarde nome="Guilherme" />
//         <Multiplos.BoaNoite nome="Ana" />
//     </div>
// );

root.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Chamando componentes independentementes */}
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
)
