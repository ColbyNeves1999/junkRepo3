import express, { Express, Request, Response } from 'express';
import ip from 'ip';

const app: Express = express();
const PORT = 8191;


const stateCapitals: Record<string, string> = {
    'Arkansas': 'Little Rock',
    'Texa': 'Austin',
    'Idaho': 'Salem',
};

/*function getRoot(req: Request, res: Response): void{
    res.send('Hello, from Colby!');
}*/

function handleListenEvent (): void{
    //I can write any code that requires a bound port
    console.log(`Listening on port http://${ip.address()}:${PORT}`);
}

function getCapital(req: Request, res: Response): void {
    // if(req.query.sate) {
    //     res.json({capital: data[req.query.state]});
    // }else{
    // res.json(data);
    // }
    ///////////////////////////////////////
    //res.json(stateCapitals);
    ///////////////////////////////////////
    console.log(req.query);
    if(req.query.state){
        if((state as string) in stateCapitals){
        const {state} = req.query; // is the same as: const state = req.query.state;
        console.log(`User is requesting ${state}`);
        const selectedStateCapital = stateCapitals[state as string];
        const stateData = {
            state,
            capital: selectedStateCapital,
        };
        res.json(stateData);
        }else{
            res.sendStatus(400);
        }
    }else{
        console.log(`User is requesting all state data`);
        res.json(stateCapitals);
    }


}

function addCapital(req: Request, res: Response): void{
    //res.status(501); // 501 means not implemented
    //res.send("We haven't finished building this yet.");
    res.send(501);
}

//app.get('/', getRoot); 
app.get('/capital', getCapital);
app.get('/capital', addCapital);

app.listen(PORT, handleListenEvent); //turns on server at port specified; keeps it on for requests;
//I have no idea if the port has been bound yet
console.log('The listen function just executed.');
