import express from "express";
import routes from "./routes/index.js";

const app = express();
app.disable('x-powered-by');
app.set('views','views');
app.use(express.json());
routes(app);

export default app;

