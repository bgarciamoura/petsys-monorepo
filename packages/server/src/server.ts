import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.SERVER_PORT || 3000;

app.get('/', (req, res) => {
    res.json("Hello World, this is my first monorepo and i'm already using docker!");
});

export { app, PORT };
