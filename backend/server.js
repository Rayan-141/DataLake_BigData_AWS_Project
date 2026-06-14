const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const api = require('./routes');
const logger = require('./logs/logger');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// Serve frontend files from public folder
app.use(express.static(path.join(__dirname, '..', 'frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

logger.info("Server Starting...");
app.listen(PORT, () => {
  logger.info(`Server Running On Port ${PORT}`);
});
