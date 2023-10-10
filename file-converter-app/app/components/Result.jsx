"use client";
import React from "react";

const Result = ({ resultUrl }) => {
  return (
    <div>
      <h2>Conversion Result</h2>
      {resultUrl ? (
        <div>
          <p>Download Link:</p>
          <a href={resultUrl} download>
            Download Converted File
          </a>
          <video controls>
            <source src={resultUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <p>No result available yet.</p>
      )}
    </div>
  );
};

export default Result;
