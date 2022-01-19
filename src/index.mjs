import {Server} from './server.mjs';

//server ka constructor call kra app ko access krne ke liye app se listen kiya port ko 
let server = new Server().app;

let port = 5000;
server.listen(port, () => {
    console.log('server is running');
});



// import express from 'express';

// const app = express();
// const port = 2000;
// app.listen(port,()=>{
//     console.log("listeninng...")
// })

