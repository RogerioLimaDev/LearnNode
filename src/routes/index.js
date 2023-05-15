import express from "express";
import papoRouter from "./papoRoutes.js";

const routes = (app)=>{
    // app.route('/').get((req, res) =>{ 
    // console.log(publicDir);
    // res.status(200).send({titulo: "Mensagem do servidor"})
    // })

    app.use(
        express.json(),
        papoRouter
    )
}

export default routes