import { MongoClient } from "mongodb";
const connectionString = 'mongodb+srv://limadev:1234@alura.gbebxk0.mongodb.net/?retryWrites=true&w=majority';
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