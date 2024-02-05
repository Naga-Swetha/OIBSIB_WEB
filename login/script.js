// Mock database to store user information
const users = [];

// Function to register a new user
function registerUser(username, password) {
    // Check if the username is already taken
    if (users.some(user => user.username === username)) {
        return "Username already taken";
    }

    // Hash the password (you should use a more secure hashing algorithm)
    const hashedPassword = password; // For simplicity, we're not hashing the password in this example

    // Store the user information
    users.push({ username, password: hashedPassword });

    return "Registration successful";
}

// Function to authenticate a user
function authenticateUser(username, password) {
    const user = users.find(user => user.username === username);

    // Check if the user exists
    if (!user) {
        return "User not found";
    }

    // Check if the password is correct (you should compare hashed passwords)
    if (user.password !== password) {
        return "Incorrect password";
    }

    return "Login successful";
}

// Event listener for login form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginError = document.getElementById("login-error");
    const result = authenticateUser(username, password);
    if (result === "Login successful") {
        loginError.textContent = "";
        // Redirect to secured page or perform other actions
        console.log(result);
    } else {
        loginError.textContent = result;
    }
});

// Event listener for register form submission
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("new-username").value;
    const password = document.getElementById("new-password").value;
    const registerError = document.getElementById("register-error");
    const result = registerUser(username, password);
    if (result === "Registration successful") {
        registerError.textContent = "";
        console.log(result);
        // Optionally, you can clear the form fields after successful registration
        document.getElementById("new-username").value = "";
        document.getElementById("new-password").value = "";
    } else {
        registerError.textContent = result;
    }
});
