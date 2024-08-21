"use strict";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Debugging: Log all environment variables
// console.log("All environment variables:", process.env.NODE_ENV);

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY || "");
console.log("Google connected");

// Get the generative model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;


// # Private: one time load , at time of server start || and not show in browser
// # API_KEY="xyz"
// # Public: load every time || and show in browser
// NEXT_PUBLIC_API_KEY="xyz"