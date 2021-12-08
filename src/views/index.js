// Login
document.addEventListener("DOMContentLoaded", (event) => {
  const user = localStorage.getItem("user");
  if (!user) {
    location.href = "/login.html";
  }

  // Log ud
  document.getElementById("logoutUser").addEventListener("submit", (event) => {
    event.preventDefault();

    if (user) {
      localStorage.removeItem("user");
      location.href = "/login.html";
    };
  });

  // Slet profil
  document.getElementById("delete").addEventListener("submit", (event) => {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    fetch("http://localhost:8000/users/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          localStorage.removeItem("user");
          location.href = "/login.html";
        }
      })
      .catch(() => {
        window.alert("Der skete en fejl");
      });
  });

  // Slet Varer
  document.getElementById("delete1").addEventListener("submit", (event) => {
    event.preventDefault();

    const vare = JSON.parse(localStorage.getItem("varer"));

    fetch("http://localhost:8000/varer/deleteVare", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vare),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          localStorage.removeItem("varer");
          window.alert("varer");
        }
      })
      .catch(() => {
        window.alert("Der skete en fejl");
      });
  });
});
