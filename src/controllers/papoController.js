class papoController{
    static recebeMsgsGPT = (req, res)=>{
        res.status(200).send("<body><h1>Resposta do Bot</h1><p>Aqui será a resposta da api do GPT</p></body>");
    }

    static enviaMsg = (req, res)=>{
        const msg = req.body.msg;
        console.log(msg);
        res.status(201).send(`O GPT recebeu a sua mensagem: "${msg}"`);
    }
}

export default papoController