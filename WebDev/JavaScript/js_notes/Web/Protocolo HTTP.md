
## Caracteristicas

- Faz parte da camada de aplicação, topo da pilha, diretamente conectado ao usuário.
- Stateless, não existe estado de protocolo. O protocolo entre servidor e máquina sempre será considerado como primeiro. 
- Cliente-Servidor
- Protocolo TCP/IP
- HTML, CSS, JS, Mídias, etc

## Fluxo

1. Usuário informa a URL
2. Browser gera a requisição
	- GET / HTTP/ 1.1
	- Host: www.google.com.br
3. Servidor Web gera a resposta 
	- HTTP/1.1 200 OK 
	- content-Type: text/html; charset=UTF-8
	- date: Mon, 30 Abril 2018 17:00:02 GMT
	- connection: close
	- content-Length: 438
	- <!--<html> ... </html> -->
4. Exibe a página

## Métodos HTTP

- GET -- Mais utilzado
- POST -- Mais utilizado
- PUT
- DELETE
- TRACE
- OPTIONS
- CONNECT
- HEAD

## Requisição e resposta

![[Pasted image 20230213135407.png]]
	Quanto menos requisições feitas pelo site, melhor. O protocolo TCP/IP trabalha com os "Handshakes" que são requisições e confirmações de identificação iniciais para assegurar a segurança e só então é feita a transferência de dados. Um site com, por exemplo, 40 arquivos JS, fará 40 requisições diferentes, tornando o procesamento do site lento e pesado. logo, é recomendado unir a maior parte dos arquivos de requisição é um grande arquivo, diminuindo assim a carga do site.

## Requisição via GET

A requisição tipo get habilita a possibilidade de passar os parâmetros da pesquisa dentro de seu header (URL).

Ex.:
	https://ww.google.com.br/search?q=linux&hl=pt-BR

URL -> https://ww.google.com.br/search;
Operador para separar requisição de parâmetro -> ?;
Parâmetros -> q=linux&hl=pt-BR
							-> q = query (busca);
							hl = header language.

## Requisição via POST

A requisição tipo POST permite que os parâmetros passados sejam declarados dentro do corpo, ao invés do header

## Grupos de Status HTTP

- 1XX - informação;
- 2XX - Sucesso;
- 3XX - Redirecionamento;
- 4XX - Erro no cliente;
- 5XX - Erro no servidor.