import express from 'express'
import db from './mongodb.js'

export const app =  express();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');

export default ()=> {
    if (!db) throw new Error('Mongo connection error')
    app.listen(PORT || 3000, ()=>{
        console.log('listening....',PORT );
    }) 
    }