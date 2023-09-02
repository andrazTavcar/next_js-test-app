// /api/new-meetup  URL
import {getDefaultCollection} from "../../utils/mongoDbUtils";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // koda se izvede samo na serverju in s tem se ne izpostavi geslo in občutljivi podatki.

    const {collection, client} = await getDefaultCollection();
    const result = await collection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({message: "Inserted"})
  }
}