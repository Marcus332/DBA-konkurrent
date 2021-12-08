// Opretter en fs, der gør det muligt at interagere med File system 
var fs = require("fs");

const ABSOLUTE_PATH = __dirname + "/../../data";
const USER_FILE = "/users.json";

class DB {
  constructor() {
    this.users = this.openFile(USER_FILE);
  }

  // Gem filen
  saveFile(fileName, contentString) {
    fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
  }

  // Åben filen
  openFile(fileName) {
    const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
    return JSON.parse(file);
  }

  // Login i databasen 
  saveUser(user) {
    this.users.push(user);
    this.saveFile(USER_FILE, JSON.stringify(this.users));
  }

  // Slet i databasen
  deleteUser(user) {
    this.users = this.users.filter((x) => x.email != user.email);
    this.saveFile(USER_FILE, JSON.stringify(this.users));
  }
  // Find bruger i databasen
  findUser(user) {
    return this.users.find((x) => user.email == x.email);
  }
  // Opdater i databasen
  updateUser(user) {
    for (let i=0; i < this.users.length; i++) {
      console.log(this.users[i]);
      console.log(user);
      if (this.users[i].email == user.oldEmail) {
        this.users[i].email = user.email;
        this.users[i].password = user.password;
      } 
    }
    this.saveFile(USER_FILE, JSON.stringify(this.users));
  }
}
module.exports = new DB();
