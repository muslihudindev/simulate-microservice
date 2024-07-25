// gateway.js
const express = require('express');
const app = express();
const port = 4000;
const axios = require('axios');

app.get('/service/hello', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/hello');
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error connecting to the microservice');
  }
});

app.listen(port, () => {
  console.log(`API Gateway listening at http://localhost:${port}`);
});
