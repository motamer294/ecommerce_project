import mongoose from "mongoose";

export const dbConnection = mongoose.connect(
  'mongodb+srv://mohammedabuelkhier:project@cluster0.xyirhhr.mongodb.net/ECOMMERCE?retryWrites=true&w=majority'
)
.then(() => console.log("db Connected"))
.catch((err) => console.log(err));
