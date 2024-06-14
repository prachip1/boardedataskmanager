const express = require('express');
const app = express();

app.get("/", (req, res) =>
  res.send('Express on vercel')
);

app.listen(3000, () => console.log('Server is up'));

module.exports =app;