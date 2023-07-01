const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.votqctt.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const userCollection = client
      .db("transport_management")
      .collection("users");
    const bookingCollection = client
      .db("transport_management")
      .collection("booking");
    const routeCollection = client
      .db("transport_management")
      .collection("routes");

    //Create Users
    app.put("/users/:email", async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      const filter = {
        email: email,
      };
      const option = {
        upsert: true,
      };
      const updateDoc = {
        $set: user,
      };
      const result = await userCollection.updateOne(filter, updateDoc, option);
      res.send(result);
    });

    // Get Users
    app.get("/users", async (req, res) => {
      const query = {};
      const cursor = await userCollection.find(query).toArray();
      res.send(cursor);
    });
    // Get by email
    app.get("/users/:email", async (req, res) => {
      const email = req.params.email;
      const user = await userCollection.findOne({ email: email });

      res.send(user);
    });

    // Create Admin
    app.post("/users", async (req, res) => {
      const admin = req.body;
      const result = await userCollection.insertOne(admin);
      res.send(result);
    });

    // Create Booking
    app.post("/booking", async (req, res) => {
      const booking = req.body;
      const result = await bookingCollection.insertOne(booking);
      res.send(result);
    });

    // Get all bookings
    app.get("/booking", async (req, res) => {
      const query = {};
      const cursor = await bookingCollection.find(query).toArray();
      res.send(cursor);
    });

    // Boolink Delete
    app.delete("/booking/:id", async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id),
      };
      const result = await bookingCollection.deleteOne(query);
      res.send(result);
    });
    // User Delete
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id),
      };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });

    // Admin
    app.get("/admin/:email", async (req, res) => {
      const email = req.params.email;
      const user = await userCollection.findOne({ email: email });
      const isAdmin = user?.role === "admin";
      res.send({ admin: isAdmin });
    });

    // Create Route
    app.post("/routes", async (req, res) => {
      const route = req.body;
      const result = await routeCollection.insertOne(route);
      res.send(result);
    });
    // Get all Routes
    app.get("/routes", async (req, res) => {
      const query = {};
      const cursor = await routeCollection.find(query).toArray();
      res.send(cursor);
    });

    // Route Delete
    app.delete("/routes/:id", async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id),
      };
      const result = await routeCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Welcome To Transport Management");
});

app.listen(port, () => {
  console.log("listening port", port);
});
