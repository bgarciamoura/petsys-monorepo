import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json("Hello World, this is my first monorepo and i'm already using docker!");
});

app.listen(3000, () => {
    console.log('Server listening on port 3000! Access http://localhost:3000/');
});
