const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve your HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/politika', (req, res) => {
  // Здесь можно отправить HTML страницу с вашей политикой конфиденциальности
  res.sendFile(path.join(__dirname, 'public', 'politika.html'));
});

app.get('/soglashenie', (req, res) => {
  // Здесь можно отправить HTML страницу с вашей политикой конфиденциальности
  res.sendFile(path.join(__dirname, 'public', 'soglashenie.html'));
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start the server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});