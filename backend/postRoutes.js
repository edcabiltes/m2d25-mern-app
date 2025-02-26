const express = require('express');
const database = require('./connect');

let postRoutes = express.Router();

// Retrieve All
postRoutes.route("/posts").get(async (req, res) => {
    let db = database.getDb();
    let data = await db.collection("posts").find({}).toArray();

    if (data.length > 0 ) {
        res.json(data);
    } else {
        throw new Error("No data found");
    }
});

module.exports = postRoutes;
