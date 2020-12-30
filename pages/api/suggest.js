import { Search } from "sonic-channel";

const sonicSuggest = new Search({
  host: "localhost",
  port: 1491,
  auth: "SecretPassword",
});

sonicSuggest.connect({
  connected: () => console.log("Suggestions active"),
});

export default async (req, res) => {
  const { word } = req.query;

  const suggestions = await sonicSuggest.suggest("books", "default", word, {
    lang: "por",
  });

  res.json(suggestions);
};
