const express = require('express');
const database = require('./connect');
const { ObjectId } = require('mongodb');

let userRoutes = express.Router();

// Retrieve All
userRoutes.route("/users").get(async (req, res) => {
    let db = database.getDb();
    let data = await db.collection("users").find({}).toArray();

    if (data.length > 0 ) {
        res.json(data);
    } else {
        throw new Error("No data found");
    }
});

// Retrieve One
userRoutes.route("/users/:id").get(async (req, res) => {
    let db = database.getDb();
    let data = await db.collection("users").findOne({ _id: new ObjectId(req.params.id) });

    if (Object.keys(data).length > 0) {
        res.json(data);
    } else {
        throw new Error("No data found");
    }
});

// Create
userRoutes.route("/users").post(async (req, res) => {
    let db = database.getDb();
    let mongoObject = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        joinDate: new Date(),
        posts: []
    };

    let data = await db.collection("users").insertOne(mongoObject);
    res.json(data);
});

// Update
userRoutes.route("/users/:id").put(async (req, res) => {
    let db = database.getDb();
    let mongoObject = {
        $set: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            joinDate: req.body.joinDate,
            posts: req.body.posts
        }
    };
    let data = await db.collection("users").updateOne({ _id: new ObjectId(req.params.id) }, mongoObject);
    res.json(data);
});

// Delete
userRoutes.route("/users/:id").delete(async (req, res) => {
    let db = database.getDb();
    let data = await db.collection("users").deleteOne({ _id: new ObjectId(req.params.id) });
    res.json(data);
});

module.exports = userRoutes;
