const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/centro_chuqui").then(() => {

//mongoose.connect("mongodb+srv://pruebasgreg12:XqWCS7l8q7wQwq6l@greg.gjszyys.mongodb.net/centro_chuqui").then(() => {
  //  mongoose.connect("mongodb+srv://taller12345:tpwTwuZ389kOI0Qn@cluster0.okwriov.mongodb.net/centro_chuqui").then(() => {
  //  mongoose.connect("mongodb+srv://fijos:VOxHQhWJRtzAMuO3@cluster0.xsmzyab.mongodb.net/fijos").then(() => {
    console.log("Conectado a la base de datos");
}).catch((error) => {
    console.error("Error de conexion a la base de datos:", error);
});

module.exports = mongoose;
