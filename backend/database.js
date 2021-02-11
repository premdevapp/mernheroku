const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://premnath:jkt7Lu7xPf6rRbZ3@cluster0.iukxe.mongodb.net/freecodemern?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
