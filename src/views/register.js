// Opret profil
document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = {
      email: email,
      password: password,
    };
    
    // Benytter fetch-funktionen til at kunne kommunikkere mellem klient og server
    fetch("http://localhost:8000/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    // Boolean
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          location.href = "/login.html";
        }
      })
      // Hvis noget går galt
      .catch(() => {
        window.alert("Der skete en fejl");
      });
  });
});
