import express from "express";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";

dotenv.config();

const app= express();
const port = process.env.PORT;

 app.use(express.static("public"))


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})