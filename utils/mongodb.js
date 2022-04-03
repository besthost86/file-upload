import { MongoClient } from 'mongodb'

const client =  await new MongoClient(process.env.MONGO_URI).connect()
export default client.db('files');





