import React, { useState } from "react";

const DynamicBackground = () => {
  // Custom colors
  const colors = [
    "#008080", // Teal
    "#FFDAB9", // Peach
    "#E6E6FA", // Lavender
    "#87CEEB", // Sky Blue
    "#98FF98", // Mint Green
    "#FF7F50", // Coral
  ];

  // Track the current color index
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  // Handle button click to change background color
  const changeBackgroundColor = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length); // Cycle through colors
  };

  // Apply the background color
  const currentColor = colors[currentColorIndex];
  document.body.style.backgroundColor = currentColor;

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <button
        onClick={changeBackgroundColor}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: currentColor,
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        Change Background Color
      </button>
    </div>
  );
};

export default DynamicBackground;
