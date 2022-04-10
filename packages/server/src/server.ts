import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

import { userRouter } from './routes/users.routes';
import { tutorRouter } from './routes/tutor.routes';

const PORT = process.env.SERVER_PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

app.use('/api/v1/', userRouter);
app.use('/api/v1/', tutorRouter);

app.get('/', (req, res) => {
    res.json("Hello World, this is my first monorepo and i'm already using docker, i'm using prisma too!");
});

export { app, PORT };
