require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const activePackagesRoutes = require('./routes/activePackages');
const hourPackagesRoutes = require('./routes/hourPackages');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use('/api/active-packages', activePackagesRoutes);
app.use('/api/hour-packages', hourPackagesRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
