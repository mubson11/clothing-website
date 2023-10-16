import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route("/").post(async (req, res) => {
  const { prompt } = req.body;
  console.log("hello");
  const response = await openai.images.generate({
    prompt,
    n: 1, //number of images to generate
    size: "1024x1024",
    response_format: "b64_json", //base64 a format in which we are going to get our image
  });

  const image = response.data.data[0].b64_json;

  res.status(200).json({ photo: image });

  try {
  } catch (error) {
    console.error(error);
    res.status.json({ message: "Something went wrong" });
  }
});

export default router;
