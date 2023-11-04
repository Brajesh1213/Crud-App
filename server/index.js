import express from 'express'
import Connection from './database/db.js';
import cors from 'cors'
import Routes from './Routes/routes.js';
// import bodyParser from 'body-parser';

const  app =express();
app.use(cors());

const PORT =8080;
Connection();



app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}))

app.use('/',Routes);




app.listen(PORT,()=>{
    console.log('your server started');
})
