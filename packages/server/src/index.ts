import { app, PORT } from './server';

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}, ready to accept connections!`);
});
