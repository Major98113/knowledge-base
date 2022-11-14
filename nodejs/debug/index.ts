// @ts-ignore
import express from 'express';
import fs from "fs";

const app = express();

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    debugger;
    res.send('Hello World!')
})

app.listen( process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${ process.env.PORT }`)
})

/*
    Tap in console: PORT=3000 node inspect index.js 
    And open Chrome Dev Tools and click on NODE.JS logo
*/