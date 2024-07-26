import express from "express";
import helmet from "helmet";
import { v4 as uuidv4 } from "uuid";

const userActivity = [
  {
    id: "a8c6982f-64d3-46f3-9996-a81c53d95f11",
    activity_submitted: Date.now(),
    activity_type: "run",
    activity_duration: "30",
  },

  {
    id: "7676f726-e9ed-4f74-a71c-8fbb526c997a",
    activity_submitted: Date.now(),
    activity_type: "squats",
    activity_duration: "10",
  },

  {
    id: "55540867-c204-442f-bb46-968c1f1ebd84",
    activity_submitted: Date.now(),
    activity_type: "walk",
    activity_duration: "15",
  },
];

const app = express();
app.use(express.json());

app.use(helmet());

//Hello World

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

//Get request to read data

app.get("/activities", (req, res) => {
  res.status(200).json({
    success: true,
    payload: userActivity,
  });
});

//POST request to add new activity

app.post("/activities", (req, res) => {
  const newActivity = req.body.newActivity;

  if (!newActivity) {
    res.status(400).json({
      error: true,
      data: null,
    });
  }
  if (newActivity) {
  const activities = {
    ...newActivity,
    id: uuidv4(),
    activity_submitted: Date.now(),
  };

  userActivity.push(activities);

  console.log(userActivity);

  res.status(201).json({
    success: true,
    payload: activities,
  });
};
});

// PUT to update an existing activity

function updateActivityById(requestId, updates) {
  {
    const index = userActivity.findIndex(({ id }) => id === requestId);

    if (index === -1) {
      return { success: false, data: null };
    }
    userActivity[index] = { ...userActivity[index], ...updates };
    return { success: true, data: userActivity[index] };
  }
}

app.put("/activities/:id", (req, res) => {
  const updatedActivity = updateActivityById(
    req.params.id,
    req.body.userActivity
  );

  if (!updatedActivity.success) {
    return res.status(400).json({
      error: true,
      data: null,
    });
  }
  res.status(201).json({
    success: true,
    payload: updatedActivity.data,
  });
});

//Delete existing activity with matching ID

function deleteActivityByID(requestId) {
  const index = userActivity.findIndex(({ id }) => id === requestId);
  if (index === -1) {
    return { success: false, data: null };
  }
  const deleted = userActivity[index];
  userActivity.splice(index, 1);
  return { success: true, data: deleted };
}

app.delete("/activities/:id", (req, res) => {
  const deletedActivity = deleteActivityByID(
    req.params.id,
    req.body.userActivity
  );

  if (!deletedActivity.success) {
    return res.status(400).json({
      error: true,
      data: null,
    });
  }

  res.status(201).json({
    success: true,
    payload: userActivity,
  });
});

app.listen(3000, () => {
  console.log("Request logged.");
});
