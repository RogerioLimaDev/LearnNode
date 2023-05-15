import express from "express";
import papoController from "../controllers/papoController.js";

const papoRouter = express.Router();

papoRouter
    .get('/papo', papoController.recebeMsgsGPT)
    .post('/papo', papoController.enviaMsg)

export default papoRouter