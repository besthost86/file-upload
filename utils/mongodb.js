import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.MONGO_URI)
const PORT = process.env.PORT || 3000;

export const connection =  (app)=> {
    client.connect(()=> {
        app.listen(PORT || 3000, ()=>{
            console.log('listening....',PORT );
        }) 
    });

}