import { Search } from "sonic-channel";

const sonicSearch = new Search({
  host: "localhost",
  port: 1491,
  auth: "SecretPassword",
});

sonicSearch.connect({
  connected: () => "Search Connected",
});

export default async (req, res) => {
  const { q } = req.query;

  const results = await sonicSearch.query("books", "default", q, {
    lang: "por",
  });

  res.json(results);
};
