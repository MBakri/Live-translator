import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import audioprocessorrouter from "./routes/audioprocessor";
//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('../swagger.json');

dotenv.config();
export const app = express();
app.use(cors());

const port = process.env.PORT;

app.use(express.json());
app.listen(port, () => {
	console.log(`App is listening on port: ${port}!`);
});
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use("/api/audioprocessor", audioprocessorrouter);
