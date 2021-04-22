import express from 'express';

const app = express();

/**
 * MÉTODOS de ROTAS
 * GET = Buscas ou Search
 * POST = Criação ou Create
 * PUT = Alteração ou Update
 * DELETE = Delatar
 * PATCH = Alterar informações específicas
*/

app.get("/", (req, res) => {
    // return res.send("Oie NLW 05 - Node JS")
    return res.json({
        message:"Oie NLW 05 - NodeJS by Json"
    })
})

app.post("/users", (req, res) => {
    res.json({
        message:"User saved successfully"
    })
})

// primeiro parâmetro é a url "/" e após uma passamos um segundo parâmetro de função request e response (ou requisição e resposta), lembrando que esse req e res são do framework express, após criamos uma arrom function => {} para inserção de nova função assim retornando uma resposta com envio de uma informação ou return response.send(). Outra forma de retorna uma informação é em formato de JSON utilizando então um return response.json()

app.listen(3333, () => console.log('OIE server running on 33333'))
