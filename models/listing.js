const mongoose = require("mongoose");
const Review = require("./review");
const { cloudinary } = require("../cloudConfig.js");
main()
  .then(() => {
    console.log("connected to dp in listing.js successfully");
  })
  .catch((err) => {
    console.log("error in connecting to db in listing.js: " + err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderStay");
}

const listingSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    filename: String,
    url: String,
  },
  price: {
    type: Number,
    // required: true,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
  review: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  category: [
    {
      type: String,
      enum: [
        "Trending",
        "Rooms",
        "IconicCity",
        "Camping",
        "Farms",
        "AmazingPools",
      ],
    },
  ],
});

listingSchema.post("findOneAndDelete", async function (listing) {
  if (!listing) return;

  // Delete related reviews
  if (listing.review && listing.review.length) {
    await Review.deleteMany({ _id: { $in: listing.review } });
  }

  // Delete image from Cloudinary
  if (listing.image && listing.image.filename) {
    try {
      await cloudinary.uploader.destroy(listing.image.filename);
    } catch (err) {
      console.error("Cloudinary image delete failed:", err.message);
    }
  }
});

const Listing = mongoose.model("List", listingSchema);
module.exports = Listing;
