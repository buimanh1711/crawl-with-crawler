import mongoose from "mongoose";
const { Schema } = mongoose;

const AddressSchema = new Schema(
  {
    address: {
      type: String,
      minlength: 1,
      unique: true,
    },
  },
  {
    collection: "address",
    timestamps: true,
  }
);

export default mongoose.model("address", AddressSchema);
