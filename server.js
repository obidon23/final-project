// Include Server Dependencies
var cors = require('cors');
var express = require("express");
var bodyParser = require("body-parser");
var axios = require("axios");
var db = require('./src/database/firebase');
// Create Instance of Express
var app = express();
app.use(cors());
var PORT = process.env.PORT || 8081; // Sets an initial port.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(express.static("public"));
// require("./src/routes/api-routes")(app);
// -------------------------------------------------
//Route to add a new session
app.post("/addSession", function(req, res) {

  db.sessionRef.push(req.body)
  .then(function (response) {
  console.log("this is my response " + response);
  return response;
})
.catch(function (err) {
  console.log(err);
  });
});  // -------------------------------------------------

app.post("/addUser", function(req, res) {
  
    db.userRef.push(req.body)
    .then(function (response) {
    console.log("this is my response " + response);
    return response;
  })
  .catch(function (err) {
    console.log(err);
    });
  });

//Route to get the sessions on file.
app.get('/test', function(req, res) {
  console.log("The server is working on getting your order");
  db.sessionRef.once('value')
  .then(function (snapshot) {
    console.log("This is the snapshot:" + snapshot);
    res.send(snapshot);
  })
  .catch(function (response) {
    console.log(response);
  });
})


//Route to add a new client
// app.post("/addClient", function(req, res) {
//   db.clientRef.push(req.body)
//   .then(function (response) {
//     setState = {
//         sessionDate: '',
//         sessionLocation: ''
//     }
//   console.log(response);
// })
// .catch(function (err) {
//   console.log(err);
//   });
// });  // -------------------------------------------------

// // Route to add an article to saved list
// app.post("/api/saved", function(req, res) {
//   var newArticle = new Article(req.body);

//   console.log(req.body);

//   newArticle.save(function(err, doc) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send(doc);
//     }
//   });
// });

// // Route to delete an article from saved list
// app.delete("/api/saved/", function(req, res) {

//   var url = req.param("url");

//   Article.find({ url: url }).remove().exec(function(err) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send("Deleted");
//     }
//   });
// });

// // Any non API GET routes will be directed to our React App and handled by React Router
// app.get("*", function(req, res) {
//   res.sendFile(__dirname + "/public/index.html");
// });


// // -------------------------------------------------

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
