import express from 'express';
import env from 'dotenv';
import { configViewEngine } from "./src/config/viewEngine.js";
import { router } from './src/routes/api.js';
// import testConnection from "./src/config/connectDB.js";

env.config();
const app = express();// app express
const port = process.env.PORT || 8888; // port

//config 
configViewEngine(app);

//route
app.use("/", router);

//test connection db
// testConnection();

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})