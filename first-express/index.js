const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

// app.use((req, res) => {
//   console.log("Hello World");
//   res.send(`Ini string dari respon`);
// });

// app.get("/cats", (req, res) => {
//   res.send("cats page");
// });

// app.post("/cats", (req, res) => {
//   res.send("post cats page");
// });

// app.get("/blog/:category/:author/:judul", (req, res) => {
//   const { category, author, judul } = req.params;
//   res.send(`Blog dengan kategori: ${category} dengan author: ${author} dengan judul ${judul}`);
// });

// app.get("/search", (req, res) => {
//   // console.log(req.query);
//   const { q } = req.query;

//   if (!q) {
//     res.send("Query not found");
//   } else {
//     res.send(`Query: ${q}`);
//   }
// });

app.get("*", (req, res) => {
  res.send("Page not found");
});

app.listen(8080, () => {
  console.log("Server is running on port http://localhost:8080");
});
