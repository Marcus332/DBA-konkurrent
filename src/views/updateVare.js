//Opdater profil
function updateVare() {
    var oldProdukt = localStorage.getItem('varer');
    oldProdukt = JSON.parse(oldProdukt);

var varekategori = document.getElementById("nyvarekategori").value;
var produkt = document.getElementById("nytprodukt").value;
var pris = document.getElementById("nypris").value;

const updateVare = {varekategori: varekategori, produkt: produkt, pris: pris, oldProdukt: oldProdukt.produkt};
const Update1 = {varekategori: varekategori, produkt: produkt, pris: pris};

// Laver et kald til internettet samt omdanner koden som en string - JSON
fetch("http://localhost:8000/varer/update", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(updateVare),
})

// Boolean
.then((response) => response.json())
.then((response) => {
    if (response) {
        localStorage.setItem('varer', JSON.stringify(Update1))
        window.alert("Vare opdateret!")
    }
})
// Catch - funktion hvis der er noget går galt
.catch(() => {
    window.alert('Fejl!')
});
};
