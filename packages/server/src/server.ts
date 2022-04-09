import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.SERVER_PORT || 3000;

console.log(process.env.SERVER_PORT);

app.get('/', (req, res) => {
    res.json("Hello World, this is my first monorepo and i'm already using docker, i'm using prisma too!");
});

export { app, PORT };
