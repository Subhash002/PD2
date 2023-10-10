import React, { useState } from "react";
import FileUpload from "../components/FileUpload";
import Conversion from "../components/Conversion";
import Result from "../components/Result";
import doConversion from "./api/convertFile";

const Home = () => {
  const [uploadedFile, setUploadedFile] = React.useState(null);
  const [conversionResult, setConversionResult] = React.useState(null);

  const handleFileUpload = (file) => {
    setUploadedFile(file);
    setConversionResult(null);
  };

  const handleConvert = async (outputFormat) => {
    if (uploadedFile) {
      try {
        const resultUrl = await doConversion(uploadedFile, outputFormat);
        setConversionResult(resultUrl);
      } catch (error) {
        console.error("Error converting file:", error);
      }
    }
  };

  return (
    <div>
      <h1>File Converter App</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      {uploadedFile && <Conversion onConvert={handleConvert} />}
      <Result resultUrl={conversionResult} />
    </div>
  );
};

export default Home;
