const mongoose = require("mongoose");
const db = require("../models/restaurants");




mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Projects"
);


const restSeed = [
    {
        restaurant: "JOE Cafe",
        restaurantComment: "this is my john's restaurant",
        sharPrice: 1200,
        imageURL: "https://miro.medium.com/max/700/1*OL4q5Jrem4nnD3BuDHg7wg.png",
        cuisine: "burger",
        sf: 500,
        address: "123 Main St Suwanee, GA 30024",
        availibility: true,
        contact: "Chris Kim"


    },
    {
        restaurant: "MARKS's Choice",
        restaurantComment: "this is my kim's restaurant",
        sharPrice: 500,
        imageURL: "https://miro.medium.com/max/700/1*OL4q5Jrem4nnD3BuDHg7wg.png",
        cuisine: "korean",
        sf: 1000,
        address: "321 Main St duluth, GA 30097",
        availibility: true,
        contact: "Chris Kim"

    }
]


db
  .remove({})
  .then(() => db.collection.insertMany(restSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
