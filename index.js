import express from "express";
import helmet from "helmet";
import { v4 as uuidv4 } from "uuid";
const userActivity = [

    {
        "id": "00001",
        "activity_submitted": "1721823943",
        "activity_type": "run",
        "activity_duration": "30"
    },

    {
        "id": "00002",
        "activity_submitted": "1721824063",
        "activity_type": "squats",
        "activity_duration": "10"
    },

    {
        "id": "00003",
        "activity_submitted": "1721824173",
        "activity_type": "walk",
        "activity_duration": "15"
    }

]


const app = express();


app.use(helmet());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/activities", (req, res) => {
  res.status(200).json(
    {
      "success": true,
      "payload": userActivity
    }
  );
});

app.post("/activities", (req, res) => {
    const newActivity = req.body.newActivity;
    userActivity.push(newActivity);

    res.status(201).json(
        {
            "success": true,
            "payload": newActivity
        });
});

app.listen(3000, () => {
  console.log("Request logged.");
});
