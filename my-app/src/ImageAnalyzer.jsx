import React, { useState } from "react";
import "./index.css";
import "./ImageAnalyzer.css"
const ImageAnalyzer = () => {
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!image) {
      alert("Please select an image.");
      return;
    }

    setLoading(true);
    setPreview(URL.createObjectURL(image));
    setResponse("Analyzing image...");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("prompt", prompt || "Describe this image");

    try {
      const res = await fetch("http://localhost:2051/image-analyze", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResponse(data.analysis || "No response from Gemini.");
    } catch (err) {
      console.error("Error:", err);
      setResponse("Error uploading or analyzing image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="container">
        
      <h2 className="title">ResuTrack Analyzer</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="file-input"
      />
      upload your resume in image format
      <textarea
        placeholder="Enter a prompt..."
        rows="4"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="prompt-input"
      />
      <button onClick={handleAnalyze} className="analyze-button">
    Assess Now
      </button>

      {preview && <img src={preview} alt="Preview" className="preview" />}

      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
          <p>Analyzing image, please wait...</p>
        </div>
      ) : (
        response && <div className="response-box">{response}</div>
      )}
    </div>
  );
};

export default ImageAnalyzer;
