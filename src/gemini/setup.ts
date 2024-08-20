"use strict";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const API = process.env.GOOGLE_API_KEY || "";
console.log("API : ", API);
const genAI = new GoogleGenerativeAI(API);
console.log("Google conneted");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;