"use client";
import React, { useState } from "react";

const Conversion = ({ onConvert }) => {
  const [outputFormat, setOutputFormat] = useState("mp4");

  const handleConvert = () => {
    onConvert(outputFormat);
  };

  return (
    <div>
      <h2>Conversion Settings</h2>
      <label>
        Output Format:
        <select
          value={outputFormat}
          onChange={(e) => setOutputFormat(e.target.value)}
        >
          <option value="mp4">MP4</option>
          <option value="webm">WEBM</option>
          <option value="gif">GIF</option>
        </select>
      </label>
      <button onClick={handleConvert}>Convert</button>
    </div>
  );
};

export default Conversion;
