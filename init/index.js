const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const ATLASDB_URL = "mongodb+srv://<start9885_db_user>:<wxYux0Nl0VeGpJx8>@cluster0.xxxxx.mongodb.net/wanderlust?retryWrites=true&w=majority";
main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDb = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6a97ad14c99215064fa97634",
    geometry: {
      type:"Point",
      coordinates: [77.2090, 28.6139],
    }
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

initDb();
