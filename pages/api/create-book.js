import { Ingest } from "sonic-channel";
import { v4 as uuid } from "uuid";

const sonicIngest = new Ingest({
  host: "localhost",
  port: 1491,
  auth: "SecretPassword",
});

sonicIngest.connect({
  connected: () => console.log("Success :)"),
});

export default async (req, res) => {
  const body = req.body;
  const id = uuid();

  const book = {
    id,
    ...body,
  };

  //Db

  await sonicIngest.push(
    "books",
    "default",
    `book-${book.id}`,
    `${book.title} ${book.description}`,
    { lang: "por" }
  );

  res.json(book);
};
