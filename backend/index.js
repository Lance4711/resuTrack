// index.js
import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";
import multer from "multer";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

const genAI = new GoogleGenerativeAI("AIzaSyCcXn6TcJRefRANuF_p_B028ijjnDZlOVU");

app.post("/image-analyze", upload.single("image"), async (req, res) => {
  try {
    const prompt = req.body.prompt || "Describe the image";
    const imagePath = req.file.path;
    const imageBuffer = fs.readFileSync(imagePath);
    const imageBase64 = imageBuffer.toString("base64");

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
// or use "gemini-1.5-pro" if you want a more advanced model


    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: req.file.mimetype,
          data: imageBase64,
        },
      },
      {
        text: prompt,
      },
    ]);

    fs.unlinkSync(imagePath); // clean up uploaded file

    const response = await result.response;
    const text = response.text();
    res.json({ analysis: text });
  } catch (error) {
    console.error("Image analysis error:", error);
    res.status(500).json({ error: "Failed to analyze image" });
  }
});

app.listen(2051, () => {
  console.log("✅ Server running at http://localhost:2051");
});
