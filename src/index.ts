import express, { Express, Request, Response } from 'express';
import ip from 'ip';

const app: Express = express();
const PORT = 8191;

function getRoot(req: Request, res: Response): void{
    res.send('Hello, from Colby!');
}

app.get('/', getRoot);

function handleListenEvent (): void{
    //I can write any code that requires a bound port
    console.log(`Listening on port http://${ip.address()}:${PORT}`);
}


app.listen(PORT, handleListenEvent); //turns on server at port specified; keeps it on for requests;
//I have no idea if the port has been bound yet
console.log('The listen function just executed.');
