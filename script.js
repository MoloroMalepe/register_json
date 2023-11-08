function registerUser() {
    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Create user object
    const user = {
      username: username,
      password: password
    };
  
    // Send user object to the server
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Registration successful:', data);
    })
    .catch(error => {
      console.error('Error during registration:', error);
    });
  }