// Opret varer
document.addEventListener("DOMContentLoaded", (event) => {
document.getElementById("form1").addEventListener("submit", (event) => {
    event.preventDefault();

    const varekategori = document.getElementById("varekategori").value
    const produkt = document.getElementById("produkt").value;
    const pris = document.getElementById("pris").value;
  
    const varer = {
        varekategori: varekategori,
        pris: pris,
        produkt: produkt,
    };
      
    // Benytter fetch-funktionen til at kunne kommunikkere mellem klient og server
    fetch("http://localhost:8000/varer/opretVarer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(varer),
    })
    // Boolean
    .then((response) => response.json())
    .then((response) => {
          if (response) {
            localStorage.setItem("varer", JSON.stringify(varer));
          } {
              window.alert("varer oprettet!")
        }
    })
    // Hvis noget går galt
    .catch(() => {
      window.alert("Der skete en fejl");
    });
})});

  