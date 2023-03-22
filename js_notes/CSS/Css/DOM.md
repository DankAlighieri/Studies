Document Object Model - DOM - representa a estrutura em forma de arvore do documento HTML e o relacionamento entre os elementos (tags)

![[DOM.png]]

## Tipos de lista

- HTML Collection;
- Node List;
- Array;
- Object;

HTML Collection e Node list sao listas, mas possuem algumas propriedades diferentes e portanto acabam funcionando diferentemente dentro do servidor. Por exemplo, alguns metodos que sao aceitos pelos Arrays, nao serao aceitos pelo HTML Collection ou pelo Node List, como reduce, map, etc.

## Seletores 

- .children
- .firstElementChild (Retorna um HTML Collection sem o #text que retorna os espacos do codigo).
- lasElementChild