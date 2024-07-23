import express from "express";
import helmet from "helmet";

const app = express();

// Use Helmet!
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello world!");
});


app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(3000, () => {
  console.log("Request logged.");
});
