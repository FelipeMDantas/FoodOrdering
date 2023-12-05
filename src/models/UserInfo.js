import { Schema, models } from "mongoose";

const UserInfoSchema = new Schema({
  email: { type: String, required: true },
  streetAddress: { type: String },
  postalCode: { type: String },
  city: { type: String },
  country: { type: String },
  admin: { type: Boolean, default: false },
  phone: { type: String },
});

export const UserInfo = models?.UserInfo || model("UserInfo", UserInfoSchema);
