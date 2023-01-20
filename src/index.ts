import express, { Express, Request, Response } from 'express';
import ip from 'ip';

const app: Express = express();
const PORT = 8191;

function getRoot(req: Request, res: Response): void{
    res.send('Hello, from Colby!');
}

function handleListenEvent (): void{
    console.log(`Listening on port http://${ip.address()}:${PORT}`);
}

app.get('/', getRoot); 
app.listen(PORT, handleListenEvent);