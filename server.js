const routes = require('./routes');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('🟢 Back-end Bips started!');
});
