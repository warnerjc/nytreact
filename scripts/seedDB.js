const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the saved article collection and inserts the articles below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

const savedArticleSeed = [
  {
    title: "Deadly shooting at Maryland newspaper",
    url: "https://www.cnn.com/us/live-news/maryland-newspaper-shooting/index.html",
    date: new Date(Date.now())
  },
  {
    title: "Will Foxconn’s new Wisconsin mega-factory deliver for America?",
    url: "https://qz.com/1317121/trump-broke-ground-on-a-new-foxconn-facility-in-wisconsin/",
    date: new Date(Date.now())
  },
  {
    title: "Democrats Tie Trump Supreme Court Pick To Russia Investigation",
    url: "https://www.huffingtonpost.com/entry/trump-supreme-court-russia-investigation_us_5b351d00e4b0b745f17c3ffc",
    date: new Date(Date.now())
  },
  {
    title: "Jim Jordan tries to attack Rosenstein, the room erupts in laughter",
    url: "https://thinkprogress.org/jim-jordan-rod-rosenstein-mueller-trump-clinton-838303eab9e1/",
    date: new Date(Date.now())
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(savedArticleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
