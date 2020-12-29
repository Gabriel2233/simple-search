import { Ingest } from "sonic-channel";
import { v4 as uuid } from "uuid";

//const sonicIngest = new Ingest({
//host: "localhost",
//port: 1491,
//auth: "SecretPassword",
//});

//sonicIngest.connect({
//connected: () => console.log("Successfully connected to Sonic :)"),
//});

export default async (req, res) => {
  const bookData = JSON.parse(req.body);
  const bookId = uuid();

  res.json({ id: bookId, ...bookData });
};
