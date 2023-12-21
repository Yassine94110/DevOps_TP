// server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Microservice 1');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Microservice 1 listening on port ${PORT}`);
});
module.exports = app; // Assurez-vous d'ajouter cette ligne
