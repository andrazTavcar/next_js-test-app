import {MongoClient} from "mongodb";

export const getDefaultCollection = async () =>{
  const client = await MongoClient.connect(
      'mongodb+srv://<userName>:<password>@cluster0.ihnwtop.mongodb.net/?retryWrites=true&w=majority')
  const db = client.db();

  const collection = db.collection('TestCollection');
  return {collection, client};
}