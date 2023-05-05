import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UsersModel } from "../../Model/UsersModel.js";

export const SignUp = async ( req , res) => {
const user = req.body;

const EncryptedPassword = await bcrypt.hash(user.password , 10);

user.password = EncryptedPassword;

user.save();

const _user = UsersModel.create(user);

const {password: _password , ...userData} = user.tojson();

res.send(userData);
};

export const LoginUser = async ( req , res) => {
const { email , password }= req.body;

const user = await UsersModel.findOne({email});

if(!user){
    return res.status(401).send("Invalid Email/Password");
}
const inValidPassword = await bcrypt.compare(password , user.password);

if(!inValidPassword){
    return res.status(401).send("Invalid Email/Password");
}
const token = jwt.sign(
    {
       email,
    },
    {
      secretKey: "Hellohybyebye",   
    },
    {
       expiresIn: "1h",
    },
);

user.token = token;

user.save();

const { password: _password, ...userData } = user.toJSON();

 res.send(userData);
};