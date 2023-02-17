const express = require("express");
const mongoose = require("mongoose");
const cors = require ("cors");
const app = express();
const port = 5000;


app.use(express.json());
app.use(cors());

app.get("/api/1", async (req, res) => {
  try {
    const result = await db
      .collection("movies")
      .find()
      .limit(0)
      .toArray();
    res.status(200).json({
      ok: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      message: error.message,
    });
  }
});

app.post("/api/2", async (req, res) => {
  try {
    const result = await db
      .collection("movies")
      .find({$and:[{ poster: { $exists: true } },
         { genres: { $in: [req.body.categories] } }]})
      .limit(req.body.conteo)
      .toArray();
    res.status(200).json({
      ok: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      message: error.message,
    });
  }
});




































mongoose
  .connect(
    "mongodb+srv://MGTB:root@cluster0.uwee8wl.mongodb.net/sample_mflix?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to Mongo Atlas!");
    db = mongoose.connection.db;
  });

app.listen(port, () => {
  console.log(`This is my fist attempt ${port}`);
});
