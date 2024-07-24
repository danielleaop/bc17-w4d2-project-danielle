import express from "express";
import helmet from "helmet";
import info from "./userActivity.json" with {type: "json"};
const app = express();
// Use Helmet!
app.use(helmet());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/activities", (req, res) => {
  res.status(200).json( 
    {
      success: true,
      payload: info,
    }
  );
});

app.listen(3000, () => {
  console.log("Request logged.");
});
