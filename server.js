const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/register', (req, res) => {
  // Get user data from the request
  const user = req.body;

  // Save user data to a JSON file (simple example)
  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading users.json:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const users = JSON.parse(data);

    // Check if username already exists
    if (users.find(u => u.username === user.username)) {
      res.status(400).send('Username already exists');
      return;
    }

    // Add new user to the array
    users.push(user);

    // Write updated user data to the JSON file
    fs.writeFile('users.json', JSON.stringify(users), 'utf8', (err) => {
      if (err) {
        console.error('Error writing users.json:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      res.json({ message: 'Registration successful' });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


/*In this example:

The HTML file contains a simple registration form.
The JavaScript file handles user input and sends a POST request to the server using the Fetch API.
The Node.js server receives the POST request, reads existing user data from a JSON file, 
checks if the username already exists, a
dds the new user, and writes the updated user data back to the JSON file.*/