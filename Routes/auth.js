import express from "express";
import { LoginUser, SignUp } from "../Controller/AuthController/Auth.js";

export const AuthRoutes = express
.Router()
.post("/signup" , SignUp)
.post("/login" , LoginUser);