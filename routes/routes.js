const express = require('express')
const axios = require('axios')
const routes = express.Router()

const API_RestController = require("../controllers/controllersAPI_Rest")
const NewsController = require("../controllers/controllersDaily")

routes.get('/', API_RestController.getPessoa)
routes.post('/add', API_RestController.addPessoa)
routes.delete('/delete/:id', API_RestController.deletePessoa)
routes.put('/put/:id', API_RestController.editPessoa)

routes.get("/noticiasHoje", NewsController.getNoticias)
routes.get("/noticias/:dia/:mes/:ano", NewsController.getNoticiasX)

module.exports = routes