
## client-server

O servidor cliente possue como principal característica a riqueza do cliente. Isso significa que toda ou a maior parte das informações do servidor estão armazenadas localmente no cliente. Isso gera o gargalo de ter que atualizar cada máquina individualmente sempre que uma nova versão do servidor for lançada. O servidor está lá apenas para processar informações ou efetuar requisições.

## web-server-side

Ao contrário do client side, toda a informação do site é gerada no servidor web, não apenas as requisições ou informações são enviadas. Isso pode gerar uma latência muito grande e prejudicar a experiência do usuário.

## Front-end client side + services 
Os clientes são ricos, mas não possuem problemas de distribuição pois todas as informações são enviadas em formato JSON pelo servidor para o cliente no runtime.