const express = require('express');
const db = require('./db');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')));

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');


app.use('/api', testimonialsRoutes);
app.use('/api', concertsRoutes);
app.use('/api', seatsRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});
  app.use((req, res) => {
    res.status(404).send('404 not found...');
  })

  app.listen(process.env.PORT || 8000, () => {
    console.log('Server is running on port: 8000');
  });