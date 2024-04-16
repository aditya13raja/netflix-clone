import {GoogleGenerativeAI} from "@google/generative-ai";
import {GEMINI_KEY} from "./constants";

const gemini  = new GoogleGenerativeAI(
  process.env.API_KEY = GEMINI_KEY,
);

export default gemini;