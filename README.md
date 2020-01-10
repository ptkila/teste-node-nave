# teste-node-nave - API
Implementação do exercício proposto onde temos como objetivo o desenvolvimento de uma API para um sistema básico para o 
cadastro de vagas de trabalho e recursos relacionados

## Requisitos
* Node.js
* npm
* MySQL
* Postman (para facilitar os testes)

## Setup
Para utilizar a API em desenvolvimento, siga um dos procedimentos abaixo:

#### 1. Instala todas as dependências do package.json  

```console
$ npm install
```

#### 2. Variáveis de ambiente
Uma vez que dinâmicas conforme cada ambiente, as configurações, como palavra-chave para encriptação de tokens e 
credenciais do banco de dados são consumidas de um arquivo **.env**. Recomenda-se seguir este padrão. Para isso:

1. Copiar o arquivo **.env.example** na raíz e nomeá-lo **.env**, ainda na raíz 
2. Inserir os valores no **.env** conforme setup disponível

Se preferir inserir manualmente, as configurações do banco de dados estão disponíveis em `config/config.js`

#### 3. Inicialização do banco de dados  
Rodar, respectivamente, os seguintes comandos no terminal 

```console
$ npm run db:create
```

```console
$ npm run db:migrate
```

```console
$ npm run db:seed
```

#### 4. Inicializar a aplicação

```console
$ npm start
```

#### 5. Estado inicial da aplicação

Com essa combinação de comandos teremos a aplicação em estado de execução e um usuário do tipo Admin cadastrado no banco.

## :pencil: Documentação

A documentação está disponível no browser no momento da inicialização do projeto sob o endpoint raíz `/`. Há também um arquivo `postman_collection.json`, com exemplos de requests, para importação no Postman.

## :zap: Scripts úteis

A fim de abstrair comandos de execução de tarefas constantes, dispõe-se de alguns _scripts_ no arquivo `package.json`

### Criação do banco de dados
```console
$ npm run db:create
```

### Exclusão do banco de dados
```console
$ npm run db:drop
```

### Rodar arquivos de migração do banco de dados
```console
$ npm run db:migrate
```

### Rodar arquivos de seed do banco de dados
```console
$ npm run db:seed
```

### Gerar documentação
```console
$ npm run docs:generate
```
