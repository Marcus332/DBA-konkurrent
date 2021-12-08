var fs = require("fs");
const ABSOLUTE_PATH = __dirname + "/../../data";
const VARE_FILE = "/varer.json";
class varerDb {
  constructor() {
    this.varer = this.openFile(VARE_FILE);
  }
  
  // Gemme fil
  saveFile(fileName, contentString) {
    fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
  }
  // Åbne fil 
  openFile(fileName) {
    const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
    // Parser filen til JSON
    return JSON.parse(file);
  }

// Login data base
saveVare(vare) {
  // Nyt JSON objekt tilføjes til users listen  
  this.varer.push(vare);
  // Gemmer ny bruger og tilfjer til flad JSON fil
  this.saveFile(VARE_FILE, JSON.stringify(this.varer));
}

findVare(vare) {
  return this.varer.find((x) => vare.produkt == x.produkt);
}

// Opdater vare
updateVare(vare) {
  for (let i=0; i < this.varer.length; i++) {
    console.log(this.varer[i]);
    console.log(vare);
    if (this.varer[i].produkt == vare.oldProdukt) {
      this.varer[i].varekategori = vare.varekategori;
      this.varer[i].produkt = vare.produkt;
      this.varer[i].pris = vare.pris;
    } 
  }
  this.saveFile(VARE_FILE, JSON.stringify(this.varer));
}
// Slette vare
deleteVare(vare) {

  this.varer = this.varer.filter((x) => x.produkt != vare.produkt);
  this.saveFile(VARE_FILE, JSON.stringify(this.varer));
}
};


module.exports = new varerDb();
