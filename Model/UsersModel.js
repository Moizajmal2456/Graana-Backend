import mongoose, { Schema } from "mongoose";

const UsersSchema = new Schema({
    userName: String,
    mobileNo: Number,
    email: String,
    password: String,
    token: String,
});

export const UsersModel = mongoose.model("Users" , UsersSchema);