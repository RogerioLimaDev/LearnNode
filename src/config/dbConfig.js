import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

/// ---- NÃO SUBIR PARA O GITHUB ----///
const connectionString = process.env.DB_CONNECTION;
/// ---- NÃO SUBIR PARA O GITHUB ----///

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