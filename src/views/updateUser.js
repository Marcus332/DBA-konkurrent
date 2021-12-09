// Opdater profil
function updateUser() {
    var oldEmail = localStorage.getItem('user');
    oldEmail = JSON.parse(oldEmail);

var email = document.getElementById("newEmail").value;
var password = document.getElementById("newPassword").value;

const updateUser = {email: email, password: password, oldEmail: oldEmail.email};
const Update = {email: email, password: password};

// Laver et kald til internettet samt omdanner koden som en string - JSON
fetch("http://localhost:8000/users/update", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(updateUser),
})

// Boolean
.then((response) => response.json())
.then((response) => {
    if (response) {
        localStorage.setItem('user', JSON.stringify(Update))
        location.href = "/index.html";
        window.alert("Bruger opdateret!")
    }
})
// Catch - funktion hvis der er noget går galt
.catch(() => {
    window.alert('Fejl!')
});
};