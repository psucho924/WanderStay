const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");
const User = require("../models/users");

main()
  .then(() => {
    console.log("connected to db successfully");
  })
  .catch((err) => {
    console.log("error in connecting to db: " + err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderStay");
}

// helper → random categories (1–2 per listing)
function getRandomCategories() {
  const allCategories = [
    "Trending",
    "Rooms",
    "IconicCity",
    "Camping",
    "Farms",
    "AmazingPools",
  ];

  const shuffled = allCategories.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.floor(Math.random() * 2) + 1);
}

const initDb = async () => {
  // Clean old data
  await Listing.deleteMany({});
  await User.deleteMany({ email: "seeduser@test.com" });

  // Create seed user
  const seedUser = new User({
    email: "seeduser@test.com",
    username: "seedUser",
  });

  await User.register(seedUser, "password123");

  console.log("Seed user created:", seedUser._id);

  // Add owner + category to listings
  const listingsWithOwnerAndCategory = initData.data.map((listing) => ({
    ...listing,
    owner: seedUser._id,
    review: [],
    category: getRandomCategories(), // IMPORTANT
  }));

  // Insert listings
  await Listing.insertMany(listingsWithOwnerAndCategory);

  console.log("Listings initialized with owner & category");
};

initDb().then(() => {
  mongoose.connection.close();
});
