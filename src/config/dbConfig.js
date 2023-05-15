import { MongoClient } from "mongodb";
const connectionString = '';
const client = new MongoClient(connectionString);

let mensagens;

try{
    await client.connect();
    const db = client.db("alura-node");
    mensagens = db.collection("livros");
    console.log("Conectado ao banco de dados");
}catch(erro){
    console.log(erro);
}

export {mensagens}