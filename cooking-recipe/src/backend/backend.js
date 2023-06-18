const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000' // Replace with your frontend URL
}));

// Assuming recipeList.json is in the same directory as the server file
const filePath = '../datas/recipeList.json';

app.post('/', (req, res) => {
  const formData = req.body;

  // Read existing data from the file
  let fileData = null;
  try {
    fileData = fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.log('Error reading JSON file:', error);
    res.status(500).send('Error reading JSON file');
    return;
  }

  let existingData = JSON.parse(fileData);
  // Add the new form data to existing data
  existingData.push(formData);

  // Write updated data to the file
  try {
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    console.log('Form data saved successfully!');
    res.sendStatus(200);
  } catch (error) {
    console.log('Error writing JSON file:', error);
    res.status(500).send('Error writing JSON file');
  }
});

app.get("/", async (req, res) => {
  let fileData = null;
  try {
    fileData = fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.log('Error reading JSON file:');
    res.status(500).send('Error reading JSON file: ');
    return;
  }
  console.log("Recipelist requested.")
  res.send(JSON.stringify(fileData))
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
