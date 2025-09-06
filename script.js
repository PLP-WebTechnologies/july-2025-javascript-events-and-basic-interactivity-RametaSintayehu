// ===============================
// Feature 1: Button Click Counter
// ===============================
let count = 0; 
const countBtn = document.getElementById("countBtn");
const countDisplay = document.getElementById("countDisplay");

countBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// ===============================
// Feature 2: Dark Mode Toggle
// ===============================
const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ===============================
// Feature 3: Custom Form Validation
// ===============================
const form = document.getElementById("signupForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop form from auto-submitting
  formMessage.textContent = ""; // Reset error message

  // Validation rules:
  if (username.value.trim() === "") {
    formMessage.textContent = "Username cannot be empty.";
    return;
  }
  if (!email.value.includes("@") || !email.value.includes(".")) {
    formMessage.textContent = "Please enter a valid email address.";
    return;
  }
  if (password.value.length < 6) {
    formMessage.textContent = "Password must be at least 6 characters.";
    return;
  }

  // If all rules pass:
  formMessage.textContent = "Registration successful! 🎉";
  formMessage.classList.remove("error");
  formMessage.classList.add("success");

  // Optional: reset form
  form.reset();
});
