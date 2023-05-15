import app from './src/app.js';
import url from "url";
import path from "path";
import express from "express";
import "./src/config/dbConfig.js"
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();


const currentPath = url.fileURLToPath(import.meta.url);
const publicDir = path.join(currentPath, "../src/", "views");
const port = process.env.APP_PORT;
app.use(express.static(publicDir));


app.listen(port, ()=>{
    console.log(`Servidor online`);
});