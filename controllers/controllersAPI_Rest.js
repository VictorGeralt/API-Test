let db = [
    {
        1: {
            "nome": "MARIA",
            "frequencia": 11734129,
            "ranking": 1
        }
    },
    {
        2: {
            "nome": "JOSE",
            "frequencia": 5754529,
            "ranking": 2
        }
    },
    {
        3: {
            "nome": "ANA",
            "frequencia": 3089858,
            "ranking": 3
        }
    }
]

exports.getPessoa = (req, res) => {
    return res.json(db)
}

exports.addPessoa = (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
}

exports.deletePessoa = (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if (!item[id]) {
            return item
        }
    })
    db = newDB
    return res.send(newDB)
}

exports.editPessoa = (req, res) => {
    const id = req.params.id
    const body = req.body

    if (!body)
        return res.status(400).end()

    db.find(item => {
        if (item[id]) {
            item[id] = body[id]
        }
    })

    return res.json(body)
}