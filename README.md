# Serviços Sul da Ilha

Este projeto não possui fins comerciais. Seu objetivo é práticar meus conhecimentos obtidos após o estudo do Angular, Javascript e TypeScript.


## Requisitos

Para rodar o projeto localmente, será necessário:

- [Node.js](https://nodejs.org/en/): v10.4.x
- [Angular-CLI](https://cli.angular.io): v6.0.x

## Database e API REST
Para dispensar a necessidade de um banco de dados e uma API REST real, utilizei o [JSON Server](https://github.com/typicode/json-server). Sendo assim, é importante rodar o JSON Server para o pleno funcionamento da aplicação.

### Instalando o JSON Server
Não será necessário instalar o JSON Server manualmente, o mesmo já se encontra na lista de dependências do projeto e será instalado automaticamente quando for executado o comando **npm install**.


### Executando o JSON Server
Para executar o JSON Server neste projeto, abra um terminal na pasta raiz do projeto e execute o comando abaixo:

```bash
npm run start:database
```

## Deploy local

Para o deploy local da aplicação será necessário um dos recursos abaixo:

- [http-server](https://www.npmjs.com/package/http-server)
- [XAMPP](https://www.apachefriends.org/pt_br/index.html)
- [LAMP](https://pt.wikipedia.org/wiki/LAMP)

### Acessando em rede local

Para funcionar em sua rede local, altere o arquivo **environment.prod.ts** substituindo o valor abaixo de acordo com seu **IP** local.

```json
apiUrl: 'http://127.0.0.1:3000/'
```

## Licença

O código fonte desta aplicação está sob [Licença MIT](LICENSE), todo o restante deve ser considerado conteúdo registrado dos seus respectivos proprietários e desenvolvedores.
