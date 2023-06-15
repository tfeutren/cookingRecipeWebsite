const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000' // Replace with your frontend URL
}));


app.post('/api/save-data', (req, res) => {
  const formData = req.body;

  // Assuming data.json is in the same directory as the server file
  const filePath = path.join('../src/datas/recipeList.json');

  // Read existing data from the file
  let existingData = [];
  try {
    const fileData = fs.readFileSync(filePath, 'utf-8');
    existingData = JSON.parse(fileData);
  } catch (error) {
    console.log('Error reading JSON file:', error);
    res.status(500).send('Error reading JSON file');
    return;
  }

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

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
