
- O servidor DNS é uma de traduzir (ou identificar) os domínios utilizando endereços de IP;
- DNS funciona sobre o protocolo UDP na porta 53;
- Fluxo de uma requisição DNS bem-sucedida:
	1. Usuário informa o enderço no browser;
	2. Computador envia uma consulta DNS para o servidor local;
	3. O servidor responde com o endereço IP;
	4. Computador acessa o servidor a partir do IP obtido.

## Busca Recursiva

Um endereço DNS chama o outro até encontrar o endereço correto.

## Busca Iterativa

Um endereço DNS identifica a referência da requisição do DNS client e delega a requisição para outro endereço, onde a máquina refaz a chamada e tem sua reposta por esse segundo endereço.

## DNS Records

- A - IPv4;
- AAAA - IPv6;
- Mx - Servidor de Email;
- NS - Servidor DNS;
- CNAME - Canonical Name (Apelido)