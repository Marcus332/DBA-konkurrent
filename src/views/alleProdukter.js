    // Se alle varer
    document.getElementById("klik").addEventListener("click", async () => {
        let table = document.getElementById("vareliste");

        // Benyttelse af await 
        let result = await fetch('http://localhost:8000/varer/returner_alle_varer',
        {method: 'GET'})
            .then(res => res.json())
            .catch(err => console.log(err));
        console.log(result)

        // Tilføjer en HTML tabel
        // Overskrifterne 
        let tableHtml = `
            <tr>
                <th>Varekategori</th>
                <th>Produkt</th>
                <th>Pris</th>
            </tr>
        `;
        // Her bliver varerne tilføjet under overskrifterne
        for(const varer in result) {
            tableHtml += `
            <tr>
                <td>${result[varer].varekategori}</td>
                <td>${result[varer].produkt}</td>
                <td>${result[varer].pris}</td>
            </tr>
        `;
        }
        table.innerHTML = tableHtml
    })


    document.getElementById("klikMøbler").addEventListener("click", async () => {
        let table = document.getElementById("VareKategoriListe");

        let result = await fetch('http://localhost:8000/varer/returner_alle_varer',
        {method: 'GET'})
            .then(res => res.json())
            .catch(err => console.log(err));
        console.log(result)
        let tableHtml = `
            <tr>
                <th>Varekategori</th>
                <th>Produkt</th>
                <th>Pris</th>
            </tr>
        `;
        for(const varer in result) {
            if (result[varer].varekategori=="Møbler"){
            tableHtml += `
            <tr>
                <td>${result[varer].varekategori}</td>
                <td>${result[varer].produkt}</td>
                <td>${result[varer].pris}</td>
            </tr>
        `;
            }
        }
        table.innerHTML = tableHtml

    }) 
    document.getElementById("klikElektronik").addEventListener("click", async () => {
        let table = document.getElementById("VareKategoriListe");

        let result = await fetch('http://localhost:8000/varer/returner_alle_varer',
        {method: 'GET'})
            .then(res => res.json())
            .catch(err => console.log(err));
        console.log(result)
        let tableHtml = `
            <tr>
                <th>Varekategori</th>
                <th>Produkt</th>
                <th>Pris</th>
            </tr>
        `;
        for(const varer in result) {
            if (result[varer].varekategori=="Elektronik"){
            tableHtml += `
            <tr>
                <td>${result[varer].varekategori}</td>
                <td>${result[varer].produkt}</td>
                <td>${result[varer].pris}</td>
            </tr>
        `;
            }
        }
        table.innerHTML = tableHtml
    }) 
    document.getElementById("klikLegetøj").addEventListener("click", async () => {
        let table = document.getElementById("VareKategoriListe");

        let result = await fetch('http://localhost:8000/varer/returner_alle_varer',
        {method: 'GET'})
            .then(res => res.json())
            .catch(err => console.log(err));
        console.log(result)
        let tableHtml = `
            <tr>
                <th>Varekategori</th>
                <th>Produkt</th>
                <th>Pris</th>
            </tr>
        `;
        for(const varer in result) {
            if (result[varer].varekategori=="Legetøj"){
            tableHtml += `
            <tr>
                <td>${result[varer].varekategori}</td>
                <td>${result[varer].produkt}</td>
                <td>${result[varer].pris}</td>
            </tr>
        `;
            }
        }
        table.innerHTML = tableHtml

    }) 
    document.getElementById("klikHave").addEventListener("click", async () => {
        let table = document.getElementById("VareKategoriListe");

        let result = await fetch('http://localhost:8000/varer/returner_alle_varer',
        {method: 'GET'})
            .then(res => res.json())
            .catch(err => console.log(err));
        console.log(result)
        let tableHtml = `
            <tr>
                <th>Varekategori</th>
                <th>Produkt</th>
                <th>Pris</th>
            </tr>
        `;
        for(const varer in result) {
            if (result[varer].varekategori=="Have"){
            tableHtml += `
            <tr>
                <td>${result[varer].varekategori}</td>
                <td>${result[varer].produkt}</td>
                <td>${result[varer].pris}</td>
            </tr>
        `;
            }
        }
        table.innerHTML = tableHtml
    }) 