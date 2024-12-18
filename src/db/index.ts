/**
 * This module sets up and starts an Express server.
 * 
 * It imports necessary modules, configures environment variables,
 * sets up middleware for JSON and URL-encoded data parsing,
 * and defines a route for handling the root path.
 * 
 * The server listens on a port specified by the environment variable `PORT`
 * or defaults to 4000 if the environment variable is not set.
 * 
 * @module ServerSetup
 */

import express from 'express'
import { configDotenv } from 'dotenv';
import helloRoute from '../routes/index.routes'
configDotenv();

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(
    express.urlencoded({
        extended: true,
    })
);


// Route for handling the root path
app.use('/', helloRoute);

app.listen(port, () => {
    console.log(`server is listening on port: http://localhost:${port}`);
})