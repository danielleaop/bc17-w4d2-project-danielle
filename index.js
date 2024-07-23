import express from 'express';
const app = express();
let statusCode = res.sendStatus();

app.get('/', (req, res) => {
  res.send('Hello World!');
  res.sendStatus = 200;
  console.log(statusCode);
});

// Adding new routes is as simple as adding new app.get() calls
app.listen(3000, () => {
  console.log('Request logged.');
});