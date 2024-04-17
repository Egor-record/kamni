require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { sendMessageToUser, generateSitemap } = require('./utils');

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

// Serve sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  const sitemap = generateSitemap(routes);
  res.header('Content-Type', 'application/xml');
  res.send(sitemap);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Define a route to serve your HTML file
app.post('/send-form', (req, res) => {
  const { name, email, phone, textarea } = req.body; // Extract data from request body
  sendMessageToUser(128490476, `Новая заявка! Данные клиента: ${name}, ${email}, ${phone}, ${textarea}`)
  res.json({ status: "Ok" });
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', '404.html'));
});


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});



