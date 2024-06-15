const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>
  res.send('Emai server is running on vercel')
);

app.listen(3000, () => console.log('Server is up on vercel'));

module.exports =app;