const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Product = require("./models/Product");
const User = require("./models/User");
const products = require("./data/products");
const Cart = require("./models/Cart");

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

// Function to seed data only if products don't already exist
const seedData = async () => {
  try {
    // Check if products already exist
    const existingProduct = await Product.findOne();

    if (existingProduct) {
      console.log("✅ Products already exist. Skipping seeding.");
      process.exit();
    }

    // If no products found, continue with full seeding
    await Product.deleteMany(); // Clear existing products (safe here since DB is empty)
   

    // Create default admin user
    const createdUser = await User.create({
      name: "Admin User",
      email: "rrahulrahul220@gmail.com",
      password: "Rahulmyprimevault",
      role: "admin",
    });

    // Assign default user ID to products
    const userID = createdUser._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: userID };
    });

    await Product.insertMany(sampleProducts);

    console.log("✅ Product data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding the data:", error);
    process.exit(1);
  }
};

seedData();
