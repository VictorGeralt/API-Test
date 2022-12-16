
const axios = require('axios')
const nodemailer = require('nodemailer')

exports.getNoticias = async (req, res) => {

    const response = await axios.get('http://servicodados.ibge.gov.br/api/v3/noticias/')
    const body = response.data.items
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    let todayNotice = []
    let NoticiasTexto

    body.forEach(e => {
        const dataH = e.data_publicacao
        const data = dataH.slice(0, -9)

        if (data == today.toLocaleDateString()) {
            console.log(e.titulo);
            console.log("\n");
            console.log(e.introducao);
            console.log("\n");
            console.log(e.link);
            console.log("\n");


            if (data == today.toLocaleDateString()) {
                let notice = { Titulo: e.titulo, Introducao: e.introducao, Link: e.link }
                NoticiasTexto= e.titulo + "\n\n" + e.introducao + "\n\n" + e.link + "\n\n"
                todayNotice.push(notice)
            }
        }
    })


    let mailTransporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'TesteMaker2022@outlook.com',
            pass: 'TesteMaker123789'
        }
    })
     
    let mailDetails = {
        from: 'TesteMaker2022@outlook.com',
        to: 'victor.vic2009@hotmail.com', //caramuru@cefetmg.br
        subject: 'Noticias do Dia',
        html: NoticiasTexto
    }
    
    

    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Erro ao enviar');
        } else {
            console.log('Email enviado com sucesso');
        }
    })

    return res.json(todayNotice)
}

exports.getNoticiasX = async (req, res) => {

    const response = await axios.get('http://servicodados.ibge.gov.br/api/v3/noticias/')
    const body = response.data.items
    const dateN = req.params.dia + "/" + req.params.mes + "/" + req.params.ano

    let todayNotice = []

    body.forEach(e => {
        const dataH = e.data_publicacao
        const data = dataH.slice(0, -9)

        if (data == dateN) {
            let notice = { Titulo: e.titulo, Introducao: e.introducao, Link: e.link }
            todayNotice.push(notice)
        }


    })

    return res.json(todayNotice)
}