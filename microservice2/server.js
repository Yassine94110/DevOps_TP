// server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Microservice 2');
});

const PORT = process.env.PORT || 3001; // Notez le port différent
app.listen(PORT, () => {
  console.log(`Microservice 2 listening on port ${PORT}`);
});
module.exports = app; // Assurez-vous d'ajouter cette ligne
