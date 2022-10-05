let express = require("express");
let { MongoClient, ObjectId } = require("mongodb");

let app = express();

let db;

app.use(express.static("public"));

async function go() {
  let client = new MongoClient(
    "mongodb+srv://todoAppUser:12347@cluster0.wraxtma.mongodb.net/TodoApp?retryWrites=true&w=majority"
  );
  await client.connect();
  db = client.db();
  app.listen(3000);
}
go();

app.use(express.json()); //for asynchronous requests
app.use(express.urlencoded({ extended: false }));
/**This just configures the express framework to include
a very convenient body object that gets added on to the request object,
in others word it make easy to access the users form data that they are submitting./*/

app.get("/", function (req, res) {
  db.collection("items")
    .find()
    .toArray(function (err, items) {
      res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple To-Do App</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    </head>
    <body>
      <div class="container">
        <h1 class="display-4 text-center py-1">Tom Hoang To-Do App</h1>
        
        <div class="jumbotron p-3 shadow-sm">
          <form id="create-form" action="/create-item" method="POST">
            <div class="d-flex align-items-center">
              <input id="create-field" name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
              <button class="btn btn-primary">Add New Item</button>
            </div>
          </form>
        </div>
        
        <ul id="item-list" class="list-group pb-5">
          
        </ul>
        
      </div>

      <script>let items = ${JSON.stringify(items)}</script
      
      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

      <script src="/browser.js"></script>
    </body>
    </html>
    `);
    });
});

app.post("/create-item", function (req, res) {
  db.collection("items").insertOne(
    { text: req.body.text },
    function (err, info) {
      res.json({ _id: info.insertedId, text: req.body.text });
    }
  );
});

app.post("/update-item", function (req, res) {
  db.collection("items").findOneAndUpdate(
    { _id: new ObjectId(req.body.id) }, //js object with mongodb tool
    { $set: { text: req.body.text } },
    function () {
      res.send("Success.");
    }
  );
});

app.post("/delete-item", function (req, res) {
  db.collection("items").deleteOne(
    { _id: new ObjectId(req.body.id) },
    function () {
      res.send("Success");
    }
  );
});
