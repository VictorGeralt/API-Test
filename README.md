# Teste Técnico – Estágio em Desenvolvimento

API desenvolvida para teste tecnico

## Objetivo

Essa API é dividida em 2 partes, uma parte simples onde podem ser feitas interaçoes com um array simulando operaçoes basicas do padrao *REST*. Em sua outra parte utiliza da API publica do *IBGE noticias* para retornar uma rotina diaria de noticias, as noticias do dia, ou de qualquer dia que esteja na api de acordo com o endpoint utilizado.

## Modulos

Alguns modulos foram utilizados como recomendaçao para auxilio dessa tarefas, estes são:

* Express
* Axios
* Node-cron

Alem desses foi usado para facilitar o debug da API o modulo

* Nodemon

Facilitando assim suas execuções

## Execução

Para execução foi criado um script no *package.json* para toda execução ja ser realizada com o auxilo do Nodemon:

```
"start": "nodemon index.js",
```

Logo a API pode ser iniciada com o comando:

```
npm start
```

<img src="img\execucao.png">

## Funcionamento

Com auxilio do postman foram geradas collections. A porta usada para a API é a 21262. A estrutura de controladores foram divididos na parte da API basica e na que usa a API publica de noticias do IBGE

### Primeira parte

```
routes.get('/', API_RestController.getPessoa)
```

Nessa rota é chamado o array de nomes mais comuns no brasil retirado tambem do site do IBGE

```
routes.post('/add', API_RestController.addPessoa)
```

Nessa é possivel adicionar um novo componente no array pelo postman como por exemplo:

<img src="img\add.png">

```
routes.delete('/delete/:id', API_RestController.deletePessoa)
```

Alem disso nessa é possivel excluir um componente informando seu id

```
routes.put('/put/:id', API_RestController.editPessoa)
```

E por fim podemos trocar o componente do id informando colocando um outro no lugar

<img src="img\put.png">

### Segunda parte

Nessa parte temos primeiramente duas rotas:

```
routes.get("/noticiasHoje", NewsController.getNoticias)
```

Nessa é retornado todas noticias do dia atual da maquina usada tanto no endpoint quanto no terminal

```
routes.get("/noticias/:dia/:mes/:ano", NewsController.getNoticiasX)
```

E tambem é possivel encontrar as noticias que aconteceram em qualquer dia disponivel

Nas duas situaçoes a API é chamada e manipulada para demonstrar todas noticias de algum dia

E com o auxilio do Node-cron foi feita uma função para gerar uma rotina diaria onde todo dia as 23:59 sao requisitadas e mostradas no terminal todas noticias do dia

## Testes

Para facilitação dos testes estao sendo colocadas junto com os codigos a collection gerada no Postman
