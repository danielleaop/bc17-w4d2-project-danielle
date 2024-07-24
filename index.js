import express from "express";
import helmet from "helmet";
import { v4 as uuidv4 } from "uuid";

const userActivity = [
  {
    id: uuidv4(),
    activity_submitted: Date.now(),
    activity_type: "run",
    activity_duration: "30",
  },

  {
    id: uuidv4(),
    activity_submitted: Date.now(),
    activity_type: "squats",
    activity_duration: "10",
  },

  {
    id: uuidv4(),
    activity_submitted: Date.now(),
    activity_type: "walk",
    activity_duration: "15",
  },
];

const app = express();
app.use(express.json());

app.use(helmet());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/activities", (req, res) => {
  res.status(200).json({
    success: true,
    payload: userActivity,
  });
});

app.post("/activities", (req, res) => {
  const newActivity = req.body.newActivity;

  if (!newActivity) {
    res.status(400).json({
      error: true,
      data: null,
    });
  }
  const activity = {
    ...newActivity,
    id: uuidv4(),
    activity_submitted: Date.now(),
  };

  userActivity.push(activity);

  console.log(userActivity);

  res.status(201).json({
    success: true,
    payload: newActivity,
  });
});

app.listen(3000, () => {
  console.log("Request logged.");
});
