import app from './src/app.js';
import url from "url";
import path from "path";
import express from "express";
import "./src/config/dbConfig.js"


const currentPath = url.fileURLToPath(import.meta.url);
const publicDir = path.join(currentPath, "../src/", "views");
const port = process.env.APP_PORT || 3000;
app.use(express.static(publicDir));


app.listen(port, ()=>{
    console.log(`Servidor online`);
});