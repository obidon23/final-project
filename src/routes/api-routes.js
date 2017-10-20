// import db from "../database/firebase";
var db = require("../database/firebase");

module.exports = function(app) {
app.get("/api/getClients", function(req, res) {
    // db.clientsRef.once("value")
    // .then(function(snapshot) {
    // });  
    // console.log(snapshot);
            res.send("Hello world");
  
    });
}